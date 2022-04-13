import React, { Component } from 'react'
import { Box, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default class CalendarTab extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep()
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        return (<>
            <div>CalendarTab</div>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button sx={{ mt: 5, color:'black' }} onClick={this.back}  >
                Retour
            </Button>
            <Button sx={{ mt: 5, ml: 3 }} variant="contained" onClick={this.continue} endIcon={<ArrowForwardIcon />}  >
                Continuer
            </Button>
        </Box>
        </>
        )
    }
}
