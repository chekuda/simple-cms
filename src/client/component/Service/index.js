import React, { PureComponent } from 'react';

import './style.css'

export default class Service extends PureComponent {
  render(){
    const {heading, subHeading, serviceList} = this.props.component;

    return(
      <section id="services">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading">{heading}</h2>
              <h3 className="section-subheading text-muted">{subHeading}</h3>
            </div>
          </div>
          <div className="row text-center">
            {serviceList.map((item, index) => {
              return <div className="col-md-4" key={`service-${index}`}>
                <span className="fa-stack fa-4x">
                  <i className="fa fa-circle fa-stack-2x text-primary"></i>
                  <i className={`fa ${item.icon} fa-stack-1x fa-inverse`}></i>
                </span>
                <h4 className="service-heading">{item.heading}</h4>
                <p className="text-muted">{item.description}</p>
              </div>
            })}
          </div>
        </div>
      </section>
    )
  }
}