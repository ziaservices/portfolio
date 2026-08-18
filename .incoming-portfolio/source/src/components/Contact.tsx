import { useState } from 'react'
import { C, FONT } from '../lib/tokens'
import { useReveal } from '../hooks/useReveal'

function PrimaryBtn({ children }: { children: React.ReactNode }) {
  const [hov, setHov] = useState(false)
  return (
    <button
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        fontFamily: FONT.sans,
        fontWeight: 500,
        fontSize: 15,
        letterSpacing: '-0.01em',
        padding: '15px 32px',
        borderRadius: 7,
        border: 'none',
        backgroundColor: hov ? '#fff' : C.fg,
        color: C.bg,
        cursor: 'pointer',
        transform: hov ? 'translateY(-1px)' : 'none',
        boxShadow: hov ? '0 10px 32px rgba(0,0,0,0.6)' : 'none',
        transition: 'all 0.2s ease',
        whiteSpace: 'nowrap',
      }}
    >
      {children}
    </button>
  )
}

function GhostBtn({ children }: { children: React.ReactNode }) {
  const [hov, setHov] = useState(false)
  return (
    <button
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        fontFamily: FONT.sans,
        fontWeight: 400,
        fontSize: 15,
        letterSpacing: '-0.01em',
        padding: '15px 32px',
        borderRadius: 7,
        border: `1px solid ${hov ? '#3a3a44' : C.border}`,
        backgroundColor: hov ? 'rgba(255,255,255,0.04)' : 'transparent',
        color: hov ? C.fg : C.fg2,
        cursor: 'pointer',
        transform: hov ? 'translateY(-1px)' : 'none',
        transition: 'all 0.2s ease',
        whiteSpace: 'nowrap',
      }}
    >
      {children}
    </button>
  )
}

function ContactLink({ label, value }: { label: string; value: string }) {
  const [hov, setHov] = useState(false)
  return (
    <div>
      <p
        style={{
          fontFamily: FONT.mono,
          fontSize: 10,
          color: C.muted,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          marginBottom: 8,
        }}
      >
        {label}
      </p>
      <button
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        style={{
          fontFamily: FONT.sans,
          fontSize: 14,
          color: hov ? C.accent : C.fg2,
          background: 'none',
          border: 'none',
          padding: 0,
          cursor: 'pointer',
          transition: 'color 0.18s ease',
          textDecoration: hov ? 'underline' : 'none',
          textUnderlineOffset: '3px',
        }}
      >
        {value}
      </button>
    </div>
  )
}

export default function Contact() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section
      id="contact"
      style={{
        borderTop: `1px solid ${C.border}`,
        padding: 'clamp(80px,12vw,148px) clamp(20px,4vw,72px)',
        maxWidth: 1440,
        margin: '0 auto',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle bg accent */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          width: '50%',
          height: '60%',
          background:
            'radial-gradient(ellipse at bottom right, rgba(99,102,241,0.04) 0%, transparent 65%)',
          pointerEvents: 'none',
        }}
      />

      <div ref={ref} className="reveal" style={{ maxWidth: 800, position: 'relative' }}>
        <p
          style={{
            fontFamily: FONT.mono,
            fontSize: 11,
            color: C.accent,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            marginBottom: 36,
          }}
        >
          Contact
        </p>

        <h2 style={{ margin: '0 0 clamp(36px,4vw,52px)', lineHeight: 0.93 }}>
          <span
            style={{
              display: 'block',
              fontFamily: FONT.sans,
              fontWeight: 700,
              fontSize: 'clamp(44px, 7vw, 96px)',
              color: C.fg,
              letterSpacing: '-0.04em',
            }}
          >
            HAVE A PROJECT
          </span>
          <span
            style={{
              display: 'block',
              fontFamily: FONT.serif,
              fontStyle: 'italic',
              fontWeight: 400,
              fontSize: 'clamp(44px, 7vw, 96px)',
              color: C.fg2,
              letterSpacing: '-0.03em',
            }}
          >
            in mind?
          </span>
        </h2>

        <p
          style={{
            fontFamily: FONT.sans,
            fontSize: 'clamp(15px, 1.5vw, 17px)',
            color: C.muted,
            lineHeight: 1.9,
            maxWidth: 520,
            marginBottom: 52,
          }}
        >
          Whether you're looking for a developer for your next client project or want to
          build something from scratch, I'd love to hear about it.
        </p>

        <div
          style={{
            display: 'flex',
            gap: 12,
            flexWrap: 'wrap',
            marginBottom: 72,
          }}
        >
          <PrimaryBtn>Start a conversation →</PrimaryBtn>
          <GhostBtn>Email me</GhostBtn>
        </div>

        {/* Contact links */}
        <div
          style={{
            display: 'flex',
            gap: 'clamp(28px, 4vw, 56px)',
            flexWrap: 'wrap',
            paddingTop: 40,
            borderTop: `1px solid ${C.border}`,
          }}
        >
          <ContactLink label="Email" value="hello@yourname.dev" />
          <ContactLink label="GitHub" value="github.com/yourname" />
          <ContactLink label="LinkedIn" value="linkedin.com/in/yourname" />
        </div>
      </div>
    </section>
  )
}
