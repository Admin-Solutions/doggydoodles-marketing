import React from 'react'
import { colors } from '../styles/theme'
import { Section, SectionHeading, Card, Pill, Grid, FeatureCard, Note } from './shared'

/* ═══════════════════════════════════════════════════════════════
   MARKETPLACE
   ═══════════════════════════════════════════════════════════════ */
export const Marketplace = () => (
  <Section id="marketplace">
    <SectionHeading
      eyebrow="Marketplace"
      title="The people who look after your dog"
      blurb="Groomers, walkers, sitters, trainers, boarding, photographers, artists. Book them, pay them, and hand over the lead properly—all in the same place."
    />
    <Grid min="180px" gap="16px" style={{ marginBottom: '40px' }}>
      {[
        ['✂️', 'Groomers'], ['🚶', 'Walkers'], ['🏠', 'Sitters & boarding'],
        ['🎓', 'Trainers'], ['📸', 'Photographers'], ['🎨', 'Artists'],
        ['🦴', 'Treats & gear'], ['🩺', 'Vets (soon)']
      ].map(([icon, label], i) => (
        <div key={i} className="hover-lift" style={{
          background: 'linear-gradient(145deg, rgba(30,41,59,0.5), rgba(15,23,42,0.5))',
          borderRadius: '18px', padding: '24px 16px', textAlign: 'center',
          border: `1px solid ${colors.border}`
        }}>
          <div style={{ fontSize: '28px', marginBottom: '8px' }}>{icon}</div>
          <p style={{ fontSize: '14px', fontWeight: '600', color: colors.textSecondary }}>{label}</p>
        </div>
      ))}
    </Grid>
    <Grid min="280px">
      {[
        { icon: '📅', title: 'Book and pay in one go', description: 'Find someone, check they\'re free, book them, pay them. No three-way text thread, no bank transfer at midnight.' },
        { icon: '⭐', title: 'Reviews that mean something', description: 'Only someone who actually had your dog can leave a review. It\'s a small thing that makes the ratings worth reading.' },
        { icon: '🤝', title: 'Handover built in', description: 'Booking a sitter hands them the lead—records, permissions and a spending limit—for exactly the days you booked.' }
      ].map((f, i) => <FeatureCard key={i} {...f} />)}
    </Grid>
  </Section>
)

/* ═══════════════════════════════════════════════════════════════
   ELENA'S STUDIO — the founding vendor
   ═══════════════════════════════════════════════════════════════ */
const PORTRAIT_TIERS = [
  { name: 'Sketch', price: 49, icon: '✏️', blurb: 'A hand-drawn portrait and a profile to hang it on.' },
  { name: 'Portrait', price: 149, icon: '🎨', blurb: 'Full watercolour, plus the timelapse of it being painted.', popular: true },
  { name: 'Masterpiece', price: 299, icon: '👑', blurb: 'The full piece, a physical keepsake tag, and priority booking.' }
]

