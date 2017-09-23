import React, { PureComponent } from 'react';

import './style.css';

const footer = {
  description:'Copyright simple-cms 2017',
  social:[
    {
      type:'facebook',
      link:'#'
    },{
      type:'twitter',
      link:'#'
    },{
      type:'linkedin',
      link:'#'
    }
  ],
  quickLinks:[
    {
      text:'Privacy Policy',
      url:'#'
    }, {
      text:'Terms of Use',
      url:'#'
    }
  ]
}

export default class Footer extends PureComponent {
  render(){
    return(
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <span className="copyright">{footer.description}</span>
            </div>
            <div className="col-md-4">
              <ul className="list-inline social-buttons">
                {footer.social.map(item => {
                  return <li className="list-inline-item">
                    <a href={item.link}>
                      <i className={`fa fa-${item.type}`}></i>
                    </a>
                  </li>
                })}
              </ul>
            </div>
            <div className="col-md-4">
              <ul className="list-inline quicklinks">
                {footer.quickLinks.map((item, index) => {
                  return <li className={`list-inline-item quicklinks-${index}`}>
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