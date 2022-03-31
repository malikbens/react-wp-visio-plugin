import { FormControl, InputLabel, Select, MenuItem, Box, Typography, RadioGroup, Grid, ToggleButton, TextField, ToggleButtonGroup } from "@mui/material"
import { useState, useEffect, useCallback } from 'react'


function SelectOptions(props) {

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
                <TextField onChange={props.handleChange('model')} label="Modèle" sx={{ margin: '10px 10px 10px 0px' }} />
                <Box >
                    <Typography
                        variant="h2"
                        color="primary"
                        align="left"
                    >
                        Les symptomes de panne
                    </Typography>
                    <FormControl>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="female"
                            name="radio-buttons-group"
                        >
                            <Grid container>
                                {symptoms.map(symptom => (
                                    <Grid item xs={12} md={6} sx={{ mb: 2 }}>
                                        <ToggleButton sx={{ textTransform: "lowercase", width: 350 }}
                                            onChange={props.handleChange('symptom')}
                                            value={symptom}
                                        >
                                            {symptom}
                                        </ToggleButton>
                                    </Grid>
                                ))}
                                <Grid item xs={12} md={6} sx={{ mb: 2 }}>
                                    <TextField sx={{width:350}}
                                        label='Autre'
                                        onChange={props.handleChange('symptom')}
                                    />
                                </Grid>
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