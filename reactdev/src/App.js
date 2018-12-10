import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import { journalData } from './journalData.js';
import Week from './components/Week';
import MainCards from './components/MainCards';

class App extends Component {
  state = {
    githubHandle: 'lndubose',
    journalData,
  };

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <Route exact path="/" render={props => <MainCards />} />
        {this.state.journalData.map((week, i) => (
          <div>
            <Route
              path={`/week${i + 1}`}
              render={props => <Week {...props} week={week} />}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default App;
