import { useState } from 'react';

export default initialVal => {
    const [value, setValue] = useState(initialVal);

    const handleChange =(e) => {
        setValue(e.target.value);
    };

    const handleSubmit = (e) => {
        const pwd = e.target.password.value
        const pwdConfirm = e.target.password_confirm.value
        if(pwd !== pwdConfirm){
            alert("Passwords must match")
        } else {
            alert("Passwords are good!")
        }
        e.preventDefault();
    }
    return [value, handleChange, handleSubmit];
}
