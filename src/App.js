import React from 'react';
import './App.css';
import Header from './components/header/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import StickyFooter from 'react-sticky-footer';
import Foods from './components/Foods/Foods';
import FooterContent from './FooterContent';
import Carts from './components/Carts/Carts';


const app = () => {

  return (

    <div className="app">
      <Router>
        <Header />
        <Switch >
          <Route path="/" exact component={Foods} />
          <Route path="/cart" component={Carts} />
        </Switch>
      </Router>
      <div className="app__footer">
        <StickyFooter
          bottomThreshold={50}
          normalStyles={{
            background: "black",
            padding: "1.7rem",
            position: "fixed !important",
            bottom: "0"
          }}
          stickyStyles={{
            backgroundColor: "rgba(255,255,255,.8)",
            padding: "2rem"
          }}
        >
          <FooterContent />
        </StickyFooter>
      </div>
    </div>

  );
}

export default app;
