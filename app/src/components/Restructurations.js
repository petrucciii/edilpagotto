import React from 'react';
import '../App.css';
import{Link} from 'react-router-dom';
import {Helmet} from 'react-helmet';
import Chiesa3 from "../images/productions/img_chiesa_3.jpg";

function Restruturactions() {
  return (
    <div>
      <Helmet>
        <title>EDILPAGOTTO - Ristrutturazioni</title>
      </Helmet>
      <div className="row row-cols-1 row-cols-md-3 g-4" style={{margin: 20}}>
        <Link to="/realizzazioni/ristrutturazioni/chiesa"><div className="col">
          <div className="card h-100">
            <img src={Chiesa3} className="card-img-top" alt="Ristrutturazione Chiesa di Caselle" />
            <div className="card-body">
              <h5 className="card-title">Ristrutturazione Chiesa di Caselle</h5>
            </div>
          </div>
        </div></Link>
        <div className="col">
          <div className="card h-100">
            <img src={Chiesa3} className="card-img-top" alt="Casa 2" />
            <div className="card-body">
              <h5 className="card-title">Casa 2</h5>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src={Chiesa3} className="card-img-top" alt="Casa 3" />
            <div className="card-body">
              <h5 className="card-title">Casa 3</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4" style={{margin: 20}}>
        <div className="col">
          <div className="card h-100">
            <img src={Chiesa3} className="card-img-top" alt="Casa 4" />
            <div className="card-body">
              <h5 className="card-title">Casa 4</h5>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src={Chiesa3} className="card-img-top" alt="Casa 5" />
            <div className="card-body">
              <h5 className="card-title">Casa 5</h5>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src={Chiesa3} className="card-img-top" alt="Casa 6" />
            <div className="card-body">
              <h5 className="card-title">Casa 6</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Restruturactions;