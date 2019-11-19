import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';
import FormPesonalDetails from "./FormPersonalDetails";
import Confirm  from './Confirm';
import Success from './Success'

export class UserForm extends Component {
    state = {
        step: 1,
        fullName: "",
        email: "",
        password: "",
        occupation: "",
        city: "",
        bio: "",
    }

    nextStep = () => {
        const {step} = this.state;
        this.setState({
            step: step + 1
        })
        console.log(step);
    }

    prevStep = () => {
        const {step} = this.state;
        this.setState({
            step: step - 1
        })
    }

    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    }

    render() {
        const {step} = this.state;
        const {fullName, email, password, occupation, city, bio} = this.state;
        const values = {fullName, email, password, occupation, city, bio}

        switch(step) {
            case 1:
                return(
                    <FormUserDetails 
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 2:
                return(
                    <FormPesonalDetails 
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        onChange={this.handleChange}
                        values={values}
                    />
                )
            case 3:
                return(
                    <Confirm
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        values={values}
                    />
                    
                )
            case 4:
                return(
                    <Success/>
                )
        }
        return (
            <div>
                
            </div>
        )
    }
}

export default UserForm;
