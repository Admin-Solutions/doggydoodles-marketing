import React from 'react'
import { colors } from '../styles/theme'
import { Section, SectionHeading, Card, Pill, Grid, FeatureCard, Note } from './shared'

/* ═══════════════════════════════════════════════════════════════
   HERO
   ═══════════════════════════════════════════════════════════════ */
export const Hero = () => (
  <section style={{ padding: '160px 24px 120px', position: 'relative', zIndex: 1 }}>
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <div className="hero-grid">
        <div className="hero-content fade-in-up">
          <div style={{ marginBottom: '24px' }}>
            <Pill>🐾 The napp for dogs and the people who love them</Pill>
          </div>
          <h1 style={{
            fontSize: 'clamp(40px, 7vw, 72px)',
            fontWeight: '800',
            lineHeight: '1.1',
            marginBottom: '24px',
            color: colors.text
          }}>
            Your dog's whole life,<br />
            <span className="gradient-text">in one place.</span>
          </h1>
          <p style={{
            fontSize: '20px',
            color: colors.textMuted,
            lineHeight: '1.7',
            marginBottom: '36px',
            maxWidth: '540px'
          }}>
            Records, photos, memories, health, friends and everything in between—
            held by your dog, not locked in someone else's system. And when you
            hand over the lead, it all goes with them.
          </p>
          <div className="hero-buttons" style={{ marginBottom: '40px' }}>
            <a href="#pass-the-lead" className="btn-primary" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '16px 32px', borderRadius: '999px', color: '#fff',
              textDecoration: 'none', fontWeight: '600', fontSize: '16px'
            }}>
              See how it works →
            </a>
            <a href="#membership" className="btn-secondary" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '16px 32px', borderRadius: '999px', color: colors.text,
              textDecoration: 'none', fontWeight: '600', fontSize: '16px'
            }}>
              Join the pack
            </a>
          </div>
          <div className="hero-social-proof" style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
            {[
              ['Records that travel', 'with your dog'],
              ['One profile', 'every vet, sitter, groomer'],
              ['Kibble', 'earn it, spend it']
            ].map(([a, b], i) => (
              <div key={i}>
                <p style={{ fontSize: '15px', fontWeight: '700', color: colors.text }}>{a}</p>
                <p style={{ fontSize: '13px', color: colors.textDim }}>{b}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-visual fade-in-up delay-2">
          <div style={{
            width: '100%', maxWidth: '380px', aspectRatio: '3 / 4',
            background: 'linear-gradient(145deg, rgba(30,41,59,0.9), rgba(15,23,42,0.9))',
            borderRadius: '32px', border: `1px solid ${colors.border}`,
            display: 'flex', flexDirection: 'column', alignItems: 'center',
            justifyContent: 'center', gap: '16px', padding: '32px'
          }}>
            <div style={{ fontSize: '84px' }}>🐕</div>
            <p style={{ fontSize: '22px', fontWeight: '700', color: colors.text }}>Rex</p>
            <p style={{ fontSize: '14px', color: colors.textDim }}>Golden Retriever · 4 yrs</p>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Pill color={colors.green}>Vaccines current</Pill>
              <Pill color={colors.gold}>Kibble 240</Pill>
            </div>
          </div>
          <div className="floating-card" style={{ top: '12%', left: '-4%' }}>
            <p style={{ fontSize: '12px', color: colors.textDim }}>Now with</p>
            <p style={{ fontSize: '14px', fontWeight: '700', color: colors.text }}>🚶 Sam (walker)</p>
          </div>
          <div className="floating-card" style={{ bottom: '14%', right: '-4%', animationDelay: '1.5s' }}>
            <p style={{ fontSize: '12px', color: colors.textDim }}>Vet visit</p>
            <p style={{ fontSize: '14px', fontWeight: '700', color: colors.text }}>✅ On record</p>
          </div>
        </div>
      </div>
    </div>
  </section>
)

/* ═══════════════════════════════════════════════════════════════
   THE PROBLEM
   ═══════════════════════════════════════════════════════════════ */
export const TheProblem = () => (
  <Section id="why" tint>
    <SectionHeading
      eyebrow="Why we built this"
      title="Your dog's life is scattered across a dozen systems"
      blurb="The vet has some of it. The groomer has notes you've never seen. The boarding place has a form you filled in twice. Move cities and you start from scratch."
    />
    <Grid min="280px">
      {[
        { icon: '📠', title: 'Records don\'t travel', description: 'Ask for your dog\'s history and it arrives faxed, incomplete, and formatted for somebody else\'s software.' },
        { icon: '🗂️', title: 'The best notes get lost', description: 'The groomer\'s behaviour notes, the boarder\'s "she went off her food", the trainer\'s assessment. Nobody keeps them together. Nobody ever sees them again.' },
        { icon: '🔗', title: 'Chips don\'t equal identity', description: 'Microchip registries don\'t talk to each other. Transfers get missed, so whoever finds your dog reaches the person who owned them two homes ago.' }
      ].map((f, i) => <FeatureCard key={i} {...f} />)}
    </Grid>
    <div style={{ textAlign: 'center', marginTop: '48px' }}>
      <p style={{ fontSize: '20px', color: colors.textSecondary, fontWeight: '600' }}>
        The problem was never the paperwork. It's <span style={{ color: colors.accent }}>access</span>.
      </p>
    </div>
  </Section>
)

/* ═══════════════════════════════════════════════════════════════
   THE DOG HAS THEIR OWN IDENTITY
   ═══════════════════════════════════════════════════════════════ */
export const DogIdentity = () => (
  <Section id="identity">
    <SectionHeading
      eyebrow="The idea"
      title="Your dog gets their own identity"
      blurb="Not a row in your account. Rex has his own profile, his own record, his own friends—and his own little wallet. It belongs to him, so it follows him everywhere and outlasts everything."
    />
    <Grid min="280px">
      {[
        { icon: '🪪', title: 'One identity, for life', description: 'From breeder or shelter to forever home. One continuous, tamper-evident story that nobody can quietly rewrite.' },
        { icon: '🤝', title: 'Ownership that actually transfers', description: 'Rehoming, adoption or a change in the family? Ownership moves properly, with the history intact—and the tag always points to whoever holds them now.' },
        { icon: '👨‍👩‍👧', title: 'Shared, not surrendered', description: 'Co-owners, partners, family, shared custody. Everyone who should have access has it, without anyone handing over their password.' },
        { icon: '🌈', title: 'A record that outlives them', description: 'Rainbow Bridge mode turns their profile into a memorial. Nothing is deleted. Their whole story stays exactly where you left it.' }
      ].map((f, i) => <FeatureCard key={i} {...f} />)}
    </Grid>
  </Section>
)

/* ═══════════════════════════════════════════════════════════════
   ★ PASS THE LEAD — the hero feature
   ═══════════════════════════════════════════════════════════════ */
const LEAD_ITEMS = [
  { icon: '📋', pill: 'The records', title: 'Everything they need to know', description: 'Allergies, medication, feeding routine, the vet\'s number, what she\'s like around bikes. Not a text message at 7am—the actual record.' },
  { icon: '🩺', pill: 'The authority', title: 'Permission to get help', description: 'If something happens, your sitter can get your dog treated—because you already said they could, up to a limit you set, for exactly this window.' },
  { icon: '💳', pill: 'The money', title: 'A wallet that travels', description: 'A spending limit goes with the dog. Your walker can cover the vet or pick up food without fronting their own cash or chasing you for it.' },
  { icon: '🛡️', pill: 'The cover', title: 'Insurance rides along', description: 'Cover follows the dog into someone else\'s care, and a claim is backed by a real, provable record of who had them and when.', roadmap: true }
]

export const PassTheLead = () => (
  <Section id="pass-the-lead" tint>
    <SectionHeading
      eyebrow="The bit nobody else does"
      title="Pass the Lead"
      blurb="Hand your dog to a sitter, a walker, daycare, a friend—and hand over everything they need with them. For an afternoon or a fortnight. When the time's up, it all comes back automatically."
    />

    <Grid min="260px" style={{ marginBottom: '48px' }}>
      {LEAD_ITEMS.map((f, i) => (
        <Card key={i} accent={f.roadmap ? colors.textDim : colors.accent}>
          <div style={{ marginBottom: '16px' }}>
            <Pill color={f.roadmap ? colors.textDim : colors.accent}>
              {f.roadmap ? `${f.pill} · soon` : f.pill}
            </Pill>
          </div>
          <div style={{ fontSize: '32px', marginBottom: '12px' }}>{f.icon}</div>
          <h3 style={{ fontSize: '19px', fontWeight: '700', color: colors.text, marginBottom: '10px' }}>
            {f.title}
          </h3>
          <p style={{ fontSize: '15px', color: colors.textMuted, lineHeight: '1.8' }}>
            {f.description}
          </p>
        </Card>
      ))}
    </Grid>

    <div style={{
      background: 'linear-gradient(145deg, rgba(96,165,250,0.08), rgba(96,165,250,0.02))',
      border: `1px solid ${colors.accent}33`,
      borderRadius: '24px',
      padding: '40px'
    }}>
      <h3 style={{ fontSize: '22px', fontWeight: '700', color: colors.text, marginBottom: '24px', textAlign: 'center' }}>
        And it writes itself down
      </h3>
      <Grid min="240px" gap="20px">
        {[
          ['🕘', 'Every handoff, logged', 'Who had your dog, when, and what happened while they did.'],
          ['📝', 'They write to your dog\'s record', 'The groomer\'s notes and the boarder\'s observations land where they belong—and stay.'],
          ['⭐', 'Reviews you can trust', 'Only someone who genuinely looked after your dog can review the person who did.']
        ].map(([icon, title, body], i) => (
          <div key={i} style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '28px', marginBottom: '10px' }}>{icon}</div>
            <p style={{ fontSize: '16px', fontWeight: '700', color: colors.text, marginBottom: '8px' }}>{title}</p>
            <p style={{ fontSize: '14px', color: colors.textMuted, lineHeight: '1.7' }}>{body}</p>
          </div>
        ))}
      </Grid>
    </div>
  </Section>
)

