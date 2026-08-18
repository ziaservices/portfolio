import { useState } from 'react'
import { C, FONT } from '../lib/tokens'

const NAV_LINKS = ['Work', 'About', 'Skills', 'Contact'] as const

interface NavProps {
  scrolled: boolean
  mobileOpen: boolean
  setMobileOpen: (v: boolean) => void
  scrollTo: (id: string) => void
}

function NavLink({ label, onClick }: { label: string; onClick: () => void }) {
  const [hovered, setHovered] = useState(false)
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontFamily: FONT.sans,
        fontSize: 13,
        fontWeight: 500,
        letterSpacing: '0.01em',
        color: hovered ? C.fg : C.fg2,
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: '4px 0',
        transition: 'color 0.18s ease',
        position: 'relative',
      }}
    >
      {label}
      <span
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 1,
          backgroundColor: C.accent,
          transform: hovered ? 'scaleX(1)' : 'scaleX(0)',
          transformOrigin: 'left',
          transition: 'transform 0.22s ease',
        }}
      />
    </button>
  )
}

function AvailablePill() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 7,
        padding: '5px 13px',
        border: `1px solid ${C.border}`,
        borderRadius: 100,
        backgroundColor: C.surface,
      }}
    >
      <span
        className="pulse-dot"
        style={{
          display: 'block',
          width: 6,
          height: 6,
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
          letterSpacing: '0.04em',
        }}
      >
        Available for work
      </span>
    </div>
  )
}

export default function Nav({ scrolled, mobileOpen, setMobileOpen, scrollTo }: NavProps) {
  return (
    <header
      style={{
        position: 'fixed',
        inset: '0 0 auto',
        zIndex: 200,
        backgroundColor: scrolled ? 'rgba(8,8,9,0.88)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
        borderBottom: `1px solid ${scrolled ? C.border : 'transparent'}`,
        transition: 'background-color 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease',
      }}
    >
      <div
        style={{
          maxWidth: 1440,
          margin: '0 auto',
          padding: '0 clamp(20px, 4vw, 72px)',
          height: 62,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{
            fontFamily: FONT.sans,
            fontWeight: 700,
            fontSize: 17,
            letterSpacing: '-0.03em',
            color: C.fg,
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
          }}
        >
          AM<span style={{ color: C.accent }}>.</span>
        </button>

        {/* Desktop nav */}
        <nav
          className="hide-mobile"
          style={{ display: 'flex', alignItems: 'center', gap: 36 }}
        >
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link}
              label={link}
              onClick={() => scrollTo(link.toLowerCase())}
            />
          ))}
          <AvailablePill />
        </nav>

        {/* Mobile hamburger */}
        <button
          className="hide-desktop"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '6px 4px',
            display: 'none',
            flexDirection: 'column',
            gap: 5,
            alignItems: 'flex-end',
          }}
        >
          <span
            style={{
              display: 'block',
              width: 22,
              height: 1.5,
              background: C.fg,
              borderRadius: 1,
              transform: mobileOpen ? 'rotate(45deg) translate(4.5px, 4.5px)' : 'none',
              transition: 'transform 0.25s ease',
            }}
          />
          <span
            style={{
              display: 'block',
              width: 16,
              height: 1.5,
              background: C.fg,
              borderRadius: 1,
              opacity: mobileOpen ? 0 : 1,
              transition: 'opacity 0.2s ease',
            }}
          />
          <span
            style={{
              display: 'block',
              width: 22,
              height: 1.5,
              background: C.fg,
              borderRadius: 1,
              transform: mobileOpen ? 'rotate(-45deg) translate(4.5px, -4.5px)' : 'none',
              transition: 'transform 0.25s ease',
            }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="mobile-menu-enter"
          style={{
            backgroundColor: C.bg,
            borderTop: `1px solid ${C.border}`,
            padding: '8px clamp(20px, 4vw, 72px) 32px',
          }}
        >
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link.toLowerCase())}
              style={{
                display: 'block',
                width: '100%',
                textAlign: 'left',
                fontFamily: FONT.sans,
                fontSize: 24,
                fontWeight: 500,
                color: C.fg,
                background: 'none',
                border: 'none',
                borderBottom: `1px solid ${C.border}`,
                padding: '18px 0',
                cursor: 'pointer',
                letterSpacing: '-0.01em',
              }}
            >
              {link}
            </button>
          ))}
          <div
            style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 28 }}
          >
            <span
              className="pulse-dot"
              style={{
                display: 'block',
                width: 6,
                height: 6,
                borderRadius: '50%',
                backgroundColor: C.green,
                flexShrink: 0,
              }}
            />
            <span style={{ fontFamily: FONT.mono, fontSize: 12, color: C.muted }}>
              Available for work
            </span>
          </div>
        </div>
      )}
    </header>
  )
}
