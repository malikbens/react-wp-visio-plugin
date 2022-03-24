import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect() {
    const [brand, setBrand] = React.useState('');

    const handleChange = (event) => {
        setBrand(event.target.value);
    };

    return (
        <FormControl sx={{ minWidth: 120 }}>
            <InputLabel id="demo-simple-select-label">Marque</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={brand}
                label="Marque"
                onChange={handleChange}
            >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
            </Select>
        </FormControl>

    );
}