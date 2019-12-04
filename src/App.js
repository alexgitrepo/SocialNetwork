import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import MainNav from "./components/MainNav/MainNav";
import Profile from "./components/Profile/Profile";

const App = () => {
    return (
        <div className="main-wrapper">
            <div className="grid-wrapper">
                <Header/>
                <MainNav/>
                <Profile/>
            </div>
        </div>
    );
}

export default App;
