import { FormControl, InputLabel, Select, MenuItem } from "@mui/material"
import devices from '/data/devices.json'
import { useState, useEffect } from 'react'


function test(props) {

    const [brand, setBrand] = useState([])

    const fetchBrand = async () => {
        const res = await fetch('http://localhost:3000/devices?name=' + props.values.device);
        const data = await res.json();

        console.log(data[0].brand);
        setBrand(data[0].brand) 
    }
    
    
    if (props.values.device != "") {
        fetchBrand()
        console.log(brand)
        return (
            <FormControl sx={{ minWidth: 120, margin: '10px 10px 10px 0px' }}>
                <InputLabel id="select-label">Marque</InputLabel>
                <Select
                    value={props.values.brand}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Appareil"
                    onChange={props.handleChange('brand')}
                >
                    {brand.map(device => (
                        <MenuItem key={device.id} value={device.brand}>{device}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        )
    }
    return <></>
}

export default test