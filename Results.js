import React, { useEffect, useState } from 'react';

export default function Results({ results, scenario, framework, onNext, onDashboard }) {
  const [animated, setAnimated] = useState(0);
  const { pct, score, maxScore, stepScores, steps } = results;

  useEffect(() => {
    const t = setInterval(() => {
      setAnimated(prev => {
        if (prev >= pct) { clearInterval(t); return pct; }
        return prev + 2;
      });
    }, 20);
    return () => clearInterval(t);
  }, [pct]);

  const grade = pct >= 90 ? { label: 'Expert', color: '#059669', stars: 5, msg: 'Outstanding! You think like a seasoned professional.' }
    : pct >= 75 ? { label: 'Proficient', color: '#2563EB', stars: 4, msg: 'Great work! You applied the framework correctly under pressure.' }
    : pct >= 60 ? { label: 'Developing', color: '#D97706', stars: 3, msg: 'Good effort. Review the feedback below to strengthen your understanding.' }
    : pct >= 40 ? { label: 'Beginner', color: '#DC2626', stars: 2, msg: 'Keep practicing! Focus on the principles highlighted in the feedback.' }
    : { label: 'Needs Work', color: '#7C3AED', stars: 1, msg: 'No worries — every expert was once a beginner. Try again!' };

  return (
    <div className="results">
      <div className="results-header" style={{borderBottom: `4px solid ${framework.color}`}}>
        <div className="results-fw" style={{color: framework.color}}>{framework.icon} {framework.name}</div>
        <h1>{scenario.title}</h1>
        <div className="results-industry">{scenario.industry}</div>
      </div>

      <div className="results-score-section">
        <div className="score-ring-wrap">
          <svg viewBox="0 0 120 120" className="score-ring">
            <circle cx="60" cy="60" r="50" fill="none" stroke="#f0f0f0" strokeWidth="10"/>
            <circle
              cx="60" cy="60" r="50" fill="none"
              stroke={grade.color} strokeWidth="10"
              strokeDasharray={`${(animated / 100) * 314} 314`}
              strokeLinecap="round"
              transform="rotate(-90 60 60)"
              style={{transition: 'stroke-dasharray 0.1s'}}
            />
          </svg>
          <div className="score-ring-inner">
            <div className="score-pct" style={{color: grade.color}}>{animated}%</div>
            <div className="score-grade">{grade.label}</div>
          </div>
        </div>

        <div className="score-details">
          <div className="stars-row">
            {[1,2,3,4,5].map(i => (
              <span key={i} className={`star ${i <= grade.stars ? 'lit' : ''}`}>★</span>
            ))}
          </div>
          <p className="grade-msg">{grade.msg}</p>
          <div className="score-nums">
            <div className="score-num-item">
              <div className="sni-val">{score}</div>
              <div className="sni-label">Points Earned</div>
            </div>
            <div className="score-num-item">
              <div className="sni-val">{maxScore}</div>
              <div className="sni-label">Points Possible</div>
            </div>
            <div className="score-num-item">
              <div className="sni-val">{steps.length}</div>
              <div className="sni-label">Decisions Made</div>
            </div>
          </div>
        </div>
      </div>

      <div className="results-breakdown">
        <h2>Decision Breakdown</h2>
        {steps.map((step, i) => {
          const s = stepScores[i];
          const correct = s === 100;
          const partial = s > 0 && s < 100;
          return (
            <div key={i} className={`breakdown-item ${correct ? 'correct' : partial ? 'partial' : 'wrong'}`}>
              <div className="bi-header">
                <span className="bi-num">Decision {i + 1}</span>
                <span className={`bi-result ${correct ? 'correct' : partial ? 'partial' : 'wrong'}`}>
                  {correct ? '✓ Correct' : partial ? `⚡ Partial (${s} pts)` : '✗ Incorrect'}
                </span>
              </div>
              <div className="bi-question">{step.question}</div>
              <div className="bi-practice">
                <span className="tag practice">{step.practice}</span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="results-actions">
        <button className="btn-secondary" onClick={onDashboard}>← Back to Dashboard</button>
        <button className="btn-primary" onClick={onNext}>Browse More Scenarios →</button>
      </div>
    </div>
  );
}
