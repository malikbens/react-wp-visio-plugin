const { Component, render } = wp.element
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import devices from "/data/devices.js"

export default class SelectDevice extends Component {

    render() { 
        return (
            <FormControl sx={{ minWidth: 120 , margin:'10px 10px 10px 0px'}}>
                <InputLabel id="select-label">Appareil</InputLabel>
                <Select 
                    value={this.props.values.device}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Appareil"
                    onChange={this.props.handleChange('device')}
                >
                    {devices.map(({ id, name, }) => (
                        <MenuItem key={id} value={name}>{name}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        );
    }
}