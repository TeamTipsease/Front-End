import React, { useState, useEffect } from 'react';
import FormUserDetails from './FormUserDetails';
import Confirm  from './Confirm';
import UserList from '../Dashboard/UserList/UserList'





const UserForm = (props) =>  {
    const [users, setUsers] = useState({step: 1,
        userName: "",
        userNameError: "",
        password: "",
        passwordError: "",
        checkedA: false,
        })
        console.log(props);
        
        // useEffect(() => {
        //     status && setUsers(user => [...user, status]);
        // }, [status]);

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

    // const validate = () => {
    //     let isError = false;
    //     const errors = {
    //         userNameError: "",
    //         passwordError: ""
    //     };

    //     if (users.userName.length < 5) {
    //         isError = true;
    //         errors.userNameError = "Username need to be at least 5 characters long"
    //     }

    //     if (isError) {
    //         setUsers({
    //             ...users,
    //             ...errors
    //         });
    //     }

    //     return isError;
    // }
    

    const onSubmit = e => {
        // e.preventDefault();
        const err = users.validate();
        if (!err) {
            setUsers({
                userName: "",
                password: "",
                checkedA: false
            })
        }
    }

    const handleChange =  e => {
        setUsers({...users, userName: e.target.value});
        
    }


    const handleChecked =  e => {
        setUsers({...users,checkedA: e.target.checked})
        console.log(e);
    }

        const {step} = users;
        const {userName, password, checkedA} = users;
        const values = {userName, password, checkedA  }
        console.log(users)
        console.log(values)
        switch(step) {
            case 1:
                return(
                    <FormUserDetails 
                        nextStep={nextStep}
                        handleChange={handleChange}
                        handleChecked={handleChecked}
                        values={values}
                    />
                )
            case 2:
                return(
                    <Confirm
                        nextStep={nextStep}
                        prevStep={prevStep}
                        onSubmit={onSubmit}
                        values={values}
                    />
                    
                )
            case 3: 
                return (
                    <UserList/>
                )
        }
        return (
            <div>
               
            </div>
        )
    }


export default UserForm;
