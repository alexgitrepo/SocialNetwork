import React from 'react';
import './App.css';
import MainNav from "./components/MainNav/MainNav";
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import Preloader from "./components/common/Preloader";
import {initializeApp} from "./redux/app-reducer";
import {compose} from "redux";
import store from "./redux/redux-store";
import {withSuspense} from "./hoc/withSuspense";

const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"))


class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.isInitiolized) {
            return <Preloader/>
        }
        return (<div className="main-wrapper">
            <div className="grid-wrapper">

                <HeaderContainer/>
                <MainNav/>
                <div className="app-wrapper-content">
                    <Route render={() => <ProfileContainer/>} path="/profile/:userId?"/>
                </div>
                <div className="app-wrapper-content">
                    <Route render={withSuspense(DialogsContainer)} path="/messages"/>
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
let AppContainer = compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(App)
const SamuraiJsApp = (props) => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}
export default SamuraiJsApp