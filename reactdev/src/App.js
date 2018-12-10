import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import { journalData } from './journalData.js';

class App extends Component {
  state = {
    githubHandle: 'lndubose',
    journalData,
  };

  render() {
    return <div className="App" />;
  }
}

export default App;
