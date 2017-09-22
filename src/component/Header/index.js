import React, { PureComponent } from 'react';

export default class Header extends PureComponent {
  render(){
    return(
      <header className="masthead">
        <div className="container">
          <div className="intro-text">
            <div className="intro-lead-in">Welcome To Our Studio!</div>
            <div className="intro-heading">It's Nice To Meet You</div>
            <a className="btn btn-xl js-scroll-trigger" href="#services">Tell Me More</a>
          </div>
        </div>
      </header>
    )
  }
}