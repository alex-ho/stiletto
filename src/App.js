// @flow
import React from 'react';
import logo from './logo.svg';
import './App.css';
import FlowTest from './FlowTest'

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
    </header>
    <p className="App-intro">
      To get started, edit <code>src/App.js</code> and save to reload.

      <FlowTest text={'This guy is type-checked by Flow'} />
    </p>
  </div>
)

export default App;
