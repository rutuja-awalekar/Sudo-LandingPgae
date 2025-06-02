import React from 'react';
import './App.css';
import Header from './components/Header-Section';
import SearchSection from './components/Search-Section';
import FeatureSection from './components/Feature-Section';


function App() {
  return (
    <div className="App">
      <Header />
      <SearchSection />
      <FeatureSection />
    </div>
  );
}

export default App;
