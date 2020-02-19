import React from 'react'
import {Field, reduxForm} from "redux-form";
import {createField, Input} from "../common/FormsControl/FormsControl";
import {required} from "../../validators/validators";
import {connect} from "react-redux";
import {sendLoginDataRequest} from "../../redux/auth-reducer";
import style from '../common/FormsControl/FormsControl.module.css'
import {Redirect} from "react-router-dom";

const Login = (props) => {
    const onSubmit = ({email, password, rememberMe,captcha}) => {debugger
        props.sendLoginDataRequest(email, password, rememberMe,captcha)
    }
    if (props.isAuth) {
        return <Redirect to='/profile'/>
    } else return <div className={style.login}>
        <b>LOGIN</b>
        <LoginFormRedux captchaUrl={props.captchaUrl} onSubmit={onSubmit}/>
    </div>
}
const LoginForm = (props) => {

    return (

        <form onSubmit={props.handleSubmit}>
            {createField([required], Input, "email", "input","email")}
            {createField([required], Input, "password", "password","password")}
            {createField([], "input", "rememberMe", "checkbox","","remember me")}
            {props.captchaUrl&&<div><p>Enter captcha</p>
                {createField([required], Input, "captcha", "input","captcha")}
                <img className={style.captcha} src={props.captchaUrl}/></div>}
            <button>Login</button>
            {props.error && <div className={style.summaryError}>
                {props.error}
            </div>}
        </form>
    )
}
const LoginFormRedux = reduxForm({form: 'login'})(LoginForm)
let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.userInfo.isLogin,
        captchaUrl:state.auth.captchaUrl
    }
}


export default connect(mapStateToProps, {sendLoginDataRequest})(Login)


