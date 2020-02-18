import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    changeProfileDataThunkCreator,
    getStatusThunkCreator, savePhoto,
    setCurrentUserThunkCreator,
    updateStatusThunkCreator
} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {getCurrentUserId, getIsAuth, getProfilePage} from "../../redux/profile-selectors";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            if (this.props.isAuth) {
                userId = this.props.currentUserId
            }
        }
        this.props.setCurrentUser(userId)
        this.props.getStatus(userId)
    }
    componentDidUpdate(prevProps, prevState) {
        let userId
        if (this.props.match.params.userId!==prevProps.match.params.userId) {
            if (this.props.isAuth) {
                userId = this.props.currentUserId
                this.props.setCurrentUser(userId)
                this.props.getStatus(userId)
            }
        }

    }

    render() {
        return <Profile savePhoto={this.props.savePhoto} changeProfile={this.props.changeProfile} updateStatus={this.props.updateStatus} profilePage={this.props.profilePage} isOwner={!this.props.match.params.userId}/>
    }
}

let mapStateToProps = (state) => {
    return {
        profilePage: getProfilePage(state),
        isAuth: getIsAuth(state),
        currentUserId: getCurrentUserId(state)
    }
}
export default compose(connect(mapStateToProps, {
    changeProfile:changeProfileDataThunkCreator,
        setCurrentUser: setCurrentUserThunkCreator,
        getStatus: getStatusThunkCreator,
        updateStatus: updateStatusThunkCreator,
        savePhoto
    }), withRouter
    , withAuthRedirect)(ProfileContainer)