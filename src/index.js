import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import reducer, { initialState } from './store/reducer';
import { StateProvider } from './store/StateProvider';


const app = (
    <StateProvider initialState={initialState} reducer={reducer}>
        <App />
    </StateProvider>
);


ReactDOM.render(<BrowserRouter>{app}</BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
