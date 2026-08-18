import { C, FONT } from '../lib/tokens'
import { usePortfolio } from '../lib/portfolio-context'
import { useReveal } from '../hooks/useReveal'

export default function Skills() {
  const { t } = usePortfolio(); const headerRef = useReveal<HTMLDivElement>(); const bodyRef = useReveal<HTMLDivElement>()
  return <section id="skills" style={{ borderTop: `1px solid ${C.border}`, padding: 'clamp(72px,10vw,128px) clamp(20px,4vw,72px)', maxWidth: 1440, margin: '0 auto' }}><div ref={headerRef} className="reveal skills-header"><div><p className="eyebrow">{t.skills.eyebrow}</p><h2><span className="heading-sans">{t.skills.title}</span><span className="heading-serif">{t.skills.italic}</span></h2></div><p className="section-lead">{t.skills.body}</p></div><div ref={bodyRef} className="reveal service-grid">{t.skills.cards.map((card, index) => <article className="service-card" key={card.title}><span className="service-number">0{index + 1}</span><h3>{card.title}</h3><p>{card.body}</p><span className="service-arrow">↗</span></article>)}</div></section>
}
