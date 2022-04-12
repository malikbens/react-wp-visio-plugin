import { Box } from '@mui/system'
import React, { useState } from 'react'
import LoginAPI from './API/LoginApi'

export default function Login(props) {
    const [APIDetailsLogin, setAPIDetailsLogin] = useState({
        user: '',
        pass: '',
    })

    const [loginDetails, setLoginDetails] = useState({
        user: '',
        pass: '',
    })

    function handleChange(e) {
        const { name, value } = e.target
        setLoginDetails(prev => {
            return (
                { ...prev, [name]: value }
            )
        })
    }

    function handleSubmit() {
        setAPIDetailsLogin({ ...loginDetails }) //check i need the ...here
    }

    return (
        <Box>
            {/* <TextField sx={{ mb: 2.5, width:500}}
                variant="outlined"
                id="outlined-basic"
                label="Votre adresse e-mail*"
            />
            <TextField sx={{ mb: 2.5, width:500 }}
                variant="outlined"
                id="outlined-basic"
                label="Mot de passe"
            /> */}

            <input type="text" placeholder="User Name" name="user" value={loginDetails.user} onChange={handleChange} />
            <input type="password" placeholder="Password" name="pass" value={loginDetails.pass} onChange={handleChange} />
            <input type="submit" value="Go" onClick={handleSubmit} />
            <LoginAPI APIDetailsLogin={APIDetailsLogin} setUsername={props.setUsername} setIsLoggedIn={props.setIsLoggedIn} setServerMessage={props.setServerMessage} nextStep={props.nextStep}/>
        </Box>
    )
}
