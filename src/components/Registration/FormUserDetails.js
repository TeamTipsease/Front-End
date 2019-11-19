
import React, { Component } from "react";

import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';




export class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    render() {
        const {values, handleChange} = this.props;
        return (
            <Container>
                    <React.Fragment>
                        <TextField 
                            onChange={handleChange("fullName")}
                            defaultValue={values.fullName}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="fullName"
                            label="Full Name"
                        />
                        <br/>
                        <TextField 
                            onChange={handleChange("email")}
                            defaultValue={values.email}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="email"
                            label="Email"
                        />
                        <br/>
                        <TextField
                            onChange={handleChange("password")}
                            defaultValue={values.password}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <br/>
                        <Button
                            type="submit"
                            margin="normal"
                            fullWidth
                            variant="contained"
                            label="Continue"
                            color="primary"
                            style={styles.button}
                            onClick={this.continue}
                        >Continue</Button>
                    </React.Fragment>
            </Container>
        )
    }
}

const styles = {
    button: {
        margin: 15
    }
}

export default FormUserDetails