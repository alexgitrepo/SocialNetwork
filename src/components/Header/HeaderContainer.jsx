import React from 'react';
import Header from "./Header";
import {getAuthStatusThunkCreator} from "../../redux/auth-reducer";
import {connect} from "react-redux";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getAuthStatus()
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
        getAuthStatus:()=>{dispatch(getAuthStatusThunkCreator())}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(HeaderContainer)
