import { Typography, Box, FormControl, TextField, ToggleButton, Grid } from "@mui/material"

function SelectSymtom(props) {
    if (props.values.brand != "") {
        const devices = props.values.singleDatas
        return (
            <Box >
                <Typography
                    variant="h2"
                    color="primary"
                    align="left"
                >
                    Les symptomes de panne
                </Typography>
                <FormControl>
                    <Grid container>
                        {devices.map(device => (
                            device.symptoms.map(symptom => (
                                <Grid item xs={12} md={6} sx={{ mb: 2 }}>
                                    <ToggleButton
                                        sx={{ textTransform: "unset", width: 300, justifyContent: 'flex-start' }}
                                        key={symptom.id}
                                        value={symptom}
                                    >{symptom}
                                    </ToggleButton>
                                </Grid>
                            ))
                        ))}
                        <Grid item xs={12} md={6} sx={{ mb: 2 }}>
                            <TextField
                                defaultValue={props.values.symptoml}
                                sx={{ width: 300 }}
                                label='Autre'
                                onChange={props.handleChange('symptom')}
                            />
                        </Grid>
                    </Grid>
                </FormControl>
            </Box>
        )
    }
    return <></>
}

export default SelectSymtom