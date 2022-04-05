import { Grid, ToggleButton } from "@mui/material"

function SelectNeed(props) {

    return(
        <Grid container >
          <Grid item sx={{ mb: 2 }} >
            <ToggleButton sx={{ textTransform: "lowercase", width: 500, justifyContent:'flex-start' }}
              onChange={props.handleChange('need')}
              value='salut'
              fullWidth="true"
            >
              {props.label}
            </ToggleButton>
          </Grid>
        </Grid>
    )
}

export default SelectNeed