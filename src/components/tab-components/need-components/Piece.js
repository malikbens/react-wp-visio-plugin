import { Typography, Box, Grid, ToggleButton } from '@mui/material'
import React from 'react'

const Piece = (props) => {
  if (props.values.symptom === "J'ai besoin d'aide pour remplacer ma pièce") {
    return (
      <Box>
        <Typography
          variant="h2"
          color="text"
          align="left"
          mb={3}
        >
          Possédez vous la nouvelle pièce ?
        </Typography>

        <Grid container>
          <Grid item >
            <ToggleButton
              onChange={props.handleChange('piece')}
              value="J'ai déjà ma pièce"
              fullWidth="true"
            >
              J'ai déjà ma pièce
            </ToggleButton>
          </Grid>
          <Grid item >
            <ToggleButton
              onChange={props.handleChange('piece')}
              value="Je ne l'ai pas"
              fullWidth="true"
            >
              Je ne l'ai pas
            </ToggleButton>
          </Grid>
          <p>*Nous vous ferons parvenir un lien en fin de parcours pour acheter votre pièce</p>
        </Grid>
      </Box>
    )
  }
  return <></>
}

export default Piece
