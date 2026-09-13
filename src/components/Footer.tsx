import { ArrowUp } from 'lucide-react';
import { NAV_ITEMS, SITE, SOCIAL_LINKS } from '@/data/content';
import { scrollTo } from '@/hooks/useSmoothScroll';

export function Footer() {
  return (
    <footer className="relative border-t border-border py-16 md:py-20">
      <div className="container-main">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr] md:gap-16">
          {/* Brand */}
          <div>
            <button
              onClick={() => scrollTo('#home')}
              className="mb-4 flex items-center gap-2"
              aria-label="Back to top"
            >
              <span className="text-2xl font-semibold tracking-tight text-text">
                {SITE.name}
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            </button>
            <p className="mb-6 font-mono text-xs tracking-widest text-text-muted uppercase">
              {SITE.tagline}
            </p>
            <p className="max-w-xs text-sm leading-relaxed text-text-dim">
              {SITE.description}
            </p>
          </div>

          {/* Nav */}
          <nav aria-label="Footer">
            <p className="mb-4 font-mono text-[10px] tracking-widest text-text-dim uppercase">
              Navigate
            </p>
            <ul className="space-y-2.5">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <button
                    onClick={() => scrollTo(item.href)}
                    className="text-sm text-text-muted transition-colors hover:text-text"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social */}
          <div>
            <p className="mb-4 font-mono text-[10px] tracking-widest text-text-dim uppercase">
              Connect
            </p>
            <ul className="space-y-2.5">
              {SOCIAL_LINKS.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    className="group flex items-center gap-2 text-sm text-text-muted transition-colors hover:text-text"
                  >
                    {s.label}
                    <ArrowUp className="h-3 w-3 rotate-45 opacity-0 transition-all duration-300 group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 md:flex-row md:items-center">
          <p className="font-mono text-[11px] tracking-widest text-text-dim uppercase">
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <button
            onClick={() => scrollTo('#home')}
            className="group flex items-center gap-2 font-mono text-[11px] tracking-widest text-text-dim uppercase transition-colors hover:text-text"
          >
            Back to top
            <ArrowUp className="h-3 w-3 transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}