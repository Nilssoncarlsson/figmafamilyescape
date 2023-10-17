import React from 'react';
import Header from './components/Header';
import Login from './components/Login';
import FilterBar from './components/FilterBar';
import DestinationSection from './components/DestinationSection';
import RecommendedSection from './components/RecommendedSection';
import PreviouslyVisitedSection from './components/PreviouslyVisitedSection';
import SearchBar from '/Users/lisanilssoncarlsson/figmafamilyescape/src/components/SearchBar.jsx';
import Footer from './components/Footer';

function HomePage() {
  return (
    <div className="home-page">
      <Header/>
      <SearchBar/>
      <FilterBar/>
      <DestinationSection/>
      <RecommendedSection/>
      <PreviouslyVisitedSection/>
      <Footer/>
    </div>
  );
}

export default HomePage;
