import React from 'react'
import {reduxForm} from "redux-form";
import {createField, Input, Textarea} from "../../../../common/FormsControl/FormsControl";
import style from '../../../Profile.module.css'
const ProfileForm =({currentProfile,handleSubmit,error})=>{

    return(
        <form onSubmit={handleSubmit}>

            <button> Add changes</button>
            {error&&<div className={style.error}>{error}</div>}
            <div>
                <b>fullName</b>:{createField([],Input,"fullName",'input','Enter your name',)}
            </div>
            <div>
                <b>aboutMe</b>:{createField([],Textarea,"aboutMe",'textarea','Enter some info about you',)}
            </div>
            <div>
                <b>lookingForAJob</b>:{createField([],"input","lookingForAJob",'checkbox','',)}
            </div>
            <div>
                <b>LookingForAJobDescription:</b>:{createField([],Textarea,"lookingForAJobDescription",'textarea','Enter your skills',)}
            </div>
            {Object.keys(currentProfile.contacts).map(item=>{return <div>{item}: {createField([],"Input","contacts."+item,'input','',)} </div>})}
        </form>)
}

export const ProfileFormReduxForm=reduxForm({form: 'ProfileChangeForm'})(ProfileForm)
