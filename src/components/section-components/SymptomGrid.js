import React, { Component } from 'react'
import { Grid, InputLabel, FormControl, Input } from "@mui/material"
import { Paper } from '@mui/material'


export class SymptomGrid extends Component {
    render() {
        return (
            <Grid container>
                <Grid item xs={12} md={6}>
                    <FormControl>
                        <InputLabel htmlFor="my-input">Email address</InputLabel>
                        <Input id="my-input" aria-describedby="my-helper-text" />
                    </FormControl>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper>2</Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper>3</Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper>4</Paper>
                </Grid>
            </Grid>
        )
    }
}

export default SymptomGrid