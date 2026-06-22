const PARAGRAPHS = [
  'My name is Yuhe Xue, and I am a senior at Wellesley College majoring in Computer Science.',
  'Throughout college, I have explored formal verification, systems, programming languages, compilers, machine learning, artificial intelligence, and data science through coursework, research, and internships. I am particularly drawn to understanding how complex computational systems can be made more reliable, efficient, and trustworthy.',
  'My current research spans programming languages and formal verification. At MIT CSAIL\'s Programming Languages and Verification Group, I work on extending formal verification techniques toward verifying FlashAttention computations in Rocq. At Wellesley\'s Programming Systems Lab, I contribute to compiler verification research for WebAssembly and Cranelift. Through these projects, I have developed a strong interest in the intersection of systems, compilers, verification, and AI infrastructure.',
  'As I prepare to graduate, I am actively seeking opportunities where I can apply my technical background to challenging real-world problems. I am excited to contribute to impactful projects, continue learning from talented teams, and explore the many ways technology can drive innovation.',
  'Outside of academics, I enjoy photography, music, dance, and exploring new places.',
]

export default function About() {
  return (
    <section id="about" className="py-24 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="font-display text-4xl md:text-5xl text-slate-900 dark:text-slate-100 font-semibold mb-12">
          About Me
        </h2>
        <div className="max-w-2xl space-y-5">
          {PARAGRAPHS.map((p, i) => (
            <p key={i} className="text-slate-700 dark:text-slate-300 font-sans leading-relaxed">
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
