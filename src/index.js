import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import store from "./redux/redux-store";
import {Provider} from "react-redux";


let rerenderEntireTree = (state) => {
    ReactDOM.render(<BrowserRouter>
        <Provider store={store}>
        <App/>
        </Provider>
    </BrowserRouter>, document.getElementById('root'));
}
store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state)
})

rerenderEntireTree(store.getState())


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
