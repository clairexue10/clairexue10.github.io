import { experiences } from '@/data/experience'

export default function Experience() {
  return (
    <section id="experience" className="py-24 border-t border-slate-200">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="font-display text-4xl md:text-5xl text-slate-900 font-semibold mb-16">
          Experience
        </h2>

        {experiences.length === 0 ? (
          <p className="text-slate-400 font-sans italic">Experience coming soon.</p>
        ) : (
          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <div key={i} className="flex flex-col md:flex-row gap-6 md:gap-12">
                <div className="md:w-48 shrink-0">
                  <p className="text-sm text-slate-500 font-sans">{exp.period}</p>
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-xl text-slate-900">{exp.role}</h3>
                  <p className="text-slate-600 font-sans text-sm mb-4">
                    {exp.company} · {exp.location}
                  </p>
                  <ul className="space-y-2">
                    {exp.bullets.map((bullet, j) => (
                      <li
                        key={j}
                        className="text-sm text-slate-700 font-sans flex items-start gap-2"
                      >
                        <span className="text-slate-400 mt-1 shrink-0">–</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
