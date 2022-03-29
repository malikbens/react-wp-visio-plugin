import { FormControl, InputLabel, Select, MenuItem } from "@mui/material"
import { useEffect, useState } from 'react'
import devices from '/data/devices.json'

const SelectBrand = (props) => {

    const [brand, setBrand] = useState([])

    // useEffect(() => {
    //     fetch('http://localhost:3000/devices?name=' + props.values.device)
    //         .then(res => res.json())
    //         .then(data => setBrand(data));
    // }, [])

    useEffect(() => {
        const getBrand = async () => {
            const brandFromServer = await fetchBrand()
            setBrand(brandFromServer)
        }
        getBrand()
    }, [])

    const fetchBrand = async () => {
        const res = await fetch('http://localhost:3000/devices?name=' + props.values.device)
        const data = await res.json()

        return data
        console.log(data)
    }

    return (
        <FormControl sx={{ minWidth: 120, margin: '10px 10px 10px 0px' }}>
            <InputLabel id="select-label">Marque</InputLabel>
            <Select
            onClick={fetchBrand}
                value={props.values.brand}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Appareil"
                onChange={props.handleChange('brand')}
            >
                {brand.map(device => (
                <MenuItem key={device.id} value={device.brand}>{device.brand}</MenuItem>
            ))}
            </Select>

        </FormControl>
    )
}

export default SelectBrand