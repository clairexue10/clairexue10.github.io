import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import Projects from '@/components/Projects'
import Blog from '@/components/Blog'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Projects />
        <Blog />
        <Contact />
      </main>
      <footer className="border-t border-slate-200 py-8">
        <div className="max-w-5xl mx-auto px-6 text-center text-sm text-slate-400 font-sans">
          © {new Date().getFullYear()} Yuhe (Claire) Xue
        </div>
      </footer>
    </>
  )
}
