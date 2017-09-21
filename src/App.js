import React, { Component } from 'react';
import logo from './logo.svg';
import './agency.css';

class App extends Component {
  render() {
    return (
    <div className="startPoint">
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
        <div className="container">
          <a className="navbar-brand js-scroll-trigger" href="#page-top">Start Bootstrap</a>
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            Menu
            <i className="fa fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#services">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#portfolio">Portfolio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#team">Team</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <header className="masthead">
        <div className="container">
          <div className="intro-text">
            <div className="intro-lead-in">Welcome To Our Studio!</div>
            <div className="intro-heading">It's Nice To Meet You</div>
            <a className="btn btn-xl js-scroll-trigger" href="#services">Tell Me More</a>
          </div>
        </div>
      </header>

      <section id="services">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading">Services</h2>
              <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i className="fa fa-circle fa-stack-2x text-primary"></i>
                <i className="fa fa-shopping-cart fa-stack-1x fa-inverse"></i>
              </span>
              <h4 className="service-heading">E-Commerce</h4>
              <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
            </div>
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i className="fa fa-circle fa-stack-2x text-primary"></i>
                <i className="fa fa-laptop fa-stack-1x fa-inverse"></i>
              </span>
              <h4 className="service-heading">Responsive Design</h4>
              <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
            </div>
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i className="fa fa-circle fa-stack-2x text-primary"></i>
                <i className="fa fa-lock fa-stack-1x fa-inverse"></i>
              </span>
              <h4 className="service-heading">Web Security</h4>
              <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
            </div>
          </div>
        </div>
      </section>

      
      <section className="bg-light" id="portfolio">
        <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading">Portfolio</h2>
              <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 col-sm-6 portfolio-item">
              <a className="portfolio-link" data-toggle="modal" href="#portfolioModal1">
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content">
                    <i className="fa fa-plus fa-3x"></i>
                  </div>
                </div>
                <img className="img-fluid" src="img/portfolio/01-thumbnail.jpg" alt="" />
              </a>
              <div className="portfolio-caption">
                <h4>Threads</h4>
                <p className="text-muted">Illustration</p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 portfolio-item">
              <a className="portfolio-link" data-toggle="modal" href="#portfolioModal2">
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content">
                    <i className="fa fa-plus fa-3x"></i>
                  </div>
                </div>
                <img className="img-fluid" src="img/portfolio/02-thumbnail.jpg" alt=""/>
              </a>
              <div className="portfolio-caption">
                <h4>Explore</h4>
                <p className="text-muted">Graphic Design</p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 portfolio-item">
              <a className="portfolio-link" data-toggle="modal" href="#portfolioModal3">
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content">
                    <i className="fa fa-plus fa-3x"></i>
                  </div>
                </div>
                <img className="img-fluid" src="img/portfolio/03-thumbnail.jpg" alt=""/>
              </a>
              <div className="portfolio-caption">
                <h4>Finish</h4>
                <p className="text-muted">Identity</p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 portfolio-item">
              <a className="portfolio-link" data-toggle="modal" href="#portfolioModal4">
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content">
                    <i className="fa fa-plus fa-3x"></i>
                  </div>
                </div>
                <img className="img-fluid" src="img/portfolio/04-thumbnail.jpg" alt=""/>
              </a>
              <div className="portfolio-caption">
                <h4>Lines</h4>
                <p className="text-muted">Branding</p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 portfolio-item">
              <a className="portfolio-link" data-toggle="modal" href="#portfolioModal5">
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content">
                    <i className="fa fa-plus fa-3x"></i>
                  </div>
                </div>
                <img className="img-fluid" src="img/portfolio/05-thumbnail.jpg" alt=""/>
              </a>
              <div className="portfolio-caption">
                <h4>Southwest</h4>
                <p className="text-muted">Website Design</p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 portfolio-item">
              <a className="portfolio-link" data-toggle="modal" href="#portfolioModal6">
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content">
                    <i className="fa fa-plus fa-3x"></i>
                  </div>
                </div>
                <img className="img-fluid" src="img/portfolio/06-thumbnail.jpg" alt=""/>
              </a>
              <div className="portfolio-caption">
                <h4>Window</h4>
                <p className="text-muted">Photography</p>
              </div>
            </div>
          </div>
      </section>  

      
      {/* <section id="about">
        <div class="container">
          <div className="row">
            <div class="col-lg-12 text-center">
              <h2 class="section-heading">About</h2>
              <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <ul class="timeline">
                <li>
                  <div class="timeline-image">
                    <img class="rounded-circle img-fluid" src="img/about/1.jpg" alt="">
                  </div>
                  <div class="timeline-panel">
                    <div class="timeline-heading">
                      <h4>2009-2011</h4>
                      <h4 class="subheading">Our Humble Beginnings</h4>
                    </div>
                    <div class="timeline-body">
                      <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                    </div>
                  </div>
                </li>
                <li class="timeline-inverted">
                  <div class="timeline-image">
                    <img class="rounded-circle img-fluid" src="img/about/2.jpg" alt="">
                  </div>
                  <div class="timeline-panel">
                    <div class="timeline-heading">
                      <h4>March 2011</h4>
                      <h4 class="subheading">An Agency is Born</h4>
                    </div>
                    <div class="timeline-body">
                      <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="timeline-image">
                    <img class="rounded-circle img-fluid" src="img/about/3.jpg" alt="">
                  </div>
                  <div class="timeline-panel">
                    <div class="timeline-heading">
                      <h4>December 2012</h4>
                      <h4 class="subheading">Transition to Full Service</h4>
                    </div>
                    <div class="timeline-body">
                      <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                    </div>
                  </div>
                </li>
                <li class="timeline-inverted">
                  <div class="timeline-image">
                    <img class="rounded-circle img-fluid" src="img/about/4.jpg" alt="">
                  </div>
                  <div class="timeline-panel">
                    <div class="timeline-heading">
                      <h4>July 2014</h4>
                      <h4 class="subheading">Phase Two Expansion</h4>
                    </div>
                    <div class="timeline-body">
                      <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                    </div>
                  </div>
                </li>
                <li class="timeline-inverted">
                  <div class="timeline-image">
                    <h4>Be Part
                      <br>Of Our
                      <br>Story!</h4>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      
      <section class="bg-light" id="team">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 text-center">
              <h2 class="section-heading">Our Amazing Team</h2>
              <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-4">
              <div class="team-member">
                <img class="mx-auto rounded-circle" src="img/team/1.jpg" alt="">
                <h4>Kay Garland</h4>
                <p class="text-muted">Lead Designer</p>
                <ul class="list-inline social-buttons">
                  <li class="list-inline-item">
                    <a href="#">
                      <i class="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#">
                      <i class="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#">
                      <i class="fa fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="team-member">
                <img class="mx-auto rounded-circle" src="img/team/2.jpg" alt="">
                <h4>Larry Parker</h4>
                <p class="text-muted">Lead Marketer</p>
                <ul class="list-inline social-buttons">
                  <li class="list-inline-item">
                    <a href="#">
                      <i class="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#">
                      <i class="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#">
                      <i class="fa fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="team-member">
                <img class="mx-auto rounded-circle" src="img/team/3.jpg" alt="">
                <h4>Diana Pertersen</h4>
                <p class="text-muted">Lead Developer</p>
                <ul class="list-inline social-buttons">
                  <li class="list-inline-item">
                    <a href="#">
                      <i class="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#">
                      <i class="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#">
                      <i class="fa fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-8 mx-auto text-center">
              <p class="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p>
            </div>
          </div>
        </div>
      </section>

      
      <section class="py-5">
        <div class="container">
          <div class="row">
            <div class="col-md-3 col-sm-6">
              <a href="#">
                <img class="img-fluid d-block mx-auto" src="img/logos/envato.jpg" alt="">
              </a>
            </div>
            <div class="col-md-3 col-sm-6">
              <a href="#">
                <img class="img-fluid d-block mx-auto" src="img/logos/designmodo.jpg" alt="">
              </a>
            </div>
            <div class="col-md-3 col-sm-6">
              <a href="#">
                <img class="img-fluid d-block mx-auto" src="img/logos/themeforest.jpg" alt="">
              </a>
            </div>
            <div class="col-md-3 col-sm-6">
              <a href="#">
                <img class="img-fluid d-block mx-auto" src="img/logos/creative-market.jpg" alt="">
              </a>
            </div>
          </div>
        </div>
      </section>*/}

      
      <section id="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading">Contact Us</h2>
              <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <form id="contactForm" name="sentMessage" novalidate>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input className="form-control" id="name" type="text" placeholder="Your Name *" required data-validation-required-message="Please enter your name."/>
                      <p className="help-block text-danger"></p>
                    </div>
                    <div className="form-group">
                      <input className="form-control" id="email" type="email" placeholder="Your Email *" required data-validation-required-message="Please enter your email address."/>
                      <p className="help-block text-danger"></p>
                    </div>
                    <div className="form-group">
                      <input className="form-control" id="phone" type="tel" placeholder="Your Phone *" required data-validation-required-message="Please enter your phone number."/>
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <textarea className="form-control" id="message" placeholder="Your Message *" required data-validation-required-message="Please enter a message."></textarea>
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="clearfix"></div>
                  <div className="col-lg-12 text-center">
                    <div id="success"></div>
                    <button id="sendMessageButton" className="btn btn-xl" type="submit">Send Message</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section> 

      
      <footer>
        <div classNameName="container">
          <div className="row">
            <div className="col-md-4">
              <span className="copyright">Copyright &copy; Your Website 2017</span>
            </div>
            <div className="col-md-4">
              <ul className="list-inline social-buttons">
                <li className="list-inline-item">
                  <a href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <ul className="list-inline quicklinks">
                <li className="list-inline-item">
                  <a href="#">Privacy Policy</a>
                </li>
                <li className="list-inline-item">
                  <a href="#">Terms of Use</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer> 
  </div>
    );
  }
}

export default App;
