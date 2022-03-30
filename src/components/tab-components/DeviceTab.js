const { Component, render } = wp.element
import { Typography, Button, Box } from "@mui/material"
import SelectDevice from './device-components/SelectDevice'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import SymptomGrid from "./device-components/SymptomGrid"
import SelectBrand from "./device-components/SelectBrand"
import ModelInput from "./device-components/ModelInput"
import Test from './device-components/test'

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
          <SelectBrand
            handleChange={this.props.handleChange}
            values={this.props.values}
          />
          {/* <ModelInput
            handleChange={this.props.handleChange}
            values={this.props.values}
          /> */}
        </Box>
        <br></br>

        {/* <SymptomGrid
          handleChange={this.props.handleChange}
          values={this.props.values}
        /> */}


        <Button variant="contained" onClick={this.continuer} endIcon={<ArrowForwardIcon />} >
          Continuer
        </Button>
      </Box>
    );
  }
}
