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
      <div className="row row-cols-1 row-cols-md-3 g-4" style={{margin: 20}}>
        <Link to="/proposte_edili/bifamiliare_caselle">
          <div className="col">
            <div className="card h-100">
              <img src={Casa1} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Bifamiliare Caselle</h5>
              </div>
            </div>
          </div>
        </Link>
        <div className="col">
          <div className="card h-100">
            <img src={Casa1} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Casa 2</h5>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src={Casa1} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Casa 3</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4" style={{margin: 20}}>
        <div className="col">
          <div className="card h-100">
            <img src={Casa1} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Casa 4</h5>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src={Casa1} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Casa 5</h5>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src={Casa1} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Casa 6</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;