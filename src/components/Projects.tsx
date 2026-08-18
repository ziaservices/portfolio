import { useState } from 'react'
import { C, FONT } from '../lib/tokens'
import { usePortfolio, type ProjectItem } from '../lib/portfolio-context'
import { useReveal } from '../hooks/useReveal'

function CapabilityChip({ label }: { label: string }) {
  return (
    <span
      style={{
        fontFamily: FONT.mono,
        fontSize: 11,
        color: C.fg2,
        padding: '4px 10px',
        border: `1px solid ${C.border}`,
        borderRadius: 4,
        letterSpacing: '0.02em',
        whiteSpace: 'nowrap',
      }}
    >
      {label}
    </span>
  )
}

function VisitLink({ href, label }: { href: string; label: string }) {
  const [hov, setHov] = useState(false)
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        fontFamily: FONT.sans,
        fontSize: 13,
        fontWeight: 500,
        color: hov ? C.accent : 'rgba(99,102,241,0.7)',
        background: 'none',
        border: 'none',
        padding: 0,
        cursor: 'pointer',
        transition: 'color 0.18s ease',
        textDecoration: hov ? 'underline' : 'none',
        textUnderlineOffset: '3px',
      }}
    >
      {label}
    </a>
  )
}

function ProjectRow({
  project,
  visitLabel,
  defaultOpen,
}: {
  project: ProjectItem
  visitLabel: string
  defaultOpen?: boolean
}) {
  const [open, setOpen] = useState(!!defaultOpen)
  const [imgLoaded, setImgLoaded] = useState(false)
  const ref = useReveal<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className="reveal"
      style={{
        borderBottom: `1px solid ${C.border}`,
      }}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        style={{
          width: '100%',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: 'clamp(20px,2.5vh,28px) 0',
          display: 'flex',
          alignItems: 'center',
          gap: 'clamp(16px,2.5vw,40px)',
          textAlign: 'start',
        }}
        aria-expanded={open}
      >
        <span
          style={{
            fontFamily: FONT.mono,
            fontSize: 12,
            color: C.muted,
            letterSpacing: '0.08em',
            flexShrink: 0,
            minWidth: 28,
          }}
        >
          {project.number}
        </span>

        <span
          style={{
            fontFamily: FONT.serif,
            fontStyle: 'italic',
            fontSize: 'clamp(20px, 2.4vw, 32px)',
            fontWeight: 400,
            color: C.fg,
            letterSpacing: '-0.01em',
            flex: 1,
            lineHeight: 1.1,
          }}
        >
          {project.name}
        </span>

        <span
          className="hide-mobile"
          style={{
            fontFamily: FONT.mono,
            fontSize: 11,
            color: C.muted,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            flexShrink: 0,
          }}
        >
          {project.category}
        </span>

        <span
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 32,
            height: 32,
            borderRadius: '50%',
            border: `1px solid ${C.border}`,
            color: C.muted,
            fontSize: 18,
            fontWeight: 300,
            flexShrink: 0,
            transform: open ? 'rotate(45deg)' : 'rotate(0deg)',
            transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
            lineHeight: 1,
          }}
        >
          +
        </span>
      </button>

      <div className={`project-body${open ? ' open' : ''}`}>
        <div className="project-body-inner">
          <div
            style={{
              position: 'relative',
              width: '100%',
              backgroundColor: C.surface2,
              marginBottom: 0,
              overflow: 'hidden',
            }}
          >
            <img
              src={project.image}
              alt={project.name}
              onLoad={() => setImgLoaded(true)}
              style={{
                width: '100%',
                height: 'clamp(260px, 38vw, 520px)',
                objectFit: 'cover',
                display: 'block',
                opacity: imgLoaded ? 0.75 : 0,
                transition: 'opacity 0.5s ease',
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '30%',
                background: `linear-gradient(to top, ${C.bg}, transparent)`,
                pointerEvents: 'none',
              }}
            />
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: 'clamp(24px, 3vw, 56px)',
              padding: 'clamp(28px, 3vw, 44px) 0 clamp(36px, 4vw, 56px)',
            }}
          >
            <div>
              <p
                style={{
                  fontFamily: FONT.sans,
                  fontSize: 15,
                  color: C.muted,
                  lineHeight: 1.85,
                  margin: '0 0 24px',
                }}
              >
                {project.description}
              </p>

              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 10,
                  padding: '9px 14px',
                  border: `1px solid ${C.border}`,
                  borderRadius: 6,
                  backgroundColor: C.surface,
                }}
              >
                <span
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
                    color: C.fg2,
                    letterSpacing: '0.04em',
                  }}
                >
                  {project.focus}
                </span>
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: 28,
              }}
            >
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {project.capabilities.map((capability) => (
                  <CapabilityChip key={capability} label={capability} />
                ))}
              </div>

              <div style={{ display: 'flex', alignItems: 'center' }}>
                <VisitLink href={project.url} label={visitLabel} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const { t } = usePortfolio()
  const headerRef = useReveal<HTMLDivElement>()

  return (
    <section
      id="work"
      style={{
        padding: 'clamp(72px,10vw,128px) clamp(20px,4vw,72px)',
        maxWidth: 1440,
        margin: '0 auto',
      }}
    >
      <div
        ref={headerRef}
        className="reveal"
        style={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          gap: 32,
          flexWrap: 'wrap',
          marginBottom: 'clamp(48px, 6vw, 80px)',
          paddingBottom: 'clamp(32px, 4vw, 56px)',
          borderBottom: `1px solid ${C.border}`,
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
            {t.projects.eyebrow}
          </p>
          <h2
            style={{
              fontFamily: FONT.sans,
              fontWeight: 700,
              fontSize: 'clamp(32px, 4vw, 52px)',
              color: C.fg,
              margin: 0,
              letterSpacing: '-0.03em',
              lineHeight: 1.05,
            }}
          >
            {t.projects.title}
            <br />
            <span
              style={{
                fontFamily: FONT.serif,
                fontStyle: 'italic',
                fontWeight: 400,
                color: C.fg2,
                letterSpacing: '-0.025em',
              }}
            >
              {t.projects.italic}
            </span>
          </h2>
        </div>
        <p
          style={{
            fontFamily: FONT.sans,
            fontSize: 15,
            color: C.muted,
            lineHeight: 1.85,
            maxWidth: 360,
            margin: 0,
          }}
        >
          {t.projects.body}
        </p>
      </div>

      <div>
        {t.projects.items.map((project, i) => (
          <ProjectRow
            key={project.number}
            project={project}
            visitLabel={t.projects.visitWebsite}
            defaultOpen={i === 0}
          />
        ))}
      </div>
    </section>
  )
}
