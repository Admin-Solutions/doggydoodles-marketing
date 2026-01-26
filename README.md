# DoggyDoodles Marketing Site

A complete marketing website for DoggyDoodles — the ultimate digital home for your pet.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 📁 Project Structure

```
doggydoodles-marketing/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── MarketingSite.jsx    # Complete marketing page
│   ├── styles/
│   │   └── theme.js             # Colors, animations, global styles
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🎨 Design System

The site uses the same design language as the DoggyDoodles Napp:

- **Colors**: Dark theme (#0a0a0f base) with blue (#60a5fa) and purple (#8b5cf6) accents
- **Typography**: Plus Jakarta Sans (Google Fonts)
- **Effects**: Glassmorphism, ambient glows, smooth animations
- **Components**: Hover lifts, gradient buttons, card shadows

## 📄 Sections

1. **Hero** - Bold headline, phone mockup preview, social proof
2. **Features** - 6-card grid showcasing the pet ecosystem
3. **How It Works** - 4-step process visualization
4. **Pricing** - 3-tier comparison (Sketch, Portrait, Masterpiece)
5. **Testimonials** - Customer stories
6. **FAQ** - Expandable accordion
7. **CTA** - Final conversion section
8. **Footer** - Links, social, legal

## 🛠 Customization

### Update Content
All content is defined directly in `MarketingSite.jsx`:
- `tiers` object — pricing and features
- `features` array — feature cards
- `howItWorks` array — process steps
- `testimonials` array — customer quotes
- `faqs` array — questions & answers

### Change Colors
Edit `src/styles/theme.js` to modify:
- Background colors
- Accent colors
- Text colors
- Border opacity

### Modify Animations
Global animations are in `theme.js`:
- `fadeInUp` — entrance animation
- `float` — floating elements
- `gradientFlow` — animated gradient text
- `pulse` — subtle breathing effect

## 📱 Responsive Design

- Mobile-first approach
- Hamburger menu on mobile
- Fluid typography with `clamp()`
- Grid auto-fit for card layouts
- Touch-friendly tap targets

## 🔗 Navigation

All internal links use smooth scroll anchors:
- `#features`
- `#how-it-works`
- `#pricing`
- `#faq`
- `#cta`

## 🎯 Key Messages

The site emphasizes:
1. **It starts with art** — Hand-painted watercolor portraits
2. **But it's so much more** — Complete pet companion ecosystem
3. **Everything in one place** — Photos, memories, health, family sharing
4. **Celebrate your pet** — Digital home for your furry friend

## 🔄 Integration with Napp

This marketing site is designed to drive traffic to the DoggyDoodles Napp:
- Consistent visual language
- Same tier structure
- Matching feature descriptions
- Complementary user experience

---

Built with ❤️ for DoggyDoodles
