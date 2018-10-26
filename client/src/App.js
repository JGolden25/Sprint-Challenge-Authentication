import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, NavLink } from 'react-router-dom';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Jokes from './components/Jokes';

class App extends Component {
  state = {
    username:"",
    password:"",
  }

  inputHandler = e => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value
    })
  }

  render() {
    return (
      <div className="App App-header">
      <h1>Sprint Challenge Client</h1>
      <nav>
        <NavLink to="/signup">Sign Up</NavLink>
        &nbsp;|&nbsp;
        <NavLink to="/signin">Sign In</NavLink>
        &nbsp;|&nbsp;
        <NavLink to="/jokes">Jokes</NavLink>
      </nav>
        <Route path="/signin" component={SignIn}/>
        <Route path="/signup" render={ props => { 
        return <SignUp inputHandler={this.inputHandler}/>
        }} />
        <Route path="/jokes" render={ props => { 
        return <Jokes />
        }} />
      </div>
    );
  }
}

export default App;
