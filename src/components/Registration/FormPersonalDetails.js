import React, { Component } from "react";

import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';


export class FormPersonalDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const {values, handleChange} = this.props;
        return (
                <React.Fragment>
                    <TextField 
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="occupation"
                        label="Occupation"
                        onChange={handleChange}
                        defaultValue={values.occupation}
                    />
                    <br/>
                    <TextField 
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="city"
                        label="City"
                        onChange={handleChange}
                        defaultValue={values.city}
                    />
                    <br/>
                    <TextField 
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="bio"
                        label="Bio"
                        onChange={handleChange}
                        defaultValue={values.bio}
                    />
                    <br/>
                    <Button
                    type="submit"
                    margin="normal"
                    width="48%"
                    variant="contained"
                    label="Continue"
                    color="primary"
                    style={styles.button}
                    onClick={this.continue}
                    >Continue</Button>
                    <br/>
                    <Button
                    type="submit"
                    variant="contained"
                    margin="normal"
                    width="50%"
                    label="Go Back"
                    primary={false}
                    style={styles.button}
                    onClick={this.back}
                    >Go Back</Button>
                </React.Fragment>
        )
    }
}


const styles = {
    button: {
        margin: 15
    }
}

export default FormPersonalDetails