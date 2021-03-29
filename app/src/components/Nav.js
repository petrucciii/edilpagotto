import React from 'react';
import '../App.css';

function Nav() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id="navbar">
        <div className="container-fluid" >
          <a className="navbar-brand" href="/home">EDILPAGOTTO</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/home" >Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/home#chi_siamo">Chi Siamo</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/realizzazioni" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Realizzazioni
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown" id="li_hidden">
                  <li><a className="dropdown-item" id="li_hidden_1" href="/realizzazioni/ristrutturazioni">Ristrutturazioni</a></li>
                  <li><a className="dropdown-item" id="li_hidden_2" href="/realizzazioni/storiche">Storiche</a></li>
                  <li><a className="dropdown-item" id="li_hidden_3" href="/realizzazioni/recenti">Recenti</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/proposte_edili" tabIndex="-1" aria-disabled="true">Proposte Edili</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contatti" tabIndex="-1" aria-disabled="true">Contatti</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <script src="https://unpkg.com/react/umd/react.production.min.js" crossOrigin="true"></script>

      <script
        src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
        crossOrigin="true"></script>

      <script
        src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
        crossOrigin="true"></script>

      <script>var Alert = ReactBootstrap.Alert;</script>

    </div>
  );
}

export default Nav;