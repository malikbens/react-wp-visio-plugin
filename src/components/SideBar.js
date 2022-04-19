import React, { Component } from 'react'
import { Box } from '@mui/system'
import { Typography } from '@mui/material'

export class SideBar extends Component {
  render() {
    const values = Object.values(this.props.values)
    return (
      <Box sx={{ display : { xs: 'none' , sm:'none', md:'block'}, width:'300px'}}>
        <Typography
          variant="h2"
          color="primary"
          align="center"
        >
          Récapitulatif
        </Typography>
        <Box>
          <Typography >
            {values.map(value =>
              <p key={value.id}>{value}</p>
            )}
          </Typography>
        </Box>
      </Box>
    )
  }
}

export default SideBar