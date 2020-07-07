// React Required
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Create Import File
import './index.scss';

// Home layout
import HomePortfolio from './home/HomePortfolio';
import PersonalPortfolio from './home/PersonalPortfolio';
import PortfolioLanding from './home/PortfolioLanding';

// Dark Home Layout 
import DarkPortfolioLanding from './dark/PortfolioLanding';

// Element Layout
import PortfolioDetails from "./elements/PortfolioDetails";

// Blocks Layout
import Portfolio from "./blocks/Portfolio";
import ContactForm from "./blocks/ContactForm";

import { BrowserRouter, Switch, Route  } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

class Root extends Component {
  render(){
    return(
      <BrowserRouter basename={"/"}>
        <switch>
            <Route exact path={`${process.env.PUBLIC_URL}/portfolio-home`} component={HomePortfolio}/>
            <Route exact path={`${process.env.PUBLIC_URL}/portfolio-landing`} component={PortfolioLanding}/>
            <Route exact path={`${process.env.PUBLIC_URL}/dark-portfolio-landing`} component={DarkPortfolioLanding}/>
            <Route exact path={`${process.env.PUBLIC_URL}/personal-portfolio`} component={PersonalPortfolio}/>

            {/* Element Layot */}
            <Route exact path={`${process.env.PUBLIC_URL}/service`} component={Service}/>
            <Route exact path={`${process.env.PUBLIC_URL}/service-details`} component={ServiceDetails}/>
            <Route exact path={`${process.env.PUBLIC_URL}/contact`} component={Contact}/>
            <Route exact path={`${process.env.PUBLIC_URL}/about`} component={About}/>
            <Route exact path={`${process.env.PUBLIC_URL}/portfolio-details`} component={PortfolioDetails}/>
            <Route exact path={`${process.env.PUBLIC_URL}/blog`} component={Blog}/>
            <Route exact path={`${process.env.PUBLIC_URL}/blog-details`} component={BlogDetails}/>

            {/* Blocks Elements  */}
            <Route exact path={`${process.env.PUBLIC_URL}/contact-form`} component={ContactForm}/>
            <Route exact path={`${process.env.PUBLIC_URL}/portfolio`} component={Portfolio}/>

            {/* 404 Route */}
            <Route path={`${process.env.PUBLIC_URL}/404`} component={error404}/>
            <Route component={error404}/>

        </switch>
      </BrowserRouter>
    )
  }
}
ReactDOM.render(<Root/>, document.getElementById('root'));
serviceWorker.register();
