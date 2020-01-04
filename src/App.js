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
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";


const App = (props) => {
    return (

        <div className="main-wrapper">
            <div className="grid-wrapper">

                <HeaderContainer/>
                <MainNav/>
                <div className="app-wrapper-content">
                    <Route render={() => <ProfileContainer />} path="/profile/:userId?"/>
                </div>
                <div className="app-wrapper-content">
                    <Route render={() => <DialogsContainer/>} path="/messages"/>
                </div>
                <div className="app-wrapper-content">
                    <Route render={() => <UsersContainer/>} path="/users"/>
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
                <div className="app-wrapper-content">
                    <Route render={() => <Login/>} path="/login"/>
                </div>
            </div>
        </div>)

}

export default App;
