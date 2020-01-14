import { useState } from 'react';
import history from '../utils/history';

import {swalMessage} from '../apis/swal'
import auth from '../apis/auth';

export default () => {
    const [form, setForm] = useState({
        name:'',
        username: '',
        email: '',
        password: '',
        passwordConfirm:''
    });

    const handleChange =(e) => {
        setForm({...form, [e.target.name]:e.target.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(form.password.length < 6) {
            swalMessage('error', 'Oops...',"Password must be of length 6 or greater!")
            return
        } else if(form.password !== form.passwordConfirm){
            swalMessage('error', 'Oops...', "Passwords do not match, please try again!")
            return
        } else {
            try {
                const response = await auth.post('/signup', form);
                if(response){
                    swalMessage('success', 'Signup Complete!', 'Redirecting to login page...');
                    history.push('/signin')
                } else {
                    swalMessage('error', 'Oops...', response.message)
                }
            } catch(err){
                swalMessage('error', 'Oops....', err.response.data.message);
            }
        }
    }
    return [handleChange, handleSubmit];
}