/* ═══════════════════════════════════════════════════════════════
   HEALTH VAULT
   ═══════════════════════════════════════════════════════════════ */
export const HealthVault = () => (
  <Section id="health">
    <SectionHeading
      eyebrow="Health"
      title="Everything, ready before you need it"
      blurb="Vaccinations, medication, allergies, weight, vet visits, x-rays, lab results. Kept properly, so it's there at the airport desk, the new vet, or the 2am emergency."
    />
    <Grid min="280px">
      {[
        { icon: '💉', title: 'Vaccinations & meds', description: 'What\'s due, what\'s current, what she reacts to. With reminders, so nothing quietly lapses.' },
        { icon: '📁', title: 'Documents & scans', description: 'X-rays, lab results, discharge notes, insurance paperwork. Attached to your dog, not buried in your email.' },
        { icon: '✈️', title: 'Travel & boarding pack', description: 'One tap produces exactly what the airline, the border, or the boarding kennel is asking for.' },
        { icon: '🏥', title: 'Portable across vets', description: 'Change vet, move city, move country. The record goes with the dog. No faxes, no starting again.' }
      ].map((f, i) => <FeatureCard key={i} {...f} />)}
    </Grid>
  </Section>
)

/* ═══════════════════════════════════════════════════════════════
   KNOW YOUR LAWS
   ═══════════════════════════════════════════════════════════════ */
