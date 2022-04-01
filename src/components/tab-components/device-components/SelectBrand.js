import { FormControl, InputLabel, Select, MenuItem, Box, Typography, RadioGroup, Grid, ToggleButton, TextField, ToggleButtonGroup } from "@mui/material"
import { useState, useEffect, useCallback } from 'react'


function SelectBrand(props) {

    const [brand, setBrand] = useState([])
    const [symptoms, setSymptom] = useState([])

    const fetchData = useCallback(async () => {
        const res = await fetch('http://localhost:3000/devices?name=' + props.values.device)
        const data = await res.json();

        setSymptom(data[0].symptoms)
        setBrand(data[0].brand)
    }, [props.values.device])

    useEffect(() => {
        fetchData()
    }, [fetchData])

    if (props.values.device != "") {
        return (
            <>
                <FormControl sx={{ width: 160, margin: '10px 10px 10px 0px' }}>
                    <InputLabel id="select-label">Marque</InputLabel>
                    <Select
                        value={props.values.brand}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Appareil"
                        onChange={props.handleChange('brand')}
                    >
                        {brand.map(device => (
                            <MenuItem key={device.id} value={device}>{device}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <TextField
                    defaultValue={props.values.model}
                    onChange={props.handleChange('model')}
                    label="Modèle"
                    sx={{width: 150 , margin: '10px 10px 10px 0px' }}
                />
            </>
        )

    }
    return <></>
}

export default SelectBrand