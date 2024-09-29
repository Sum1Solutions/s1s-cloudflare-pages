import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import YouTubeEmbed from './components/YouTubeEmbed';

console.log('App component is rendering');

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<YouTubeEmbed />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;