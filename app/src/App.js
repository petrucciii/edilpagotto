import React from 'react';
import './App.css';
import Home from './components/Home';
import Contact from './components/Contact';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Productions from './components/Productions';
import Projects from './components/Projects';
import Restruturactions from './components/Restructurations';
import Recent from './components/Recent';
import Historical from './components/Historical';
import Error from './components/Error';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Helmet} from 'react-helmet';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/contatti" component={Contact} />
          <Route exact path="/realizzazioni" component={Productions} />
          <Route exact path="/realizzazioni/ristrutturazioni" component={Restruturactions} />
          <Route exact path="/realizzazioni/recenti" component={Recent} />
          <Route exact path="/realizzazioni/storiche" component={Historical} />
          <Route exact path="/proposte_edili" component={Projects} />
          <Route path="*" component={Error} />
  
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
