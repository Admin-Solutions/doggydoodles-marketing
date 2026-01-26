import React, { useState, useEffect } from 'react'
import { globalStyles } from '../styles/theme'

const MarketingSite = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeTier, setActiveTier] = useState('portrait')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const tiers = {
    sketch: {
      name: 'Sketch',
      price: 49,
      color: '#94a3b8',
      icon: '✏️',
      description: 'Perfect for getting started',
      features: [
        'High-res digital portrait',
        'Basic pet profile',
        'Certificate of authenticity',
        '5 photos',
        '3 memories',
      ]
    },
    portrait: {
      name: 'Portrait',
      price: 149,
      color: '#60a5fa',
      icon: '🎨',
      popular: true,
      description: 'Our most popular choice',
      features: [
        'Everything in Sketch',
        'Timelapse creation video',
        'Full profile & favorites',
        '25 photos',
        '10 memories',
        'Personality traits',
      ]
    },
    masterpiece: {
      name: 'Masterpiece',
      price: 299,
      color: '#f59e0b',
      icon: '👑',
      description: 'The complete experience',
      features: [
        'Everything in Portrait',
        'Medical records vault',
        'Unlimited photos & memories',
        'Family sharing (3 people)',
        'Physical QR keepsake card',
        'Priority artist booking',
        'Rainbow Bridge memorial mode',
      ]
    }
  }

  const features = [
    {
      icon: '🎨',
      title: 'Hand-Painted Portraits',
      description: 'Each portrait is lovingly hand-painted in watercolor by our talented artists, capturing your pet\'s unique personality and spirit.'
    },
    {
      icon: '📱',
      title: 'Digital Pet Profile',
      description: 'Create a beautiful digital home for your pet with their bio, personality traits, favorite things, and the humans they love.'
    },
    {
      icon: '📸',
      title: 'Photo Gallery',
      description: 'Store and showcase your favorite moments together—from puppyhood adventures to lazy Sunday snuggles.'
    },
    {
      icon: '💝',
      title: 'Memory Timeline',
      description: 'Document every milestone, from adoption day to first tricks. Build a living scrapbook of your journey together.'
    },
    {
      icon: '🏥',
      title: 'Health Vault',
      description: 'Keep vaccinations, vet visits, medications, and emergency contacts all in one secure, always-accessible place.'
    },
    {
      icon: '👨‍👩‍👧',
      title: 'Family Sharing',
      description: 'Share access with family members so everyone stays connected to your pet\'s world, no matter the distance.'
    }
  ]

  const howItWorks = [
    {
      step: '01',
      title: 'Upload Your Photos',
      description: 'Send us your favorite photos of your pet. The more personality, the better!'
    },
    {
      step: '02',
      title: 'Artist Creates Magic',
      description: 'Our artist hand-paints your pet\'s portrait in beautiful watercolor, capturing their essence.'
    },
    {
      step: '03',
      title: 'Your Napp is Born',
      description: 'Receive your NFT-backed digital portrait along with your complete pet companion app.'
    },
    {
      step: '04',
      title: 'Build Their Story',
      description: 'Add photos, memories, health records, and watch your pet\'s digital home come alive.'
    }
  ]

  const testimonials = [
    {
      name: 'Sarah M.',
      pet: 'Luna, Golden Retriever',
      text: 'The portrait brought tears to my eyes. But it\'s so much more than art—having Luna\'s vet records and memories all in one place is a game-changer.',
      avatar: '👩'
    },
    {
      name: 'Mike & Julie',
      pet: 'Whiskers, Tabby Cat',
      text: 'We got one for each of our cats. The family sharing feature means grandma can see all the photos too!',
      avatar: '👨‍👩‍👧'
    },
    {
      name: 'David R.',
      pet: 'Max, French Bulldog',
      text: 'Started with a portrait, now I can\'t imagine life without the health tracker. Vet visits are so much easier.',
      avatar: '👨'
    }
  ]

  const faqs = [
    {
      q: 'How long does it take to receive my portrait?',
      a: 'Most portraits are completed within 2-3 weeks. Masterpiece tier customers get priority scheduling and typically receive theirs in 7-10 days.'
    },
    {
      q: 'What makes this different from a regular pet portrait?',
      a: 'DoggyDoodles isn\'t just art—it\'s a complete digital ecosystem for your pet. Your portrait becomes the gateway to a living, growing collection of memories, health records, and family sharing capabilities.'
    },
    {
      q: 'Can I upgrade my tier later?',
      a: 'Absolutely! You can upgrade anytime and unlock additional features instantly. Your existing data transfers seamlessly.'
    },
    {
      q: 'What happens to my pet\'s data?',
      a: 'Your data is securely stored and encrypted. You own it completely. We never sell or share your information.'
    },
    {
      q: 'What is Rainbow Bridge mode?',
      a: 'When a beloved pet passes, Rainbow Bridge mode transforms their napp into a beautiful memorial—preserving their memory with dignity and love.'
    }
  ]

  const [openFaq, setOpenFaq] = useState(null)

  return (
    <div style={{ background: '#0a0a0f', minHeight: '100vh' }}>
      <style>{globalStyles}</style>

      {/* Ambient Background Effects */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: '-20%',
          left: '-10%',
          width: '50%',
          height: '50%',
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, transparent 70%)',
        }} />
        <div style={{
          position: 'absolute',
          top: '30%',
          right: '-20%',
          width: '60%',
          height: '60%',
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.06) 0%, transparent 70%)',
        }} />
        <div style={{
          position: 'absolute',
          bottom: '10%',
          left: '20%',
          width: '40%',
          height: '40%',
          background: 'radial-gradient(circle, rgba(245, 158, 11, 0.04) 0%, transparent 70%)',
        }} />
      </div>

      {/* Navigation */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: '16px 24px',
        background: isScrolled ? 'rgba(10, 10, 15, 0.9)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(20px)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(148, 163, 184, 0.1)' : 'none',
        transition: 'all 0.3s ease'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <a href="#" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            textDecoration: 'none'
          }}>
            <span style={{ fontSize: '28px' }}>🐕</span>
            <span style={{
              fontSize: '20px',
              fontWeight: '700',
              color: '#f1f5f9'
            }}>DoggyDoodles</span>
          </a>

          {/* Desktop Nav */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '32px'
          }} className="desktop-nav">
            <a href="#features" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '14px', fontWeight: '500', transition: 'color 0.2s' }}>Features</a>
            <a href="#how-it-works" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '14px', fontWeight: '500' }}>How It Works</a>
            <a href="#pricing" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '14px', fontWeight: '500' }}>Pricing</a>
            <a href="#faq" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '14px', fontWeight: '500' }}>FAQ</a>
            <a href="#cta" className="btn-primary" style={{
              padding: '12px 24px',
              borderRadius: '12px',
              color: '#fff',
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: '600'
            }}>Get Started</a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              color: '#f1f5f9',
              fontSize: '24px',
              cursor: 'pointer'
            }}
            className="mobile-menu-btn"
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: 'rgba(10, 10, 15, 0.98)',
            backdropFilter: 'blur(20px)',
            padding: '24px',
            borderBottom: '1px solid rgba(148, 163, 184, 0.1)',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}>
            <a href="#features" onClick={() => setMobileMenuOpen(false)} style={{ color: '#f1f5f9', textDecoration: 'none', fontSize: '16px', padding: '8px 0' }}>Features</a>
            <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)} style={{ color: '#f1f5f9', textDecoration: 'none', fontSize: '16px', padding: '8px 0' }}>How It Works</a>
            <a href="#pricing" onClick={() => setMobileMenuOpen(false)} style={{ color: '#f1f5f9', textDecoration: 'none', fontSize: '16px', padding: '8px 0' }}>Pricing</a>
            <a href="#faq" onClick={() => setMobileMenuOpen(false)} style={{ color: '#f1f5f9', textDecoration: 'none', fontSize: '16px', padding: '8px 0' }}>FAQ</a>
            <a href="#cta" onClick={() => setMobileMenuOpen(false)} className="btn-primary" style={{
              padding: '14px 24px',
              borderRadius: '12px',
              color: '#fff',
              textDecoration: 'none',
              fontSize: '16px',
              fontWeight: '600',
              textAlign: 'center',
              marginTop: '8px'
            }}>Get Started</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '120px 24px 80px',
        position: 'relative',
        zIndex: 1
      }}>
        <div className="hero-grid" style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div className="hero-content">
            <div className="fade-in-up" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(96, 165, 250, 0.1)',
              border: '1px solid rgba(96, 165, 250, 0.2)',
              borderRadius: '100px',
              padding: '8px 16px',
              marginBottom: '24px'
            }}>
              <span style={{ fontSize: '14px' }}>✨</span>
              <span style={{ fontSize: '13px', color: '#60a5fa', fontWeight: '600' }}>More than just a portrait</span>
            </div>

            <h1 className="fade-in-up delay-1" style={{
              fontSize: 'clamp(40px, 8vw, 64px)',
              fontWeight: '800',
              lineHeight: '1.1',
              marginBottom: '24px',
              color: '#f1f5f9'
            }}>
              The Ultimate Digital Home for Your{' '}
              <span className="gradient-text">Furry Friend</span>
            </h1>

            <p className="fade-in-up delay-2" style={{
              fontSize: '18px',
              color: '#94a3b8',
              marginBottom: '40px',
              maxWidth: '500px',
              lineHeight: '1.7'
            }}>
              Start with a stunning hand-painted watercolor portrait. 
              Build a complete pet companion ecosystem—photos, memories, health records, and family sharing—all beautifully organized in one place.
            </p>

            <div className="fade-in-up delay-3 hero-buttons" style={{
              marginBottom: '48px'
            }}>
              <a href="#pricing" className="btn-primary" style={{
                padding: '16px 32px',
                borderRadius: '14px',
                color: '#fff',
                textDecoration: 'none',
                fontSize: '16px',
                fontWeight: '600',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
              }}>
                Create Your Napp
                <span>→</span>
              </a>
              <a href="#how-it-works" className="btn-secondary" style={{
                padding: '16px 32px',
                borderRadius: '14px',
                color: '#f1f5f9',
                textDecoration: 'none',
                fontSize: '16px',
                fontWeight: '600',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                See How It Works
              </a>
            </div>

            <div className="fade-in-up delay-4 hero-social-proof" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px'
            }}>
              <div style={{ display: 'flex' }}>
                {['🐕', '🐱', '🐰'].map((emoji, i) => (
                  <div key={i} style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: 'linear-gradient(145deg, #1e293b, #0f172a)',
                    border: '2px solid #0a0a0f',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginLeft: i > 0 ? '-12px' : 0,
                    fontSize: '18px'
                  }}>
                    {emoji}
                  </div>
                ))}
              </div>
              <div>
                <p style={{ fontSize: '14px', color: '#f1f5f9', fontWeight: '600' }}>2,500+ Happy Pet Parents</p>
                <div style={{ display: 'flex', gap: '2px' }}>
                  {[1,2,3,4,5].map(i => <span key={i} style={{ color: '#f59e0b' }}>★</span>)}
                  <span style={{ color: '#64748b', fontSize: '13px', marginLeft: '4px' }}>4.9/5</span>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="fade-in-up delay-2 hero-visual">
            {/* Phone Mockup */}
            <div style={{
              width: '280px',
              background: 'linear-gradient(145deg, #1e293b, #0f172a)',
              borderRadius: '40px',
              padding: '12px',
              border: '1px solid rgba(148, 163, 184, 0.1)',
              boxShadow: '0 40px 80px rgba(0, 0, 0, 0.5)',
              animation: 'float 6s ease-in-out infinite'
            }}>
              <div style={{
                background: '#0a0a0f',
                borderRadius: '32px',
                overflow: 'hidden',
                aspectRatio: '9/19'
              }}>
                {/* App Preview */}
                <div style={{ padding: '20px 16px' }}>
                  <div style={{
                    width: '60px',
                    height: '4px',
                    background: '#1e293b',
                    borderRadius: '2px',
                    margin: '0 auto 20px'
                  }} />
                  <p style={{ fontSize: '10px', color: '#64748b', marginBottom: '4px' }}>DOGGYDOODLES</p>
                  <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#f1f5f9', marginBottom: '16px' }}>Biscuit</h3>
                  
                  {/* Portrait Preview */}
                  <div style={{
                    background: 'linear-gradient(145deg, #1a1a2e, #0f0f1a)',
                    borderRadius: '16px',
                    aspectRatio: '4/5',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '16px',
                    position: 'relative'
                  }}>
                    <img
                      src="https://image.admin.solutions/doggy-doodle-event-card-image_98d760f2-b2ca-4a3d-8dc1-f3eeac03a9b7/312d4906-a763-4e58-bdf0-c96a4cf2080d/0cfb0cc0-d285-44e9-a9a7-e1b924eb0ba4/98d760f2-b2ca-4a3d-8dc1-f3eeac03a9b7"
                      alt="Biscuit - Dog Portrait"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        borderRadius: '16px'
                      }}
                    />
                    <div style={{
                      position: 'absolute',
                      top: '8px',
                      right: '8px',
                      background: 'rgba(96, 165, 250, 0.2)',
                      padding: '4px 8px',
                      borderRadius: '8px',
                      fontSize: '8px',
                      color: '#60a5fa',
                      fontWeight: '600'
                    }}>NFT</div>
                  </div>

                  {/* Tab Bar Preview */}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    background: 'rgba(30, 41, 59, 0.5)',
                    borderRadius: '12px',
                    padding: '8px'
                  }}>
                    {['🖼️', '👤', '❤️', '📷', '⏰'].map((icon, i) => (
                      <div key={i} style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '8px',
                        background: i === 0 ? 'rgba(96, 165, 250, 0.2)' : 'transparent',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '14px'
                      }}>{icon}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Cards */}
            <div className="floating-card" style={{
              top: '20%',
              left: '-20px',
              animationDelay: '1s'
            }}>
              <p style={{ fontSize: '11px', color: '#64748b' }}>Vaccinations</p>
              <p style={{ fontSize: '14px', color: '#22c55e', fontWeight: '600' }}>✓ All Current</p>
            </div>

            <div className="floating-card" style={{
              bottom: '30%',
              right: '-30px',
              animationDelay: '2s'
            }}>
              <p style={{ fontSize: '11px', color: '#64748b' }}>Memories</p>
              <p style={{ fontSize: '14px', color: '#f1f5f9', fontWeight: '600' }}>47 moments saved</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" style={{
        padding: '120px 24px',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <p style={{
              fontSize: '14px',
              color: '#60a5fa',
              fontWeight: '600',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              marginBottom: '16px'
            }}>
              Everything Your Pet Deserves
            </p>
            <h2 style={{
              fontSize: 'clamp(32px, 5vw, 48px)',
              fontWeight: '700',
              color: '#f1f5f9',
              marginBottom: '20px'
            }}>
              A Complete Pet Companion Ecosystem
            </h2>
            <p style={{
              fontSize: '18px',
              color: '#94a3b8',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              It starts with a beautiful portrait, but that's just the beginning. 
              Build a living digital space that celebrates everything about your furry family member.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px'
          }}>
            {features.map((feature, i) => (
              <div
                key={i}
                className="hover-lift"
                style={{
                  background: 'linear-gradient(145deg, rgba(30, 41, 59, 0.5), rgba(15, 23, 42, 0.5))',
                  borderRadius: '24px',
                  padding: '32px',
                  border: '1px solid rgba(148, 163, 184, 0.08)'
                }}
              >
                <div style={{
                  width: '56px',
                  height: '56px',
                  background: 'linear-gradient(135deg, rgba(96, 165, 250, 0.15), rgba(139, 92, 246, 0.15))',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '28px',
                  marginBottom: '20px'
                }}>
                  {feature.icon}
                </div>
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: '700',
                  color: '#f1f5f9',
                  marginBottom: '12px'
                }}>
                  {feature.title}
                </h3>
                <p style={{
                  fontSize: '15px',
                  color: '#94a3b8',
                  lineHeight: '1.7'
                }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" style={{
        padding: '120px 24px',
        position: 'relative',
        zIndex: 1,
        background: 'linear-gradient(180deg, transparent 0%, rgba(30, 41, 59, 0.2) 50%, transparent 100%)'
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <p style={{
              fontSize: '14px',
              color: '#60a5fa',
              fontWeight: '600',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              marginBottom: '16px'
            }}>
              Simple Process
            </p>
            <h2 style={{
              fontSize: 'clamp(32px, 5vw, 48px)',
              fontWeight: '700',
              color: '#f1f5f9',
              marginBottom: '20px'
            }}>
              From Photo to Forever
            </h2>
            <p style={{
              fontSize: '18px',
              color: '#94a3b8',
              maxWidth: '500px',
              margin: '0 auto'
            }}>
              Four simple steps to create your pet's digital sanctuary
            </p>
          </div>

          <div style={{ position: 'relative' }}>
            {/* Connection Line */}
            <div style={{
              position: 'absolute',
              top: '40px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '2px',
              height: 'calc(100% - 80px)',
              background: 'linear-gradient(to bottom, #60a5fa, #8b5cf6, #f59e0b)',
              opacity: 0.3,
              display: 'none'
            }} className="timeline-line" />

            {howItWorks.map((step, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  gap: '32px',
                  marginBottom: i < howItWorks.length - 1 ? '48px' : 0,
                  alignItems: 'flex-start'
                }}
              >
                <div style={{
                  flexShrink: 0,
                  width: '80px',
                  height: '80px',
                  background: 'linear-gradient(135deg, #1e293b, #0f172a)',
                  borderRadius: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid rgba(96, 165, 250, 0.2)'
                }}>
                  <span style={{
                    fontSize: '28px',
                    fontWeight: '800',
                    background: 'linear-gradient(135deg, #60a5fa, #8b5cf6)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}>
                    {step.step}
                  </span>
                </div>
                <div style={{ paddingTop: '8px' }}>
                  <h3 style={{
                    fontSize: '22px',
                    fontWeight: '700',
                    color: '#f1f5f9',
                    marginBottom: '8px'
                  }}>
                    {step.title}
                  </h3>
                  <p style={{
                    fontSize: '16px',
                    color: '#94a3b8',
                    lineHeight: '1.7'
                  }}>
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" style={{
        padding: '120px 24px',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <p style={{
              fontSize: '14px',
              color: '#60a5fa',
              fontWeight: '600',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              marginBottom: '16px'
            }}>
              Pricing
            </p>
            <h2 style={{
              fontSize: 'clamp(32px, 5vw, 48px)',
              fontWeight: '700',
              color: '#f1f5f9',
              marginBottom: '20px'
            }}>
              Choose Your Pet's Perfect Plan
            </h2>
            <p style={{
              fontSize: '18px',
              color: '#94a3b8',
              maxWidth: '500px',
              margin: '0 auto'
            }}>
              Every tier includes a hand-painted watercolor portrait
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px',
            alignItems: 'stretch'
          }}>
            {Object.entries(tiers).map(([key, tier]) => (
              <div
                key={key}
                className="hover-lift"
                style={{
                  background: tier.popular 
                    ? 'linear-gradient(145deg, rgba(96, 165, 250, 0.1), rgba(30, 41, 59, 0.5))'
                    : 'linear-gradient(145deg, rgba(30, 41, 59, 0.5), rgba(15, 23, 42, 0.5))',
                  borderRadius: '28px',
                  padding: '36px',
                  border: tier.popular 
                    ? '2px solid rgba(96, 165, 250, 0.3)'
                    : '1px solid rgba(148, 163, 184, 0.08)',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                {tier.popular && (
                  <div style={{
                    position: 'absolute',
                    top: '-12px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'linear-gradient(135deg, #3b82f6, #60a5fa)',
                    color: '#fff',
                    padding: '6px 20px',
                    borderRadius: '100px',
                    fontSize: '12px',
                    fontWeight: '700',
                    letterSpacing: '0.5px'
                  }}>
                    MOST POPULAR
                  </div>
                )}

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '8px'
                }}>
                  <span style={{ fontSize: '32px' }}>{tier.icon}</span>
                  <h3 style={{
                    fontSize: '24px',
                    fontWeight: '700',
                    color: '#f1f5f9'
                  }}>
                    {tier.name}
                  </h3>
                </div>

                <p style={{
                  fontSize: '14px',
                  color: '#64748b',
                  marginBottom: '20px'
                }}>
                  {tier.description}
                </p>

                <div style={{ marginBottom: '24px' }}>
                  <span style={{
                    fontSize: '48px',
                    fontWeight: '800',
                    color: tier.color
                  }}>
                    ${tier.price}
                  </span>
                  <span style={{
                    fontSize: '16px',
                    color: '#64748b',
                    marginLeft: '4px'
                  }}>
                    one-time
                  </span>
                </div>

                <div style={{ marginBottom: '28px', flex: 1 }}>
                  {tier.features.map((feature, i) => (
                    <div
                      key={i}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '12px',
                        padding: '10px 0',
                        borderBottom: i < tier.features.length - 1 ? '1px solid rgba(148, 163, 184, 0.06)' : 'none'
                      }}
                    >
                      <div style={{
                        width: '20px',
                        height: '20px',
                        borderRadius: '50%',
                        background: `${tier.color}25`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        marginTop: '2px'
                      }}>
                        <span style={{ color: tier.color, fontSize: '12px' }}>✓</span>
                      </div>
                      <span style={{
                        fontSize: '14px',
                        color: '#94a3b8',
                        lineHeight: '1.5'
                      }}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <a
                  href="#cta"
                  style={{
                    display: 'block',
                    width: '100%',
                    padding: '16px',
                    background: tier.popular 
                      ? `linear-gradient(135deg, ${tier.color}, ${tier.color}dd)`
                      : 'rgba(255, 255, 255, 0.05)',
                    border: tier.popular ? 'none' : '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '14px',
                    color: tier.popular ? '#fff' : '#f1f5f9',
                    textDecoration: 'none',
                    fontSize: '15px',
                    fontWeight: '600',
                    textAlign: 'center',
                    transition: 'all 0.3s ease'
                  }}
                >
                  Choose {tier.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section style={{
        padding: '120px 24px',
        position: 'relative',
        zIndex: 1,
        background: 'linear-gradient(180deg, transparent 0%, rgba(30, 41, 59, 0.2) 50%, transparent 100%)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <p style={{
              fontSize: '14px',
              color: '#60a5fa',
              fontWeight: '600',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              marginBottom: '16px'
            }}>
              Loved by Pet Parents
            </p>
            <h2 style={{
              fontSize: 'clamp(32px, 5vw, 48px)',
              fontWeight: '700',
              color: '#f1f5f9'
            }}>
              Stories from Our Pack
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px'
          }}>
            {testimonials.map((testimonial, i) => (
              <div
                key={i}
                className="hover-lift"
                style={{
                  background: 'linear-gradient(145deg, rgba(30, 41, 59, 0.5), rgba(15, 23, 42, 0.5))',
                  borderRadius: '24px',
                  padding: '32px',
                  border: '1px solid rgba(148, 163, 184, 0.08)'
                }}
              >
                <div style={{ display: 'flex', gap: '2px', marginBottom: '20px' }}>
                  {[1,2,3,4,5].map(s => <span key={s} style={{ color: '#f59e0b', fontSize: '18px' }}>★</span>)}
                </div>
                <p style={{
                  fontSize: '16px',
                  color: '#e2e8f0',
                  lineHeight: '1.8',
                  marginBottom: '24px'
                }}>
                  "{testimonial.text}"
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #1e293b, #0f172a)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '22px'
                  }}>
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p style={{ fontSize: '15px', fontWeight: '600', color: '#f1f5f9' }}>{testimonial.name}</p>
                    <p style={{ fontSize: '13px', color: '#64748b' }}>{testimonial.pet}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" style={{
        padding: '120px 24px',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <p style={{
              fontSize: '14px',
              color: '#60a5fa',
              fontWeight: '600',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              marginBottom: '16px'
            }}>
              FAQ
            </p>
            <h2 style={{
              fontSize: 'clamp(32px, 5vw, 48px)',
              fontWeight: '700',
              color: '#f1f5f9'
            }}>
              Questions & Answers
            </h2>
          </div>

          <div>
            {faqs.map((faq, i) => (
              <div
                key={i}
                style={{
                  background: openFaq === i 
                    ? 'linear-gradient(145deg, rgba(30, 41, 59, 0.6), rgba(15, 23, 42, 0.6))'
                    : 'transparent',
                  borderRadius: '16px',
                  marginBottom: '8px',
                  border: '1px solid rgba(148, 163, 184, 0.08)',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease'
                }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{
                    width: '100%',
                    padding: '24px',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '16px'
                  }}
                >
                  <span style={{
                    fontSize: '16px',
                    fontWeight: '600',
                    color: '#f1f5f9',
                    textAlign: 'left'
                  }}>
                    {faq.q}
                  </span>
                  <span style={{
                    fontSize: '20px',
                    color: '#64748b',
                    transform: openFaq === i ? 'rotate(180deg)' : 'none',
                    transition: 'transform 0.3s ease'
                  }}>
                    ▼
                  </span>
                </button>
                {openFaq === i && (
                  <div style={{
                    padding: '0 24px 24px'
                  }}>
                    <p style={{
                      fontSize: '15px',
                      color: '#94a3b8',
                      lineHeight: '1.8'
                    }}>
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="cta" style={{
        padding: '120px 24px',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{
          maxWidth: '900px',
          margin: '0 auto',
          background: 'linear-gradient(145deg, rgba(30, 41, 59, 0.6), rgba(15, 23, 42, 0.4))',
          borderRadius: '32px',
          padding: '60px 40px',
          textAlign: 'center',
          border: '1px solid rgba(148, 163, 184, 0.08)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Background decoration */}
          <div style={{
            position: 'absolute',
            top: '-50%',
            left: '-20%',
            width: '60%',
            height: '100%',
            background: 'radial-gradient(circle, rgba(96, 165, 250, 0.1) 0%, transparent 60%)',
            pointerEvents: 'none'
          }} />
          <div style={{
            position: 'absolute',
            bottom: '-50%',
            right: '-20%',
            width: '60%',
            height: '100%',
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 60%)',
            pointerEvents: 'none'
          }} />

          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{
              fontSize: '64px',
              marginBottom: '24px'
            }}>
              🐕
            </div>
            <h2 style={{
              fontSize: 'clamp(28px, 5vw, 42px)',
              fontWeight: '700',
              color: '#f1f5f9',
              marginBottom: '16px'
            }}>
              Give Your Pet the Home They Deserve
            </h2>
            <p style={{
              fontSize: '18px',
              color: '#94a3b8',
              maxWidth: '500px',
              margin: '0 auto 40px',
              lineHeight: '1.7'
            }}>
              A stunning portrait. A complete digital sanctuary. 
              All the memories, health records, and love—beautifully preserved forever.
            </p>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '16px',
              justifyContent: 'center'
            }}>
              <a href="#pricing" className="btn-primary" style={{
                padding: '18px 40px',
                borderRadius: '14px',
                color: '#fff',
                textDecoration: 'none',
                fontSize: '17px',
                fontWeight: '600',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                Start Your Pet's Napp
                <span>→</span>
              </a>
            </div>
            <p style={{
              marginTop: '24px',
              fontSize: '14px',
              color: '#64748b'
            }}>
              Starting at just $49 • One-time purchase • No subscriptions
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        padding: '60px 24px 40px',
        borderTop: '1px solid rgba(148, 163, 184, 0.08)',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '40px',
            marginBottom: '60px'
          }}>
            <div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '16px'
              }}>
                <span style={{ fontSize: '28px' }}>🐕</span>
                <span style={{ fontSize: '20px', fontWeight: '700', color: '#f1f5f9' }}>DoggyDoodles</span>
              </div>
              <p style={{
                fontSize: '14px',
                color: '#64748b',
                lineHeight: '1.7',
                maxWidth: '280px'
              }}>
                The ultimate digital home for your pet. 
                Where art meets your pet's story.
              </p>
            </div>

            <div>
              <h4 style={{ fontSize: '14px', fontWeight: '600', color: '#f1f5f9', marginBottom: '16px' }}>Product</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <a href="#features" style={{ color: '#64748b', textDecoration: 'none', fontSize: '14px' }}>Features</a>
                <a href="#pricing" style={{ color: '#64748b', textDecoration: 'none', fontSize: '14px' }}>Pricing</a>
                <a href="#how-it-works" style={{ color: '#64748b', textDecoration: 'none', fontSize: '14px' }}>How It Works</a>
                <a href="#faq" style={{ color: '#64748b', textDecoration: 'none', fontSize: '14px' }}>FAQ</a>
              </div>
            </div>

            <div>
              <h4 style={{ fontSize: '14px', fontWeight: '600', color: '#f1f5f9', marginBottom: '16px' }}>Company</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <a href="#" style={{ color: '#64748b', textDecoration: 'none', fontSize: '14px' }}>About</a>
                <a href="#" style={{ color: '#64748b', textDecoration: 'none', fontSize: '14px' }}>Artists</a>
                <a href="#" style={{ color: '#64748b', textDecoration: 'none', fontSize: '14px' }}>Blog</a>
                <a href="#" style={{ color: '#64748b', textDecoration: 'none', fontSize: '14px' }}>Contact</a>
              </div>
            </div>

            <div>
              <h4 style={{ fontSize: '14px', fontWeight: '600', color: '#f1f5f9', marginBottom: '16px' }}>Legal</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <a href="#" style={{ color: '#64748b', textDecoration: 'none', fontSize: '14px' }}>Privacy Policy</a>
                <a href="#" style={{ color: '#64748b', textDecoration: 'none', fontSize: '14px' }}>Terms of Service</a>
                <a href="#" style={{ color: '#64748b', textDecoration: 'none', fontSize: '14px' }}>Refund Policy</a>
              </div>
            </div>
          </div>

          <div style={{
            paddingTop: '30px',
            borderTop: '1px solid rgba(148, 163, 184, 0.08)',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '16px'
          }}>
            <p style={{ fontSize: '14px', color: '#64748b' }}>
              © 2024 DoggyDoodles. Made with 🐾 for pet lovers everywhere.
            </p>
            <div style={{ display: 'flex', gap: '16px' }}>
              <a href="#" style={{
                width: '36px',
                height: '36px',
                borderRadius: '10px',
                background: 'rgba(30, 41, 59, 0.5)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#64748b',
                textDecoration: 'none',
                fontSize: '16px'
              }}>𝕏</a>
              <a href="#" style={{
                width: '36px',
                height: '36px',
                borderRadius: '10px',
                background: 'rgba(30, 41, 59, 0.5)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#64748b',
                textDecoration: 'none',
                fontSize: '16px'
              }}>📷</a>
              <a href="#" style={{
                width: '36px',
                height: '36px',
                borderRadius: '10px',
                background: 'rgba(30, 41, 59, 0.5)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#64748b',
                textDecoration: 'none',
                fontSize: '16px'
              }}>📘</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Responsive Styles */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
        }
        @media (min-width: 769px) {
          .mobile-menu-btn {
            display: none !important;
          }
        }
      `}</style>
    </div>
  )
}

export default MarketingSite
