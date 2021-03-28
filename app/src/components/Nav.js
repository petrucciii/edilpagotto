import React from 'react';
import '../App.css';

function Nav() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark" id="navbar">
        <div class="container-fluid" >
          <a class="navbar-brand" href="/home">EDILPAGOTTO</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="/home" >Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#chi_siamo">Chi Siamo</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="/realizzazioni" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Realizzazioni
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown" id="li_hidden">
                  <li><a class="dropdown-item" id="li_hidden_1" href="/realizzazioni/ristrutturazioni">Ristrutturazioni</a></li>
                  <li><a class="dropdown-item" id="li_hidden_2" href="/realizzazioni/storiche">Storiche</a></li>
                  <li><a class="dropdown-item" id="li_hidden_3" href="/realizzazioni/recenti">Recenti</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/proposte_edili" tabindex="-1" aria-disabled="true">Proposte Edili</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/contatti" tabindex="-1" aria-disabled="true">Contatti</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>

      <script
        src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
        crossorigin></script>

      <script
        src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
        crossorigin></script>

      <script>var Alert = ReactBootstrap.Alert;</script>

    </div>
  );
}

export default Nav;