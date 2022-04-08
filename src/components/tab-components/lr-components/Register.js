import { TextField } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

export default function Register() {
    return (
        <Box>
            <TextField sx={{ mb: 2.5, width:500}}
                variant="outlined"
                id="outlined-basic"
                label="Votre adresse e-mail*"
            />
            <TextField sx={{ mb: 2.5, width:500 }}
                variant="outlined"
                id="outlined-basic"
                label="Mot de passe"
            />
        </Box>
    )
}
