import React, { useState } from 'react';
import FormUserDetails from './FormUserDetails';
import Confirm  from './Confirm';


const UserForm = () =>  {
    const [users, setUsers] = useState({step: 1,
        userName: "",
        password: "",
        checkedA: false,
        })
        

    const nextStep = () => {
        const {step} = users;
        setUsers({...users,
            step: step + 1
        })
        console.log(step);
    }

    const prevStep = () => {
        const {step} = users;
        setUsers({...users,
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
        }
        return (
            <div>
                
            </div>
        )
    }


export default UserForm;
