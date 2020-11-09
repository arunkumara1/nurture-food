import React from 'react'
import './Login.css';
import GoogleButton from 'react-google-button';
import { auth, provider } from '../../firebase/firebase';
import { useStateValue } from '../../store/StateProvider';
import { actionTypes } from '../../store/reducer';
import { useHistory } from 'react-router-dom';

const Login = () => {

    const [state, dispatch] = useStateValue();

    const history = useHistory();

    const loginInHandler = () => {
        auth.signInWithPopup(provider).then(response => {
            dispatch({
                type: actionTypes.SET_USER,
                user:response.user
            })
        localStorage.setItem('user', response.user.displayName);
        history.push('/');
        }).catch(err => {
            console.warn('LOGIN ERROR');
        });
    }

    

    return (
        <div className="login">
            <div className="login__image">
                <img src={require('../../assets/images/logo.PNG')} alt={require('../../assets/images/logo.PNG')} />
            </div>
            <div className="login__button">
                <GoogleButton type="light" label='Login to nurture Food'
                    onClick={() => loginInHandler()}
                />
            </div>
        </div>
    )
}

export default Login;
