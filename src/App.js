import React from 'react';
import './App.css';
import Header from './components/Header-Section';
import SearchSection from './components/Search-Section';
import FeatureSection from './components/Feature-Section';
import SupportSection from './components/Support-Section';
import FooterSection from './components/Footer-Section';


function App() {
  return (
    <div className="App">
      <Header />
      <SearchSection />
      <FeatureSection />
      <SupportSection />
      <FooterSection />
    </div>
  );
}

export default App;
