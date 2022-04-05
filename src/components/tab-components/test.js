import { Typography, Box} from "@mui/material"
import React, {useState} from 'react'
import StyledButton from "./StyledButton"

function test(props) {
    if (props.values.brand != "") {
        const symptoms = props.values.datas.symptoms
        return (
            <Box >
                <Typography
                    variant="h2"
                    color="primary"
                    align="left"
                >
                    Les symptomes de panne
                </Typography>
                <StyledButton label={symptoms} handleChange={props.handleChange}/>
            </Box>
        )
    }
    return <></>
}

export default test