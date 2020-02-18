import React, {useState} from 'react';
import style from './Profile.module.css'
import {ProfileFormReduxForm} from "./MyPosts/ProfileInfo/ProfileStatus/ProfileForm";


const ProfileCurrentData = ({currentProfile, isOwner, changeProfile}) => {
    let contactsArray = Object.keys(currentProfile.contacts).map(item => <Contact platform={item}
                                                                                  platformLink={currentProfile.contacts[item]}/>)

    const [editMode, setEditMode] = useState(false)
    const onSubmit = (formData) => {
        let promise = changeProfile(formData,currentProfile.userId)
        promise.then(()=>{setEditMode(false)})
        promise.catch(() => {
            setEditMode(true)
        })
    }
    return (<div className={style.profileCurrentData}>
            {isOwner && editMode &&
            <ProfileFormReduxForm onSubmit={onSubmit} initialValues={currentProfile} currentProfile={currentProfile}/>}
            {isOwner && !editMode && <button onClick={() => {
                setEditMode(true)
            }}>Change Profile</button>}
            {!editMode && <div>
                <div>
                    <b>fullName</b>: {currentProfile.fullName}
                </div>
                <div>
                    <b>aboutMe</b>: {currentProfile.aboutMe}
                </div>
                <div>
                    <b>lookingForAJob</b>: {currentProfile.lookingForAJob ? "yes" : "no"}
                </div>
                <div>
                    <b>lookingForAJobDescription</b>: {currentProfile.lookingForAJobDescription ? currentProfile.lookingForAJobDescription : "---"}
                </div>

                <div>
                    <p>Contacts:</p>
                    {contactsArray}
                </div>
            </div>}

        </div>
    );
}


const Contact = ({platform, platformLink}) => {
    return <div>
        <b>{platform}</b>:{platformLink}
    </div>

}


export default ProfileCurrentData;

