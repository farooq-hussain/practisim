import React, { useState } from 'react';
import { frameworks, scenarios } from '../data/scenarios';

export default function Dashboard({ progress, onStart, onLibrary, onHome }) {
  const [selected, setSelected] = useState(null);

  const totalDone = Object.keys(progress).length;
  const avgScore = totalDone > 0
    ? Math.round(Object.values(progress).reduce((a, b) => a + b.pct, 0) / totalDone)
    : 0;

  const allScenarios = [...scenarios.itil, ...scenarios.pmp, ...scenarios.sixsigma];
  const recentDone = allScenarios.filter(s => progress[s.id]).slice(0, 3);
  const nextUp = allScenarios.filter(s => !progress[s.id]).slice(0, 3);

  const getFramework = (id) => frameworks.find(f => scenarios[f.id]?.some(s => s.id === id));

  const handleStart = (scenario) => {
    const fw = getFramework(scenario.id);
    if (fw) onStart(scenario, fw);
  };

  return (
    <div className="dashboard">
      <nav className="nav">
        <div className="nav-brand" onClick={onHome} style={{cursor:'pointer'}}>
          <span className="brand-icon">⚡</span>
          <span className="brand-name">PractiSim</span>
        </div>
        <div className="nav-links">
          <button className="nav-link-btn" onClick={onLibrary}>Scenario Library</button>
        </div>
      </nav>

      <div className="dash-content">
        <div className="dash-welcome">
          <h1>Welcome back! 👋</h1>
          <p>Ready to practice? Pick a framework and start simulating.</p>
        </div>

        <div className="stats-row">
          <div className="stat-card">
            <div className="stat-card-num">{totalDone}</div>
            <div className="stat-card-label">Scenarios Completed</div>
          </div>
          <div className="stat-card">
            <div className="stat-card-num">{avgScore > 0 ? avgScore + '%' : '—'}</div>
            <div className="stat-card-label">Average Score</div>
          </div>
          <div className="stat-card">
            <div className="stat-card-num">{allScenarios.length - totalDone}</div>
            <div className="stat-card-label">Scenarios Remaining</div>
          </div>
          <div className="stat-card">
            <div className="stat-card-num">3</div>
            <div className="stat-card-label">Frameworks Available</div>
          </div>
        </div>

        <h2 className="dash-section-title">Choose a Framework</h2>
        <div className="fw-selector">
          {frameworks.map(fw => {
            const fwScenarios = scenarios[fw.id] || [];
            const fwDone = fwScenarios.filter(s => progress[s.id]).length;
            return (
              <div
                key={fw.id}
                className={`fw-select-card ${selected === fw.id ? 'active' : ''}`}
                style={{'--fw-color': fw.color, '--fw-bg': fw.bg}}
                onClick={() => setSelected(selected === fw.id ? null : fw.id)}
              >
                <div className="fws-icon">{fw.icon}</div>
                <div className="fws-info">
                  <div className="fws-name">{fw.name}</div>
                  <div className="fws-sub">{fw.subtitle}</div>
                  <div className="fws-progress-bar">
                    <div className="fws-progress-fill" style={{width: `${(fwDone/fwScenarios.length)*100}%`, background: fw.color}}></div>
                  </div>
                  <div className="fws-count">{fwDone}/{fwScenarios.length} done</div>
                </div>
                <span className="fws-arrow">{selected === fw.id ? '▼' : '›'}</span>
              </div>
            );
          })}
        </div>

        {selected && (
          <div className="scenario-picker">
            <h3>Choose a Scenario — {frameworks.find(f=>f.id===selected)?.name}</h3>
            <div className="scenario-list">
              {(scenarios[selected] || []).map(s => {
                const done = progress[s.id];
                return (
                  <div key={s.id} className={`scenario-item ${done ? 'done' : ''}`}>
                    <div className="si-left">
                      <div className="si-industry">{s.industry}</div>
                      <div className="si-title">{s.title}</div>
                      <div className="si-tags">
                        <span className="tag practice">{s.practice}</span>
                        <span className={`tag diff diff-${s.difficulty.toLowerCase()}`}>{s.difficulty}</span>
                        <span className="tag">{s.duration}</span>
                      </div>
                    </div>
                    <div className="si-right">
                      {done && <div className="si-score">{done.pct}%</div>}
                      <button
                        className={`btn-sim ${done ? 'retry' : 'start'}`}
                        onClick={() => handleStart(s)}
                      >
                        {done ? 'Retry' : 'Start →'}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {nextUp.length > 0 && (
          <div className="dash-next">
            <h2 className="dash-section-title">Recommended Next</h2>
            <div className="next-grid">
              {nextUp.map(s => {
                const fw = getFramework(s.id);
                return (
                  <div key={s.id} className="next-card" style={{'--fw-color': fw?.color}}>
                    <div className="next-fw">{fw?.icon} {fw?.name}</div>
                    <div className="next-title">{s.title}</div>
                    <div className="next-industry">{s.industry} · {s.difficulty}</div>
                    <button className="btn-next" onClick={() => handleStart(s)}>Start Simulation →</button>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {recentDone.length > 0 && (
          <div className="dash-recent">
            <h2 className="dash-section-title">Recently Completed</h2>
            <div className="recent-list">
              {recentDone.map(s => {
                const p = progress[s.id];
                const fw = getFramework(s.id);
                return (
                  <div key={s.id} className="recent-item">
                    <span className="recent-fw">{fw?.icon}</span>
                    <span className="recent-title">{s.title}</span>
                    <span className="recent-industry">{s.industry}</span>
                    <span className={`recent-score ${p.pct >= 80 ? 'high' : p.pct >= 50 ? 'mid' : 'low'}`}>{p.pct}%</span>
                    <button className="btn-tiny" onClick={() => handleStart(s)}>Retry</button>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
