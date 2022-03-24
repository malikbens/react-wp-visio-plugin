const { Component, render } = wp.element
import { Typography, Button, Container } from "@mui/material"
import SelectDevice from '../section-components/SelectDevice'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import SymptomGrid from "../section-components/SymptomGrid"
import SelectBrand from "../section-components/SelectBrand"
import ModelInput from "../section-components/ModelInput"


export default class DeviceTab extends Component {
  continuer = e => {
    e.preventDefault();
    this.props.nextStep();
  }

  render() {

    return (
      <Container maxWidth="md">
        <Typography
          variant="h1"
          color="text"
          align="left"
        >
          Aidez le technicien a comprendre votre problème
        </Typography>

        <Typography
          variant="h2"
          color="primary"
          align="left"
        >
          Choissisez votre appareil a réparer
        </Typography>

        <SelectDevice />
        <SelectBrand />
        <ModelInput />
        <br></br>

        <Typography
          variant="h2"
          color="primary"
          align="left"
        >
          Les symptomes de  panne
        </Typography>

        <SymptomGrid />

        <Button variant="contained" onClick={this.continuer} endIcon={<ArrowForwardIcon />} >
          Continuer
        </Button>
      </Container>
    );
  }
}
