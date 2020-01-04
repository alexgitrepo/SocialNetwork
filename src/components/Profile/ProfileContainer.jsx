import React from 'react';
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {setCurrentUserCallback, setCurrentUserThunkCreator} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {usersAPI} from "../../API/api";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId=this.props.match.params.userId;
        if (!userId){userId=2}
        this.props.setCurrentUser(userId)
    }

     render() {
        return (
            <Profile profilePage={this.props.profilePage}/>


        );
    }
}
let mapStateToProps =(state)=>{
    return {profilePage:state.profilePage}
}

let WithUrlDataContainerComponent= withRouter(ProfileContainer)

export default connect(mapStateToProps,{setCurrentUser:setCurrentUserThunkCreator})(WithUrlDataContainerComponent);
