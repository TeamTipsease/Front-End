import React, { useState, useEffect } from 'react';
import FormUserDetails from './FormUserDetails';
import Confirm  from './Confirm';
import UserList from '../Dashboard/UserList/UserList'
import {withFormik, Form, Field} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';



const UserForm = ({values, errors, touched, status}) =>  {
    const [users, setUsers] = useState({step: 1,
        userName: "",
        password: "",
        checkedA: false,
        })
        
        useEffect(() => {
            status && setUsers(user => [...user, status]);
        }, [status]);

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
        const {userName, password, checkedA} = users;
        const value = {userName, password, checkedA  }
        console.log(values)
        switch(step) {
            case 1:
                return(
                    <FormUserDetails 
                        nextStep={nextStep}
                        handleChange={handleChange}
                        values={value}
                    />
                )
            case 2:
                return(
                    <Confirm
                        nextStep={nextStep}
                        prevStep={prevStep}
                        values={value}
                    />
                    
                )
            case 3: 
                return (
                    <UserList/>
                )
        }
        return (
            <div>
                <Form>
                    <Field type="text" name="userName" placeholder="User Name"/>
                    {touched.userName && errors.userName && (
                        <p>{errors.userName}</p>
                    )}
                    <Field type="password" name="password" placeholder=" Password"/>
                    {touched.password && errors.password && (
                        <p>(errors.password}</p>
                    )}
                    <Field type="checkbox" name="isServiceWorker" checked={values.isServiceWorker}/>
                </Form>
                {users.map(user => (
                    <ul key={user.id}>
                        <li>User Name: {user.userName}</li>
                        <li>Password: {user.password}</li>
                    </ul>
                ))}
            </div>
        )
    }

    const FormikUserForm = withFormik({
        mapPropsToValues({userName, password, isServiceWorker}) {
            return {
                userName: userName || "",
                password: password || "",
                isServiceWorker: isServiceWorker || false
            };
        },
        validationSchema: Yup.object().shape({
            userName: Yup.string().required(),
            password: Yup.string().required()
        }),
        // handleSubmit(values, {setStatus}) {
        //     axios 
        //     .post("https://tipseasebackend.herokuapp.com/api/auth/register", values)
        //     .then(res => {
        //         setStatus(res.data);
        //         console.log(res);
        //     })
        //     .catch(err => console.log(err.response));
        // }
    })(UserForm);

export default FormikUserForm;
