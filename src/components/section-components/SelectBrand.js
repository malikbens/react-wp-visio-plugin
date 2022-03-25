const { Component, render } = wp.element
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import devices from "/data/devices.json"


export default class SelectDevice extends Component {
    render() { 
        const [brand, setBrand] = useState([])
        useEffect(() => {
            fetch('localhost:8000/devices')
        })
        console.log(this.props.values)
        return (
            <FormControl sx={{ minWidth: 120 }}>
                <InputLabel id="select-label">Appareil</InputLabel>
                <Select
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