import React from 'react';

function SearchSection() {
  return (
    <section className="search-section">
      <div className="search-container">
        <h1>What are you looking for?</h1>
        <p className="sub-text">Search here to get answers to your questions</p>
        
        <div className="search-bar">
          <input type="text" placeholder="Search on Sudoconsultants.com" />
          <button>Search</button>
        </div>

        <div className="popular-tags">
          <span>Popular:</span>
          <button>WordPress</button>
          <button>Getting</button>
          <button>Footer</button>
        </div>
      </div>
    </section>
  );
}

export default SearchSection;