import { useState, useEffect } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { C } from './lib/tokens'

export default function App() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 56)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      const offset = 62
      const top = el.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
    setMobileOpen(false)
  }

  return (
    <div
      style={{
        backgroundColor: C.bg,
        color: C.fg,
        minHeight: '100vh',
        overflowX: 'hidden',
      }}
    >
      <Nav
        scrolled={scrolled}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
        scrollTo={scrollTo}
      />

      <main>
        <Hero scrollTo={scrollTo} />
        <Projects />
        <About />
        <Skills />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
