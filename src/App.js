import React from 'react';
import './App.css';
import HomePage from './homePage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HomePage /> {/* Lagg till din HomePage-komponent har */}
      </header>
    </div>
  );
}

export default App;