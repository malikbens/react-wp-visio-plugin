import React, { Component } from 'react'
import { Button, TextField } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


export class test extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    render() {
        return (
            <div>test
                <TextField
                    placeholder="Enter Your City"
                    label="City"
                    onChange={this.props.handleChange('need')}
                    defaultValue={this.props.values.need}
                    margin="normal"
                    fullWidth
                />
                <Button onClick={this.back}  >
                    Retour
                </Button>
                <Button variant="contained" onClick={this.continue} endIcon={<ArrowForwardIcon />}  >
                    Continuer
                </Button>
            </div>

        )
    }
}

export default test