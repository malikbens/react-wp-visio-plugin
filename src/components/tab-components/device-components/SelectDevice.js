import { useEffect } from 'react'
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material"

const SelectDevice = (props) => {

    useEffect(() => {
        props.fetchDevice();
    }, [])

    const devices = props.values.devices
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
                    <MenuItem key={device.id} value={device.name}>{device.name}</MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}

export default SelectDevice 