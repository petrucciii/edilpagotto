import React from 'react';
import '../App.css';
import {Helmet} from 'react-helmet';
import Casa1 from "../images/projects/caselle_bifamiliare_nordovest_1.png";
import Casa2 from "../images/projects/caselle_bifamiliare_sud_1.png";
import Casa3 from "../images/projects/caselle_bifamiliare_sudest_1.png";

function BifamiliareCaselleProj() {
  return (
    <div>
      <Helmet>
        <title>EDILPAGOTTO - Proposte Edili</title>
      </Helmet>
      <div class="house">
        <h3 class="house_title">Bifamiliare a Caselle di S.M. di Sala </h3>
        <div class="house_desc"> 
            <div class="slide">Progetto di una bifamiiare a Caselle di S.M. di Sala.</div>
            <div class="slide">La casa dovrebbe essere conclusa entro il ***</div>
            <div id="carousel"> 
                <div class="slide"><img class="house_img" src={Casa3} width="350px" height="250px" /></div>
                <div class="slide"><img class="house_img" src={Casa2} width="350px" height="250px" /></div>
                <div class="slide"><img class="house_img" src={Casa1} width="350px" height="250px" /></div>
            </div>
        </div>
       </div>
      </div>
  );
}

export default BifamiliareCaselleProj;