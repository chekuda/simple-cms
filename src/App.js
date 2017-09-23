import React, { Component } from 'react';

import Navigation from './component/Navigation';
import Header from './component/Header';
import Service from './component/Service';
import Portfolio from './component/Portfolio';
import About from './component/About';
import Client from './component/Client';
import Team from './component/Team';
import Footer from './component/Footer';
import Contact from './component/Contact';

import './agency.css';

class App extends Component {
  render() {
    return (
      <div className="simpleCms__wrapper">
        <Navigation />

        <Header />

        <Service />

        <Portfolio />

        {/*<Team />*/}

        {/*<Client />*/}

        {/*<Contact />*/}

        <Footer />
      </div>
    );
  }
}

export default App;
