import { useEffect, useState } from 'react'
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material"

const SelectDevice = (props) => {

    const [devices, setDevice] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/devices')
            .then(res => res.json())
            .then(data => setDevice(data));
    }, [])

    return (
        <FormControl sx={{ minWidth: 130, margin: '10px 10px 10px 0px' }}>
            <InputLabel id="select-label">Appareil</InputLabel>
            <Select
                value={props.values.device}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Appareil"
                onChange={props.handleChange('device')}
            >
                {devices.map(device => (
                    <MenuItem  key={device.id} value={device.name}>{device.name}</MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}

export default SelectDevice 