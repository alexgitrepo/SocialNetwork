import React from 'react'
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

const withAuthRedirect = (Component) => {
    let AfterHoc = (props) => {
        return (!props.isAuth) ?
            <Redirect to='/login'/> : <Component {...props}/>;
    }
    let mapStateToProps = (state) => {
        return {isAuth: state.auth.userInfo.isLogin}
    }
    return  connect(mapStateToProps, {})(AfterHoc)
}
export default withAuthRedirect
