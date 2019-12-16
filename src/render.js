import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {addMessage, addPost, updateNewMessage} from './redux/storre'
import {BrowserRouter} from "react-router-dom";
import {updateNewPost} from "./redux/storre";


let rerenderEntireTree = (state) => {
    ReactDOM.render(<BrowserRouter><App addMessage={addMessage} addPost={addPost} updateNewPost={updateNewPost}
                                        updateNewMessage={updateNewMessage}       state={state}/></BrowserRouter>, document.getElementById('root'));
}


export default rerenderEntireTree