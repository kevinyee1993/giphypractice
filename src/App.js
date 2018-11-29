import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// components
import SearchBar from './components/search_bar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar />
      </div>
    );
  }
}

export default App;
