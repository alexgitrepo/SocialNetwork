import React from 'react';
import './App.css';
import MainNav from "./components/MainNav/MainNav";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {getAuthStatusThunkCreator} from "./redux/auth-reducer";
import Preloader from "./components/common/Preloader";
import {initializeApp} from "./redux/app-reducer";


class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
         if (!this.props.isInitiolized){ return <Preloader/>}
         return (<div className="main-wrapper">
                <div className="grid-wrapper">

                    <HeaderContainer/>
                    <MainNav/>
                    <div className="app-wrapper-content">
                        <Route render={() => <ProfileContainer/>} path="/profile/:userId?"/>
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
    }

let mapDispatchToProps = (dispatch) => {
    return {
        initializeApp: () => {
            dispatch(initializeApp())
        },
    }
}

let mapStateToProps = (state) => {
    return {
        isInitiolized: state.app.initialized
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
