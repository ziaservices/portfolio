import { useState } from 'react'
import { C, FONT } from '../lib/tokens'

interface HeroProps {
  scrollTo: (id: string) => void
}

function Btn({
  children,
  primary,
  onClick,
}: {
  children: React.ReactNode
  primary?: boolean
  onClick?: () => void
}) {
  const [hov, setHov] = useState(false)
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        fontFamily: FONT.sans,
        fontWeight: 500,
        fontSize: 14,
        letterSpacing: '-0.01em',
        padding: '13px 26px',
        borderRadius: 6,
        border: primary ? 'none' : `1px solid ${hov ? '#3a3a44' : C.border}`,
        backgroundColor: primary
          ? hov
            ? '#fff'
            : C.fg
          : hov
            ? 'rgba(255,255,255,0.04)'
            : 'transparent',
        color: primary ? C.bg : hov ? C.fg : C.fg2,
        cursor: 'pointer',
        transform: hov ? 'translateY(-1px)' : 'none',
        boxShadow: primary && hov ? '0 8px 28px rgba(0,0,0,0.55)' : 'none',
        transition: 'all 0.2s ease',
        whiteSpace: 'nowrap',
      }}
    >
      {children}
    </button>
  )
}

export default function Hero({ scrollTo }: HeroProps) {
  return (
    <section
      style={{
        minHeight: '100svh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: 'clamp(100px,14vh,160px) clamp(20px,4vw,72px) clamp(56px,8vh,96px)',
        maxWidth: 1440,
        margin: '0 auto',
        position: 'relative',
      }}
    >
      {/* Very subtle radial accent — top-left corner */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '60%',
          height: '60%',
          background:
            'radial-gradient(ellipse at top left, rgba(99,102,241,0.055) 0%, transparent 65%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ position: 'relative' }}>
        {/* Availability row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 9,
            marginBottom: 'clamp(36px, 5vh, 56px)',
          }}
        >
          <span
            className="pulse-dot"
            style={{
              display: 'block',
              width: 7,
              height: 7,
              borderRadius: '50%',
              backgroundColor: C.green,
              flexShrink: 0,
            }}
          />
          <span
            style={{
              fontFamily: FONT.mono,
              fontSize: 11,
              color: C.muted,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            Available for freelance / studio opportunities
          </span>
        </div>

        {/* Headline */}
        <h1
          style={{
            margin: '0 0 clamp(36px, 5vh, 56px)',
            lineHeight: 0.93,
            letterSpacing: '-0.04em',
            maxWidth: 1100,
          }}
        >
          <span
            style={{
              display: 'block',
              fontFamily: FONT.sans,
              fontWeight: 700,
              fontSize: 'clamp(52px, 8.8vw, 120px)',
              color: C.fg,
            }}
          >
            WEB DEVELOPER
          </span>
          <span
            style={{
              display: 'block',
              fontFamily: FONT.serif,
              fontWeight: 400,
              fontStyle: 'italic',
              fontSize: 'clamp(52px, 8.8vw, 120px)',
              color: C.fg2,
              letterSpacing: '-0.03em',
            }}
          >
            Building Digital
          </span>
          <span
            style={{
              display: 'block',
              fontFamily: FONT.sans,
              fontWeight: 700,
              fontSize: 'clamp(52px, 8.8vw, 120px)',
              color: C.fg,
            }}
          >
            EXPERIENCES.
          </span>
        </h1>

        {/* Supporting row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            gap: 'clamp(24px, 4vw, 60px)',
            flexWrap: 'wrap',
          }}
        >
          <p
            style={{
              fontFamily: FONT.sans,
              fontSize: 'clamp(15px, 1.5vw, 18px)',
              fontWeight: 400,
              color: C.muted,
              lineHeight: 1.8,
              maxWidth: 480,
              margin: 0,
              flex: '1 1 260px',
            }}
          >
            I build fast, modern and scalable websites and web applications for
            businesses, brands and digital products.
          </p>

          <div
            style={{
              display: 'flex',
              gap: 10,
              flex: '0 0 auto',
              flexWrap: 'wrap',
            }}
          >
            <Btn primary onClick={() => scrollTo('work')}>
              View my work →
            </Btn>
            <Btn onClick={() => scrollTo('contact')}>Let's talk</Btn>
          </div>
        </div>
      </div>

      {/* Bottom rule */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 'clamp(20px,4vw,72px)',
          right: 'clamp(20px,4vw,72px)',
          height: 1,
          backgroundColor: C.border,
        }}
      />

      {/* Scroll cue — desktop */}
      <div
        className="hide-mobile"
        style={{
          position: 'absolute',
          bottom: 'clamp(56px,8vh,96px)',
          right: 'clamp(20px,4vw,72px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 8,
        }}
      >
        <div
          style={{
            width: 1,
            height: 56,
            backgroundColor: C.border,
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '-35%',
              left: 0,
              right: 0,
              height: '35%',
              background: `linear-gradient(to bottom, transparent, ${C.muted})`,
              animation: 'scrollCue 2s ease-in-out infinite',
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes scrollCue {
          0%   { top: -35%; }
          100% { top: 135%; }
        }
      `}</style>
    </section>
  )
}
