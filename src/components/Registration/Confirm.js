import React, { Component } from "react";
import {List} from "@material-ui/core/List/List";
import {ListItem} from "@material-ui/core/ListItem/ListItem"
import Button from '@material-ui/core/Button';



export class Confirm extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { values: {fullName, email, password, occupation, city, bio} } = this.props;
        return (

                <React.Fragment>
                    <List>
                        <ListItem 
                            primaryText="Full Name"
                            secondaryText={ fullName }
                        />
                        <ListItem 
                            primaryText="Email"
                            secondaryText={ email }
                        />
                        <ListItem 
                            primaryText="Password"
                            secondaryText={ password }
                        />
                        <ListItem 
                            primaryText="Occupation"
                            secondaryText={ occupation }
                        />
                        <ListItem 
                            primaryText="City"
                            secondaryText={ city }
                        />
                        <ListItem 
                            primaryText="Bio"
                            secondaryText={ bio }
                        />
                    </List>
                    <br/>
                    <Button
                    type="submit"
                    margin="normal"
                    width="48%"
                    variant="contained"
                    label="Continue & Confirm"
                    color="primary"
                    style={styles.button}
                    onClick={this.continue}
                    >Continue & Confirm</Button>
                    <br/>
                    <Button
                    type="submit"
                    variant="contained"
                    margin="normal"
                    width="50%"
                    label="Go Back"
                    
                    style={styles.button}
                    onClick={this.back}
                    >Go Back</Button>
                </React.Fragment>
        );
    }
}


const styles = {
    button: {
        margin: 15
    }
}

export default Confirm;