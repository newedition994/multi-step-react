import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

export class Success extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Success" />
                    <h1>Thank you For Your Submission</h1>
                    <p>You will be emailed with further instructions.</p>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

export default Success
