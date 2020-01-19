import React from 'react'
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControl/FormsControl";
import {required} from "../../validators/validators";
import {connect} from "react-redux";
import {sendLoginDataRequest} from "../../redux/auth-reducer";
import style from '../common/FormsControl/FormsControl.module.css'

const Login = (props)=>{
    const onSubmit=({email,password,rememberMe})=>{debugger
        props.sendLoginDataRequest(email,password,rememberMe)
    }

    return <div className={style.login}>
        <b>LOGIN</b>
        <LoginFormRedux onSubmit={onSubmit}/>
    </div>
}
const LoginForm=(props)=>{debugger
    return (
                <form onSubmit={props.handleSubmit}>
            <div>
                <Field validate={[required]} component={Input} name={"email"} placeholder={"email"}/>
            </div>
            <div>
                <Field validate={[required]} component={Input} name={"password"} type="password" placeholder={"password"}/>
            </div>
            <div>
                <Field component={"input"} name={"rememberMe"} type="checkbox"/> remember me
            </div>
            <button>Login</button>
            {props.error && <div className={style.summaryError}>
                {props.error}
            </div>}
        </form>
    )
}
const LoginFormRedux=reduxForm({form:'login'})(LoginForm)
export default connect(null,{sendLoginDataRequest})(Login)


