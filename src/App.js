import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import MainNav from "./components/MainNav/MainNav";
import Profile from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import Message from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";


const App = (props) => {

    return (

        <div className="main-wrapper">
            <div className="grid-wrapper">

                <Header/> 
                <MainNav/>
                <div className="app-wrapper-content">
                    <Route render={() => <Profile dispatch ={props.dispatch} state={props.state.profilePage}/>} path="/profile"/>
                </div>
                <div className="app-wrapper-content">
                    <Route render={() => <Message dispatch={props.dispatch} state={props.state.dialogsPage}/>} path="/messages"/>
                </div>
                <div className="app-wrapper-content">
                    <Route component={News} path="/news"/>
                </div>
                <div className="app-wrapper-content">
                    <Route component={Music} path="/music"/>
                </div>
                <div className="app-wrapper-content">
                    <Route component={Settings} path="/settings"/>
                </div>
            </div>
        </div>)

}

export default App;
