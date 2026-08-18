import { C, FONT, EXPERIENCE } from '../lib/tokens'
import { useReveal } from '../hooks/useReveal'

type ExpEntry = (typeof EXPERIENCE)[number]

function ExpRow({ exp, delay }: { exp: ExpEntry; delay: number }) {
  const ref = useReveal<HTMLDivElement>()
  return (
    <div
      ref={ref}
      className={`reveal reveal-delay-${delay} exp-row`}
      style={{
        display: 'grid',
        gridTemplateColumns: 'clamp(160px,18vw,260px) 1fr',
        gap: 'clamp(20px, 4vw, 72px)',
        padding: 'clamp(32px, 4vw, 52px) 0',
        borderBottom: `1px solid ${C.border}`,
      }}
    >
      {/* Left */}
      <div>
        <p
          style={{
            fontFamily: FONT.mono,
            fontSize: 12,
            color: C.muted,
            letterSpacing: '0.06em',
            marginBottom: 16,
          }}
        >
          {exp.period}
        </p>
        <p
          style={{
            fontFamily: FONT.sans,
            fontWeight: 600,
            fontSize: 17,
            color: C.fg,
            letterSpacing: '-0.01em',
            marginBottom: 6,
          }}
        >
          {exp.role}
        </p>
        <p
          style={{
            fontFamily: FONT.sans,
            fontSize: 13,
            color: C.accent,
            marginBottom: 10,
          }}
        >
          {exp.company}
        </p>
        <span
          style={{
            display: 'inline-block',
            fontFamily: FONT.mono,
            fontSize: 10,
            color: C.muted,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            border: `1px solid ${C.border}`,
            borderRadius: 3,
            padding: '3px 8px',
          }}
        >
          {exp.type}
        </span>
      </div>

      {/* Right */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: 14,
        }}
      >
        {exp.points.map((point) => (
          <div key={point} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
            <span
              style={{
                color: C.border,
                fontFamily: FONT.sans,
                fontSize: 14,
                flexShrink: 0,
                marginTop: 2,
                lineHeight: 1,
              }}
            >
              —
            </span>
            <span
              style={{
                fontFamily: FONT.sans,
                fontSize: 14,
                color: C.muted,
                lineHeight: 1.75,
              }}
            >
              {point}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Experience() {
  const headerRef = useReveal<HTMLDivElement>()

  return (
    <section
      style={{
        borderTop: `1px solid ${C.border}`,
        padding: 'clamp(72px,10vw,128px) clamp(20px,4vw,72px)',
        maxWidth: 1440,
        margin: '0 auto',
      }}
    >
      <div ref={headerRef} className="reveal" style={{ marginBottom: 'clamp(48px, 6vw, 72px)' }}>
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
          Experience
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
            WHERE I'VE BEEN
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
            building.
          </span>
        </h2>
      </div>

      <div style={{ borderTop: `1px solid ${C.border}` }}>
        {EXPERIENCE.map((exp, i) => (
          <ExpRow key={exp.period} exp={exp} delay={i + 1} />
        ))}
      </div>
    </section>
  )
}
