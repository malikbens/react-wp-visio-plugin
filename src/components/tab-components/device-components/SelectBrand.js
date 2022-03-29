const { Component, render } = wp.element
import * as React from 'react';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import devices from "/data/devices.json"


export default class SelectDevice extends Component {
    render() { 
        console.log(this.props)
        return (
            <FormControl sx={{ minWidth: 120 , margin:'10px 10px 10px 0px'}}>
                <InputLabel id="select-label">Marque</InputLabel>
                <Select
                    value=""
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Appareil"
                    // onChange={this.props.handleChange('device')}
                >
                    
                </Select>
            </FormControl>
        );
    }
}