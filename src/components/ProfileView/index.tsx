import React from 'react'
import { Person } from '../../services/Person'

interface IProps{
    profile:Person
}
export const ProfileView:React.FC<IProps> = ({profile}) => {
    return (
        <div>
            <p>Name : {profile.name}</p>
            <p>Bod : {profile.bod}</p>
        </div>
    )
}
