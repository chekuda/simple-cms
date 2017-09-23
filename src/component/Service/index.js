import React, { PureComponent } from 'react';

import './style.css'

const service = {
  heading: 'Services',
  subHeading: 'Lorem ipsum dolor sit amet consectetur.',
  serviceList: [
    {
      heading: 'E-Commerce',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.',
      icon: 'fa-shopping-cart'
    },
    {
      heading: 'Responsive Design',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.',
      icon: 'fa-laptop'
    },
    {
      heading: 'Web Security',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.',
      icon: 'fa-lock'
    }
  ]
}

export default class Service extends PureComponent {
  render(){
    return(
      <section id="services">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading">{service.heading}</h2>
              <h3 className="section-subheading text-muted">{service.subHeading}</h3>
            </div>
          </div>
          <div className="row text-center">
            {service.serviceList.map(item => {
              return <div className="col-md-4">
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