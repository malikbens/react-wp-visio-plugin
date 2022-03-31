const { Component, render } = wp.element;
import Piece from "./need-components/Piece";
import { Typography, Button, Box, Grid, ToggleButton } from "@mui/material";
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
          Décrivez ce dont vous avez besoin
        </Typography>

        <Grid container >
          <Grid item sx={{ mb: 2 }} >
            <ToggleButton sx={{ textTransform: "lowercase", width: 550 }}
              onChange={this.props.handleChange('need')}
              value="Je cherche la panne de mon appareil"
              fullWidth="true"
            >
              Je cherche la panne de mon appareil
            </ToggleButton>
          </Grid>
          <Grid item sx={{ mb: 2 }} >
            <ToggleButton sx={{ textTransform: "lowercase", width: 550 }}
              onChange={this.props.handleChange('need')}
              value="J'ai besoin d'une confirmation de diagnostique"
              fullWidth="true"
            >
              J'ai besoin d'une confirmation de diagnostique
            </ToggleButton>
          </Grid>
          <Grid item sx={{ mb: 2 }} >
            <ToggleButton sx={{ textTransform: "lowercase", width: 550 }}
              onChange={this.props.handleChange('need')}
              value="J'ai quelques questions techniques concernat mon appareil"
              fullWidth="true"
            >
              J'ai quelques questions techniques concernat mon appareil
            </ToggleButton>
          </Grid>
          <Grid item >
            <ToggleButton sx={{ textTransform: "lowercase", width: 550 }}
              onChange={this.props.handleChange('need')}
              value="J'ai besoin d'aide pour remplacer ma pièce"
              fullWidth="true"
            >
              J'ai besoin d'aide pour remplacer ma pièce
            </ToggleButton>
          </Grid>
        </Grid>

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
