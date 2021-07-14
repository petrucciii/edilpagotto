import React, { Component } from 'react';
import '../../css/App.css';


export default class Intro extends Component {
    render() {
        return (
            <div>
                <div className="intro" id="home">
                    <br/><br/><br/><br/><br/>
                    <div className="intro-content"></div>
                    <p className="display-6 intro-title" style={{fontSize: "30px"}}>EDILPAGOTTO</p>
                    <br/>
                    <p className="lead intro-text" style={{fontSize: "20px"}}>Da piú di 60 anni costruiamo e ristrutturiamo edifici abitativi e storici!</p>
                    <a href="#chisiamo" className="btn btn-primary btn-lg intro-btn">Leggi di piú</a>
                </div>
            </div>
        );
    }
}
