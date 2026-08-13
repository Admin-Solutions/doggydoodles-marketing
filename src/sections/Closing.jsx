import React, { useState } from 'react'
import { colors } from '../styles/theme'
import { Section, SectionHeading, Card, Pill, Grid, Note } from './shared'

/* ═══════════════════════════════════════════════════════════════
   NAPP STORIES  (+ the house rule)
   ═══════════════════════════════════════════════════════════════ */

// PLACEHOLDER COPY — dummy testimonials written to fill the design.
// Replace with real, attributable quotes before launch.
const NAPP_TESTIMONIALS = [
  { name: 'Priya K.', pet: 'Biscuit, Beagle', feature: 'Health Vault', avatar: '👩‍⚕️',
    text: 'Biscuit had an emergency at 2am and I pulled up his whole vaccination history in the waiting room. The vet asked me what app I was using.' },
  { name: 'Tom B.', pet: 'Rooster, Corgi', feature: 'Memory Timeline', avatar: '🧔',
    text: 'I open the napp more than I open Instagram now. Scrolling back through Rooster\'s first year never gets old.' },
  { name: 'The Alvarez Family', pet: 'Nacho, Chihuahua', feature: 'Family Sharing', avatar: '👨‍👩‍👦',
    text: 'Three households, one very small dog. Everyone adds photos and my mother-in-law finally stopped texting me for updates.' },
  { name: 'Dee W.', pet: 'Marlowe, Great Dane', feature: 'Pass the Lead', avatar: '👩‍🦱',
    text: 'My walker had to take Marlowe to the vet while I was in a meeting. She just went. Didn\'t need me, didn\'t need my card. That was the moment I got it.' },
  { name: 'Sam O.', pet: 'Pickle, Dachshund', feature: 'Lost & Found', avatar: '🧑',
    text: 'Pickle wears the tag on her collar. A neighbour scanned it when she got out and had my number in about four seconds.' },
  { name: 'Grace L.', pet: 'Juniper, Border Collie', feature: 'The Pack', avatar: '👵',
    text: 'I\'ve got three friends now that I met because our dogs decided they liked each other. At my age that\'s not nothing.' }
]

export const NappStories = () => (
  <Section id="napp-stories">
    <SectionHeading
      eyebrow="Life With the Napp"
      title="Tails from the Napp"
      blurb="From the people who open it every single day."
    />

    <Grid min="300px" style={{ marginBottom: '64px' }}>
      {NAPP_TESTIMONIALS.map((t, i) => (
        <Card key={i}>
          <div style={{ marginBottom: '20px' }}><Pill>{t.feature}</Pill></div>
          <p style={{ fontSize: '16px', color: colors.textSecondary, lineHeight: '1.8', marginBottom: '24px', flex: 1 }}>
            "{t.text}"
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{
              width: '48px', height: '48px', borderRadius: '50%',
              background: 'linear-gradient(135deg, #1e293b, #0f172a)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px'
            }}>
              {t.avatar}
            </div>
            <div>
              <p style={{ fontSize: '15px', fontWeight: '600', color: colors.text }}>{t.name}</p>
              <p style={{ fontSize: '13px', color: colors.textDim }}>{t.pet}</p>
            </div>
          </div>
        </Card>
      ))}
    </Grid>

    {/* The house rule */}
    <div style={{ textAlign: 'center' }}>
      <div style={{
        display: 'inline-block',
        background: 'linear-gradient(145deg, rgba(245,158,11,0.08), rgba(245,158,11,0.03))',
        border: `2px dashed ${colors.gold}59`,
        borderRadius: '24px',
        padding: '32px 40px',
        maxWidth: '560px'
      }}>
        <div style={{ fontSize: '40px', marginBottom: '12px' }}>🐾🚫🐱</div>
        <p style={{ fontSize: 'clamp(24px, 4vw, 32px)', fontWeight: '700', color: colors.gold, marginBottom: '12px' }}>
          No Cats Allowed!
        </p>
        <p style={{ fontSize: '15px', color: colors.textMuted, lineHeight: '1.7' }}>
          We don't make the rules. (We do make the rules.) It's right there in the
          name—this is a <em style={{ color: colors.textSecondary, fontStyle: 'normal', fontWeight: '600' }}>dog</em> house.
        </p>
        <p style={{ fontSize: '13px', color: colors.textDim, lineHeight: '1.7', marginTop: '16px', fontStyle: 'italic' }}>
          *Except Whiskers. Whiskers is grandfathered in. Whiskers has been with us
          since the beginning and frankly we're a little scared of Whiskers.
        </p>
      </div>
    </div>
  </Section>
)

/* ═══════════════════════════════════════════════════════════════
   ROADMAP
   ═══════════════════════════════════════════════════════════════ */
