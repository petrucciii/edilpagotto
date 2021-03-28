import React from 'react';
import '../App.css';
import {Helmet} from 'react-helmet';
import Casa1 from "../images/projects/caselle_bifamiliare_nordovest_1.png";
import{Link} from 'react-router-dom';

function Projects() {
  return (
    <div>
      <Helmet>
        <title>EDILPAGOTTO - Proposte Edili</title>
      </Helmet>
      <div class="row row-cols-1 row-cols-md-3 g-4" style={{margin: 20}}>
        <Link to="/proposte_edili/bifamiliare_caselle">
          <div class="col">
            <div class="card h-100">
              <img src={Casa1} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Bifamiliare Caselle</h5>
              </div>
            </div>
          </div>
        </Link>
        <div class="col">
          <div class="card h-100">
            <img src={Casa1} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Casa 2</h5>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img src={Casa1} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Casa 3</h5>
            </div>
          </div>
        </div>
      </div>
      <div class="row row-cols-1 row-cols-md-3 g-4" style={{margin: 20}}>
        <div class="col">
          <div class="card h-100">
            <img src={Casa1} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Casa 4</h5>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img src={Casa1} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Casa 5</h5>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img src={Casa1} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Casa 6</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;