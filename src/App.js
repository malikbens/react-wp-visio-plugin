import React, { Component } from 'react'
import VisioForm from './components/VisioForm'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Container } from '@mui/material';
import SideBar from './components/SideBar';

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
    fontFamily: 'Inter, sans-serif',
    fontWeightBold: 700,
    fontSize: 18,
    h1: {
      fontSize: 28,
      fontWeight: 700,
      lineHeight: 1.7,
      letterSpacing: 1.92 ,
    },
    h2: {
      fontSize: 18,
      fontWeight: 600,
      letterSpacing: 1.92,
    },
    body1: {
      fontSize: 18,
      fontWeight: 500,
      lineHeight: 1.7,
      letterSpacing: 1.92,
    },
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl"  sx={{display: 'inline-flex', justifyContent:'center'}}>
        <VisioForm />
        <SideBar />
      </Container>
    </ThemeProvider>

  )
}

export default App