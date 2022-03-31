const { Component } = wp.element
import { Typography, Button, Box } from "@mui/material"
import SelectDevice from './device-components/SelectDevice'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import SelectOptions from "./device-components/SelectOptions"


export default class DeviceTab extends Component {
  continuer = e => {
    e.preventDefault();
    this.props.nextStep();
  }

  render() {
    return (
      <Box sx={{ width: '730px' }}>
        <Typography
          variant="h1"
          color="text"
          align="left"
          
        >
          1. Aidez le technicien a comprendre votre problème
        </Typography>

        <Typography
          variant="h2"
          color="primary"
          align="left"
        >
          Choissisez votre appareil a réparer
        </Typography>

        <Box >
          <SelectDevice
            handleChange={this.props.handleChange}
            values={this.props.values}
          />
          <SelectOptions
            handleChange={this.props.handleChange}
            values={this.props.values}
          />
        </Box>
        <br></br>
        <Box sx={{display: 'flex', justifyContent:'flex-end'}}>
          <Button variant="contained" onClick={this.continuer} endIcon={<ArrowForwardIcon/>} >
            Continuer
          </Button>
        </Box>
      </Box>
    );
  }
}
