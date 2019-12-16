import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import MainNav from "./components/MainNav/MainNav";
import Profile from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";


const App = (props) => {
    return (

        <div className="main-wrapper">
            <div className="grid-wrapper">

                <Header/> 
                <MainNav/>
                <div className="app-wrapper-content">
                    <Route render={() => <Profile store={props.store}/>} path="/profile"/>
                </div>
                <div className="app-wrapper-content">
                    <Route render={() => <DialogsContainer store={props.store}/>} path="/messages"/>
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
