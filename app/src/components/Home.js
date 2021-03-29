import React from 'react';
import '../App.css';
import {Helmet} from 'react-helmet';

function Home() {
  return (
    <div>
      <Helmet>
        <title>EDILPAGOTTO - Home</title>
      </Helmet>
      <div class="labelbar">
        <h3>DA PI&Ugrave; DI 60 ANNI COSTRUIAMO E RISTRUTTURIAMO EDIFICI ABITATIVI E STORICI!</h3>
      </div>
  
      <div id="chi_siamo">
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Chi Siamo
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <div>
                  Siamo un azienda edile fondata da nostro padre Carlo Pagotto, portata avanti da noi, due dei suoi figli: Sandro e Gianpietro Pagotto. Costruiamo edifici residenziali e non residenziali. 
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Storia
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <div>L'azienda &egrave; nata nel 1960 e nostro padre ha cominciato a costruire edifici nella zona di S.M. di Sala.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;