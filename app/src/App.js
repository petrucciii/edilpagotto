import React, { Component } from 'react';
import Nav from './components/Nav';
import Intro from './components/home/Intro';
import About from './components/home/About';
import Contact from './components/home/Contact';
import Footer from './components/Footer';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <Intro/>
        <About/>
        <Contact/>
        <Footer/>
      </div>
    );
  }
}

export default App;
