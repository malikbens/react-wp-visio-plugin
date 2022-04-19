const { Component, render } = wp.element;
import React from 'react'
import Piece from "./need-components/Piece";
import StyledButton from "./StyledButton";
import { Typography, Button, Box, Container } from "@mui/material";
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
    const needs = ["Je cherche la panne de mon appareil", "J'ai besoin d'une confirmation de diagnostique", "J'ai quelques questions techniques concernat mon appareil", "J\'ai besoin d\'aide pour remplacer ma pièce"]

    return (
      <Container sx={{ width: '800px' }} >
        <Typography
          variant="h1"
          color="text"
          align="left"
        >
          2. Décrivez ce dont vous avez besoin
        </Typography>
        <Box >
          <StyledButton label={needs} handleChange={this.props.handleChange} gridWidth={'550px'} width={"100%"} state={"need"} />
          <Piece values={this.props.values} handleChange={this.props.handleChange} />
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button sx={{ mt: 5, color: 'black' }} onClick={this.back}>
            Retour
          </Button>
          <Button sx={{ mt: 5, ml: 3 }} variant="contained" onClick={this.continue} endIcon={<ArrowForwardIcon />}  >
            Continuer
          </Button>
        </Box>
      </Container>
    )
  }
}
