import { FormControl, InputLabel, Select, MenuItem, TextField } from "@mui/material"
import React, { useState, useEffect } from 'react'

function SelectBrand(props) {

    if (props.values.datas != "") {
        const brands = props.values.datas.brand
        return (
            <>
                <FormControl sx={{ width: 200, margin: '10px 10px 10px 0px' }}>
                    <InputLabel id="select-label">Marque</InputLabel>
                    <Select
                        value={props.values.brand}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Appareil"
                        onChange={props.handleChange('brand')}
                    >
                        {brands.map(brand => 
                            <MenuItem key={brand.id} value={brand}>{brand}</MenuItem>
                        )}
                    </Select>

                </FormControl>
                <TextField
                    defaultValue={props.values.model}
                    onChange={props.handleChange('model')}
                    label="Modèle"
                    sx={{ width: 200, margin: '10px 10px 10px 0px' }}
                />
            </>
        )
    }
    return <></>
}
export default SelectBrand 