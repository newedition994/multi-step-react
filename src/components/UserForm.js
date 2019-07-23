import React, { Component } from 'react'
import FormUserDetails from './FormUserDetails';

export class UserForm extends Component {

    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        occupation: '',
        city: '',
        bio: ''
    }

    // Proceed to next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    }

    // Go back a step
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }

    // Handle User Input
    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    }


    render() {

        const { step } = this.state;
        const { firstName, lastName, email, occupation, city, bio } = this.state;
        const values = { firstName, lastName, email, occupation, city, bio }

        // eslint-disable-next-line default-case
        switch (step) {
            case 1:
                return (
                    <FormUserDetails
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 2:
                return <h1>FormPersonalDetails</h1>
            case 3:
                return <h1>Confirm</h1>
            case 4:
                return <h1>Success</h1>
        }
    }
}

export default UserForm
