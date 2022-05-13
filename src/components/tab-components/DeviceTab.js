const { Component } = wp.element
import { Typography, Button, Box, Container } from "@mui/material"
import SelectDevice from './device-components/SelectDevice'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import SelectBrand from "./device-components/SelectBrand"
import SelectSymptom from "./device-components/SelectSymptom"


export default class DeviceTab extends Component {

  next = e => {
    e.preventDefault();
    if(this.props.values.device && this.props.values.brand && this.props.values.symptom){
      this.props.nextStep();
    }else{
      alert("Alert")
    }
  }

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }

  render() {
    return (
      <Container sx={{ width: '800px' }}>
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
            fetchData={this.props.fetchData}
            setData={this.props.setData}
          />

          <SelectBrand
            handleChange={this.props.handleChange}
            values={this.props.values}
            fetchData={this.props.fetchData}
          />
        </Box>
        <SelectSymptom
          handleChange={this.props.handleChange}
          values={this.props.values}
        />
        <br></br>

        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button 
            sx={{ mt: 5, ml: 3 }} 
            variant="contained" 
            onClick={this.continue} 
            endIcon={<ArrowForwardIcon />} 
          >
            Continuer
          </Button>
        </Box>
      </Container>
    );
  }
}
