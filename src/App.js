import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import NavBar from './ui/NavBar';
import Home from './container/Home';

class App extends Component {
  render() {
    const logo = "Teste"
    return (
      <div className="container-fluid">
        <NavBar logo={logo} />
        <Home />
      </div>
    );
  }
}

export default App;
