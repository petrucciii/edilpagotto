import React from 'react';
import '../App.css';
import {Helmet} from 'react-helmet';
import Chiesa1 from "../images/productions/img_chiesa_3.jpg";
import Chiesa2 from "../images/productions/img_chiesa_2.jpg";
import Chiesa3 from "../images/productions/img_chiesa_1.jpg";


function Chiesa() {
  return (
    <div>
      <Helmet>
        <title>EDILPAGOTTO - Ristrutturazioni</title>
      </Helmet>
      <div className="house">
        <h3 className="house_title">Ristrutturazione Chiesa di Caselle di S.M. di Sala </h3>
        <div className="house_desc"> 
            <div className="slide">Ristrutturazione della Chiesa di Caselle svolta nel 2016.</div>
            <div className="slide">Questa ristrutturazione ha impiegato circa 1 anno ed abbiamo ...</div>
            <div id="carousel"> 
                <div className="slide"><img alt="Chiesa" className="house_img" src={Chiesa3} width="350px" height="250px" /></div>
                <div className="slide"><img alt="Chiesa" className="house_img" src={Chiesa2} width="350px" height="250px" /></div>
                <div className="slide"><img alt="Chiesa" className="house_img" src={Chiesa1} width="350px" height="250px" /></div>
            </div>
        </div>
       </div>
      </div>
  );
}

export default Chiesa;