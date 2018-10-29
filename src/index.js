import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './main.css';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
// reducers
import shapesReducer from './reducers/shapesReducer';


const rootReducer = combineReducers ({
    shapes:shapesReducer
});

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));




