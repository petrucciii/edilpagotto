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
      <div className="house">
        <h3 className="house_title">Bifamiliare a Caselle di S.M. di Sala </h3>
        <div className="house_desc"> 
            <div className="slide">Progetto di una bifamiiare a Caselle di S.M. di Sala.</div>
            <div className="slide">La casa dovrebbe essere conclusa entro il ***</div>
            <div id="carousel"> 
                <div className="slide"><img alt="Bifamiliare" className="house_img" src={Casa3} width="350px" height="250px" /></div>
                <div className="slide"><img alt="Bifamiliare" className="house_img" src={Casa2} width="350px" height="250px" /></div>
                <div className="slide"><img alt="Bifamiliare" className="house_img" src={Casa1} width="350px" height="250px" /></div>
            </div>
        </div>
       </div>
      </div>
  );
}

export default BifamiliareCaselleProj;