import React, { Component } from 'react'
import { TextField  } from '@mui/material'

export class ModelInput extends Component {
    render() {
        return (
            <TextField  label="Modèle" sx={{ minWidth: 120 , margin:'10px 10px 10px 0px'}} />
        )
    }
}

export default ModelInput