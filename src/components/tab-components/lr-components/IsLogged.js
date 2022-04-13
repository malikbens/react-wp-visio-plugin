import React from 'react'
import { Typography,Box, Button } from '@mui/material';
const { Component, render } = wp.element;
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export class IsLogged extends Component {
  continuer = e => {
    e.preventDefault();
    this.props.nextStep()
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    return (
      <>
        <Typography
          variant="h2"
          align='left'
          color='text'
        >
          Bonjour {this.props.username}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button sx={{ mt: 5, color: 'black' }} onClick={this.back}  >
            Retour
          </Button>
          <Button sx={{ mt: 5, ml: 3 }} variant="contained" onClick={this.continuer} endIcon={<ArrowForwardIcon />}  >
            Continuer
          </Button>
        </Box>
      </>
  
    )
  }
}

export default IsLogged
