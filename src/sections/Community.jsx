import React from 'react'
import { colors } from '../styles/theme'
import { Section, SectionHeading, Card, Pill, Grid, FeatureCard, Note } from './shared'

/* ═══════════════════════════════════════════════════════════════
   THE PACK — social, friends, local, getaways
   ═══════════════════════════════════════════════════════════════ */
export const ThePack = () => (
  <Section id="the-pack">
    <SectionHeading
      eyebrow="The Pack"
      title="Dogs are social. So are the people holding the lead."
      blurb="Some of the best friendships start with two dogs deciding they like each other. We just make the part after that easier."
    />

    <Grid min="300px" style={{ marginBottom: '32px' }}>
      {[
        { icon: '🐾', title: 'Your dog has their own wall', description: 'Photos, milestones, birthdays, the day they finally learned to sit. It\'s their page—you just run it for them.' },
        { icon: '👋', title: 'Meet actual humans', description: 'The point isn\'t followers. It\'s the person at the park with the other lunatic spaniel who\'d happily grab a coffee while the dogs wear themselves out.' },
        { icon: '📍', title: 'Local search', description: 'Dogs, people, sitters, walkers, groomers, vets, parks and pubs that\'ll actually let your dog in—near you.' },
        { icon: '🏕️', title: 'Doggy getaways', description: 'Plan trips together, or take each other\'s dogs. Sitting swaps between people who\'ve met, with the records and the wallet handled by Pass the Lead.' },
        { icon: '🎪', title: 'Meetups & events', description: 'Walks, shows, puppy parties, adoption days, fundraisers. Turn up, check in, earn Kibble.' },
        { icon: '💬', title: 'Packs & group chats', description: 'Your street, your breed, your park, your training class. Small groups that are actually useful.' }
      ].map((f, i) => <FeatureCard key={i} {...f} />)}
    </Grid>
  </Section>
)

/* ═══════════════════════════════════════════════════════════════
   MATCHING — "doggy tinder", done properly
   ═══════════════════════════════════════════════════════════════ */
export const Matching = () => (
  <Section id="matching" tint>
    <div style={{
      background: 'linear-gradient(145deg, rgba(139,92,246,0.08), rgba(139,92,246,0.02))',
      border: `1px solid ${colors.purple}33`,
      borderRadius: '32px',
      padding: 'clamp(32px, 5vw, 56px)'
    }}>
      <div style={{ textAlign: 'center', marginBottom: '44px' }}>
        <div style={{ marginBottom: '16px' }}><Pill color={colors.purple}>💜 Find their person</Pill></div>
        <h2 style={{ fontSize: 'clamp(30px, 5vw, 44px)', fontWeight: '700', color: colors.text, marginBottom: '16px' }}>
          Swipe right, but for playdates
        </h2>
        <p style={{ fontSize: '18px', color: colors.textMuted, lineHeight: '1.7', maxWidth: '640px', margin: '0 auto' }}>
          Yes, it's a bit like that other app. No, it isn't just photos—because
          a match here can actually tell you the things you'd otherwise have to
          awkwardly ask a stranger.
        </p>
      </div>

      <Grid min="240px" gap="20px" style={{ marginBottom: '36px' }}>
        {[
          ['💉', 'Vaccinations current', 'Before they\'re nose to nose, not after.'],
          ['📏', 'Size & energy match', 'A Great Dane and a nervous chihuahua is nobody\'s idea of fun.'],
          ['🎓', 'Temperament & training', 'Credentials from real trainers, not self-declared.'],
          ['📍', 'Actually nearby', 'Same park, same walk, same hours.']
        ].map(([icon, title, body], i) => (
          <div key={i} style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '28px', marginBottom: '10px' }}>{icon}</div>
            <p style={{ fontSize: '15px', fontWeight: '700', color: colors.text, marginBottom: '6px' }}>{title}</p>
            <p style={{ fontSize: '14px', color: colors.textMuted, lineHeight: '1.7' }}>{body}</p>
          </div>
        ))}
      </Grid>

      <Note color={colors.purple}>
        A safe introduction is the whole point. You see what's been verified and what
        hasn't—we'd rather show you an honest gap than a confident guess.
      </Note>
    </div>
  </Section>
)

/* ═══════════════════════════════════════════════════════════════
   LOST DOG
   ═══════════════════════════════════════════════════════════════ */
export const LostDog = () => (
  <Section id="lost">
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
      gap: '48px',
      alignItems: 'center'
    }}>
      <div>
        <div style={{ marginBottom: '16px' }}><Pill color={colors.gold}>🚨 The worst day</Pill></div>
        <h2 style={{ fontSize: 'clamp(30px, 5vw, 42px)', fontWeight: '700', color: colors.text, marginBottom: '20px' }}>
          If they ever get out
        </h2>
        <p style={{ fontSize: '17px', color: colors.textMuted, lineHeight: '1.8', marginBottom: '20px' }}>
          Most lost dogs come home because a neighbour spotted them—not because of
          a chip in a database nobody can read on a Sunday. So we start with the
          neighbours.
        </p>
        <p style={{ fontSize: '17px', color: colors.textMuted, lineHeight: '1.8' }}>
          One tap alerts every pack around you. Their tag scans straight to a page
          with <em style={{ color: colors.textSecondary, fontStyle: 'normal', fontWeight: '600' }}>your</em> details—
          the person who has them now, not whoever registered the chip in 2019.
        </p>
      </div>
      <Grid min="200px" gap="16px">
        {[
          ['📣', 'Alert the neighbourhood', 'Every nearby pack, instantly.'],
          ['🏷️', 'A tag that scans', 'Straight to a live page anyone can use.'],
          ['✅', 'Always current', 'Sold, rehomed, moved? The tag keeps up.'],
          ['🦴', 'Kibble for finders', 'Because whoever brings your dog back deserves something.']
        ].map(([icon, title, body], i) => (
          <Card key={i} style={{ padding: '24px' }}>
            <div style={{ fontSize: '24px', marginBottom: '10px' }}>{icon}</div>
            <p style={{ fontSize: '15px', fontWeight: '700', color: colors.text, marginBottom: '6px' }}>{title}</p>
            <p style={{ fontSize: '14px', color: colors.textMuted, lineHeight: '1.7' }}>{body}</p>
          </Card>
        ))}
      </Grid>
    </div>
  </Section>
)
