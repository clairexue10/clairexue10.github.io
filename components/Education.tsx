const COURSES = [
  'MIT 6.1800 Computer System Engineering',
  'CS 343 Distributed Systems',
  'CS 342 Computer Security',
  'CS 251 Principles of Programming Languages',
  'CS 315 Data Science for the Web',
  'STAT 318 Regression Analysis',
]

export default function Education() {
  return (
    <section id="education" className="py-24 border-t border-slate-200">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="font-display text-4xl md:text-5xl text-slate-900 font-semibold mb-16">
          Education
        </h2>

        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-48 shrink-0">
            <p className="text-sm text-slate-500 font-sans">Class of 2026</p>
          </div>

          <div className="flex-1">
            <h3 className="font-display text-2xl text-slate-900">Wellesley College</h3>
            <p className="text-slate-600 font-sans mt-1 mb-8">B.A. Computer Science</p>

            <p className="text-xs text-slate-400 font-sans uppercase tracking-widest mb-4">
              Notable Coursework
            </p>
            <div className="flex flex-wrap gap-2">
              {COURSES.map((course) => (
                <span
                  key={course}
                  className="text-sm text-slate-700 bg-slate-100 px-3 py-1.5 rounded-full font-sans"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
