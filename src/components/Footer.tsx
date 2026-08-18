import { useState } from 'react'
import { C, FONT } from '../lib/tokens'

function FooterLink({ children }: { children: string }) {
  const [hov, setHov] = useState(false)
  return (
    <button
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        fontFamily: FONT.sans,
        fontSize: 13,
        color: hov ? C.fg2 : C.muted,
        background: 'none',
        border: 'none',
        padding: 0,
        cursor: 'pointer',
        transition: 'color 0.18s ease',
      }}
    >
      {children}
    </button>
  )
}

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: `1px solid ${C.border}`,
        padding: 'clamp(24px,3vw,36px) clamp(20px,4vw,72px)',
        maxWidth: 1440,
        margin: '0 auto',
      }}
    >
      <div className="footer-bar" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span
          style={{
            fontFamily: FONT.sans,
            fontWeight: 700,
            fontSize: 17,
            color: C.fg,
            letterSpacing: '-0.03em',
          }}
        >
          AM<span style={{ color: C.accent }}>.</span>
        </span>

        <span
          style={{
            fontFamily: FONT.mono,
            fontSize: 11,
            color: C.muted,
            letterSpacing: '0.06em',
          }}
        >
          © 2026 — All rights reserved
        </span>

        <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
          {['GitHub', 'LinkedIn', 'Email'].map((l) => (
            <FooterLink key={l}>{l}</FooterLink>
          ))}
        </div>
      </div>
    </footer>
  )
}
