import React from 'react';
import Header from './Header';
import FilterBar from './FilterBar';
import DestinationSection from './DestinationSection';
import RecommendedSection from './RecommendedSection';
import PreviouslyVisitedSection from './PreviouslyVisitedSection';
import Footer from './Footer';

function HomePage() {
  return (
    <div className="home-page">
      <Header />
      <FilterBar />
      <DestinationSection />
      <RecommendedSection />
      <PreviouslyVisitedSection />
      <Footer />
    </div>
  );
}

export default HomePage;
