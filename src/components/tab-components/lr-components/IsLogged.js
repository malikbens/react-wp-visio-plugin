import { Typography } from '@mui/material';
import React, { useState, useEffect } from 'react'
const { Component, render } = wp.element;

export default function IsLogged() {

  return (
    <>
      <Typography
        variant="h2"
        align='left'
        color='text'
      >
        Bonjour {usrname}
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button sx={{ mt: 5, color: 'black' }} onClick={back}  >
          Retour
        </Button>
        <Button sx={{ mt: 5, ml: 3 }} variant="contained" onClick={continuer} endIcon={<ArrowForwardIcon />}  >
          Continuer
        </Button>
      </Box>
    </>

  )
}
