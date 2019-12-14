import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import store from "./redux/state";


let rerenderEntireTree = (state) => {
    ReactDOM.render(<BrowserRouter><App dispatch={store.dispatch.bind(store)} state={state}/></BrowserRouter>, document.getElementById('root'));
}
store.subscribe(rerenderEntireTree)

rerenderEntireTree(store.getState())


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
