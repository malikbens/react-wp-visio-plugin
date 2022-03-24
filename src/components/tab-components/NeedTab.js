const { Component, render } = wp.element;
import { Typography, Button, Container } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


export default class DeviceTab extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  }

  render() {

    return (
      <Container>
        <Typography
          variant="h1"
          color="text"
          align="left"
        >
        Décrivez ce dont vous avez besoin
        </Typography>
        
        <Button  onClick={this.back}  >
          Retour
        </Button>
        <Button variant="contained" onClick={this.continue} endIcon={<ArrowForwardIcon/>}  >
          Continuer
        </Button>
      </Container>
    );
  }
}
