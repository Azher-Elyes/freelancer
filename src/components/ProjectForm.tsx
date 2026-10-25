import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, Check, Upload, Loader2, X } from 'lucide-react';
import type { ProjectFormData } from '@/types';
import { cn } from '@/lib/utils';

const SERVICE_OPTIONS = [
  'AI & Automation',
  'Software Development',
  'Marketing & Media',
  'Design & Creative',
  'Not Sure Yet',
];

const BUDGET_OPTIONS = ['< $1k', '$1k – $5k', '$5k – $15k', '$15k – $50k', '$50k+'];
const TIMELINE_OPTIONS = ['ASAP', '1–4 weeks', '1–3 months', '3+ months', 'Flexible'];

export function ProjectFormModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
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

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

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
    await new Promise((r) => setTimeout(r, 1600));
    setStatus('success');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 md:p-6 bg-bg/80 backdrop-blur-md"
        >
          {/* Backdrop click to close */}
          <div className="absolute inset-0" onClick={onClose} />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 flex max-h-[90vh] w-full max-w-lg flex-col overflow-y-auto rounded-2xl border border-border bg-surface/95 p-5 shadow-2xl backdrop-blur-xl md:p-7 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute right-4 top-4 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-bg/50 text-text-muted transition-colors hover:bg-bg hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="mb-6 mt-2 text-center">
              <h2 className="mb-1.5 text-xl font-medium tracking-tight md:text-2xl">
                Start a Project
              </h2>
            </div>

            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center py-8 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.1, type: 'spring', stiffness: 200, damping: 15 }}
                    className="mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-accent/40 bg-accent/10"
                  >
                    <Check className="h-6 w-6 text-accent" />
                  </motion.div>
                  <h3 className="mb-2 text-xl font-medium tracking-tight text-text">
                    Project brief sent.
                  </h3>
                  <p className="max-w-sm text-sm text-text-muted">
                    Thanks {data.name.split(' ')[0] || 'there'} — I'll review your project and get back to you shortly.
                  </p>
                  <button
                    onClick={onClose}
                    className="mt-6 rounded-full bg-accent px-6 py-2.5 text-sm font-medium text-white hover:bg-accent-bright transition-colors"
                  >
                    Close
                  </button>
                </motion.div>
              ) : step === 0 ? (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <h3 className="mb-4 text-base font-medium tracking-tight text-text">
                    What are you looking for?
                  </h3>
                  <div className="grid gap-2 sm:grid-cols-2">
                    {SERVICE_OPTIONS.map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => update('serviceType', opt)}
                        className={cn(
                          'flex items-center justify-between rounded-lg border px-4 py-3 text-left text-[13px] transition-all duration-300',
                          data.serviceType === opt
                            ? 'border-accent/50 bg-accent/10 text-text'
                            : 'border-border-bright bg-bg/40 text-text-muted hover:border-accent/30 hover:text-text'
                        )}
                      >
                        {opt}
                        {data.serviceType === opt && (
                          <Check className="h-3.5 w-3.5 text-accent" />
                        )}
                      </button>
                    ))}
                  </div>
                  {errors.serviceType && (
                    <p className="mt-2 text-xs text-red-400">{errors.serviceType}</p>
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
                  className="space-y-4"
                >
                  <h3 className="text-base font-medium tracking-tight text-text">
                    Tell me about your project.
                  </h3>

                  <div className="grid gap-4 sm:grid-cols-2">
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

                  <Field label="Project description" required error={errors.description}>
                    <textarea
                      value={data.description}
                      onChange={(e) => update('description', e.target.value)}
                      placeholder="What are you trying to build or solve?"
                      rows={3}
                      className={cn(inputClass(errors.description), 'resize-none')}
                    />
                  </Field>
                </motion.form>
              )}
            </AnimatePresence>

            {/* Actions */}
            {status !== 'success' && (
              <div className="mt-6 flex items-center justify-between gap-4 border-t border-border pt-5">
                <button
                  type="button"
                  onClick={back}
                  disabled={step === 0}
                  className={cn(
                    'flex items-center gap-1.5 rounded-full px-4 py-2 text-[13px] transition-colors',
                    step === 0
                      ? 'cursor-not-allowed text-text-dim'
                      : 'text-text-muted hover:text-text'
                  )}
                >
                  <ArrowLeft className="h-3.5 w-3.5" />
                  Back
                </button>

                {step < 1 ? (
                  <button
                    type="button"
                    onClick={next}
                    className="group flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-[13px] font-medium text-white transition-colors hover:bg-accent-bright"
                  >
                    Continue
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={submit}
                    disabled={status === 'sending'}
                    className="group flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-[13px] font-medium text-white transition-colors hover:bg-accent-bright disabled:opacity-60"
                  >
                    {status === 'sending' ? (
                      <>
                        <Loader2 className="h-3.5 w-3.5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Brief
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                      </>
                    )}
                  </button>
                )}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
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
      <span className="mb-1.5 flex items-center gap-1.5 font-mono text-[9px] tracking-widest text-text-dim uppercase">
        {label}
        {required && <span className="text-accent">*</span>}
      </span>
      {children}
      {error && <span className="mt-1 block text-[11px] text-red-400">{error}</span>}
    </label>
  );
}

function inputClass(error?: string) {
  return cn(
    'w-full rounded-lg border bg-bg/60 px-3.5 py-2.5 text-[13px] text-text placeholder:text-text-dim',
    'transition-colors duration-300 outline-none',
    error
      ? 'border-red-500/50 focus:border-red-500'
      : 'border-border-bright focus:border-accent/60'
  );
}