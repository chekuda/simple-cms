import React, { PureComponent } from 'react';

import './style.css';

export default class Portfolio extends PureComponent {
  render(){
    const {heading, subHeading, portfolioList} = this.props.component;

    return(
      <section className="bg-light portfolio-wrapper" id="portfolio">
        <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading">{heading}</h2>
              <h3 className="section-subheading text-muted">{subHeading}</h3>
            </div>
          </div>
          <div className="row">
            {portfolioList.map((item, index) => {
              return <div className="col-md-4 col-sm-6 portfolio-item" key={`${item.heading}-${index}`}>
                <a className="portfolio-link" data-toggle="modal" href={item.link}>
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content">
                      <i className="fa fa-plus fa-3x"></i>
                    </div>
                  </div>
                  <img className="img-fluid" src={item.imageUrl} alt={item.imageAlt} />
                </a>
                <div className="portfolio-caption">
                  <h4>{item.heading}</h4>
                  <p className="text-muted">{item.subHeading}</p>
                </div>
              </div>
            })}
          </div>
      </section>  
    )
  }
}