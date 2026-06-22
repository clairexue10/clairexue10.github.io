export default function About() {
  return (
    <section id="about" className="py-24 border-t border-slate-200">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="font-display text-4xl md:text-5xl text-slate-900 font-semibold mb-16">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-14">
          <div className="space-y-10">
            <div>
              <p className="text-xs text-slate-400 font-sans uppercase tracking-widest mb-3">
                01 / Background
              </p>
              <p className="text-slate-700 font-sans leading-relaxed">
                Hi — I&apos;m Yuhe (Claire) Xue, a Computer Science student at Wellesley College.
                My academic journey focuses on the intersection of systems, programming languages,
                and data science with a particular emphasis on understanding how technology impacts society.
              </p>
              <p className="text-slate-700 font-sans leading-relaxed mt-4">
                At Wellesley, I&apos;ve had the opportunity to work on diverse projects ranging from analyzing
                social media influence patterns to building data pipelines and exploring the ethics of
                technology in our curriculum and community.
              </p>
            </div>

            <div>
              <p className="text-xs text-slate-400 font-sans uppercase tracking-widest mb-3">
                04 / Beyond Code
              </p>
              <p className="text-slate-700 font-sans leading-relaxed">
                When I&apos;m not coding or analyzing data, I enjoy rock climbing, dancing, and running
                (mostly motivating myself to run, though). Fun fact: I once taught a dance — Maria by Hwasa — at
                Wellesley for a whole semester through WADO.
              </p>
            </div>
          </div>

          <div className="space-y-10">
            <div>
              <p className="text-xs text-slate-400 font-sans uppercase tracking-widest mb-3">
                02 / Interests
              </p>
              <ul className="space-y-4 font-sans text-slate-700">
                <li>
                  <span className="font-medium text-slate-900">Systems &amp; Programming Languages</span>
                  <p className="mt-1 text-sm leading-relaxed">
                    Fascinated by how we design computing systems and the languages we use to express
                    computational ideas. Well-designed systems and expressive languages are fundamental
                    to reliable, efficient software.
                  </p>
                </li>
                <li>
                  <span className="font-medium text-slate-900">Data Science &amp; Society</span>
                  <p className="mt-1 text-sm leading-relaxed">
                    Interested in how data science intersects with social issues — from TikTok influencer
                    analysis to the ethics of technology in academia and communities.
                  </p>
                </li>
                <li>
                  <span className="font-medium text-slate-900">Research &amp; Analysis</span>
                  <p className="mt-1 text-sm leading-relaxed">
                    I enjoy building pipelines for data collection and analysis, combining qualitative
                    and quantitative methods with rigorous, ethical research practices.
                  </p>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-xs text-slate-400 font-sans uppercase tracking-widest mb-3">
                03 / Skills
              </p>
              <ul className="text-sm text-slate-700 font-sans space-y-1">
                {[
                  'Building data collection and analysis pipelines',
                  'Qualitative and quantitative research',
                  'Social media data and algorithmic system analysis',
                  'Systems design and low-level implementation',
                  'Exploring ethical implications of technology',
                ].map((skill) => (
                  <li key={skill} className="flex items-start gap-2">
                    <span className="text-slate-400 mt-1">–</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
