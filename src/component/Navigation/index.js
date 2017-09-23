import React, { PureComponent } from 'react';

import './style.css';

const navigation = {
  siteName: 'Simple CMS',
  navigationItems: ['Services', 'Portfolio', 'About', 'Team', 'Contact']
}

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
    return(
      <nav className={`navbar navbar-expand-lg navbar-dark fixed-top ${this.state.navState}`} id="mainNav">
        <div className="container">
          <a className="navbar-brand" href="#page-top">{navigation.siteName}</a>
          <div className="navbarResponsive" id="navbarResponsive">
            <ul className="navbar-nav ">
              {navigation.navigationItems.map((navigationItem, index) => {
                return(
                  <li className="nav-item" key={navigationItem}>
                    <a className="nav-link" href={`#${navigationItem.toLowerCase()}`}>{navigationItem}</a>
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