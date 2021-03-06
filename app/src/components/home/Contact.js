import React, { Component } from 'react';
import '../../css/App.css';
import '../../css/Mobile.css';

export default class Contact extends Component {
    render() {
        return (
            <div id="contatti">
                <br/><br/><br/><br/>
                <p className="display-6 about-title" style={{fontSize: "30px"}}>Contatti</p>
                <p className="lead about-content" style={{marginBottom: "0"}}>tel: 349 4158040, 041 5730308</p>
                <p className="lead about-content" style={{marginBottom: "0"}}>E-mail: edilpagotto@virgilio.it</p>
                <p className="lead about-content">30036 Santa Maria di Sala - VE</p>
                <iframe 
                    title="map"
                    id="map" 
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5520.755400891162!2d12.019924!3d45.494087!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477ece7e662595af%3A0x76e343a35f893511!2sVia%20Zinalbo%2C%2059%2C%2030036%20Santa%20Maria%20di%20sala%20VE!5e1!3m2!1sit!2sit!4v1626389398526!5m2!1sit!2sit" 
                    width="1400" 
                    height="450" 
                    allowFullScreen="" 
                    loading="lazy">                        
                </iframe>
            </div>
        );
    }
}
