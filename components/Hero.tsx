import Image from 'next/image'

export default function Hero() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col-reverse md:flex-row items-center md:items-start gap-12">
          <div className="flex-1">
            <p className="text-slate-500 dark:text-slate-400 font-sans mb-3 text-sm tracking-wide uppercase">
              Hi, I&apos;m
            </p>
            <h1 className="font-display text-6xl md:text-7xl text-slate-900 dark:text-slate-100 font-semibold leading-tight mb-5">
              Yuhe (Claire) Xue
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 font-sans mb-10 leading-relaxed">
              CS student at Wellesley · systems, languages, data
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#projects"
                className="px-5 py-2.5 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 text-sm font-sans rounded-full hover:bg-slate-700 dark:hover:bg-slate-300 transition-colors"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-5 py-2.5 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-sm font-sans rounded-full hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
              >
                Get in touch
              </a>
              <a
                href="https://github.com/clairexue10"
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-sm font-sans rounded-full hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>

          <div className="shrink-0">
            <Image
              src="/images/profile.jpg"
              alt="Claire Xue"
              width={260}
              height={300}
              className="rounded-2xl object-cover ring-4 ring-slate-100 dark:ring-slate-800"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