export const ElenaStudio = () => (
  <Section id="studio" tint>
    <div style={{
      background: 'linear-gradient(145deg, rgba(245,158,11,0.07), rgba(245,158,11,0.02))',
      border: `1px solid ${colors.gold}33`,
      borderRadius: '32px',
      padding: 'clamp(32px, 5vw, 56px)'
    }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <div style={{ marginBottom: '16px' }}><Pill color={colors.gold}>🖌️ Our founding vendor</Pill></div>
        <h2 style={{ fontSize: 'clamp(30px, 5vw, 44px)', fontWeight: '700', color: colors.text, marginBottom: '16px' }}>
          Elena's Portrait Studio
        </h2>
        <p style={{ fontSize: '18px', color: colors.textMuted, lineHeight: '1.8', maxWidth: '680px', margin: '0 auto' }}>
          DoggyDoodles started as Elena's hand-painted pet portraits, and she's still
          the one holding the brush. Every portrait is painted from your photos, in
          watercolour, by hand.
        </p>
      </div>

      <div style={{
        background: 'rgba(15,23,42,0.4)',
        border: `1px solid ${colors.border}`,
        borderRadius: '20px',
        padding: '28px',
        marginBottom: '40px',
        textAlign: 'center'
      }}>
        <p style={{ fontSize: '17px', color: colors.textSecondary, lineHeight: '1.8' }}>
          <strong style={{ color: colors.gold }}>And the portrait becomes their face.</strong> The
          painting isn't just something you hang on a wall—it becomes your dog's picture
          throughout the napp. The art <em style={{ fontStyle: 'normal', fontWeight: '600', color: colors.text }}>is</em> the
          identity.
        </p>
      </div>

      <Grid min="260px">
        {PORTRAIT_TIERS.map((t, i) => (
          <Card key={i} accent={t.popular ? colors.gold : null} style={{ textAlign: 'center', position: 'relative' }}>
            {t.popular && (
              <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)' }}>
                <Pill color={colors.gold}>Most loved</Pill>
              </div>
            )}
            <div style={{ fontSize: '36px', marginBottom: '12px' }}>{t.icon}</div>
            <h3 style={{ fontSize: '20px', fontWeight: '700', color: colors.text, marginBottom: '8px' }}>{t.name}</h3>
            <p style={{ fontSize: '32px', fontWeight: '800', color: colors.gold, marginBottom: '12px' }}>${t.price}</p>
            <p style={{ fontSize: '14px', color: colors.textMuted, lineHeight: '1.7' }}>{t.blurb}</p>
          </Card>
        ))}
      </Grid>

      <p style={{ fontSize: '14px', color: colors.textDim, textAlign: 'center', marginTop: '28px' }}>
        Portraits are a vendor product—buy one whenever you like, with any membership.
      </p>
    </div>
  </Section>
)

/* ═══════════════════════════════════════════════════════════════
   KIBBLE — the currency
   ═══════════════════════════════════════════════════════════════ */
export const Kibble = () => (
  <Section id="kibble">
    <SectionHeading
      eyebrow="Kibble"
      title="The currency of good dog ownership"
      blurb="Kibble is what the napp runs on. Earn it for the things that are already good for your dog, then spend it on things they'll like even more."
    />
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '24px'
    }}>
      <Card accent={colors.green}>
        <div style={{ marginBottom: '16px' }}><Pill color={colors.green}>Earn it</Pill></div>
        {[
          ['🚶', 'Walks and check-ins'],
          ['💉', 'Keeping vaccinations current'],
          ['🎪', 'Turning up to meetups'],
          ['🦴', 'Helping find a lost dog'],
          ['👋', 'Bringing a friend into the pack']
        ].map(([icon, label], i) => (
          <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'center', padding: '10px 0' }}>
            <span style={{ fontSize: '20px' }}>{icon}</span>
            <span style={{ fontSize: '15px', color: colors.textSecondary }}>{label}</span>
          </div>
        ))}
      </Card>
      <Card accent={colors.gold}>
        <div style={{ marginBottom: '16px' }}><Pill color={colors.gold}>Spend it</Pill></div>
        {[
          ['🎨', 'Portraits from Elena\'s studio'],
          ['✂️', 'Grooming, walking, training'],
          ['🎟️', 'Event tickets'],
          ['🦴', 'Treats and gear'],
          ['⭐', 'Membership credit']
        ].map(([icon, label], i) => (
          <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'center', padding: '10px 0' }}>
            <span style={{ fontSize: '20px' }}>{icon}</span>
            <span style={{ fontSize: '15px', color: colors.textSecondary }}>{label}</span>
          </div>
        ))}
      </Card>
      <Card accent={colors.accent}>
        <div style={{ marginBottom: '16px' }}><Pill>The fun bit</Pill></div>
        <div style={{ fontSize: '36px', marginBottom: '12px' }}>🐕‍🦺</div>
        <h3 style={{ fontSize: '19px', fontWeight: '700', color: colors.text, marginBottom: '10px' }}>
          Your dog has their own balance
        </h3>
        <p style={{ fontSize: '15px', color: colors.textMuted, lineHeight: '1.8' }}>
          Kibble sits in your dog's wallet, not yours. So when you pass the lead, their
          treat budget goes with them—and your sitter can use it without ever touching
          your money.
        </p>
      </Card>
    </div>
  </Section>
)

