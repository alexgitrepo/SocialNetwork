import React from 'react'
import style from './Login.module.css'
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControl/FormsControl";
import {required} from "../../validators/validators";
const Login = ()=>{
    const onSubmit=(formData)=>{
        console.log(formData)
    }
    return <div className={style.login}>
        <b>LOGIN</b>
        <LoginFormRedux onSubmit={onSubmit}/>
    </div>
}
const LoginForm=(props)=>{
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field validate={[required]} component={Input} name={"login"} placeholder={"login"}/>
            </div>
            <div>
                <Field validate={[required]} component={Input} name={"password"} type="password" placeholder={"password"}/>
            </div>
            <div>
                <Field component={"input"} name={"rememberMe"} type="checkbox"/> remember me
            </div>
            <button>Login</button>
        </form>
    )
}
const LoginFormRedux=reduxForm({form:'login'})(LoginForm)
export default Login
