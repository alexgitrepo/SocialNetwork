import React from 'react';
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {setCurrentUserCallback, setCurrentUserThunkCreator} from "../../redux/profile-reducer";
import {Redirect, withRouter} from "react-router-dom";
import {usersAPI} from "../../API/api";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId=this.props.match.params.userId;
        if (!userId){userId=2}
        this.props.setCurrentUser(userId)
    }

     render() {
                return (<div>
            {!this.props.isAuth && <Redirect to='/login'/>}
            <Profile profilePage={this.props.profilePage}/>
            </div>

        );
    }
}
let mapStateToProps =(state)=>{
    return {profilePage:state.profilePage,
    isAuth:state.auth.userInfo.isLogin}
}

let WithUrlDataContainerComponent= withRouter(ProfileContainer)

export default connect(mapStateToProps,{setCurrentUser:setCurrentUserThunkCreator})(WithUrlDataContainerComponent);
