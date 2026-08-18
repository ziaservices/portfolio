import { useState } from 'react'
import { C, FONT, SKILLS } from '../lib/tokens'
import { useReveal } from '../hooks/useReveal'

function Tag({ label }: { label: string }) {
  const [hov, setHov] = useState(false)
  return (
    <span
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        fontFamily: FONT.sans,
        fontSize: 13,
        fontWeight: 400,
        color: hov ? C.fg : C.fg2,
        padding: '7px 14px',
        border: `1px solid ${hov ? C.borderHover : C.border}`,
        borderRadius: 5,
        backgroundColor: hov ? C.surface2 : 'transparent',
        cursor: 'default',
        transition: 'all 0.18s ease',
        userSelect: 'none',
      }}
    >
      {label}
    </span>
  )
}

export default function Skills() {
  const headerRef = useReveal<HTMLDivElement>()
  const bodyRef = useReveal<HTMLDivElement>()

  return (
    <section
      id="skills"
      style={{
        borderTop: `1px solid ${C.border}`,
        padding: 'clamp(72px,10vw,128px) clamp(20px,4vw,72px)',
        maxWidth: 1440,
        margin: '0 auto',
      }}
    >
      {/* Header */}
      <div
        ref={headerRef}
        className="reveal"
        style={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          gap: 32,
          flexWrap: 'wrap',
          marginBottom: 'clamp(48px, 6vw, 72px)',
        }}
      >
        <div>
          <p
            style={{
              fontFamily: FONT.mono,
              fontSize: 11,
              color: C.accent,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              marginBottom: 20,
            }}
          >
            Skills
          </p>
          <h2 style={{ margin: 0, lineHeight: 1.05, letterSpacing: '-0.03em' }}>
            <span
              style={{
                display: 'block',
                fontFamily: FONT.sans,
                fontWeight: 700,
                fontSize: 'clamp(30px, 3.8vw, 50px)',
                color: C.fg,
              }}
            >
              TECHNOLOGIES
            </span>
            <span
              style={{
                display: 'block',
                fontFamily: FONT.serif,
                fontStyle: 'italic',
                fontWeight: 400,
                fontSize: 'clamp(30px, 3.8vw, 50px)',
                color: C.fg2,
                letterSpacing: '-0.02em',
              }}
            >
              I build with.
            </span>
          </h2>
        </div>
        <p
          style={{
            fontFamily: FONT.sans,
            fontSize: 15,
            color: C.muted,
            lineHeight: 1.85,
            maxWidth: 340,
            margin: 0,
          }}
        >
          A focused set of tools — only what I can demonstrate through shipped production work.
        </p>
      </div>

      {/* Skill rows */}
      <div ref={bodyRef} className="reveal">
        <div style={{ borderTop: `1px solid ${C.border}` }}>
          {SKILLS.map(({ category, items }) => (
            <div key={category} className="skill-row">
              <span className="skill-label">{category}</span>
              <div className="skill-tags">
                {items.map((item) => (
                  <Tag key={item} label={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
