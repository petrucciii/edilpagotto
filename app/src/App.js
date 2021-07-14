import React, { Component } from 'react';
import Nav from './components/Nav';
import IntroHome from './components/home/Intro';
import About from './components/home/About';
import IntroHouse from './components/realizations_productions/Intro';
import HouseRealization from './components/realizations_productions/HouseRealization';
import Contact from './components/home/Contact';
import Footer from './components/Footer';
import Chiesa from './images/realizations/img_chiesa_4.jpg';
import Bifamiliare1 from './images/projects/caselle_bifamiliare_1.png'
import './css/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgChiesa: Chiesa, titleChiesa: 'Ristrutturazione Chiesa di Caselle',
      imgProjBifamiliare1: Bifamiliare1, titleProjBifamiliare1: 'Bifamiliare di Caselle',
    }
  }
  

  render() {
    return (
      <div>
        <Nav/>
        <IntroHome/>
        <About/>
        <IntroHouse
          idIntro="realizzazioni"
          titleIntro="Realizzazioni"
        />
        <div style={{display: 'inline-block'}}>
          <HouseRealization
            imgHouse={this.state.imgChiesa}
            titleHouse={this.state.titleChiesa}
          />
        </div>
        <IntroHouse
          idIntro="proposte_edili"
          titleIntro="Proposte Edili"
        />
        <div style={{display: 'inline-block'}}>
          <HouseRealization
            imgHouse={this.state.imgProjBifamiliare1}
            titleHouse={this.state.titleProjBifamiliare1}
          />
        </div>
        <Contact/>
        <Footer/>
      </div>
    );
  }
}

export default App;
