import React, { Component } from 'react'
import { Grid, Radio, RadioGroup, FormControl, FormControlLabel } from "@mui/material"
import { Paper } from '@mui/material'


export class SymptomGrid extends Component {
    render() {
        return (
            <FormControl>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                >
                    <Grid container >
                        <Grid item xs={12} md={6}>
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                        </Grid>
                        <Grid item xs={12} md={6} >
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <FormControlLabel value="other" control={<Radio />} label="Other" />
                        </Grid>
                    </Grid>
                </RadioGroup>
            </FormControl>
        )
    }
}

export default SymptomGrid