import React, { useState, useEffect } from 'react';

export default function HomePage() {
  const [activeTab, setActiveTab] = useState('about');
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    
    // Custom cursor hover detection
    const handleMouseOver = (e) => {
      if (
        e.target.tagName.toLowerCase() === 'button' || 
        e.target.tagName.toLowerCase() === 'a' || 
        e.target.closest('.project-card') ||
        e.target.closest('input') ||
        e.target.closest('textarea')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <div className="app-container">
      {/* Custom Cursor */}
      <div 
        className={`custom-cursor ${isHovering ? 'hovering' : ''}`} 
        style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px` }}
      ></div>

      {/* Pill Navigation (Lokkee Style) */}
      <nav className="top-nav">
        <button 
          className={`nav-btn ${activeTab === 'about' ? 'active' : ''}`}
          onClick={() => setActiveTab('about')}
        >
          PROFILE
        </button>
        <button 
          className={`nav-btn ${activeTab === 'experience' ? 'active' : ''}`}
          onClick={() => setActiveTab('experience')}
        >
          EXPERIENCE
        </button>
        <button 
          className={`nav-btn ${activeTab === 'projects' ? 'active' : ''}`}
          onClick={() => setActiveTab('projects')}
        >
          PROJECTS
        </button>
        <button 
          className={`nav-btn ${activeTab === 'contact' ? 'active' : ''}`}
          onClick={() => setActiveTab('contact')}
        >
          CONTACT
        </button>
      </nav>

      {/* Main Content Pane */}
      <main className="main-wrapper">
        <div className="pane-content" key={activeTab}>
          
          {/* PROFILE & SKILLS */}
          {activeTab === 'about' && (
            <div className="split-layout">
              <div className="split-left">
                <h1 className="hero-title">RAHUL<br/><span>BENDRE</span></h1>
                <span className="section-label">WEB DEVELOPMENT FROM THE FUTURE</span>
                <p className="about-text" style={{marginBottom: "2rem"}}>
                  Senior Backend Engineer with 4+ years of experience transforming complex databases into <strong>highly scalable architectures</strong>. Based in Pune, India. 
                </p>
                <div style={{ display: "flex", gap: "1rem" }}>
                  <a href="https://linkedin.com/in/rahulbbendre" target="_blank" rel="noopener noreferrer" className="nav-btn" style={{border: "1px solid var(--accent-primary)", padding: "0.5rem 1.5rem"}}>LINKEDIN</a>
                  <a href="https://github.com/dev-rahulb" target="_blank" rel="noopener noreferrer" className="nav-btn" style={{border: "1px solid var(--accent-primary)", padding: "0.5rem 1.5rem"}}>GITHUB</a>
                </div>
              </div>
              
              <div className="split-right">
                <div className="skills-grid">
                  <div className="skill-card">
                    <h3>SYSTEM ARCHITECTURE</h3>
                    <div className="skill-tags">
                      <span className="skill-tag">NODE.JS</span>
                      <span className="skill-tag">EXPRESS.JS</span>
                      <span className="skill-tag">NESTJS</span>
                      <span className="skill-tag">SYSTEM DESIGN</span>
                    </div>
                  </div>
                  <div className="skill-card">
                    <h3>DATABASE & CLOUD</h3>
                    <div className="skill-tags">
                      <span className="skill-tag">POSTGRESQL</span>
                      <span className="skill-tag">MYSQL</span>
                      <span className="skill-tag">REDIS</span>
                      <span className="skill-tag">AWS EC2</span>
                    </div>
                  </div>
                  <div className="skill-card">
                    <h3>FRONTEND & DEVOPS</h3>
                    <div className="skill-tags">
                      <span className="skill-tag">REACT.JS</span>
                      <span className="skill-tag">NEXT.JS</span>
                      <span className="skill-tag">NGINX</span>
                      <span className="skill-tag">PM2</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* EXPERIENCE */}
          {activeTab === 'experience' && (
            <div className="split-layout">
              <div className="split-left">
                <h1 className="hero-title title-medium">PROFESSIONAL<br/><span>TIMELINE</span></h1>
                <p className="about-text">Over 4 years of continuous evolution building resilient backend clusters and optimizing API performance.</p>
              </div>
              <div className="split-right">
                <div className="timeline-module">
                  <span className="timeline-date">OCT 2025 - PRESENT</span>
                  <h3 className="timeline-title">SR. SOFTWARE DEVELOPER & LEAD</h3>
                  <div className="timeline-company">PRIMAVERSE LLP</div>
                  <ul className="project-desc-list">
                    <li>Led backend architecture for OpVyap productivity platform elements including task management, employee utilization, and chat modules.</li>
                    <li>Designed robust PostgreSQL schemas and highly scalable Node.js REST APIs.</li>
                    <li>Guided CMS platform development utilizing modern technologies like NestJS, Next.js, and PostgreSQL.</li>
                  </ul>
                </div>

                <div className="timeline-module">
                  <span className="timeline-date">OCT 2021 - MAY 2025</span>
                  <h3 className="timeline-title">SENIOR SOFTWARE DEVELOPER</h3>
                  <div className="timeline-company">ABHINAV DIGICOMSOFT PVT. LTD.</div>
                  <ul className="project-desc-list">
                    <li>Built resilient backend services utilizing Node.js, Laravel, and MySQL, consistently supporting 500+ daily transactions.</li>
                    <li>Achieved a 40% reduction in API latency through strategic database indexing and SQL optimization.</li>
                  </ul>
                </div>

                <div className="timeline-module">
                  <span className="timeline-date">2023</span>
                  <h3 className="timeline-title">MASTER OF COMPUTER APPLICATIONS</h3>
                  <div className="timeline-company">SAVITRIBAI PHULE PUNE UNIVERSITY</div>
                </div>
              </div>
            </div>
          )}

          {/* PROJECTS */}
          {activeTab === 'projects' && (
            <div className="split-layout">
              <div className="split-left">
                <h1 className="hero-title title-medium">ARCHITECTED<br/><span>SOLUTIONS</span></h1>
                <p className="about-text">A selection of my robust, production-ready system architectures.</p>
              </div>
              <div className="split-right">
                <div className="projects-grid">
                  <div className="project-card">
                    <h3>FINANCE TRANSACTION RECORD</h3>
                    <p>Secure finance tracking system built to manage and record transactions with heavily optimized reporting queries.</p>
                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                      <span className="skill-tag">NODE.JS</span>
                      <span className="skill-tag">POSTGRESQL</span>
                    </div>
                  </div>
                  
                  <div className="project-card">
                    <h3>OPVYAP PLATFORM</h3>
                    <p>Enterprise productivity platform encompassing deep task management and real-time internal communication features.</p>
                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                      <span className="skill-tag">NODE.JS</span>
                      <span className="skill-tag">REACT</span>
                    </div>
                  </div>

                  <div className="project-card">
                    <h3>PARENT-TEACHER APP</h3>
                    <p>Real-time communication app that allows seamless messaging and highly secure document sharing.</p>
                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                      <span className="skill-tag">JAVA</span>
                      <span className="skill-tag">FIREBASE</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* CONTACT */}
          {activeTab === 'contact' && (
            <div className="split-layout">
              <div className="split-left">
                <h1 className="hero-title">HIT ME<br/><span>UP</span></h1>
                <p className="about-text">Let's discuss how my system architecture expertise can elevate your next big idea.<br/><br/>
                  <a href="mailto:rahul.balu.bendre@gmail.com" style={{color: "var(--text-primary)"}}>rahul.balu.bendre@gmail.com</a><br/>
                  +91 96650 26772
                </p>
              </div>
              <div className="split-right" style={{display: "flex", alignItems: "center"}}>
                <div className="contact-container">
                  <form className="contact-form" onSubmit={(e) => { e.preventDefault(); alert('Connecting...'); }}>
                    <div>
                      <input type="text" className="form-input" placeholder="WHATS YOUR NAME?" required />
                    </div>
                    <div>
                      <input type="email" className="form-input" placeholder="YOUR EMAIL ADDRESS" required />
                    </div>
                    <div>
                      <textarea className="form-textarea" placeholder="TELL ME ABOUT YOUR PROJECT" required></textarea>
                    </div>
                    <button type="submit" className="btn-submit">
                      SEND MESSAGE
                    </button>
                  </form>
                </div>
              </div>
            </div>
          )}
          
        </div>
      </main>
    </div>
  );
}
