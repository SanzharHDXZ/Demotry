import React, { useState } from 'react';

const AboutMeTemplate = () => {
  const [activeSection, setActiveSection] = useState('about');

  const styles = {
    container: {
      fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
      lineHeight: 1.6,
      color: '#1e293b',
      margin: 0,
      padding: 0,
      backgroundColor: '#f1f5f9'
    },
    header: {
      background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
      color: 'white',
      padding: '4rem 2rem',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden'
    },
    headerOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'linear-gradient(45deg, transparent 0%, rgba(251, 191, 36, 0.1) 50%, transparent 100%)',
      zIndex: 1
    },
    headerContent: {
      position: 'relative',
      zIndex: 2,
      maxWidth: '800px',
      margin: '0 auto'
    },
    profileImage: {
      width: '150px',
      height: '150px',
      borderRadius: '50%',
      border: '4px solid #fbbf24',
      marginBottom: '1.5rem',
      objectFit: 'cover',
      boxShadow: '0 8px 32px rgba(251, 191, 36, 0.3)'
    },
    name: {
      fontSize: '3rem',
      fontWeight: '800',
      margin: '0 0 0.5rem 0',
      textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
      letterSpacing: '-0.025em'
    },
    title: {
      fontSize: '1.3rem',
      fontWeight: '300',
      margin: '0 0 1rem 0',
      opacity: 0.9
    },
    tagline: {
      fontSize: '1.1rem',
      fontStyle: 'italic',
      opacity: 0.8
    },
    nav: {
      backgroundColor: 'white',
      boxShadow: '0 4px 20px rgba(30, 41, 59, 0.15)',
      position: 'sticky',
      top: 0,
      zIndex: 100
    },
    navContainer: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 2rem'
    },
    navList: {
      display: 'flex',
      listStyle: 'none',
      margin: 0,
      padding: 0,
      justifyContent: 'center'
    },
    navItem: {
      margin: '0 1rem'
    },
    navButton: {
      background: 'none',
      border: 'none',
      padding: '1rem 1.5rem',
      fontSize: '1rem',
      cursor: 'pointer',
      color: '#64748b',
      fontWeight: '600',
      transition: 'all 0.3s ease',
      borderBottom: '3px solid transparent',
      textTransform: 'uppercase',
      letterSpacing: '0.05em'
    },
    navButtonActive: {
      background: 'none',
      border: 'none',
      padding: '1rem 1.5rem',
      fontSize: '1rem',
      cursor: 'pointer',
      color: '#1e293b',
      fontWeight: '700',
      transition: 'all 0.3s ease',
      borderBottom: '3px solid #fbbf24',
      textTransform: 'uppercase',
      letterSpacing: '0.05em'
    },
    main: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '3rem 2rem',
      backgroundColor: 'white',
      minHeight: '60vh'
    },
    section: {
      marginBottom: '3rem'
    },
    sectionTitle: {
      fontSize: '2.5rem',
      fontWeight: '800',
      marginBottom: '1.5rem',
      color: '#1e293b',
      borderBottom: '4px solid #fbbf24',
      paddingBottom: '0.5rem',
      display: 'inline-block',
      textTransform: 'uppercase',
      letterSpacing: '-0.025em'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem',
      marginTop: '2rem'
    },
    card: {
      backgroundColor: 'white',
      padding: '2rem',
      borderRadius: '16px',
      border: '1px solid #e2e8f0',
      boxShadow: '0 4px 20px rgba(30, 41, 59, 0.08)',
      transition: 'all 0.3s ease',
      position: 'relative',
      overflow: 'hidden'
    },
    cardHover: {
      transform: 'translateY(-8px)',
      boxShadow: '0 12px 40px rgba(30, 41, 59, 0.15)',
      borderColor: '#fbbf24'
    },
    skillCategory: {
      marginBottom: '1.5rem'
    },
    skillTitle: {
      fontSize: '1.3rem',
      fontWeight: '700',
      color: '#1e293b',
      marginBottom: '0.5rem',
      textTransform: 'uppercase',
      letterSpacing: '0.025em'
    },
    skillList: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '0.5rem'
    },
    skill: {
      background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
      color: 'white',
      padding: '0.5rem 1rem',
      borderRadius: '6px',
      fontSize: '0.9rem',
      fontWeight: '600',
      textTransform: 'uppercase',
      letterSpacing: '0.025em',
      border: '2px solid transparent',
      transition: 'all 0.3s ease'
    },
    contactInfo: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem'
    },
    contactItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
      fontSize: '1.1rem',
      color: '#1e293b',
      fontWeight: '500'
    },
    socialLinks: {
      display: 'flex',
      gap: '1rem',
      marginTop: '1.5rem',
      justifyContent: 'center'
    },
    socialLink: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '50px',
      height: '50px',
      background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
      color: 'white',
      borderRadius: '12px',
      textDecoration: 'none',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      border: '2px solid transparent'
    },
    footer: {
      background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
      color: 'white',
      textAlign: 'center',
      padding: '3rem 2rem',
      marginTop: '3rem',
      position: 'relative',
      overflow: 'hidden'
    }
  };

  const [hoveredCard, setHoveredCard] = useState(null);

  const renderSection = () => {
    switch(activeSection) {
      case 'about':
        return (
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>About me</h2>
            <p style={{ fontSize: '1.2rem', lineHeight: 1.8, marginBottom: '1.5rem', fontWeight: '500' }}>
              My name is Sanzhar, and I am a 11th grade student who is deeply committed to leadership, responsibility, and teamwork. Over the past years, I have been actively involved in different areas of school life — from academics and IT projects to chess, volunteering, and collaborative work. These experiences have helped me build discipline, creativity, and the ability to listen and work with others.
As a candidate for school president, my goal is to make sure that every student feels represented and supported. I believe that leadership is not about making decisions alone, but about listening to people, understanding their needs, and turning ideas into action. I want to create opportunities for students to share their voices, bring more engaging activities to our school, and strengthen the sense of community that unites us.
I am confident that with dedication, hard work, and teamwork, we can make our school an even better place for learning, growth, and friendship.
            </p>
            <div style={{
              backgroundColor: '#fbbf24',
              color: '#1e293b',
              padding: '1.5rem',
              borderRadius: '12px',
              fontWeight: '600',
              fontSize: '1.1rem',
              textAlign: 'center',
              textTransform: 'uppercase',
              letterSpacing: '0.025em'
            }}>
              Your voice, my priority!
            </div>
          </div>
        );
      
      case 'platform':
        return (
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>My Goals</h2>
            <div style={styles.grid}>
              <div 
                style={{
                  ...styles.card,
                  ...(hoveredCard === 'academics' ? styles.cardHover : {})
                }}
                onMouseEnter={() => setHoveredCard('academics')}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: '60px',
                  height: '60px',
                  background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
                  clipPath: 'polygon(100% 0%, 0% 100%, 100% 100%)',
                  opacity: hoveredCard === 'academics' ? 1 : 0.3,
                  transition: 'opacity 0.3s ease'
                }}></div>
                <h3 style={styles.skillTitle}>Create opportunities for involvement</h3>
                <p style={{ lineHeight: 1.6, fontSize: '1.1rem' }}>
                  I will support new clubs, projects, and activities where students can show their talents and ideas.
                </p>
              </div>
              
              <div 
                style={{
                  ...styles.card,
                  ...(hoveredCard === 'community' ? styles.cardHover : {})
                }}
                onMouseEnter={() => setHoveredCard('community')}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: '60px',
                  height: '60px',
                  background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
                  clipPath: 'polygon(100% 0%, 0% 100%, 100% 100%)',
                  opacity: hoveredCard === 'community' ? 1 : 0.3,
                  transition: 'opacity 0.3s ease'
                }}></div>
                <h3 style={styles.skillTitle}>Encourage teamwork and collaboration</h3>
                <p style={{ lineHeight: 1.6, fontSize: '1.1rem' }}>
                  I will work to bring students together through events and initiatives.
                </p>
              </div>
              
              <div 
                style={{
                  ...styles.card,
                  ...(hoveredCard === 'wellness' ? styles.cardHover : {})
                }}
                onMouseEnter={() => setHoveredCard('wellness')}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: '60px',
                  height: '60px',
                  background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
                  clipPath: 'polygon(100% 0%, 0% 100%, 100% 100%)',
                  opacity: hoveredCard === 'wellness' ? 1 : 0.3,
                  transition: 'opacity 0.3s ease'
                }}></div>
                <h3 style={styles.skillTitle}>Promote a positive school environment</h3>
                <p style={{ lineHeight: 1.6, fontSize: '1.1rem' }}>
                  I will make sure our school is a place where every student feels included, respected, and supported.
                </p>
              </div>
            </div>
          </div>
        );
      
      case 'contact':
        return (
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>Vote for Change!</h2>
            <div style={styles.grid}>
              <div style={styles.card}>
                <h3 style={{ ...styles.skillTitle, marginBottom: '1.5rem' }}>Election Day</h3>
                <p style={{ fontSize: '1.2rem', fontWeight: '600', color: '#1e293b', marginBottom: '1rem' }}>
                  Make your voice count!
                </p>
                <p style={{ marginBottom: '1.5rem', color: '#64748b', lineHeight: 1.6 }}>
                  Every vote matters. Together, we can create positive change at Riviera International School.
                </p>
                <div style={{
                  backgroundColor: '#fbbf24',
                  color: '#1e293b',
                  padding: '1rem',
                  borderRadius: '8px',
                  fontWeight: '700',
                  fontSize: '1.1rem',
                  textAlign: 'center',
                  textTransform: 'uppercase'
                }}>
                  Vote Sanzhar!
                </div>
              </div>
              
              <div style={styles.card}>
                <h3 style={{ ...styles.skillTitle, marginBottom: '1.5rem' }}>Questions/Recommendations?</h3>
                <div style={styles.contactInfo}>
                  <div style={styles.contactItem}>
                    <span style={{ fontSize: '1.2rem' }}>🏫</span>
                    <span>Find me around school</span>
                  </div>
                  <div style={styles.contactItem}>
                    <span style={{ fontSize: '1.2rem' }}>✉️</span>
                    <span>serikkhan_s@riviera.edu.kz</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div style={styles.container}>
      {/* Header Section */}
      <header style={styles.header}>
        <div style={styles.headerOverlay}></div>
        <div style={styles.headerContent}>
          <img 
            src="/IMG_3447-2.png"
            alt="Profile" 
            style={styles.profileImage}
          />
          <h1 style={styles.name}>Serikkhan Sanzhar</h1>
          <p style={styles.title}>Candidate for Kokböri House</p>
          <p style={styles.tagline}>"Your voice, my priority!"</p>
        </div>
      </header>

      {/* Navigation */}
      <nav style={styles.nav}>
        <div style={styles.navContainer}>
          <ul style={styles.navList}>
            <li style={styles.navItem}>
              <button 
                style={activeSection === 'about' ? styles.navButtonActive : styles.navButton}
                onClick={() => setActiveSection('about')}
              >
                About Me
              </button>
            </li>
            <li style={styles.navItem}>
              <button 
                style={activeSection === 'platform' ? styles.navButtonActive : styles.navButton}
                onClick={() => setActiveSection('platform')}
              >
                My Goals
              </button>
            </li>
            <li style={styles.navItem}>
              <button 
                style={activeSection === 'contact' ? styles.navButtonActive : styles.navButton}
                onClick={() => setActiveSection('contact')}
              >
                Vote!
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <main style={styles.main}>
        {renderSection()}
      </main>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(45deg, transparent 0%, rgba(251, 191, 36, 0.05) 50%, transparent 100%)',
          zIndex: 1
        }}></div>
        <div style={{ position: 'relative', zIndex: 2 }}>
          <p style={{ fontWeight: '600', fontSize: '1.1rem' }}>&copy; Serikkhan Sanzhar|Kokböri House</p>
        </div>
      </footer>
    </div>
  );
};

export default AboutMeTemplate;