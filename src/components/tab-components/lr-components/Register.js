import { Box, Grid, TextField } from '@mui/material'
import React, {useState} from 'react'
import RegisterApi from './API/RegisterApi'

export default function Register(props) {
    const [APIDetailsSignUp, setAPIDetailsSignUp] = useState({
        user: '',
        email: '',
        pass: '',
    })
    const [signUpDetails, setSignUpDetails] = useState({
        user: '',
        email: '',
        pass: '',
    })

    function handleChange(e) {
        const { name, value } = e.target
        setSignUpDetails(prev => {
            return (
                { ...prev, [name]: value }
            )
        })
    }

    function handleSubmit() {
        setAPIDetailsSignUp({ ...signUpDetails })
    }
    return (
        <Box>
            {/* <Grid container>
                <Grid item xs={12}>
                    <TextField sx={{ mr: 2 }}
                        variant="outlined"
                        id="outlined-basic"
                        label="Prénom*"
                    />
                    <TextField
                        variant="outlined"
                        id="outlined-basic"
                        label="Nom*"
                    />
                </Grid>
                <Grid item >
                    <TextField sx={{ width: 500, mb: 2, mt: 2.5 }}
                        variant="outlined"
                        id="outlined-basic"
                        label="Votre adresse e-mail*"
                    />
                </Grid>
                <Grid item>
                    <TextField sx={{ width: 500, mb: 2.5 }}
                        variant="outlined"
                        id="outlined-basic"
                        label="Mot de passe*"
                    />
                </Grid>
                <Grid item>
                    <TextField sx={{ width: 500 }}
                        variant="outlined"
                        id="outlined-basic"
                        label="Confirmation de mot de passe"
                    />
                </Grid>
            </Grid> */}
            <input type="text" placeholder="User Name" name="user" value={signUpDetails.user} onChange={handleChange} />
            <input type="email" placeholder="Email Adress" name="email" value={signUpDetails.email} onChange={handleChange} />
            <input type="password" placeholder="Password" name="pass" value={signUpDetails.pass} onChange={handleChange} />
            <input type="submit" onClick={handleSubmit} />
            <RegisterApi APIDetailsSignUp={APIDetailsSignUp} setUsername={props.setUsername} setIsLoggedIn={props.setIsLoggedIn} setServerMessage={props.setServerMessage} nextStep={props.nextStep}/>
        </Box>
    )
}
