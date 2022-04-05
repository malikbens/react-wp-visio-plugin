const { Component, render } = wp.element;
import React from 'react'
import Piece from "./need-components/Piece";
import StyledButton from "./StyledButton";
import { Typography, Button, Box, Container, ToggleButton, ToggleButtonGroup } from "@mui/material";
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
      <Container sx={{ width: '730px' }}>
        <Typography
          variant="h1"
          color="text"
          align="left"
        >
          2. Décrivez ce dont vous avez besoin
        </Typography>

        <StyledButton label={needs} handleChange={this.props.handleChange} width={"unset"} state={"need"}/>
        <Piece values={this.props.values} handleChange={this.props.handleChange} />
        
        <Button onClick={this.back}>
          Retour
        </Button>
        <Button variant="contained" onClick={this.continue} endIcon={<ArrowForwardIcon />}  >
          Continuer
        </Button>
      </Container>
    ) 
  }
}
