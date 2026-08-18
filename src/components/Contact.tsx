import { useState } from 'react'
import { C, FONT } from '../lib/tokens'
import { useReveal } from '../hooks/useReveal'

const WHATSAPP_URL = 'https://wa.me/212645019340'
const EMAIL_URL = 'mailto:babtai.hatim@gmail.com'

function PrimaryBtn({ children, href }: { children: React.ReactNode; href?: string }) {
  const [hov, setHov] = useState(false)
  const style = {
    display: 'inline-block',
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
    textDecoration: 'none',
  } as const

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        style={style}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={style}
    >
      {children}
    </button>
  )
}

function GhostBtn({ children, href }: { children: React.ReactNode; href?: string }) {
  const [hov, setHov] = useState(false)
  const style = {
    display: 'inline-block',
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
    textDecoration: 'none',
  } as const

  if (href) {
    return (
      <a
        href={href}
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        style={style}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={style}
    >
      {children}
    </button>
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
          }}
        >
          <PrimaryBtn href={WHATSAPP_URL}>Start a conversation →</PrimaryBtn>
          <GhostBtn href={EMAIL_URL}>Email me</GhostBtn>
        </div>
      </div>
    </section>
  )
}
