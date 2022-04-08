import React, { Component } from 'react'
import { Box } from '@mui/system'
import { Typography } from '@mui/material'

export class SideBar extends Component {
  render() {
    return (
      <Box>
        <Typography
          variant="h2"
          color="primary"
          align="center"
        >
          Récapitulatif
        </Typography>
        
      </Box>
    )
  }
}

export default SideBar