import React, { useEffect, useState } from 'react';
import { useStateValue } from '../../store/StateProvider';
import SlideComponent from '../slides/SlideComponent';
import Food from './Food/Food';
import './Foods.css';
import db from '../../firebase/firebase';
import Spinner from '../Spinner/spinner';


const Foods = () => {

    const [foods, setFoods] = useState([]);

    const [spin, setSpin] = useState(true);

    const [ { searchItems } , dispatch ] = useStateValue();

    useEffect(() => {
        setSpin(true);
        const foodAysn = async () => {
            db.collection('foods').orderBy('dish').onSnapshot((snapshot) => (
                setFoods(snapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data()
                })))
            ))
            setSpin(false);
        }
        foodAysn();
    }, [] );

    let foodsComponent = (
            foods.map((foo) => (
                <Food key={foo.id}
                    item={foo.data}
                />
            ))
    );

    if (spin) {
        foodsComponent =  <Spinner />;
    }

    if(searchItems.dish !== undefined) {
        foodsComponent = (
            <Food key={searchItems.dish} item={searchItems} />
        );
    } 
    // else {
    //     foodsComponent = (
    //         <div className="food__no__image">
    //             <img src={require('../../assets/images/no.PNG')} alt={require('../../assets/images/no.PNG')} />
    //         </div>
    //     );
    // }

    return (
        <div className="foods">
            <SlideComponent />
            <div className="foods__cards">
                {foodsComponent}
            </div>
        </div>
    )


}

export default Foods;
