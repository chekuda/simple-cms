import React, { PureComponent } from 'react';

import './style.css';

export default class Navigation extends PureComponent {
  state = {
    navState: ''
  }

  componentDidMount() {
    let that = this;
    
    window.onscroll = () => {
        if (window.scrollY > 100 && this.state.navState !== 'fixedToTop') {
          that.setState({
            navState: 'fixedToTop'
          })
        } else if (window.scrollY < 100  && this.state.navState !== '') {
          that.setState({
            navState: ''
          })
        }
    };
  }

  render(){
    const {siteName, navigationItems} = this.props.component;
    
    return(
      <nav className={`navbar navbar-expand-lg navbar-dark fixed-top ${this.state.navState}`} id="mainNav">
        <div className="container">
          <a className="navbar-brand" href="#page-top">{siteName}</a>
          <div className="navbarResponsive" id="navbarResponsive">
            <ul className="navbar-nav ">
              {navigationItems.map((item, index) => {
                return(
                  <li className="nav-item" key={item}>
                    <a className="nav-link" href={`#${item.toLowerCase()}`}>{item}</a>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}