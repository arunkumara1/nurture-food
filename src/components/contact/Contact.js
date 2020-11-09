import React from 'react';
import './Contact.css';


const Contact = () => {

    return (
        <div className="contact">

            <div className="contact__content">
                <div className="title__content">
                    <h1>NURTURE FOOD</h1>
                </div>
                <div className="detail__content">
                  <div className="address__content">
                      <h2>Address :</h2>
                      <h4>No:123, New Bye Pass Road</h4>
                      <h4>OMR Express Way</h4>
                      <h4>Chennai-96</h4>
                  </div>
                  <div className="con__content">
                     <h3>Call us : <span>9997001545</span></h3>
                     <h3>Mail us : <span>zag@gmail.com</span></h3>
                  </div>
                </div>   
                <h4>Proprietor : ZAG</h4>
                <h4>Owner :  Zaid Arun Geetha</h4>         
            </div>
        </div>
    )
}

export default Contact;
