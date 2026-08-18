import { C, FONT } from '../lib/tokens'
import { usePortfolio } from '../lib/portfolio-context'
import { useReveal } from '../hooks/useReveal'

export default function Experience() {
  const { t } = usePortfolio(); const headerRef = useReveal<HTMLDivElement>()
  return <section style={{ borderTop: `1px solid ${C.border}`, padding: 'clamp(72px,10vw,128px) clamp(20px,4vw,72px)', maxWidth: 1440, margin: '0 auto' }}><div ref={headerRef} className="reveal" style={{ marginBottom: 'clamp(48px,6vw,72px)' }}><p className="eyebrow">{t.experience.eyebrow}</p><h2><span className="heading-sans">{t.experience.title}</span><span className="heading-serif">{t.experience.italic}</span></h2></div><div style={{ borderTop: `1px solid ${C.border}` }}>{t.experience.entries.map((exp, i) => <ExpRow key={exp.period} exp={exp} delay={i + 1} />)}</div></section>
}
function ExpRow({ exp, delay }: { exp: { period: string; role: string; company: string; type: string; points: string[] }; delay: number }) { const ref = useReveal<HTMLDivElement>(); return <div ref={ref} className={`reveal reveal-delay-${delay} exp-row`}><div><p className="exp-period">{exp.period}</p><p className="exp-role">{exp.role}</p><p className="exp-company">{exp.company}</p><span className="exp-type">{exp.type}</span></div><div className="exp-points">{exp.points.map((point) => <div key={point}><span>—</span><p>{point}</p></div>)}</div></div> }
