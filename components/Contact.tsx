const LINKS = [
  { label: 'Email', href: 'mailto:yx105@wellesley.edu', display: 'yx105@wellesley.edu' },
  { label: 'GitHub', href: 'https://github.com/clairexue10', display: 'github.com/clairexue10' },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/yuhe-claire-xue-8605a4227',
    display: 'linkedin.com/in/yuhe-claire-xue',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-24 border-t border-slate-200">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="font-display text-4xl md:text-5xl text-slate-900 font-semibold mb-4">
          Get in Touch
        </h2>
        <p className="text-slate-500 font-sans mb-16 max-w-lg">
          I&apos;m always open to connecting — whether it&apos;s about research, opportunities, or just to say hi.
        </p>

        <div className="space-y-6">
          {LINKS.map((link) => (
            <div key={link.label} className="flex items-center gap-6">
              <span className="text-xs text-slate-400 font-sans uppercase tracking-widest w-20 shrink-0">
                {link.label}
              </span>
              <a
                href={link.href}
                target={link.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noreferrer"
                className="text-slate-900 font-sans hover:text-slate-500 transition-colors underline underline-offset-4 decoration-slate-200 hover:decoration-slate-400"
              >
                {link.display}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
