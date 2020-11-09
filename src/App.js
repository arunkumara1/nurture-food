import React from 'react';
import './App.css';
import Header from './components/header/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import StickyFooter from 'react-sticky-footer';
import Foods from './components/Foods/Foods';
import FooterContent from './FooterContent';
import Carts from './components/Carts/Carts';
import Orders from './components/Orders/Orders';
import Contact from './components/contact/Contact';
import Login from './components/Login/Login';


const app = () => {

  return (

    <div className="app">
      <Router>
        <Header />
        <Switch >
          <Route path="/" exact component={Foods} />
          <Route path="/cart" component={Carts} />
          <Route path="/orders" component={Orders} />
          <Route path="/contact" component={Contact} />
          <Route path="/login" component={Login} />
        </Switch>
      </Router>
      <div className="app__footer">
        <StickyFooter
          bottomThreshold={50}
          normalStyles={{
            background: "black",
            padding: "1.7rem"
          }}
          stickAtThreshold={1.008}
          stickyStyles={{
            display: "none",
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
