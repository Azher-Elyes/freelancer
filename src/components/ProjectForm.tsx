import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, Check, Upload, Loader2 } from 'lucide-react';
import type { ProjectFormData } from '@/types';
import { cn } from '@/lib/utils';
import { SectionLabel } from './ui/SectionLabel';
import { AnimatedText } from './ui/AnimatedText';

const SERVICE_OPTIONS = [
  'AI & Automation',
  'Software Development',
  'Marketing & Media',
  'Design & Creative',
  'Not Sure Yet',
];

const BUDGET_OPTIONS = ['< $1k', '$1k – $5k', '$5k – $15k', '$15k – $50k', '$50k+'];
const TIMELINE_OPTIONS = ['ASAP', '1–4 weeks', '1–3 months', '3+ months', 'Flexible'];

export function ProjectForm() {
  const [step, setStep] = useState(0);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [data, setData] = useState<ProjectFormData>({
    serviceType: '',
    name: '',
    email: '',
    company: '',
    description: '',
    budget: '',
    timeline: '',
  });

  const update = (key: keyof ProjectFormData, value: string) => {
    setData((d) => ({ ...d, [key]: value }));
    setErrors((e) => ({ ...e, [key]: '' }));
  };

  const validateStep1 = () => {
    if (!data.serviceType) {
      setErrors({ serviceType: 'Please select a service type.' });
      return false;
    }
    return true;
  };

  const validateStep2 = () => {
    const e: Record<string, string> = {};
    if (!data.name.trim()) e.name = 'Name is required.';
    if (!data.email.trim()) e.email = 'Email is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) e.email = 'Enter a valid email.';
    if (!data.description.trim()) e.description = 'Please describe your project.';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const next = () => {
    if (step === 0 && !validateStep1()) return;
    if (step === 1 && !validateStep2()) return;
    setStep((s) => Math.min(s + 1, 2));
  };

  const back = () => setStep((s) => Math.max(s - 1, 0));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep2()) {
      setStep(1);
      return;
    }
    setStatus('sending');
    // Simulate submission — replace with real endpoint
    await new Promise((r) => setTimeout(r, 1600));
    setStatus('success');
  };

  return (
    <section id="project-form" className="relative py-28 md:py-40">
      <div className="container-main">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <SectionLabel number="10" label="Start a Project" className="mb-6 justify-center" />
            <h2 className="mb-4 text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] font-medium tracking-[-0.03em]">
              <AnimatedText text="Tell Me About Your Project" />
            </h2>
            <p className="text-text-muted">
              Two quick steps. I'll get back to you within 24 hours.
            </p>
          </div>

          <div className="rounded-3xl border border-border bg-surface/40 p-6 backdrop-blur-sm md:p-10">
            {/* Progress */}
            {status !== 'success' && (
              <div className="mb-10 flex items-center gap-3">
                {[0, 1, 2].map((i) => (
                  <div key={i} className="flex flex-1 items-center gap-3">
                    <div className={cn(
                      'flex h-7 w-7 shrink-0 items-center justify-center rounded-full border font-mono text-[11px] transition-all duration-500',
                      i < step ? 'border-accent bg-accent text-white' :
                      i === step ? 'border-accent bg-accent/10 text-accent' :
                      'border-border-bright text-text-dim'
                    )}>
                      {i < step ? <Check className="h-3 w-3" /> : i + 1}
                    </div>
                    {i < 2 && (
                      <div className="relative h-px flex-1 bg-border">
                        <motion.div
                          animate={{ scaleX: i < step ? 1 : 0 }}
                          transition={{ duration: 0.5 }}
                          style={{ transformOrigin: 'left' }}
                          className="absolute inset-0 bg-accent"
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center py-12 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.1, type: 'spring', stiffness: 200, damping: 15 }}
                    className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-accent/40 bg-accent/10"
                  >
                    <Check className="h-7 w-7 text-accent" />
                  </motion.div>
                  <h3 className="mb-3 text-2xl font-medium tracking-tight text-text">
                    Project brief sent.
                  </h3>
                  <p className="max-w-md text-text-muted">
                    Thanks {data.name.split(' ')[0] || 'there'} — I'll review your project and get back to you shortly.
                  </p>
                </motion.div>
              ) : step === 0 ? (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <h3 className="mb-6 text-lg font-medium tracking-tight text-text">
                    What are you looking for?
                  </h3>
                  <div className="grid gap-2 sm:grid-cols-2">
                    {SERVICE_OPTIONS.map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => update('serviceType', opt)}
                        className={cn(
                          'flex items-center justify-between rounded-xl border px-5 py-4 text-left text-sm transition-all duration-300',
                          data.serviceType === opt
                            ? 'border-accent/50 bg-accent/10 text-text'
                            : 'border-border-bright bg-bg/40 text-text-muted hover:border-accent/30 hover:text-text'
                        )}
                      >
                        {opt}
                        {data.serviceType === opt && (
                          <Check className="h-4 w-4 text-accent" />
                        )}
                      </button>
                    ))}
                  </div>
                  {errors.serviceType && (
                    <p className="mt-3 text-xs text-red-400">{errors.serviceType}</p>
                  )}
                </motion.div>
              ) : (
                <motion.form
                  key="step2"
                  onSubmit={submit}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-5"
                >
                  <h3 className="text-lg font-medium tracking-tight text-text">
                    Tell me about your project.
                  </h3>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Name" required error={errors.name}>
                      <input
                        type="text"
                        value={data.name}
                        onChange={(e) => update('name', e.target.value)}
                        placeholder="Your name"
                        className={inputClass(errors.name)}
                      />
                    </Field>
                    <Field label="Email" required error={errors.email}>
                      <input
                        type="email"
                        value={data.email}
                        onChange={(e) => update('email', e.target.value)}
                        placeholder="you@company.com"
                        className={inputClass(errors.email)}
                      />
                    </Field>
                  </div>

                  <Field label="Company">
                    <input
                      type="text"
                      value={data.company}
                      onChange={(e) => update('company', e.target.value)}
                      placeholder="Optional"
                      className={inputClass()}
                    />
                  </Field>

                  <Field label="Project description" required error={errors.description}>
                    <textarea
                      value={data.description}
                      onChange={(e) => update('description', e.target.value)}
                      placeholder="What are you trying to build or solve?"
                      rows={4}
                      className={cn(inputClass(errors.description), 'resize-none')}
                    />
                  </Field>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Budget">
                      <select
                        value={data.budget}
                        onChange={(e) => update('budget', e.target.value)}
                        className={inputClass()}
                      >
                        <option value="">Select range</option>
                        {BUDGET_OPTIONS.map((b) => <option key={b} value={b}>{b}</option>)}
                      </select>
                    </Field>
                    <Field label="Timeline">
                      <select
                        value={data.timeline}
                        onChange={(e) => update('timeline', e.target.value)}
                        className={inputClass()}
                      >
                        <option value="">Select timeline</option>
                        {TIMELINE_OPTIONS.map((t) => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </Field>
                  </div>

                  <Field label="Attachment">
                    <label className="flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-dashed border-border-bright bg-bg/40 px-5 py-4 text-sm text-text-muted transition-colors hover:border-accent/40 hover:text-text">
                      <Upload className="h-4 w-4" />
                      <span>Upload a file (optional)</span>
                      <input type="file" className="hidden" />
                    </label>
                  </Field>
                </motion.form>
              )}
            </AnimatePresence>

            {/* Actions */}
            {status !== 'success' && (
              <div className="mt-8 flex items-center justify-between gap-4 border-t border-border pt-6">
                <button
                  type="button"
                  onClick={back}
                  disabled={step === 0}
                  className={cn(
                    'flex items-center gap-2 rounded-full px-4 py-2.5 text-sm transition-colors',
                    step === 0
                      ? 'cursor-not-allowed text-text-dim'
                      : 'text-text-muted hover:text-text'
                  )}
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back
                </button>

                {step < 1 ? (
                  <button
                    type="button"
                    onClick={next}
                    className="group flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-bright"
                  >
                    Continue
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={submit}
                    disabled={status === 'sending'}
                    className="group flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-bright disabled:opacity-60"
                  >
                    {status === 'sending' ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Project Brief
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                      </>
                    )}
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  required,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 flex items-center gap-1.5 font-mono text-[10px] tracking-widest text-text-dim uppercase">
        {label}
        {required && <span className="text-accent">*</span>}
      </span>
      {children}
      {error && <span className="mt-1.5 block text-xs text-red-400">{error}</span>}
    </label>
  );
}

function inputClass(error?: string) {
  return cn(
    'w-full rounded-xl border bg-bg/60 px-4 py-3 text-sm text-text placeholder:text-text-dim',
    'transition-colors duration-300 outline-none',
    error
      ? 'border-red-500/50 focus:border-red-500'
      : 'border-border-bright focus:border-accent/60'
  );
}