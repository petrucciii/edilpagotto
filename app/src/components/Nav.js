import React, { Component } from 'react';
import '../css/App.css';

class Nav extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar navbar-light" style={{backgroundColor: "#d3d3d3", width: "100%", position: "fixed"}} id="navbar">
          <div className="container-fluid" >
            <a className="navbar-brand" href="#home">EDILPAGOTTO</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#home">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#chisiamo">Chi Siamo</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link" href="#realizzazioni" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Realizzazioni
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" to="#proposte_edili" tabIndex="-1" aria-disabled="true">Proposte Edili</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contatti" tabIndex="-1" aria-disabled="true">Contatti</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;