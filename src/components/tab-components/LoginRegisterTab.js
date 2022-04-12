import React, { Component } from 'react'
import LoginRegister from './lr-components/LoginRegister'


export class LoginRegisterTab extends Component {
    render() {
        if (document.body.classList.contains('logged-in')) {
            return (
                <div>SALUT monsieur</div>
            )
        } return (
            <LoginRegister nextStep={this.props.nextStep}
                prevStep={this.props.prevStep}
                handleChange={this.props.handleChange}
                values={this.props.values} />
        )

    }
}

export default LoginRegisterTab