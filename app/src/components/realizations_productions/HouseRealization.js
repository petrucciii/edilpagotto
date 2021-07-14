import React, { Component } from 'react';
import '../../css/App.css'

export default class HouseRealization extends Component {
    render() {
        return (
            <div className="cardHome">
                <img src={this.props.imgHouse} width="170px" height="170px" className="cardHome-img" alt="house" />
                <p className="lead">{this.props.titleHouse}</p>
            </div>
        );
    }
}
