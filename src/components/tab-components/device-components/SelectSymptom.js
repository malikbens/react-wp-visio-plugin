import React from 'react'
import { Typography, Box} from "@mui/material"
import StyledButton from "../StyledButton"

function SelectSymtom(props) {
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
                <StyledButton label={symptoms} handleChange={props.handleChange} width={350} state={"symptom"}/>
            </Box>
        )
    }
    return <></>
}

export default SelectSymtom