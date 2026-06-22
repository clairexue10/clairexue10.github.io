import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { projects, getProjectBySlug } from '@/data/projects'

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  return { title: project ? `${project.title} – Claire Xue` : 'Project – Claire Xue' }
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) notFound()

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center gap-4">
          <Link
            href="/"
            className="text-sm text-slate-500 font-sans hover:text-slate-900 transition-colors"
          >
            ← Claire Xue
          </Link>
          <span className="text-slate-200">/</span>
          <Link
            href="/#projects"
            className="text-sm text-slate-500 font-sans hover:text-slate-900 transition-colors"
          >
            Projects
          </Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-16">
        <span className="text-xs text-slate-400 font-sans uppercase tracking-widest">
          {project.course} · {project.year}
        </span>

        <h1 className="font-display text-4xl md:text-5xl text-slate-900 font-semibold mt-3 mb-2 leading-tight">
          {project.title}
        </h1>

        {project.subtitle && (
          <p className="text-lg text-slate-500 font-sans mb-10">{project.subtitle}</p>
        )}

        {!project.subtitle && <div className="mb-10" />}

        <div className="aspect-video overflow-hidden rounded-xl bg-slate-100 mb-12">
          <Image
            src={project.coverImage}
            alt={project.title}
            width={800}
            height={450}
            className="w-full h-full object-cover"
            priority
          />
        </div>

        {project.links && project.links.length > 0 && (
          <div className="flex flex-wrap gap-3 mb-12">
            {project.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 text-sm font-sans bg-slate-900 text-white rounded-full hover:bg-slate-700 transition-colors"
              >
                {link.label} ↗
              </a>
            ))}
          </div>
        )}

        <div className="prose prose-slate max-w-none font-sans">
          {project.paragraphs?.map((para, i) => (
            <p key={i} className="text-slate-700 leading-relaxed mb-5">
              {para}
            </p>
          ))}
        </div>

        {project.codePrivate && (
          <div className="mt-10 px-5 py-4 bg-slate-50 border border-slate-200 rounded-lg">
            <p className="text-sm text-slate-500 font-sans">
              Due to course policy, the full implementation code cannot be shared publicly.
              Happy to discuss architecture and design decisions in detail — feel free to{' '}
              <a href="/#contact" className="underline underline-offset-2 hover:text-slate-700">
                get in touch
              </a>
              .
            </p>
          </div>
        )}

        <div className="mt-16 pt-10 border-t border-slate-200">
          <Link
            href="/#projects"
            className="text-sm text-slate-500 font-sans hover:text-slate-900 transition-colors"
          >
            ← Back to Projects
          </Link>
        </div>
      </main>
    </>
  )
}