export const KnowYourLaws = () => (
  <Section id="laws" tint>
    <SectionHeading
      eyebrow="Know the rules"
      title="Dog law, where you actually live"
      blurb="Licensing, leads and off-lead areas, breed rules, barking and nuisance, how many dogs you're allowed, what your landlord can and can't say, and what you need to travel."
    />
    <Grid min="280px" style={{ marginBottom: '40px' }}>
      {[
        { icon: '📍', title: 'Local, not generic', description: 'Rules change street to street and country to country. Yours are the ones for where you are—and where you\'re going.' },
        { icon: '🎫', title: 'Licensing & renewals', description: 'What you need to register, what it costs, and a nudge before it expires.' },
        { icon: '🧳', title: 'Travel checklists', description: 'Checked against your dog\'s real vaccination record, so you know whether you\'re actually ready to fly.' },
        { icon: '⚖️', title: 'Ask a real lawyer', description: 'Questions that need a proper answer get routed to a qualified pet lawyer. A person, not a chatbot.', pill: 'Coming soon', pillColor: colors.textDim }
      ].map((f, i) => <FeatureCard key={i} {...f} />)}
    </Grid>
    <Note>
      Straight with you: this is general information, kept sourced and dated—not legal advice.
      Dog law is local and it changes. For anything that actually matters, talk to a qualified
      lawyer, and we'll help you find one.
    </Note>
  </Section>
)
