import React, { PureComponent } from 'react';

import './style.css';

export default class Footer extends PureComponent {
  render(){
    const {description, social, quickLinks} = this.props.component;

    return(
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <span className="copyright">{description}</span>
            </div>
            <div className="col-md-4">
              <ul className="list-inline social-buttons">
                {social.map((item, index) => {
                  return <li className="list-inline-item" key={`social-${index}`}>
                    <a href={item.link}>
                      <i className={`fa fa-${item.type}`}></i>
                    </a>
                  </li>
                })}
              </ul>
            </div>
            <div className="col-md-4">
              <ul className="list-inline quicklinks">
                {quickLinks.map((item, index) => {
                  return <li className="list-inline-item" key={`quicklinks-${index}`}>
                    <a href={item.url}>{item.text}</a>
                  </li>
                })}
              </ul>
            </div>
          </div>
        </div>
      </footer> 
    )
  }
}