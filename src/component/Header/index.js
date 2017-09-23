import React, { PureComponent } from 'react';

import './style.css';

export default class Header extends PureComponent {
  render(){
    const {backgroundImage, leadIn, heading, buttonText} = this.props.component;
    
    return(
      <header className="masthead" style={{backgroundImage:`url(${backgroundImage})`}}>
        <div className="container">
          <div className="intro-text">
            <div className="intro-lead-in">{leadIn}</div>
            <div className="intro-heading">{heading}</div>
            <a className="btn btn-xl" href="#services">{buttonText}</a>
          </div>
        </div>
      </header>
    )
  }
}