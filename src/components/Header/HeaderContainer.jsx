import React from 'react';
import Header from "./Header";
import {getAuthStatusThunkCreator, sendLogoutRequest} from "../../redux/auth-reducer";
import {connect} from "react-redux";

class HeaderContainer extends React.Component {



    render() {
        return (
            <div>
                <Header logout={this.props.logout} auth={this.props.auth}/>
            </div>)
    }
}

let mapStateToProps = (state)=>{
    return {auth: state.auth.userInfo}
    }
let mapDispatchToProps =(dispatch)=>{
    return{

        logout:()=>{dispatch(sendLogoutRequest())}

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(HeaderContainer)
