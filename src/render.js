import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {addMessage, addPost} from '../src/redux/state'
import {BrowserRouter} from "react-router-dom";


let rerenderEntireTree = (state) => {
    ReactDOM.render(<BrowserRouter><App addMessage={addMessage} addPost={addPost}
                                        state={state}/></BrowserRouter>, document.getElementById('root'));
}


export default rerenderEntireTree