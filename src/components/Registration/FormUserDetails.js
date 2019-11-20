
import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';




const FormUserDetails = (props) =>  {
    console.log(props);
    const next = e => {
        e.preventDefault();
        props.nextStep();
    }

        const {values, handleChange} = props;
        return (
            <Container>
                        <TextField 
                            onChange={handleChange("userName")}
                            defaultValue={values.userName}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="userName"
                            label="User Name"
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
                            onClick={next}
                        >Continue</Button>
            </Container>
        )
    }


const styles = {
    button: {
        margin: 15
    }
}

export default FormUserDetails