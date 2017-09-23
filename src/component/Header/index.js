import React, { PureComponent } from 'react';

import './style.css';

const header = {
  backgroundImage:'/img/header-bg.jpg',
  leadIn:'Welcome To Our Studio!',
  heading:'It\'s Nice To Meet You',
  buttonText:'Tell Me More'
}

export default class Header extends PureComponent {
  render(){
    return(
      <header className="masthead" style={{backgroundImage:`url(${header.backgroundImage})`}}>
        <div className="container">
          <div className="intro-text">
            <div className="intro-lead-in">{header.leadIn}</div>
            <div className="intro-heading">{header.heading}</div>
            <a className="btn btn-xl" href="#services">{header.buttonText}</a>
          </div>
        </div>
      </header>
    )
  }
}