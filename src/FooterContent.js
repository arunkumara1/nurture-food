import React from 'react';
import './FooterContent.css';
import InfoIcon from '@material-ui/icons/Info';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';

const FooterContent = () => {


    return (
        <div className="app__footer__info">
            <div className="app__footer__header">
            <div className="footer__header">
            <InfoIcon />
              <p style={{ color: "bisque" }}>ABOUT </p>
            </div>

              <a style={{ color: "bisque" }} >Contact us</a>
              <a style={{ color: "bisque" }} >About us</a>
            </div>
            <div className="app__footer__header">
            <div className="footer__header">
            <InfoIcon />
              <p style={{ color: "bisque" }}>HELP </p>
            </div>

              <a style={{ color: "bisque" }} >Payments</a>
              <a style={{ color: "bisque" }} >Shiipping</a>
            </div>
            <div className="app__footer__header">
            <div className="footer__header">
            <InfoIcon />
              <p style={{ color: "bisque" }}>POLICY </p>
            </div>
              <a style={{ color: "bisque" }} >Security</a>
              <a style={{ color: "bisque" }} >Privacy</a>
            </div>
            <div className="app__footer__header">
            <div className="footer__header">
            <ContactPhoneIcon />
              <p style={{ color: "bisque" }}>SOCIAL</p>
            </div>
              <a style={{ color: "bisque" }} > Facebook</a>
              <a style={{ color: "bisque" }} >Twitter</a>
            </div>
          </div>
    )
}

export default FooterContent;
