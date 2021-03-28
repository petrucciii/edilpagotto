import React from 'react';
import '../App.css';
import{Link} from 'react-router-dom';
import {Helmet} from 'react-helmet';
import Chiesa3 from "../images/productions/img_chiesa_3.jpg";

function Historical() {
  return (
    <div>
      <Helmet>
        <title>EDILPAGOTTO - Storiche</title>
      </Helmet>
      <div class="row row-cols-1 row-cols-md-3 g-4" style={{margin: 20}}>
        <Link to="#"><div class="col">
          <div class="card h-100">
            <img src={Chiesa3} class="card-img-top" alt="Casa 1" />
            <div class="card-body">
              <h5 class="card-title">Casa 1</h5>
            </div>
          </div>
        </div></Link>
        <div class="col">
          <div class="card h-100">
            <img src={Chiesa3} class="card-img-top" alt="Casa 2" />
            <div class="card-body">
              <h5 class="card-title">Casa 2</h5>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img src={Chiesa3} class="card-img-top" alt="Casa 3" />
            <div class="card-body">
              <h5 class="card-title">Casa 3</h5>
            </div>
          </div>
        </div>
      </div>
      <div class="row row-cols-1 row-cols-md-3 g-4" style={{margin: 20}}>
        <div class="col">
          <div class="card h-100">
            <img src={Chiesa3} class="card-img-top" alt="Casa 4" />
            <div class="card-body">
              <h5 class="card-title">Casa 4</h5>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img src={Chiesa3} class="card-img-top" alt="Casa 5" />
            <div class="card-body">
              <h5 class="card-title">Casa 5</h5>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img src={Chiesa3} class="card-img-top" alt="Casa 6" />
            <div class="card-body">
              <h5 class="card-title">Casa 6</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Historical;