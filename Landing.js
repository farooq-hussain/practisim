import React, { useEffect, useState } from 'react';
import { frameworks } from '../data/scenarios';

export default function Landing({ onStart }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setCount(c => c < 12847 ? c + 137 : 12847), 16);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="landing">
      <nav className="nav">
        <div className="nav-brand">
          <span className="brand-icon">⚡</span>
          <span className="brand-name">PractiSim</span>
        </div>
        <div className="nav-links">
          <a href="#frameworks">Frameworks</a>
          <a href="#how">How It Works</a>
          <button className="btn-primary" onClick={onStart}>Start Free</button>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-badge">🌍 The World's First Multi-Framework Practical Simulator</div>
        <h1 className="hero-title">
          Stop Memorizing.<br />
          <span className="hero-accent">Start Solving.</span>
        </h1>
        <p className="hero-sub">
          Real-world scenarios from ITIL, PMP, Six Sigma and more. Make decisions. Get instant expert feedback. Build practical skills — not just theory.
        </p>
        <div className="hero-cta">
          <button className="btn-hero" onClick={onStart}>Launch Your First Simulation →</button>
          <span className="hero-stat"><strong>{count.toLocaleString()}</strong> scenarios completed today</span>
        </div>
        <div className="hero-industries">
          <span>🏥 Healthcare</span>
          <span>🏦 Banking</span>
          <span>🏭 Manufacturing</span>
          <span>🏛️ Government</span>
          <span>🛒 Retail</span>
          <span>📡 Telecom</span>
        </div>
      </section>

      <section className="problem-section">
        <div className="problem-card">
          <div className="problem-icon">📚</div>
          <h3>The Old Way</h3>
          <p>Read 400 pages. Memorize definitions. Pass a multiple choice exam. Forget everything in 2 weeks.</p>
          <div className="problem-tag bad">Theory Only</div>
        </div>
        <div className="vs-divider">VS</div>
        <div className="solution-card">
          <div className="solution-icon">⚡</div>
          <h3>The PractiSim Way</h3>
          <p>Walk into a live crisis. Make real decisions under pressure. Get expert feedback. Repeat until mastery.</p>
          <div className="problem-tag good">Practical Experience</div>
        </div>
      </section>

      <section id="frameworks" className="frameworks-section">
        <div className="section-label">Frameworks</div>
        <h2>Master the World's Best Practices</h2>
        <p className="section-sub">Every framework taught through real industry scenarios — not PowerPoint slides</p>
        <div className="framework-grid">
          {frameworks.map(f => (
            <div key={f.id} className="framework-card" style={{'--fw-color': f.color, '--fw-bg': f.bg}}>
              <div className="fw-icon">{f.icon}</div>
              <div className="fw-category">{f.category}</div>
              <h3 className="fw-name">{f.name}</h3>
              <p className="fw-subtitle">{f.subtitle}</p>
              <p className="fw-desc">{f.description}</p>
              <div className="fw-footer">
                <span className="fw-count">{f.totalScenarios} scenarios</span>
                <button className="fw-btn" onClick={onStart}>Practice Now →</button>
              </div>
            </div>
          ))}
          <div className="framework-card coming-soon">
            <div className="fw-icon">🔜</div>
            <div className="fw-category">Coming Soon</div>
            <h3 className="fw-name">+12 More</h3>
            <p className="fw-desc">Lean, Agile/Scrum, COBIT, Design Thinking, Change Management, ISO 27001 and more — launching soon</p>
          </div>
        </div>
      </section>

      <section id="how" className="how-section">
        <div className="section-label">How It Works</div>
        <h2>Learning That Feels Real</h2>
        <div className="steps-grid">
          <div className="step-card">
            <div className="step-num">1</div>
            <h3>Pick a Framework & Industry</h3>
            <p>Choose ITIL, PMP, or Six Sigma. Then pick your industry — Healthcare, Banking, Manufacturing, and more.</p>
          </div>
          <div className="step-arrow">→</div>
          <div className="step-card">
            <div className="step-num">2</div>
            <h3>Enter the Crisis</h3>
            <p>Read a richly detailed real-world scenario. Understand the urgency, the stakeholders, the pressure.</p>
          </div>
          <div className="step-arrow">→</div>
          <div className="step-card">
            <div className="step-num">3</div>
            <h3>Make Decisions</h3>
            <p>Choose from 4 options at each decision point. No tricks — just realistic choices a professional would face.</p>
          </div>
          <div className="step-arrow">→</div>
          <div className="step-card">
            <div className="step-num">4</div>
            <h3>Get Expert Feedback</h3>
            <p>Instant explanation of why your answer was right or wrong. Mapped to the exact framework principle.</p>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="stat-item"><div className="stat-num">15+</div><div className="stat-label">Real Scenarios</div></div>
        <div className="stat-item"><div className="stat-num">3</div><div className="stat-label">Global Frameworks</div></div>
        <div className="stat-item"><div className="stat-num">6</div><div className="stat-label">Industries Covered</div></div>
        <div className="stat-item"><div className="stat-num">100%</div><div className="stat-label">Free to Start</div></div>
      </section>

      <section className="cta-section">
        <h2>Ready to Practice Like a Professional?</h2>
        <p>No account needed. No credit card. Just launch and start simulating.</p>
        <button className="btn-hero" onClick={onStart}>Start Your First Simulation — Free →</button>
      </section>

      <footer className="footer">
        <div className="footer-brand">⚡ PractiSim</div>
        <p>The world's practical learning simulator for global best practice frameworks</p>
        <p style={{marginTop: '0.5rem', fontSize: '0.8rem', opacity: 0.5}}>© 2025 PractiSim. Built for learners who want real skills.</p>
      </footer>
    </div>
  );
}
