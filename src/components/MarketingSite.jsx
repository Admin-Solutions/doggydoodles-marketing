import React, { useState, useEffect } from 'react'
import { colors } from '../styles/theme'
import { Hero, TheProblem, DogIdentity, PassTheLead, HealthVault, KnowYourLaws } from '../sections/Product'
import { ThePack, Matching, LostDog } from '../sections/Community'
import { Marketplace, ElenaStudio, Kibble, Membership } from '../sections/Commerce'
import { NappStories, Roadmap, Faq, FinalCta } from '../sections/Closing'

const NAV = [
  { href: '#pass-the-lead', label: 'Pass the Lead' },
  { href: '#health', label: 'Health' },
  { href: '#the-pack', label: 'The Pack' },
  { href: '#marketplace', label: 'Marketplace' },
  { href: '#membership', label: 'Membership' }
]

const FOOTER = [
  {
    heading: 'The Napp',
    links: [
      ['Pass the Lead', '#pass-the-lead'], ['Health record', '#health'],
      ['The Pack', '#the-pack'], ['Know your laws', '#laws'],
      ['Kibble', '#kibble'], ['Membership', '#membership']
    ]
  },
  {
    heading: 'Marketplace',
    links: [
      ['Find a vendor', '#marketplace'], ['Elena\'s Studio', '#studio'],
      ['Become a vendor', '#marketplace'], ['What\'s coming', '#roadmap']
    ]
  },
  {
    heading: 'Company',
    links: [['About', '#'], ['Blog', '#'], ['Contact', '#'], ['FAQ', '#faq']]
  },
  {
    heading: 'Legal',
    links: [['Privacy Policy', '#'], ['Terms of Service', '#'], ['Refund Policy', '#']]
  }
]

const MarketingSite = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div style={{ background: colors.bg, minHeight: '100vh' }}>

      {/* Ambient background */}
      <div style={{
        position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
        pointerEvents: 'none', zIndex: 0, overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute', top: '-20%', left: '-10%', width: '50%', height: '50%',
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, transparent 70%)'
        }} />
        <div style={{
          position: 'absolute', top: '30%', right: '-20%', width: '60%', height: '60%',
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.06) 0%, transparent 70%)'
        }} />
        <div style={{
          position: 'absolute', bottom: '10%', left: '20%', width: '40%', height: '40%',
          background: 'radial-gradient(circle, rgba(245, 158, 11, 0.04) 0%, transparent 70%)'
        }} />
      </div>

      {/* Navigation */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        padding: isScrolled ? '14px 24px' : '22px 24px',
        background: isScrolled ? 'rgba(10, 10, 15, 0.85)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(20px)' : 'none',
        borderBottom: isScrolled ? `1px solid ${colors.border}` : '1px solid transparent',
        transition: 'all 0.3s ease'
      }}>
        <div style={{
          maxWidth: '1200px', margin: '0 auto', display: 'flex',
          alignItems: 'center', justifyContent: 'space-between'
        }}>
          <a href="#" style={{
            display: 'flex', alignItems: 'center', gap: '10px',
            textDecoration: 'none', fontSize: '20px', fontWeight: '800', color: colors.text
          }}>
            <span style={{ fontSize: '26px' }}>🐕</span> DoggyDoodles
          </a>

          <div className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '28px' }}>
            {NAV.map(n => (
              <a key={n.href} href={n.href} style={{
                color: colors.textMuted, textDecoration: 'none',
                fontSize: '14px', fontWeight: '500', transition: 'color 0.2s'
              }}>
                {n.label}
              </a>
            ))}
            <a href="#cta" className="btn-primary" style={{
              padding: '11px 24px', borderRadius: '999px', color: '#fff',
              textDecoration: 'none', fontSize: '14px', fontWeight: '600'
            }}>
              Get Started
            </a>
          </div>

          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: 'none', background: 'none', border: 'none',
              color: colors.text, fontSize: '26px', cursor: 'pointer'
            }}
            aria-label="Menu"
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="glass" style={{
            marginTop: '14px', padding: '20px', borderRadius: '18px',
            display: 'flex', flexDirection: 'column', gap: '4px'
          }}>
            {NAV.map(n => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{ color: colors.text, textDecoration: 'none', fontSize: '16px', padding: '10px 0' }}
              >
                {n.label}
              </a>
            ))}
            <a href="#cta" onClick={() => setMobileMenuOpen(false)} className="btn-primary" style={{
              marginTop: '10px', padding: '13px', borderRadius: '999px', color: '#fff',
              textDecoration: 'none', fontSize: '15px', fontWeight: '600', textAlign: 'center'
            }}>
              Get Started
            </a>
          </div>
        )}
      </nav>

      {/* Sections */}
      <Hero />
      <TheProblem />
      <DogIdentity />
      <PassTheLead />
      <HealthVault />
      <ThePack />
      <Matching />
      <LostDog />
      <KnowYourLaws />
      <Marketplace />
      <ElenaStudio />
      <Kibble />
      <Membership />
      <NappStories />
      <Roadmap />
      <Faq />
      <FinalCta />

      {/* Footer */}
      <footer style={{
        padding: '80px 24px 40px', position: 'relative', zIndex: 1,
        borderTop: `1px solid ${colors.border}`
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '40px', marginBottom: '48px'
          }}>
            <div style={{ gridColumn: 'span 1' }}>
              <div style={{
                display: 'flex', alignItems: 'center', gap: '10px',
                fontSize: '19px', fontWeight: '800', color: colors.text, marginBottom: '14px'
              }}>
                <span style={{ fontSize: '24px' }}>🐕</span> DoggyDoodles
              </div>
              <p style={{ fontSize: '14px', color: colors.textDim, lineHeight: '1.7' }}>
                Your dog's whole life, in one place. Started with a paintbrush,
                grew into something bigger.
              </p>
            </div>

            {FOOTER.map(col => (
              <div key={col.heading}>
                <p style={{
                  fontSize: '13px', fontWeight: '700', color: colors.text,
                  textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '16px'
                }}>
                  {col.heading}
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {col.links.map(([label, href]) => (
                    <a key={label} href={href} style={{
                      color: colors.textDim, textDecoration: 'none', fontSize: '14px'
                    }}>
                      {label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div style={{
            borderTop: `1px solid ${colors.border}`, paddingTop: '28px',
            display: 'flex', justifyContent: 'space-between',
            alignItems: 'center', gap: '16px', flexWrap: 'wrap'
          }}>
            <p style={{ fontSize: '13px', color: colors.textDim }}>
              © {new Date().getFullYear()} DoggyDoodles. Made for dogs.
            </p>
            <p style={{ fontSize: '13px', color: colors.textDim }}>
              No cats were allowed in the making of this website.*
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default MarketingSite
