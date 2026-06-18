import React, { useState } from 'react';
import { frameworks, scenarios } from '../data/scenarios';

export default function Library({ progress, onStart, onBack }) {
  const [filterFw, setFilterFw] = useState('all');
  const [filterDiff, setFilterDiff] = useState('all');

  const allScenarios = frameworks.flatMap(fw =>
    (scenarios[fw.id] || []).map(s => ({ ...s, framework: fw }))
  );

  const filtered = allScenarios.filter(s => {
    if (filterFw !== 'all' && s.framework.id !== filterFw) return false;
    if (filterDiff !== 'all' && s.difficulty !== filterDiff) return false;
    return true;
  });

  return (
    <div className="library">
      <nav className="nav">
        <div className="nav-brand" onClick={onBack} style={{cursor:'pointer'}}>
          <span className="brand-icon">⚡</span>
          <span className="brand-name">PractiSim</span>
        </div>
        <button className="nav-link-btn" onClick={onBack}>← Dashboard</button>
      </nav>

      <div className="library-content">
        <h1>Scenario Library</h1>
        <p className="library-sub">All {allScenarios.length} scenarios across {frameworks.length} frameworks</p>

        <div className="filter-bar">
          <div className="filter-group">
            <label>Framework:</label>
            <select value={filterFw} onChange={e => setFilterFw(e.target.value)}>
              <option value="all">All Frameworks</option>
              {frameworks.map(f => <option key={f.id} value={f.id}>{f.name}</option>)}
            </select>
          </div>
          <div className="filter-group">
            <label>Difficulty:</label>
            <select value={filterDiff} onChange={e => setFilterDiff(e.target.value)}>
              <option value="all">All Levels</option>
              <option value="Foundation">Foundation</option>
              <option value="Practitioner">Practitioner</option>
              <option value="Strategic">Strategic</option>
            </select>
          </div>
          <div className="filter-count">{filtered.length} scenarios</div>
        </div>

        <div className="library-grid">
          {filtered.map(s => {
            const done = progress[s.id];
            return (
              <div key={s.id} className={`lib-card ${done ? 'completed' : ''}`}>
                <div className="lib-card-top">
                  <div className="lib-fw-badge" style={{background: s.framework.bg, color: s.framework.color}}>
                    {s.framework.icon} {s.framework.name}
                  </div>
                  {done && <div className="lib-done-badge">✓ {done.pct}%</div>}
                </div>
                <h3 className="lib-title">{s.title}</h3>
                <div className="lib-industry">📍 {s.industry}</div>
                <p className="lib-desc">{s.description.substring(0, 120)}...</p>
                <div className="lib-tags">
                  <span className="tag practice">{s.practice}</span>
                  <span className={`tag diff diff-${s.difficulty.toLowerCase()}`}>{s.difficulty}</span>
                  <span className="tag">{s.duration}</span>
                </div>
                <div className="lib-footer">
                  <span className="lib-steps">{s.steps.length} decisions</span>
                  <button
                    className="lib-btn"
                    style={{background: s.framework.color}}
                    onClick={() => onStart(s, s.framework)}
                  >
                    {done ? 'Retry' : 'Start'} →
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
