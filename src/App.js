import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// components
import SearchBar from './components/search_bar';
import GifDisplay from './components/gif_display';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar />
        <GifDisplay />
      </div>
    );
  }
}

export default App;
