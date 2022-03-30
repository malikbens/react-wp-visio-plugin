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
      <Box sx={{ width: '750px' }}>
        <Typography
          variant="h1"
          color="text"
          align="left"
          mb={1}
        >
          1. Aidez le technicien a comprendre votre problème
        </Typography>

        <Typography
          variant="h2"
          color="primary"
          align="left"
          mb={1}
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

        <Button variant="contained" onClick={this.continuer} endIcon={<ArrowForwardIcon />} >
          Continuer
        </Button>
      </Box>
    );
  }
}
