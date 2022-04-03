import { FormControl, InputLabel, Select, MenuItem, TextField } from "@mui/material"
import React, { useState, useEffect } from 'react'
import Devices from '/data/devices.json'

function test(props) {

    if (props.values.device != "") {
        useEffect(() => {
            props.fetchData()
        }, [])
    }

    if (props.values.datas != "") {
        const brands = props.values.datas.brand
        console.log(brands)
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
                        {brands.map(brand => 
                            <p key={brand.id}>{brand}</p>
                        )}
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
export default test  