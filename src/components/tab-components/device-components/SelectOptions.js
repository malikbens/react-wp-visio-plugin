import { FormControl, InputLabel, Select, MenuItem, Box, Typography, RadioGroup, Grid, FormControlLabel, Radio, TextField } from "@mui/material"
import devices from '/data/devices.json'
import { useState, useEffect, useCallback } from 'react'


function SelectOptions(props) {

    const [brand, setBrand] = useState([])
    const [symptoms, setSymptom] = useState([])

    const fetchData = useCallback(async () => {
        const res = await fetch('http://localhost:3000/devices?name=' + props.values.device)
        const data = await res.json();
        console.log(data[0].symptoms)

        setSymptom(data[0].symptoms)
        setBrand(data[0].brand)
    }, [props.values.device])

    useEffect(() => {
        fetchData()
    }, [fetchData])

    if (props.values.device != "") {
        console.log(props.values.brand)
        return (
            <>
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
                            <MenuItem key={device.id} value={device}>{device}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <TextField onChange={props.handleChange('model')} label="Modèle" sx={{ minWidth: 120, margin: '10px 10px 10px 0px' }} />
                <Box>
                    <Typography
                        variant="h2"
                        color="primary"
                        align="left"
                        mb={1}
                    >
                        Les symptomes de panne
                    </Typography>
                    <FormControl>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="female"
                            name="radio-buttons-group"
                        >
                            <Grid container >
                                {symptoms.map(symptom => (
                                    <Grid item xs={12} md={6}>
                                        <FormControlLabel onChange={props.handleChange('symptom')} value={symptom} control={<Radio />} label={symptom} />
                                    </Grid>
                                ))}
                            </Grid>
                        </RadioGroup>
                    </FormControl>
                </Box>
            </>
        )

    }
    return <></>
}

export default SelectOptions