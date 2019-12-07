import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import MainNav from "./components/MainNav/MainNav";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import Message from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

const App = () => {

    return (
        <BrowserRouter>
            <div className="main-wrapper">
                <div className="grid-wrapper">

                    <Header/>
                    <MainNav/>
                    <div className="app-wrapper-content">
                        <Route component={Profile} path="/profile"/>
                    </div>
                    <div className="app-wrapper-content">
                        <Route component={Message} path="/messages"/>
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
            </div>
        </BrowserRouter>)
}

export default App;
