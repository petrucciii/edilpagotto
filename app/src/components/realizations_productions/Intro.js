import React, { Component } from 'react'

export default class IntroHouse extends Component {
    render() {
        return (
            <div id={this.props.idIntro}>
                <br/><br/><br/><br/>
                <p className="display-6 about-title" style={{fontSize: "30px"}}>{this.props.titleIntro}</p>
            </div>
        )
    }
}
