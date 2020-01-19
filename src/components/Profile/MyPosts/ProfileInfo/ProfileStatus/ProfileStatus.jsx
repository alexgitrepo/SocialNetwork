import React from 'react'

class ProfileStatus extends React.Component {
    componentDidMount() {
        this.setState({status: this.props.status})
    }

    componentDidUpdate(prevProps, prevState) {

        if (prevProps.status !== this.props.status) {
            this.setState({status: this.props.status})
        }

    }

    state = {
        editMode: false,
        status: ''
    }
    activateEditMode = () => {
        this.setState({editMode: true})
    }
    deactivateEditMode = () => {
        this.setState({editMode: false})
        this.props.updateStatus(this.state.status)
    }
    statusAddSymbol = (e) => {
        let newStatus = e.target.value
        this.setState({status: newStatus})
    }

    render() {
        return (this.state.editMode) ? <input onChange={this.statusAddSymbol} value={this.state.status} autoFocus={true}
                                              onBlur={this.deactivateEditMode} type="text"/> :
            <span onDoubleClick={this.activateEditMode}>{(this.props.status) ? this.props.status : "------"}</span>

    }
}

export default ProfileStatus