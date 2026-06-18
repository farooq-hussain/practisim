import React, { useState } from 'react';

export default function Simulator({ scenario, framework, onFinish, onExit }) {
  const [stepIndex, setStepIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [revealed, setRevealed] = useState(false);
  const [scores, setScores] = useState([]);
  const [showHint, setShowHint] = useState(false);

  const step = scenario.steps[stepIndex];
  const totalSteps = scenario.steps.length;
  const progress = ((stepIndex) / totalSteps) * 100;

  const handleSelect = (optIdx) => {
    if (revealed) return;
    setSelected(optIdx);
  };

  const handleReveal = () => {
    if (selected === null) return;
    setRevealed(true);
    setScores(prev => [...prev, scenario.steps[stepIndex].options[selected].score]);
  };

  const handleNext = () => {
    if (stepIndex + 1 < totalSteps) {
      setStepIndex(stepIndex + 1);
      setSelected(null);
      setRevealed(false);
      setShowHint(false);
    } else {
      const finalScores = [...scores];
      const total = finalScores.reduce((a, b) => a + b, 0);
      const maxScore = totalSteps * 100;
      onFinish({
        scenarioId: scenario.id,
        score: total,
        maxScore,
        pct: Math.round((total / maxScore) * 100),
        stepScores: finalScores,
        steps: scenario.steps
      });
    }
  };

  const getOptionClass = (idx) => {
    if (!revealed) return selected === idx ? 'option selected' : 'option';
    const opt = step.options[idx];
    if (opt.correct) return 'option correct';
    if (idx === selected && !opt.correct) return 'option wrong';
    return 'option faded';
  };

  const urgencyColor = scenario.urgency === 'P1' ? '#DC2626' : scenario.urgency === 'P2' ? '#D97706' : '#2563EB';

  return (
    <div className="simulator">
      <div className="sim-topbar">
        <button className="exit-btn" onClick={onExit}>← Exit</button>
        <div className="sim-fw-badge" style={{background: framework.bg, color: framework.color}}>
          {framework.icon} {framework.name}
        </div>
        <div className="sim-progress-label">Step {stepIndex + 1} of {totalSteps}</div>
      </div>

      <div className="sim-progress-bar">
        <div className="sim-progress-fill" style={{width: `${progress}%`, background: framework.color}}></div>
      </div>

      {stepIndex === 0 && (
        <div className="scenario-header">
          <div className="scenario-meta">
            <span className="tag" style={{background: framework.bg, color: framework.color}}>{framework.name}</span>
            <span className="tag practice">{scenario.practice}</span>
            <span className={`tag urgency`} style={{background: urgencyColor + '20', color: urgencyColor}}>
              {scenario.urgency} Priority
            </span>
          </div>
          <h1 className="scenario-title">{scenario.title}</h1>
          <div className="scenario-industry">📍 {scenario.industry}</div>
          <div className="scenario-description">{scenario.description}</div>
          <div className="situation-box" style={{borderColor: urgencyColor}}>
            <div className="situation-label" style={{color: urgencyColor}}>⚠ Current Situation</div>
            <div className="situation-text">{scenario.situation}</div>
          </div>
        </div>
      )}

      <div className="sim-body">
        <div className="step-header">
          <div className="step-badge">Decision {stepIndex + 1}</div>
          <h2 className="step-question">{step.question}</h2>
        </div>

        <div className="options-list">
          {step.options.map((opt, idx) => (
            <button
              key={idx}
              className={getOptionClass(idx)}
              onClick={() => handleSelect(idx)}
              disabled={revealed}
            >
              <span className="option-letter">{String.fromCharCode(65 + idx)}</span>
              <span className="option-text">{opt.text}</span>
              {revealed && opt.correct && <span className="option-tick">✓</span>}
              {revealed && idx === selected && !opt.correct && <span className="option-cross">✗</span>}
            </button>
          ))}
        </div>

        {!revealed && (
          <div className="sim-actions">
            <button className="hint-btn" onClick={() => setShowHint(!showHint)}>
              💡 {showHint ? 'Hide Hint' : 'Show Hint'}
            </button>
            {showHint && (
              <div className="hint-box">
                Think about the FIRST principle of this framework at this stage. What should always happen before taking action?
              </div>
            )}
            <button
              className="reveal-btn"
              onClick={handleReveal}
              disabled={selected === null}
              style={selected !== null ? {background: framework.color} : {}}
            >
              Submit Answer →
            </button>
          </div>
        )}

        {revealed && (
          <div className="feedback-box">
            <div className={`feedback-header ${step.options[selected].correct ? 'correct' : 'incorrect'}`}>
              {step.options[selected].correct ? '✓ Correct!' : '✗ Not quite — here\'s why:'}
              <span className="feedback-score">+{step.options[selected].score} pts</span>
            </div>
            <div className="feedback-explanation">{step.explanation}</div>
            <div className="feedback-practice">
              <span className="practice-label">Framework Principle:</span>
              <span className="practice-value">{step.practice}</span>
            </div>
            <button className="next-btn" onClick={handleNext} style={{background: framework.color}}>
              {stepIndex + 1 < totalSteps ? 'Next Decision →' : 'See Results →'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
