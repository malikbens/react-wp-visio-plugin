import { Typography, Box, FormControl, TextField, ToggleButton, Grid, ToggleButtonGroup } from "@mui/material"
import React, {useState} from 'react'

export default function StyledButton(props) {
  const [selected, setSelected ] = useState('');
  return (
    <Box>
       <FormControl>
                    <Grid container>
                        {props.label.map(label=>
                            <ToggleButtonGroup exclusive={true} value={label} >
                                <Grid item xs={12} sx={{ mb: 2, mr:3}}>
                                    <ToggleButton
                                        sx={{ textTransform: "unset", justifyContent: 'flex-start', width: props.width, letterSpacing:"0.12em" }}
                                        key={label}
                                        value={label}
                                        onChange={props.handleChange(props.state)}
                                        onClick={() => setSelected( label )}
                                        selected={selected === label}
                                    >
                                        {label}
                                    </ToggleButton>
                                </Grid>
                            </ToggleButtonGroup>
                        )}
                    </Grid>
                </FormControl>
    </Box>
  )
}
