import React from 'react';
import Header from "./Header";
import * as axios from "axios";
import {setLoginUserDtataActionCreator} from "../../redux/auth-reducer";
import {connect} from "react-redux";

class HeaderContainer extends React.Component {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me',{withCredentials:true}).then(
            (response) => {
                if (response.data.resultCode===0){
                this.props.setLoginUserDtata(response.data.data)}
            }
        )
    }


    render() {
        return (
            <div>
                <Header auth={this.props.auth}/>
            </div>)
    }
}

let mapStateToProps = (state)=>{
    return {auth: state.auth.userInfo}
    }
let mapDispatchToProps =(dispatch)=>{
    return{
        setLoginUserDtata:(userData)=>{dispatch(setLoginUserDtataActionCreator(userData))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(HeaderContainer)
