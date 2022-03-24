import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect() {
    const [device, setDevice] = React.useState('');

    const handleChange = (event) => {
        setDevice(event.target.value);
    };

    return (
        <FormControl sx={{ minWidth: 120 }}>
            <InputLabel id="demo-simple-select-label">Appareil</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={device}
                label="Appareil"
                onChange={handleChange}
            >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
            </Select>
        </FormControl>

    );
}