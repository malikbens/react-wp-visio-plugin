import React from 'react'
import { Grid, Radio, RadioGroup, FormControl, FormControlLabel, Typography, Box } from "@mui/material"

function SymptomGrid(props) {
    console.log(props)
    if (props.values.device != "") {
        return (

            <Box>
                <Typography
                    variant="h2"
                    color="primary"
                    align="left"
                    mb={1}
                >
                    Les symptoms de panne
                </Typography>
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
    
                        </Grid>
                    </RadioGroup>
                </FormControl>
            </Box>

        )
    }
    return <></>


}

export default SymptomGrid