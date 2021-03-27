import React from 'react';
import '../App.css';
import {Helmet} from 'react-helmet';

function Contact() {
  return (
    <div>
      <Helmet>
        <title>EDILPAGOTTO - Contatti</title>
      </Helmet>
      <div id="this.map">
        <iframe id="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2796.7942878334957!2d12.019923999999994!3d45.4940871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477ece7e662595af%3A0x76e343a35f893511!2sVia%20Zinalbo%2C%2059%2C%2030036%20Santa%20Maria%20di%20sala%20VE!5e0!3m2!1sit!2sit!4v1615072639013!5m2!1sit!2sit" width="600" height="450" allowfullscreen="" loading="lazy"></iframe>
      </div>
      <div> 
        <h3>DOVE PUOI CONTATTARCI 
          <div class="contact">Tel: 349 4158040, 041 5730308</div>
          <div class="contact">E-mail: edilpagotto@virgilio.it</div>
        </h3>
        <h3>DOVE SIAMO 
          <div class="contact"> Via Zinalbo 59</div>
          <div class="contact">30036 Santa Maria di Sala - VE</div>
        </h3>
      </div>
    </div>
  );
}

export default Contact;