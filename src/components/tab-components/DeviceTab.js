const { Component } = wp.element
import { Typography, Button, Box, Container } from "@mui/material"
import SelectDevice from './device-components/SelectDevice'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import SelectBrand from "./device-components/SelectBrand"
import SelectSymptom from "./device-components/SelectSymptom"
import Test from '/src/components/tab-components/test.js'



export default class DeviceTab extends Component {
  continuer = e => {
    e.preventDefault();
    this.props.nextStep();
  }

  render() {
    return (
      <Container sx={{ width: '750px' }}>
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

        <Box sx={{ width: '750px' }}>
          <SelectDevice
            handleChange={this.props.handleChange}
            values={this.props.values}
            fetchData={this.props.fetchData}
            setData={this.props.setData}
          />
        
          <SelectBrand
            handleChange={this.props.handleChange}
            values={this.props.values}
            fetchData={this.props.fetchData}
          />
          <SelectSymptom 
            handleChange={this.props.handleChange}
            values={this.props.values}
          />
            {/* <Test
            handleChange={this.props.handleChange}
            values={this.props.values} /> */}
        </Box>
        <br></br>

        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button sx={{mt: 5, ml: 3 }} variant="contained" onClick={this.continuer} endIcon={<ArrowForwardIcon />} >
            Continuer
          </Button>
        </Box>
      </Container>
    );
  }
}
