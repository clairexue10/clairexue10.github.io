import Image from 'next/image'
import Link from 'next/link'
import { projects } from '@/data/projects'

export default function Projects() {
  return (
    <section id="projects" className="py-24 border-t border-slate-200">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-baseline justify-between mb-16">
          <h2 className="font-display text-4xl md:text-5xl text-slate-900 font-semibold">
            Projects
          </h2>
        </div>

        <p className="text-slate-500 font-sans text-sm mb-12 -mt-10">
          A selection of projects from coursework and research — papers, posters, and write-ups.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group block"
            >
              <div className="aspect-video overflow-hidden rounded-lg bg-slate-100 mb-4">
                <Image
                  src={project.coverImage}
                  alt={project.title}
                  width={400}
                  height={225}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div>
                <span className="text-xs text-slate-400 font-sans uppercase tracking-wide">
                  {project.course} · {project.year}
                </span>
                <h3 className="font-display text-xl text-slate-900 mt-1 mb-2 group-hover:text-slate-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-600 font-sans leading-relaxed">
                  {project.cardDescription}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