/* ═══════════════════════════════════════════════════════════════
   MEMBERSHIP
   ═══════════════════════════════════════════════════════════════ */
const TIERS = [
  {
    name: 'Pup', price: 'Free', icon: '🐶', color: colors.textMuted,
    blurb: 'Everything a dog needs to exist properly.',
    features: ['Dog profile & photo gallery', 'Basic health record', 'Packs, local search & events', 'Lost-dog alerts', 'Earn Kibble']
  },
  {
    name: 'Pack', price: '$8', period: '/mo', icon: '🐕', color: colors.accent, popular: true,
    blurb: 'For people who actually hand over the lead.',
    features: ['Everything in Pup', 'Pass the Lead — records, permissions & spend', 'Unlimited records & documents', 'Travel & boarding packs', 'Know Your Laws', 'Matching & getaways']
  },
  {
    name: 'Best in Show', price: '$18', period: '/mo', icon: '👑', color: colors.gold,
    blurb: 'The whole thing, for the whole family.',
    features: ['Everything in Pack', 'Family sharing & co-ownership', 'Multiple dogs', 'Priority vendor booking', 'Insurance & vet features first', 'Kibble bonus every month']
  }
]

export const Membership = () => (
  <Section id="membership" tint>
    <SectionHeading
      eyebrow="Membership"
      title="Join the pack"
      blurb="Start free and stay free if that's all you need. Pass the Lead is where most people end up."
    />
    <Grid min="300px">
      {TIERS.map((t, i) => (
        <Card key={i} accent={t.popular ? t.color : null} style={{ position: 'relative' }}>
          {t.popular && (
            <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)' }}>
              <Pill color={t.color}>Most popular</Pill>
            </div>
          )}
          <div style={{ fontSize: '36px', marginBottom: '12px' }}>{t.icon}</div>
          <h3 style={{ fontSize: '22px', fontWeight: '700', color: colors.text, marginBottom: '6px' }}>{t.name}</h3>
          <p style={{ fontSize: '14px', color: colors.textMuted, marginBottom: '16px' }}>{t.blurb}</p>
          <p style={{ marginBottom: '24px' }}>
            <span style={{ fontSize: '38px', fontWeight: '800', color: t.color }}>{t.price}</span>
            {t.period && <span style={{ fontSize: '16px', color: colors.textDim }}>{t.period}</span>}
          </p>
          <div style={{ flex: 1 }}>
            {t.features.map((f, j) => (
              <div key={j} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', padding: '7px 0' }}>
                <span style={{ color: t.color, fontSize: '14px', lineHeight: '1.6' }}>✓</span>
                <span style={{ fontSize: '14px', color: colors.textMuted, lineHeight: '1.6' }}>{f}</span>
              </div>
            ))}
          </div>
          <a href="#cta" className={t.popular ? 'btn-primary' : 'btn-secondary'} style={{
            display: 'block', textAlign: 'center', marginTop: '24px', padding: '14px',
            borderRadius: '999px', color: t.popular ? '#fff' : colors.text,
            textDecoration: 'none', fontWeight: '600', fontSize: '15px'
          }}>
            {t.price === 'Free' ? 'Start free' : `Choose ${t.name}`}
          </a>
        </Card>
      ))}
    </Grid>
    <p style={{ fontSize: '14px', color: colors.textDim, textAlign: 'center', marginTop: '32px' }}>
      Prices are indicative while we finalise launch pricing.
    </p>
  </Section>
)
