import React, { Component } from 'react'
import { Box, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Booked from './calendar-components/Booked';

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
            <div id='test'>CalendarTab</div>
            <Booked />
            
        </>
        )
    }
}
