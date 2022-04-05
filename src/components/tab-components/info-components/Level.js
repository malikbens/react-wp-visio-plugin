import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

export default function Level(props) {
    const marks = [
        {
            value: 0,
            label: 'Novice',
        },
        {
            value: 50,
            label: 'Je me débrouille',
        },
        {
            value: 100,
            label: 'Super bricoleur',
        },
    ];
    return (
        <Box sx={{ width: 300, ml:"5%" }}>
            <Slider
                color='secondary'
                aria-label="Custom marks"
                defaultValue={50}
                step={null}
                marks={marks}
                onChange={props.handleChange('level')}

            />
        </Box>
    );
}