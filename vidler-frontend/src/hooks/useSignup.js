import { useState } from 'react';
import history from '../utils/history';
import Swal from 'sweetalert2'

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

    const swalError = (message) => {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: message
          })
    }

    const swalSuccess = () => {
        Swal.fire(
            'Good job!',
            'You can now signin here!',
            'success'
          )
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(form.password.length < 6) {
            swalError("Password must be of length 6 or greater!")
            return
        }

        if(form.password !== form.passwordConfirm){
            swalError("Passwords do not match, please try again!")
            return
        }
        try {
            const response = await auth.post('/signup', form);
            if(response){
                swalSuccess();
                history.push('/signin')
            } else {
                swalError(response.message)
            }
        } catch(err){
            swalError(err.response.data.message);
        }
        
    }
    return [handleChange, handleSubmit];
}
