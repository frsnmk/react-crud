// import React, { FC, useState } from 'react'
// import { Person } from '../../services/Person'

import React, { useState } from "react"
// import { useForm } from "react-hook-form"
import { Person } from "../../services/Person"

interface onProfileChangeFunction{
    (profile:Person):void
}
interface IProfileForm{
    onProfileChanged:onProfileChangeFunction
}

const initPerson = {name:'', bod:''}
export const ProfileForm:React.FC<IProfileForm> = ({onProfileChanged}) => {
    const [profile, setProfile] = useState<Person>(initPerson)

    // const {register, handleSubmit, reset} = useForm<Person>()
    // const onSubmit = (data:Person, e:Event) =>{
    //     console.log(data)
    // }
    const onNameChanged = (name:string) =>{
        setProfile({name:name, bod:profile.bod})
        onProfileChanged({name:name, bod:profile.bod}) 
    }
    
    const onBodChanged = (bod:string)=>{
        setProfile({name:profile.name, bod: bod})
        onProfileChanged({name:profile.name, bod:bod})
    }

    return (
        <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
            <div style={{width:'50%' ,display:'flex', flexDirection:'column'}}>
                {/* <input name="name" value={profile.name} onChange={(e:React.ChangeEvent<HTMLInputElement>)=> setProfile({name:e.target.value, bod:profile.bod}) } />
                <input name="bod" value={profile.bod} onChange={(e:React.ChangeEvent<HTMLInputElement>)=> setProfile({name:profile.name, bod:e.target.value}) } /> */}
                {/* <input name="name" value={profile.name} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setProfile(onInputChange)} />
                <input name="bod" value={profile.bod} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setProfile(onInputChange)} /> */}
                <input name="name" value={profile.name} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>onNameChanged(e.target.value)} />
                <input name="bod" value={profile.bod} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>onBodChanged(e.target.value)} />
                
            </div>
            {/* <p>Name : {profile.name}</p>
            <p>Bod : {profile.bod}</p> */}
            {/* {JSON.stringify(profile)} */}
        </div>
    )
}
