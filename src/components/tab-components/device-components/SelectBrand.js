import { FormControl, InputLabel, Select, MenuItem, TextField } from "@mui/material"
import { useEffect } from 'react'


function SelectBrand(props) {
    if (props.values.device != "") {
        useEffect(() => {
            props.fetchData();
        }, [])
    }

    if (props.values.singleDatas != "") {
        const devices = props.values.singleDatas
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
                        {devices.map(device => (
                            device.brand.map(brand => (
                                <MenuItem key={brand.id} value={brand} >{brand}</MenuItem>
                            ))
                        ))}
                    </Select>

                </FormControl>
                <TextField
                    defaultValue={props.values.model}
                    onChange={props.handleChange('model')}
                    label="Modèle"
                    sx={{ width: 150, margin: '10px 10px 10px 0px' }}
                />
            </>
        )
    }

    return <></>
}

export default SelectBrand