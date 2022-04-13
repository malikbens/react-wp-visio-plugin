import React, { Component, useEffect, useState } from 'react'
import IsLogged from './lr-components/IsLogged'
import LoginRegister from './lr-components/LoginRegister'


export default function LoginRegisterTab(props) {

    const [username, setUsername] = useState('')
    const [serverMessage, setServerMessage] = useState(false)

    console.log(props.values.isLoggedIn)

    if (props.values.isLoggedIn === true ) {
        return (
            <IsLogged 
                nextStep={props.nextStep}
                prevStep={props.prevStep}
            />
        )
    } return (
        
        <LoginRegister
                nextStep={props.nextStep}
                prevStep={props.prevStep}
                handleChange={props.handleChange}
                setUsername={setUsername}
                setIsLoggedIn={props.setIsLoggedIn}
                serverMessage={serverMessage}
                setServerMessage={setServerMessage}
                values={props.values}
            />
    )


}

