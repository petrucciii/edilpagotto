import React from 'react';
import '../App.css';
import {Helmet} from 'react-helmet';
import imgHomechisiamo from '../images/home/img_who_1.jpg';
import imgHomestoria from '../images/home/img_who_2.jpg';

function Home() {
  return (
    <div>
      <Helmet>
        <title>EDILPAGOTTO - Home</title>
      </Helmet>
      <div className="labelbar">
        <h3>DA PI&Ugrave; DI 60 ANNI COSTRUIAMO E RISTRUTTURIAMO EDIFICI ABITATIVI E STORICI!</h3>
      </div>
  
      <div id="chi_siamo">
        <div className="who">
          <h3 className="who_title">CHI SIAMO</h3>
          <div className="who_content">
            Siamo un azienda edile fondata da nostro padre Carlo Pagotto, portata avanti da noi, due dei suoi figli: Sandro e Gianpietro Pagotto. Costruiamo edifici residenziali e non residenziali.
            Siamo un azienda edile fondata da nostro padre Carlo Pagotto, portata avanti da noi, due dei suoi figli: Sandro e Gianpietro Pagotto. Costruiamo edifici residenziali e non residenziali.
            Siamo un azienda edile fondata da nostro padre Carlo Pagotto, portata avanti da noi, due dei suoi figli: Sandro e Gianpietro Pagotto. Costruiamo edifici residenziali e non residenziali.
            Siamo un azienda edile fondata da nostro padre Carlo Pagotto, portata avanti da noi, due dei suoi figli: Sandro e Gianpietro Pagotto. Costruiamo edifici residenziali e non residenziali.
            Siamo un azienda edile fondata da nostro padre Carlo Pagotto, portata avanti da noi, due dei suoi figli: Sandro e Gianpietro Pagotto. Costruiamo edifici residenziali e non residenziali.
            Siamo un azienda edile fondata da nostro padre Carlo Pagotto, portata avanti da noi, due dei suoi figli: Sandro e Gianpietro Pagotto. Costruiamo edifici residenziali e non residenziali.
            Siamo un azienda edile fondata da nostro padre Carlo Pagotto, portata avanti da noi, due dei suoi figli: Sandro e Gianpietro Pagotto. Costruiamo edifici residenziali e non residenziali.
          </div>
          <img id="img_homewho" src={imgHomechisiamo} alt="Sandro e Gianpietro Pagotto"/>
          <div className="img_homewho_desc">Sandro e Gianpietro Pagotto</div>
        </div>
        <h4 className="history_title">STORIA</h4>
        <div className="history_content">
          L'azienda &egrave; nata nel 1960 e nostro padre ha cominciato a costruire edifici nella zona di S.M. di Sala.
          L'azienda &egrave; nata nel 1960 e nostro padre ha cominciato a costruire edifici nella zona di S.M. di Sala.
          L'azienda &egrave; nata nel 1960 e nostro padre ha cominciato a costruire edifici nella zona di S.M. di Sala.
          L'azienda &egrave; nata nel 1960 e nostro padre ha cominciato a costruire edifici nella zona di S.M. di Sala.
          L'azienda &egrave; nata nel 1960 e nostro padre ha cominciato a costruire edifici nella zona di S.M. di Sala.
          L'azienda &egrave; nata nel 1960 e nostro padre ha cominciato a costruire edifici nella zona di S.M. di Sala.
        </div>
        <img id="img_homehistory" src={imgHomestoria} alt="Carlo Paolo Pagotto"/>
        <div className="img_homehistory_desc">Carlo Paolo Pagotto</div>
      </div>

    </div>
  );
}

export default Home;