export const Roadmap = () => (
  <Section id="roadmap" tint>
    <SectionHeading
      eyebrow="What's next"
      title="Where we're heading"
      blurb="We'd rather tell you what's coming than pretend it's already here."
    />
    <Grid min="260px">
      {[
        { icon: '🩺', title: 'Vets', description: 'Your vet writing straight into your dog\'s record instead of their own system. Telehealth for the 9pm "is this normal?" moments.' },
        { icon: '🐕‍🦺', title: 'Breeders', description: 'Litters, lineage, and health clearances on both parents—so a buyer can see where a puppy really came from.' },
        { icon: '🛡️', title: 'Insurance', description: 'Cover that follows the dog into someone else\'s care, with claims backed by a real record of who had them.' },
        { icon: '⌚', title: 'Collars & trackers', description: 'Steps, sleep and location from the collar you already own, landing in the same place as everything else.' }
      ].map((f, i) => (
        <Card key={i} accent={colors.textDim}>
          <div style={{ marginBottom: '14px' }}><Pill color={colors.textDim}>Coming soon</Pill></div>
          <div style={{ fontSize: '32px', marginBottom: '12px' }}>{f.icon}</div>
          <h3 style={{ fontSize: '19px', fontWeight: '700', color: colors.text, marginBottom: '10px' }}>{f.title}</h3>
          <p style={{ fontSize: '15px', color: colors.textMuted, lineHeight: '1.8' }}>{f.description}</p>
        </Card>
      ))}
    </Grid>
  </Section>
)

/* ═══════════════════════════════════════════════════════════════
   FAQ
   ═══════════════════════════════════════════════════════════════ */
const FAQS = [
  { q: 'What actually is a "napp"?', a: 'It\'s your dog\'s own little app inside their profile—their records, their photos, their friends, their wallet. It belongs to the dog rather than to an account you happen to be logged into, which is what lets it travel with them.' },
  { q: 'What happens when I "pass the lead"?', a: 'You choose who, and for how long. For that window they get what your dog needs—records, feeding, medical history, permission to get treatment up to a limit you set, and a spending cap so they can pay a vet or buy food. When the window ends, all of it stops automatically. You don\'t have to remember to undo anything.' },
  { q: 'Is my dog\'s information private?', a: 'Yes. You decide who sees what and for how long. Handing someone the lead grants exactly what that job needs and nothing else, and it expires on its own.' },
  { q: 'What if I rehome my dog, or adopt one?', a: 'Ownership transfers properly and the history goes with the dog. The new owner gets the full record, and the tag immediately points to them instead of you. This is the bit that microchip registries have never really solved.' },
  { q: 'Do I need to buy a portrait to use it?', a: 'Not at all. Elena\'s studio is a vendor in the marketplace—a lovely one, and where all this started—but the napp stands on its own. Start free.' },
  { q: 'What is Kibble?', a: 'The napp\'s currency. Earn it for walks, check-ins, keeping vaccinations current and helping out in the community; spend it on grooming, treats, tickets, portraits or membership. It sits in your dog\'s wallet, so it travels with them.' },
  { q: 'What is Rainbow Bridge mode?', a: 'When a dog passes, their profile becomes a memorial rather than disappearing. Nothing is deleted. Their whole story stays exactly as you left it, for as long as you want it.' },
  { q: 'Cats?', a: 'No. (See above. Whiskers is a special case and we don\'t want to talk about it.)' }
]

export const Faq = () => {
  const [open, setOpen] = useState(null)
  return (
    <Section id="faq">
      <SectionHeading eyebrow="Questions" title="The things people ask" />
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        {FAQS.map((f, i) => (
          <div key={i} style={{
            borderBottom: `1px solid ${colors.border}`,
            padding: '4px 0'
          }}>
            <button
              onClick={() => setOpen(open === i ? null : i)}
              style={{
                width: '100%', background: 'none', border: 'none', cursor: 'pointer',
                padding: '24px 0', display: 'flex', justifyContent: 'space-between',
                alignItems: 'center', gap: '16px', textAlign: 'left'
              }}
            >
              <span style={{ fontSize: '17px', fontWeight: '600', color: colors.text }}>{f.q}</span>
              <span style={{
                fontSize: '22px', color: colors.accent, flexShrink: 0,
                transform: open === i ? 'rotate(45deg)' : 'none', transition: 'transform 0.2s'
              }}>+</span>
            </button>
            {open === i && (
              <p style={{ fontSize: '16px', color: colors.textMuted, lineHeight: '1.8', paddingBottom: '24px' }}>
                {f.a}
              </p>
            )}
          </div>
        ))}
      </div>
    </Section>
  )
}

/* ═══════════════════════════════════════════════════════════════
   FINAL CTA
   ═══════════════════════════════════════════════════════════════ */
export const FinalCta = () => (
  <Section id="cta">
    <div style={{
      background: 'linear-gradient(145deg, rgba(59,130,246,0.12), rgba(15,23,42,0.6))',
      border: `1px solid ${colors.accent}33`,
      borderRadius: '32px',
      padding: 'clamp(40px, 6vw, 72px)',
      textAlign: 'center'
    }}>
      <div style={{ fontSize: '52px', marginBottom: '20px' }}>🐕</div>
      <h2 style={{ fontSize: 'clamp(30px, 5vw, 46px)', fontWeight: '800', color: colors.text, marginBottom: '20px' }}>
        Give your dog a life worth recording
      </h2>
      <p style={{ fontSize: '19px', color: colors.textMuted, lineHeight: '1.7', maxWidth: '600px', margin: '0 auto 36px' }}>
        Start free. Add their photo, their records, and the people who look after them.
        The rest follows.
      </p>
      <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
        <a href="#membership" className="btn-primary" style={{
          padding: '18px 40px', borderRadius: '999px', color: '#fff',
          textDecoration: 'none', fontWeight: '600', fontSize: '17px'
        }}>
          Create your dog's napp
        </a>
        <a href="#studio" className="btn-secondary" style={{
          padding: '18px 40px', borderRadius: '999px', color: colors.text,
          textDecoration: 'none', fontWeight: '600', fontSize: '17px'
        }}>
          Commission a portrait
        </a>
      </div>
    </div>
  </Section>
)
