import { useEffect, useState } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { C } from './lib/tokens'
import { PortfolioProvider } from './lib/portfolio-context'

export default function App() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 56); window.addEventListener('scroll', onScroll, { passive: true }); return () => window.removeEventListener('scroll', onScroll) }, [])
  const scrollTo = (id: string) => { const el = document.getElementById(id); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 62, behavior: 'smooth' }); setMobileOpen(false) }
  return <PortfolioProvider><div style={{ backgroundColor: C.bg, color: C.fg, minHeight: '100vh', overflowX: 'hidden' }}><Nav scrolled={scrolled} mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} scrollTo={scrollTo} /><main><Hero scrollTo={scrollTo} /><Projects /><About /><Skills /><Experience /><Contact /></main><Footer /></div></PortfolioProvider>
}
