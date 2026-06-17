import React, { useState, useEffect } from 'react';
import Landing from './components/Landing';
import Dashboard from './components/Dashboard';
import Simulator from './components/Simulator';
import Results from './components/Results';
import Library from './components/Library';
import './App.css';

export default function App() {
  const [page, setPage] = useState('landing');
  const [activeScenario, setActiveScenario] = useState(null);
  const [activeFramework, setActiveFramework] = useState(null);
  const [sessionResults, setSessionResults] = useState(null);
  const [progress, setProgress] = useState(() => {
    try { return JSON.parse(localStorage.getItem('practisim_progress')) || {}; } catch { return {}; }
  });

  useEffect(() => {
    localStorage.setItem('practisim_progress', JSON.stringify(progress));
  }, [progress]);

  const saveResult = (scenarioId, score, maxScore) => {
    setProgress(prev => ({
      ...prev,
      [scenarioId]: { score, maxScore, date: new Date().toISOString(), pct: Math.round((score / maxScore) * 100) }
    }));
  };

  const startScenario = (scenario, framework) => {
    setActiveScenario(scenario);
    setActiveFramework(framework);
    setSessionResults(null);
    setPage('simulator');
  };

  const finishScenario = (results) => {
    setSessionResults(results);
    saveResult(results.scenarioId, results.score, results.maxScore);
    setPage('results');
  };

  const nav = (p) => { setPage(p); window.scrollTo(0,0); };

  return (
    <div className="app">
      {page === 'landing' && <Landing onStart={() => nav('dashboard')} />}
      {page === 'dashboard' && <Dashboard progress={progress} onStart={startScenario} onLibrary={() => nav('library')} onHome={() => nav('landing')} />}
      {page === 'library' && <Library progress={progress} onStart={startScenario} onBack={() => nav('dashboard')} />}
      {page === 'simulator' && activeScenario && (
        <Simulator scenario={activeScenario} framework={activeFramework} onFinish={finishScenario} onExit={() => nav('dashboard')} />
      )}
      {page === 'results' && sessionResults && (
        <Results results={sessionResults} scenario={activeScenario} framework={activeFramework} onNext={() => nav('library')} onDashboard={() => nav('dashboard')} />
      )}
    </div>
  );
}
