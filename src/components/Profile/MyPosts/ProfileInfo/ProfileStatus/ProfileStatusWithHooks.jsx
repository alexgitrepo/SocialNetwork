import React, {useState, useEffect} from 'react'

const ProfileStatusWithHooks = (props) => {

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])
    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)


    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }
    const statusAddSymbol = (e) => {
        let newStatus = e.target.value
        setStatus(newStatus)
    }

    return (editMode) ? <input onChange={statusAddSymbol} value={status} autoFocus={true}
                               onBlur={deactivateEditMode} type="text"/> :
        <div> <span><b>Status</b>: </span> <span onDoubleClick={props.isOwner ? activateEditMode : null}>{(props.status) ? props.status : "------"}</span></div>

}


export default ProfileStatusWithHooks