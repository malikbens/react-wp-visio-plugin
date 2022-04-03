import { FormControl, InputLabel, Select, MenuItem } from "@mui/material"
import Devices from '/data/devices.json'

const SelectDevice = (props) => {
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
                {Devices.devices.map( (device) => (
                    <MenuItem key={device.id} value={device.name}>{device.name}</MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}

export default SelectDevice 