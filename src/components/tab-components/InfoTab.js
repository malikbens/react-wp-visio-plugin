const { Component, render } = wp.element;
import React from 'react'
import { Typography, Button, Container, TextField, Grid} from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CounterInput from 'react-counter-input'
import StyledButton from './StyledButton';
import Level from './info-components/Level';

export default class InfoTab extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep()
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const access = ["Accessible","Encastré et facilement dégageable","Encastré mais difficilement accessible"] 
        return (
            <Container sx={{ width: "730px" }}>
                <Typography
                    variant="h1"
                    align="left"
                    color='text'
                >
                    4. Quelques informations utiles pour votre réparateur
                </Typography>
                <Typography
                    variant="h2"
                    align="left"
                    color="primary"
                >
                    Quel âge a votre appareil ?
                </Typography>
                <CounterInput
                    min={0}
                    max={100}
                    onCountChange={data => this.props.handleAge(data)}
                    wrapperStyle={{border:"solid 1px #C4C4C4", width:'fit-content'}}
                />
                  <Typography
                    variant="h2"
                    align="left"
                    color="primary"
                >
                    Votre appareil est-il facilement accessible ?
                </Typography>
                
                <StyledButton label={access} handleChange={this.props.handleChange}  width={500} state={"access"}/>
                <Grid item>
                    <TextField sx={{width:500}} variant="outlined" label="Autre"></TextField>
                </Grid>

                <Typography
                    variant="h2"
                    align="left"
                    color="primary"
                >
                    Niveau bricolage, vous vous situez plutôt... 
                </Typography>

                <Level handleChange={this.props.handleChange}/>

                <Typography
                    variant="h2"
                    align="left"
                    color="primary"
                >
                    Quel outils avez vous à votre disposition ?
                </Typography>
                
                <Button onClick={this.back}  >
                    Retour
                </Button>
                <Button variant="contained" onClick={this.continue} endIcon={<ArrowForwardIcon />}  >
                    Continuer
                </Button>
            </Container>
        )
    }
}
