import React from 'react';
import SlideComponent from '../slides/SlideComponent';
import Food from './Food/Food';
import './Foods.css';


const Foods = () => {

    return (
        <div className="foods">
            <SlideComponent />
            <div className="foods__cards">

                    <Food />
                    <Food />
                    <Food />
                    <Food />
                    <Food />
                    <Food />
                    <Food />
                    <Food />
                    <Food />
                    <Food />

                    
            </div>
        </div>
    )


}

export default Foods;
