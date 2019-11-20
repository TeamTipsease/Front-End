import React, { useState } from 'react';
import FormUserDetails from './FormUserDetails';
import Confirm  from './Confirm';
import Success from './Success'

const UserForm = () =>  {
    const [users, setUsers] = useState({step: 1,
        userName: "",
        password: "",
        })
        

    const nextStep = () => {
        const {step} = users;
        setUsers({
            step: step + 1
        })
        console.log(step);
    }

    const prevStep = () => {
        const {step} = users;
        setUsers({
            step: step - 1
        })
    }

    const handleChange = input => e => {
        setUsers({...users,[input]: e.target.value});
    }

        const {step} = users;
        const {userName, password} = users;
        const values = {userName, password}

        switch(step) {
            case 1:
                return(
                    <FormUserDetails 
                        nextStep={nextStep}
                        handleChange={handleChange}
                        values={values}
                    />
                )
            case 2:
                return(
                    <Confirm
                        nextStep={nextStep}
                        prevStep={prevStep}
                        values={values}
                    />
                    
                )
            case 3:
                return(
                    <Success/>
                )
        }
        console.log(userName);
        console.log(password);
        return (
            <div>
                
            </div>
        )
    }


export default UserForm;
