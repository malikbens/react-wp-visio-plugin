import { Typography, Box, Grid, ToggleButton } from '@mui/material'
import React from 'react'

const Piece = (props) => {
  if (props.values.need === "J'ai besoin d'aide pour remplacer ma pièce") {
    return (
      <Box>
        <Typography
          variant="h2"
          color="primary"
          align="left"
          mb={3}
          mt={3}
        >
          Possédez vous la nouvelle pièce ?
        </Typography>

        <Grid container>
          <Grid item  sx={{ mb: 2 }} >
            <ToggleButton  sx={{ textTransform: "lowercase", width: 550 }}
              onChange={props.handleChange('piece')}
              value="J'ai déjà ma pièce"
              fullWidth="true"
            >
              J'ai déjà ma pièce
            </ToggleButton>
          </Grid>
          <Grid item sx={{ mb: 2 }} >
            <ToggleButton sx={{ textTransform: "lowercase", width: 550 }}
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
