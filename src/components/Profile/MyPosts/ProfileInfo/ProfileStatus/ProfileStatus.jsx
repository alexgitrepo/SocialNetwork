import React from'react'
class ProfileStatus extends React.Component {
    activateEditMode=()=>{
        this.setState({editMode:true})
    }
    deactivateEditMode=()=>{
        this.setState({editMode:false})
    }

    state={editMode:false}
      render(){
        return (this.state.editMode)? <input value={this.props.status} autoFocus={true} onBlur={this.deactivateEditMode} type="text"/>:<span onDoubleClick={this.activateEditMode}>{this.props.status}</span>

    }
}
export default ProfileStatus