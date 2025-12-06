import { useState } from 'react'
import './App.css'

function App() {
  const [, setHamburgerOpen] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [galleryFilter, setGalleryFilter] = useState('all')

  const testimonials = [
    {
      text: "We couldn't have asked for a better wedding. Anusha and the team made everything effortless and magical. Every detail was perfect!",
      name: "Priya & Rohan",
      event: "Wedding Celebration"
    },
    {
      text: "Our product launch was a massive success. The team's creativity and professionalism transformed our vision into an unforgettable experience.",
      name: "Anil Sharma",
      event: "Corporate Product Launch"
    },
    {
      text: "The 50th birthday celebration was absolutely stunning. They handled all the stress so we could just enjoy and celebrate!",
      name: "Meera Kapoor",
      event: "50th Birthday Celebration"
    }
  ]

  const galleryItems = [
    { id: 1, category: 'weddings', title: 'Wedding Mandap' },
    { id: 2, category: 'weddings', title: 'Bride & Groom' },
    { id: 3, category: 'weddings', title: 'Table Setting' },
    { id: 4, category: 'corporate', title: 'Corporate Event' },
    { id: 5, category: 'corporate', title: 'Conference Hall' },
    { id: 6, category: 'corporate', title: 'Product Launch' },
    { id: 7, category: 'themes', title: 'Theme Party' },
    { id: 8, category: 'themes', title: 'Birthday Bash' },
    { id: 9, category: 'themes', title: 'Cultural Night' }
  ]

  const filteredGallery = galleryFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === galleryFilter)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setHamburgerOpen(false)
  }

  return (
    <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif', color: '#2D2D2D' }}>
      {/* Navigation */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '72px',
        background: 'white',
        boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 32px'
      }}>
        <a href="#home" style={{ display: 'inline-flex', alignItems: 'center', height: '100%' }}>
          <img src="/anandha-vedhuka/assets/anandhavedukanewlogo.jpg" alt="Anandha Vedhuka" className="site-logo" style={{ width: 140, height: 'auto', objectFit: 'contain' }} />
        </a>
        <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
          <a href="tel:+919502807070" style={{ color: '#D99A2B', fontWeight: 600, textDecoration: 'none' }}>Call</a>
          <button onClick={() => scrollToSection('contact')} style={{
            background: '#D99A2B',
            color: 'white',
            border: 'none',
            padding: '12px 24px',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: 600
          }}>Request Quote</button>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" style={{
        marginTop: '72px',
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0F3B45 0%, #D99A2B 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center',
        padding: '48px 24px'
      }}>
        <div>
          <h1 style={{ fontSize: '56px', marginBottom: '16px', fontFamily: 'serif' }}>Anandha Vedhuka</h1>
          <p style={{ fontSize: '28px', color: '#C69C41', marginBottom: '32px' }}>Where Culture Meets Creativity</p>
          <p style={{ fontSize: '18px', marginBottom: '48px', maxWidth: '600px', margin: '0 auto 48px' }}>
            Bespoke weddings, cultural ceremonies and unforgettable experiences crafted with heart
          </p>
          <button onClick={() => scrollToSection('contact')} style={{
            background: '#C69C41',
            color: 'white',
            border: 'none',
            padding: '16px 32px',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: 600,
            fontSize: '16px',
            marginRight: '16px'
          }}>Request Free Quote</button>
          <button onClick={() => scrollToSection('gallery')} style={{
            background: 'transparent',
            color: 'white',
            border: '2px solid white',
            padding: '14px 30px',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: 600,
            fontSize: '16px'
          }}>View Gallery</button>
        </div>
      </section>

      {/* About */}
      <section id="about" style={{
        padding: '96px 24px',
        background: '#FAF8F4',
        textAlign: 'center'
      }}>
        <h2 style={{ fontSize: '32px', marginBottom: '48px', color: '#0F3B45' }}>Our Promise</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '48px',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {[
            { title: 'Culture', desc: 'Rooted in tradition, we honor your heritage and values' },
            { title: 'Creativity', desc: 'Inspired by imagination, we craft bespoke moments' },
            { title: 'Reliability', desc: 'With meticulous planning, we execute flawlessly' }
          ].map((pillar, i) => (
            <div key={i} style={{
              background: 'white',
              padding: '32px',
              borderRadius: '12px',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
            }}>
              <h3 style={{ color: '#0F3B45', marginBottom: '16px' }}>{pillar.title}</h3>
              <p>{pillar.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="events" style={{ padding: '96px 24px' }}>
        <h2 style={{ fontSize: '32px', marginBottom: '48px', textAlign: 'center', color: '#0F3B45' }}>Our Services</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '32px',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {[
            { name: 'Weddings', price: '₹ 3,00,000' },
            { name: 'Corporate Events', price: '₹ 1,50,000' },
            { name: 'Theme Parties', price: '₹ 1,00,000' },
            { name: 'Catering & Decor', price: '₹ 500/plate' },
            { name: 'Photography', price: '₹ 75,000' },
            { name: 'Venue Decoration', price: '₹ 2,00,000' }
          ].map((service, i) => (
            <div key={i} style={{
              background: 'white',
              border: '2px solid #E8E8E8',
              borderRadius: '12px',
              padding: '32px',
              textAlign: 'center'
            }}>
              <h3 style={{ color: '#0F3B45', marginBottom: '16px' }}>{service.name}</h3>
              <p style={{ fontSize: '18px', color: '#D99A2B', fontWeight: 600 }}>Starting {service.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" style={{
        padding: '96px 24px',
        background: '#FAF8F4'
      }}>
        <h2 style={{ fontSize: '32px', marginBottom: '32px', textAlign: 'center', color: '#0F3B45' }}>Gallery</h2>
        <div style={{
          display: 'flex',
          gap: '16px',
          justifyContent: 'center',
          marginBottom: '48px',
          flexWrap: 'wrap'
        }}>
          {['all', 'weddings', 'corporate', 'themes'].map(filter => (
            <button
              key={filter}
              onClick={() => setGalleryFilter(filter)}
              style={{
                padding: '8px 16px',
                border: '2px solid ' + (galleryFilter === filter ? '#D99A2B' : '#E8E8E8'),
                background: galleryFilter === filter ? '#D99A2B' : 'white',
                color: galleryFilter === filter ? 'white' : '#2D2D2D',
                borderRadius: '24px',
                cursor: 'pointer',
                fontWeight: 600
              }}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '24px',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {filteredGallery.map(item => (
            <div key={item.id} style={{
              aspectRatio: '1',
              background: 'linear-gradient(135deg, #D99A2B, #0F3B45)',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '18px',
              fontWeight: 600
            }}>
              {item.title}
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section style={{
        padding: '96px 24px',
        background: '#FAF8F4',
        textAlign: 'center'
      }}>
        <h2 style={{ fontSize: '32px', marginBottom: '48px', color: '#0F3B45' }}>What Our Clients Say</h2>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          background: 'white',
          padding: '48px',
          borderRadius: '12px',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
        }}>
          <p style={{ fontSize: '18px', fontStyle: 'italic', marginBottom: '24px' }}>"{testimonials[currentTestimonial].text}"</p>
          <p style={{ fontWeight: 600, marginBottom: '4px' }}>{testimonials[currentTestimonial].name}</p>
          <p style={{ color: '#666', fontSize: '14px' }}>{testimonials[currentTestimonial].event}</p>
          <div style={{ marginTop: '24px', display: 'flex', gap: '16px', justifyContent: 'center' }}>
            <button
              onClick={() => setCurrentTestimonial((currentTestimonial - 1 + testimonials.length) % testimonials.length)}
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: '#D99A2B',
                color: 'white',
                border: 'none',
                cursor: 'pointer',
                fontSize: '18px'
              }}
            >
              ‹
            </button>
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentTestimonial(i)}
                style={{
                  width: i === currentTestimonial ? '30px' : '10px',
                  height: '10px',
                  borderRadius: '50%',
                  background: i === currentTestimonial ? '#D99A2B' : '#E8E8E8',
                  border: 'none',
                  cursor: 'pointer'
                }}
              />
            ))}
            <button
              onClick={() => setCurrentTestimonial((currentTestimonial + 1) % testimonials.length)}
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: '#D99A2B',
                color: 'white',
                border: 'none',
                cursor: 'pointer',
                fontSize: '18px'
              }}
            >
              ›
            </button>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" style={{
        padding: '96px 24px',
        background: '#F5F5F5'
      }}>
        <h2 style={{ fontSize: '32px', marginBottom: '48px', textAlign: 'center', color: '#0F3B45' }}>Get In Touch</h2>
        <div style={{
          maxWidth: '600px',
          margin: '0 auto',
          background: 'white',
          padding: '48px',
          borderRadius: '12px',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
        }}>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <input placeholder="Full Name" type="text" style={{
              padding: '12px',
              border: '2px solid #E8E8E8',
              borderRadius: '8px',
              fontSize: '16px'
            }} />
            <input placeholder="Email Address" type="email" style={{
              padding: '12px',
              border: '2px solid #E8E8E8',
              borderRadius: '8px',
              fontSize: '16px'
            }} />
            <input placeholder="Phone Number" type="tel" style={{
              padding: '12px',
              border: '2px solid #E8E8E8',
              borderRadius: '8px',
              fontSize: '16px'
            }} />
            <select style={{
              padding: '12px',
              border: '2px solid #E8E8E8',
              borderRadius: '8px',
              fontSize: '16px'
            }}>
              <option>Select Event Type</option>
              <option>Wedding</option>
              <option>Corporate Event</option>
              <option>Theme Party</option>
            </select>
            <textarea placeholder="Tell us about your vision" style={{
              padding: '12px',
              border: '2px solid #E8E8E8',
              borderRadius: '8px',
              fontSize: '16px',
              minHeight: '120px',
              fontFamily: 'inherit'
            }} />
            <button style={{
              background: '#D99A2B',
              color: 'white',
              border: 'none',
              padding: '16px',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: 600,
              fontSize: '16px'
            }}>Send My Request</button>
          </form>
          <div style={{ marginTop: '32px', textAlign: 'center', borderTop: '2px solid #E8E8E8', paddingTop: '32px' }}>
            <p style={{ marginBottom: '8px' }}><strong>📞 Call Us:</strong> +91-9502807070</p>
            <p style={{ marginBottom: '8px' }}><strong>📧 Email:</strong> contact@anandhavedhuka.com</p>
            <p><strong>📍 Location:</strong> Hyderabad, Telangana, India</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        background: '#0F3B45',
        color: 'white',
        padding: '32px 24px',
        textAlign: 'center'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '8px' }}>
          <img src="/anandha-vedhuka/assets/anandhaveduka.jpg" alt="Anandha Vedhuka" className="site-logo footer-logo" style={{ width: 120, height: 'auto', objectFit: 'contain' }} />
        </div>
        <p style={{ margin: '0' }}>© 2025 Anandha Vedhuka. All rights reserved. Where Culture Meets Creativity.</p>
      </footer>
    </div>
  )
}

export default App
