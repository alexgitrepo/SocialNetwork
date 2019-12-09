 import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import state from '../src/redux/state'

let myPostsData = [
     {id: 1, message: 'HI man. Give me your bag', count: '10'},
     {id: 2, message: 'What did you say? Crazy mother fucker!', count: '20'},
     {id: 3, message: 'Mm. Goodbye', count: '0'}];

 let dialogsData =[{id:1,name:'Alex'},{id:2,name:'Van\'ka'},{id:3,name:'MexaJIbI4'},{id:4,name:'OJIEr'},{id:5,name:'BacbKA'}]
 let messageData=[{id:1,message:'HI MAN'},{id:2,message:'How are You??'},{id:3,message:'I am fine Thanks'}]


ReactDOM.render( <App state={state}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
