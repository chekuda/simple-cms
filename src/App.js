import React, { Component } from 'react';

import Navigation from './component/Navigation';
import Header from './component/Header';
import Service from './component/Service';
import Portfolio from './component/Portfolio';
import Footer from './component/Footer';
//import About from './component/About';
//import Client from './component/Client';
//import Team from './component/Team';
//import Contact from './component/Contact';

import config from './config.json'

import './agency.css';

class App extends Component {
  render() {
    return (
      <div className="simpleCms__wrapper">

        {config.components.map((item, index) => {
          const props = {theme: config.theme, component: item};

          return {
            naviagtion: <Navigation key={`${item.type}-${index}`} {...props}/>,
            header: <Header key={`${item.type}-${index}`} {...props}/>,
            service: <Service key={`${item.type}-${index}`} {...props}/>,
            portfolio: <Portfolio key={`${item.type}-${index}`} {...props}/>,
            footer: <Footer key={`${item.type}-${index}`} {...props}/>
          }[item.type]
        })} 

        {/*<Team />*/}

        {/*<Client />*/}

        {/*<Contact />*/}

      </div>
    );
  }
}

export default App;
