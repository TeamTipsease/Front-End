import React, { Component } from "react";





export class Success extends Component {
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
                <React.Fragment>
                    <h1>Thank You For Your Submission</h1>
                    <p>You Will Recieve A Confirmation Email Shortly</p>
                </React.Fragment>
        )
    }
}




export default Success;