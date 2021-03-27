import React from 'react';
import '../App.css';
import {Helmet} from 'react-helmet';

function Error() {
  return (
    <div>
      <Helmet>
        <title>EDILPAGOTTO - Errore 404</title>
      </Helmet>
      <div id="notfound">
        <div class="notfound">
            <div class="error404">
                <h1>
                    <span>4</span>
                    <span>0</span>
                    <span>4</span>
                </h1>
            </div>
            <h2>Pagina non tovata</h2>
            <center><a class="but_home" href="/home">Torna alla Home</a></center>
        </div>
      </div>
    </div>
  );
}

export default Error;