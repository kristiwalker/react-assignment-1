import React, { Component } from 'react';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="App">
            <UserInput />
            <UserOutput />
            <UserOutput />
        </div>
    );
  }
}

export default App;
