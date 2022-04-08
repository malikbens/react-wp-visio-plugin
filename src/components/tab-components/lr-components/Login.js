import { Box, Grid, TextField } from '@mui/material'
import React from 'react'

export default function Login() {
  return (
    <Box>
        <Grid container>
            <Grid item xs={12}>
                <TextField sx={{mr:2}}
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
                <TextField sx={{width:500, mb:2, mt:2.5}}
                    variant="outlined"
                    id="outlined-basic"
                    label="Votre adresse e-mail*"
                />
            </Grid>
            <Grid item>
                <TextField  sx={{width:500, mb:2.5}}
                    variant="outlined"
                    id="outlined-basic"
                    label="Mot de passe*"
                />
            </Grid>
            <Grid item>
                <TextField  sx={{width:500}}
                    variant="outlined"
                    id="outlined-basic"
                    label="Confirmation de mot de passe"
                />
            </Grid>
        </Grid>
    </Box>
  )
}
