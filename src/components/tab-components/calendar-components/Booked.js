import React, { useEffect } from 'react'
import { Box, Button  } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function Booked(props) {

    function test(){}
    useEffect(() => {
        const booked = document.getElementById('booked');
        const app = document.getElementById('test')
        while (booked.childNodes.length > 0) {
            app.appendChild(booked.childNodes[0]);
        }
        console.log(app.childNodes)
    })

    return (
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button sx={{ mt: 5, color: 'black' }} onClick={props.prevStep}  >
                Retour
            </Button>
            <Button sx={{ mt: 5, ml: 3 }} variant="contained" onClick={props.nextStep} endIcon={<ArrowForwardIcon />}  >
                Continuer
            </Button>
        </Box>)
}
