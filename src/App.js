/* jshint esversion: 6 */

import React, {Component} from 'react';
import './App.css';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {

    state = {
        username: "myUsername"
    };

    inputChangeHandler = (event) => {
        this.setState({username: event.target.value})
    }

    render() {
        const style = {
            'text-align': 'center',
            'padding': '3px',
        };

        return (
        <div className="App">
            <UserInput
                style={style}
                currentName={this.state.username}
                changed={this.inputChangeHandler} />
            <UserOutput currentName={this.state.username}/>
        </div>);
    }
}

export default App;
