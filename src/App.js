import React, { Component } from 'react'
import VisioForm from './components/VisioForm'
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
          main: '#cc002e',
        },
        secondary: {
          main: '#8cbe22',
          contrastText: '#ffebee',
        },
        background: {
          default: '#ffffff',
        },
      },
      shape: {
        borderRadius: 0,
      },
      typography: {
        fontFamily: 'Inter',
        fontWeightBold: 700,
        fontSize: 18,
        h1: {
          fontSize: 28,
        },
        h2: {
          fontSize: 18,
        },
      },
})

function App(){
    return(
        <ThemeProvider theme={theme}>
            <VisioForm />
        </ThemeProvider>
        
    )
}

export default App