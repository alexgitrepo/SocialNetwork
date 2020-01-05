import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {setCurrentUserThunkCreator} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import withAuthRedirect from "../../hoc/withAuthRedirect";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2
        }
        this.props.setCurrentUser(userId)
    }

    render() {
        return <Profile profilePage={this.props.profilePage}/>
    }
}

let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage,
        isAuth: state.auth.userInfo.isLogin
    }
}

let ProfileToLogin = withAuthRedirect(ProfileContainer)
let WithUrlDataContainerComponent = withRouter(ProfileToLogin)

export default connect(mapStateToProps, {setCurrentUser: setCurrentUserThunkCreator})(WithUrlDataContainerComponent);
