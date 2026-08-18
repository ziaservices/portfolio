import { C, FONT } from '../lib/tokens'
import { useReveal } from '../hooks/useReveal'

const META = [
  { label: 'Location', value: 'Morocco — remote-first, international clients' },
  { label: 'Focus', value: 'Web development & digital experiences' },
  { label: 'Status', value: 'Open to studio & freelance work' },
  { label: 'Languages', value: 'English, French, Arabic' },
] as const

export default function About() {
  const ref = useReveal<HTMLDivElement>()
  const imgRef = useReveal<HTMLDivElement>()

  return (
    <section
      id="about"
      style={{
        borderTop: `1px solid ${C.border}`,
        padding: 'clamp(72px,10vw,128px) clamp(20px,4vw,72px)',
        maxWidth: 1440,
        margin: '0 auto',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'clamp(52px, 7vw, 112px)',
          alignItems: 'center',
        }}
      >
        {/* Text column */}
        <div ref={ref} className="reveal">
          <p
            style={{
              fontFamily: FONT.mono,
              fontSize: 11,
              color: C.accent,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              marginBottom: 24,
            }}
          >
            About
          </p>

          <h2 style={{ margin: '0 0 36px', lineHeight: 1.0, letterSpacing: '-0.035em' }}>
            <span
              style={{
                display: 'block',
                fontFamily: FONT.sans,
                fontWeight: 700,
                fontSize: 'clamp(34px, 4.2vw, 56px)',
                color: C.fg,
              }}
            >
              MORE THAN
            </span>
            <span
              style={{
                display: 'block',
                fontFamily: FONT.serif,
                fontStyle: 'italic',
                fontWeight: 400,
                fontSize: 'clamp(34px, 4.2vw, 56px)',
                color: C.fg2,
                letterSpacing: '-0.025em',
              }}
            >
              just code.
            </span>
          </h2>

          <p
            style={{
              fontFamily: FONT.sans,
              fontSize: 16,
              color: C.muted,
              lineHeight: 1.9,
              marginBottom: 18,
            }}
          >
            I combine design thinking, frontend development and technical implementation
            to create polished digital experiences that solve real problems for real clients.
          </p>
          <p
            style={{
              fontFamily: FONT.sans,
              fontSize: 16,
              color: C.muted,
              lineHeight: 1.9,
              marginBottom: 52,
            }}
          >
            My approach is rooted in clarity — clean code, performant interfaces,
            and thoughtful interactions. Every detail earns its place.
          </p>

          {/* Meta table */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {META.map(({ label, value }) => (
              <div
                key={label}
                style={{
                  display: 'flex',
                  gap: 'clamp(20px, 2.5vw, 40px)',
                  padding: '16px 0',
                  borderBottom: `1px solid ${C.border}`,
                }}
              >
                <span
                  style={{
                    fontFamily: FONT.mono,
                    fontSize: 10,
                    color: C.muted,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    minWidth: 80,
                    paddingTop: 2,
                    flexShrink: 0,
                  }}
                >
                  {label}
                </span>
                <span
                  style={{
                    fontFamily: FONT.sans,
                    fontSize: 14,
                    color: C.fg2,
                    lineHeight: 1.6,
                  }}
                >
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Photo column */}
        <div
          ref={imgRef}
          className="reveal reveal-delay-2"
          style={{ position: 'relative' }}
        >
          {/* Main photo */}
          <div
            style={{
              aspectRatio: '4 / 5',
              borderRadius: 8,
              overflow: 'hidden',
              border: `1px solid ${C.border}`,
              backgroundColor: C.surface,
              position: 'relative',
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=700&h=900&fit=crop&auto=format"
              alt="Developer at work"
              style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6 }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: `linear-gradient(to top, ${C.bg} 0%, rgba(8,8,9,0.2) 60%, transparent 100%)`,
              }}
            />
          </div>

          {/* Floating stat card */}
          <div
            style={{
              position: 'absolute',
              bottom: -20,
              right: -20,
              backgroundColor: C.surface,
              border: `1px solid ${C.border}`,
              borderRadius: 8,
              padding: '18px 22px',
            }}
          >
            <p
              style={{
                fontFamily: FONT.mono,
                fontSize: 9,
                color: C.muted,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                marginBottom: 6,
              }}
            >
              Based in
            </p>
            <p
              style={{
                fontFamily: FONT.sans,
                fontWeight: 600,
                fontSize: 15,
                color: C.fg,
                letterSpacing: '-0.01em',
              }}
            >
              Morocco
            </p>
            <p
              style={{
                fontFamily: FONT.sans,
                fontSize: 12,
                color: C.muted,
                marginTop: 2,
              }}
            >
              Working globally
            </p>
          </div>

          {/* Corner decoration */}
          <div
            style={{
              position: 'absolute',
              top: -12,
              left: -12,
              width: 48,
              height: 48,
              border: `1px solid ${C.border}`,
              borderRadius: 4,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: C.surface,
            }}
          >
            <span
              style={{
                fontFamily: FONT.mono,
                fontSize: 10,
                color: C.accent,
                letterSpacing: '0.04em',
              }}
            >
              AM
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
