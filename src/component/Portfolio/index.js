import React, { PureComponent } from 'react';

import './style.css';

const portfolio = {
  heading: 'Portfolio',
  subHeading: 'Lorem ipsum dolor sit amet consectetur.',
  portfolioList: [
    {
      imageUrl:'img/portfolio/01-thumbnail.jpg',
      imageAlt:'',
      link:'#portfolioModal1',
      heading:'Threads',
      subHeading:'Illustration',
    },
    {
      imageUrl:'img/portfolio/02-thumbnail.jpg',
      imageAlt:'',
      link:'#portfolioModal1',
      heading:'Explore',
      subHeading:'Graphic Design',
    },
    {
      imageUrl:'img/portfolio/03-thumbnail.jpg',
      imageAlt:'',
      link:'#portfolioModal1',
      heading:'Finish',
      subHeading:'Identity',
    },
    {
      imageUrl:'img/portfolio/04-thumbnail.jpg',
      imageAlt:'',
      link:'#portfolioModal1',
      heading:'Lines',
      subHeading:'Branding',
    },
    {
      imageUrl:'img/portfolio/05-thumbnail.jpg',
      imageAlt:'',
      link:'#portfolioModal1',
      heading:'Southwest',
      subHeading:'Website Design',
    },
    {
      imageUrl:'img/portfolio/06-thumbnail.jpg',
      imageAlt:'',
      link:'#portfolioModal1',
      heading:'Lorne',
      subHeading:'Illustration',
    }
  ]
}

export default class Portfolio extends PureComponent {
  render(){
    return(
      <section className="bg-light portfolio-wrapper" id="portfolio">
        <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading">{portfolio.heading}</h2>
              <h3 className="section-subheading text-muted">{portfolio.subHeading}</h3>
            </div>
          </div>
          <div className="row">
            {portfolio.portfolioList.map((item, index) => {
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