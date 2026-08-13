import React from 'react'
import { colors } from '../styles/theme'

// Shared building blocks for the marketing sections. The site uses inline styles
// throughout (see MarketingSite.jsx); these just stop us repeating the same
// section/card/pill shells a dozen times.

export const Section = ({ id, children, tint = false, style = {} }) => (
  <section
    id={id}
    style={{
      padding: '120px 24px',
      position: 'relative',
      zIndex: 1,
      background: tint
        ? 'linear-gradient(180deg, transparent 0%, rgba(30, 41, 59, 0.2) 50%, transparent 100%)'
        : 'transparent',
      ...style
    }}
  >
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>{children}</div>
  </section>
)

export const SectionHeading = ({ eyebrow, title, blurb, align = 'center' }) => (
  <div style={{ textAlign: align, marginBottom: '60px' }}>
    {eyebrow && (
      <p style={{
        fontSize: '14px',
        color: colors.accent,
        fontWeight: '600',
        letterSpacing: '2px',
        textTransform: 'uppercase',
        marginBottom: '16px'
      }}>
        {eyebrow}
      </p>
    )}
    <h2 style={{
      fontSize: 'clamp(32px, 5vw, 48px)',
      fontWeight: '700',
      color: colors.text,
      marginBottom: blurb ? '16px' : 0
    }}>
      {title}
    </h2>
    {blurb && (
      <p style={{
        fontSize: '18px',
        color: colors.textMuted,
        lineHeight: '1.7',
        maxWidth: '680px',
        margin: align === 'center' ? '0 auto' : 0
      }}>
        {blurb}
      </p>
    )}
  </div>
)

export const Card = ({ children, style = {}, accent = null }) => (
  <div
    className="hover-lift"
    style={{
      background: 'linear-gradient(145deg, rgba(30, 41, 59, 0.5), rgba(15, 23, 42, 0.5))',
      borderRadius: '24px',
      padding: '32px',
      border: `1px solid ${accent ? `${accent}33` : colors.border}`,
      display: 'flex',
      flexDirection: 'column',
      ...style
    }}
  >
    {children}
  </div>
)

export const Pill = ({ children, color = colors.accent }) => (
  <span style={{
    display: 'inline-block',
    fontSize: '12px',
    fontWeight: '600',
    color,
    background: `${color}1a`,
    border: `1px solid ${color}33`,
    borderRadius: '999px',
    padding: '6px 14px',
    letterSpacing: '0.5px'
  }}>
    {children}
  </span>
)

export const Grid = ({ children, min = '300px', gap = '24px', style = {} }) => (
  <div style={{
    display: 'grid',
    gridTemplateColumns: `repeat(auto-fit, minmax(${min}, 1fr))`,
    gap,
    ...style
  }}>
    {children}
  </div>
)

export const FeatureCard = ({ icon, title, description, pill, pillColor }) => (
  <Card>
    {pill && <div style={{ marginBottom: '16px' }}><Pill color={pillColor}>{pill}</Pill></div>}
    {icon && <div style={{ fontSize: '36px', marginBottom: '16px' }}>{icon}</div>}
    <h3 style={{ fontSize: '20px', fontWeight: '700', color: colors.text, marginBottom: '12px' }}>
      {title}
    </h3>
    <p style={{ fontSize: '15px', color: colors.textMuted, lineHeight: '1.8' }}>
      {description}
    </p>
  </Card>
)

export const Note = ({ children, color = colors.gold }) => (
  <p style={{
    fontSize: '13px',
    color: colors.textDim,
    lineHeight: '1.7',
    borderLeft: `2px solid ${color}55`,
    paddingLeft: '14px',
    maxWidth: '760px',
    margin: '0 auto'
  }}>
    {children}
  </p>
)
