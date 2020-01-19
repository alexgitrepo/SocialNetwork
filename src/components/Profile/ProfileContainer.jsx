import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatusThunkCreator, setCurrentUserThunkCreator, updateStatusThunkCreator} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";

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

    render() {
        return <Profile updateStatus={this.props.updateStatus} profilePage={this.props.profilePage}/>
    }
}

let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage,
        isAuth: state.auth.userInfo.isLogin,
        currentUserId: state.auth.userInfo.id
    }
}
// let ProfileToLogin = withAuthRedirect(ProfileContainer)
// let WithUrlDataContainerComponent = withRouter(ProfileToLogin)
//
// export default connect(mapStateToProps, {setCurrentUser: setCurrentUserThunkCreator})(WithUrlDataContainerComponent);

export default compose(connect(mapStateToProps, {
        setCurrentUser: setCurrentUserThunkCreator,
        getStatus: getStatusThunkCreator,
        updateStatus: updateStatusThunkCreator
    }), withRouter
    , withAuthRedirect)(ProfileContainer)