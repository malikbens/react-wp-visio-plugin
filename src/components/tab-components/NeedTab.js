const { Component, render } = wp.element;
import Piece from "./need-components/Piece";
import SelectInput from "./need-components/SelectInput";
import { Typography, Button, Box} from "@mui/material";
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
      <Box sx={{ width: '730px' }}>
        <Typography
          variant="h1"
          color="text"
          align="left"
        >
          2. Décrivez ce dont vous avez besoin
        </Typography>

        <SelectInput handleChange={this.props.handleChange} label="Je cherche la panne de mon appareil"/>
        <SelectInput handleChange={this.props.handleChange} label="J'ai besoin d'une confirmation de diagnostique"/>
        <SelectInput handleChange={this.props.handleChange} label="J'ai quelques questions techniques concernat mon appareil"/>
        <SelectInput handleChange={this.props.handleChange} label="J'ai besoin d'aide pour remplacer ma pièce"/>

        <Piece
          handleChange={this.props.handleChange}
          values={this.props.values}
        />

        <Button onClick={this.back}  >
          Retour
        </Button>
        <Button variant="contained" onClick={this.continue} endIcon={<ArrowForwardIcon />}  >
          Continuer
        </Button>
      </Box>
    );
  }
}
