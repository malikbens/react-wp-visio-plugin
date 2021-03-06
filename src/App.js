import React, { Component, useEffect } from 'react'
import VisioForm from './components/VisioForm'
import { createTheme, ThemeProvider, responsiveFontSizes  } from '@mui/material/styles';
import { Container } from '@mui/material';
import SideBar from './components/SideBar';
import Devices from '/data/devices.json'

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
      letterSpacing: 0.96,
      marginBottom: 25
    },
    h2: {
      fontSize: 18,
      fontWeight: 600,
      letterSpacing: 0.96,
      marginBottom: 20,
      marginTop: 20
    },
    body1: {
      fontSize: 18,
      fontWeight: 500,
      lineHeight: 1.7,
      letterSpacing: 0.96,
    },
  },
})

// theme = responsiveFontSizes(theme);

class App extends Component {
  state = {
    step: 1,
    device: '',
    brand: '',
    model: '',
    symptom: '',
    need: '',
    piece: '',
    prbDesc: '',
    age: '',
    access: '',
    level: '',
    tools: '',
    datas: [],
    isLoggedIn : false ,
    username : ''
  };

  componentDidMount(){
    const username = document.getElementById("username") ;
    if(document.body.classList.contains('logged-in')){
      this.setState({
        isLoggedIn : true,
        username : username.value
      })
    }
  }

  setUsername = username => {
    this.setState({
      username : username
    })
  }
  
  setIsLoggedIn = () => {
    this.setState({
      isLoggedIn : true
    })
  }

  fetchData = () => {
    const device = Devices.devices.find(o => o.name === this.state.device)
    this.setState({
      datas: device
    })
  };

  setData = () => e => {
    this.setState({
      device: e.target.value
    }, () => {
      this.fetchData()
    })
  }

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  handleAge = age => {
    this.setState({
      age: age
    })
  }

  render() {
    const { device, brand, model, symptom, need, piece, prbDesc, age, access, level, tools, datas, step, isLoggedIn, username} = this.state;
    const values = { device, brand, model, symptom, need, piece, prbDesc, age, access, level, tools, datas, step, isLoggedIn, username};
    const recap = {device, brand, model, symptom, need, piece, prbDesc, age, access, level, tools};

    return (
      <ThemeProvider theme={theme}>
        <Container sx={{ display: 'inline-flex', justifyContent: 'center',padding:"10px" }}>
          <VisioForm 
            nextStep={this.nextStep} 
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            handleAge={this.handleAge}
            fetchData={this.fetchData}
            setData= {this.setData}
            setIsLoggedIn={this.setIsLoggedIn}
            setUsername={this.setUsername}
            values={values}
          />
          <SideBar values={recap} />
        </Container>
      </ThemeProvider>

    )
  }
}

export default App