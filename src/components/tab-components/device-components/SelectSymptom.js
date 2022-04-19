import React from 'react'
import { Typography, Box, Grid, TextField} from "@mui/material"
import StyledButton from "../StyledButton"

function SelectSymtom(props) {
    if (props.values.brand != "") {
        const symptoms = props.values.datas.symptoms
        return (
            <Box sx={{mt:4}}>
                <Typography
                    variant="h2"
                    color="primary"
                    align="left"
                >
                    Les symptomes de panne
                </Typography>
                <StyledButton label={symptoms} handleChange={props.handleChange} width={350} state={"symptom"}/>
                {/* <Grid item>
                    <TextField sx={{width:350}} variant="outlined" label="Autre"></TextField>
                </Grid> */}
            </Box>
        )
    }
    return <></>
}

export default SelectSymtom