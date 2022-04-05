import { Typography, Box, Grid, ToggleButton } from '@mui/material'
import React from 'react'
import StyledButton from '../StyledButton'

function Piece(props){
  const piece = ["J'ai déjà ma pièce", "Je ne l'ai pas"]
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

       <StyledButton label={piece} handleChange={props.handleChange} width={300} state={"piece"}/>
        <p>*Nous vous ferons parvenir un lien en fin de parcours pour acheter votre pièce</p>
      </Box>
    )
  }
  return <></>
}

export default Piece
