import React, { useState } from 'react'
import {ProfileForm} from '../components/ProfileForm'
import { ProfileView } from '../components/ProfileView'

export const Profile:React.FC = () => {
    const [profile, setProfile] = useState({
        name:'',
        bod:''
    })
    return (
        <div>
            <ProfileForm onProfileChanged={setProfile} />
            <ProfileView profile={profile}/>
        </div>
    )
}
