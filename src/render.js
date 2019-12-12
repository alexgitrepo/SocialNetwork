import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {addMessage, addPost} from '../src/redux/state'
import {BrowserRouter} from "react-router-dom";
import {updateNewPost} from "./redux/state";


let rerenderEntireTree = (state) => {
    ReactDOM.render(<BrowserRouter><App addMessage={addMessage} addPost={addPost} updateNewPost={updateNewPost}
                                        state={state}/></BrowserRouter>, document.getElementById('root'));
}


export default rerenderEntireTree