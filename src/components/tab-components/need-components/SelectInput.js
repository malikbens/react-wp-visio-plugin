import { Grid, ToggleButton } from "@mui/material"

function SelectInput(props) {

    return(
        <Grid container >
          <Grid item sx={{ mb: 2 }} >
            <ToggleButton sx={{ textTransform: "lowercase", width: 500, justifyContent:'flex-start' }}
              onChange={props.handleChange('need')}
              value={props.label}
              fullWidth="true"
            >
              {props.label}
            </ToggleButton>
          </Grid>
        </Grid>
    )
}

export default SelectInput