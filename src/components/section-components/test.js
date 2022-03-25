import React from 'react'
const { Component, render } = wp.element
import { TextField } from '@mui/material'

export default class test extends Component {

  render() {
    return (
        <TextField
        placeholder="Enter Your First Name"
        label="First Name"
        margin="normal"
        fullWidth
      />
    )
  }
}
