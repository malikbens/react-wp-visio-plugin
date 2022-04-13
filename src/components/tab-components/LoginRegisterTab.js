import React, { Component, useEffect, useState } from 'react'
import IsLogged from './lr-components/IsLogged'
import LoginRegister from './lr-components/LoginRegister'


export default function LoginRegisterTab(props) {

    const username = props.values.username ;
    const [serverMessage, setServerMessage] = useState(false);

    console.log(username)

    if (props.values.isLoggedIn === true ) {
        return (
            <IsLogged 
                nextStep={props.nextStep}
                prevStep={props.prevStep}
                username={username}
            />
        )
    } return (
        
        <LoginRegister
                nextStep={props.nextStep}
                prevStep={props.prevStep}
                handleChange={props.handleChange}
                setUsername={props.setUsername}
                setIsLoggedIn={props.setIsLoggedIn}
                serverMessage={serverMessage}
                setServerMessage={setServerMessage}
                values={props.values}
            />
    )


}

