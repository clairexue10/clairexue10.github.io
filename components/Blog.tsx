export default function Blog() {
  return (
    <section id="blog" className="py-24 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="font-display text-4xl md:text-5xl text-slate-900 dark:text-slate-100 font-semibold mb-4">
          Writing
        </h2>
        <p className="text-slate-400 dark:text-slate-500 font-sans text-sm mb-16">
          Thoughts on code, research, and things I find interesting.
        </p>

        <div className="text-center py-16 border border-dashed border-slate-200 dark:border-slate-700 rounded-xl">
          <p className="font-display text-2xl text-slate-400 dark:text-slate-500 mb-2">Coming soon</p>
          <p className="text-sm text-slate-400 dark:text-slate-500 font-sans">
            Writing in progress — check back later.
          </p>
        </div>
      </div>
    </section>
  )
}
