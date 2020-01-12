import { useState, useContext } from 'react';
import AuthContext from '../contexts/AuthContext';
import auth from '../apis/auth';

export default () => {
    const [file, setFile] = useState({});
    const [fileName, setFileName] = useState('Choose File');
    const [uploadedFile, setUploadedFile] = useState({});

    const uploadFile = (e) => {
        setFile(e.target.files[0]);
        setFileName(e.target.files[0].name);;
        console.log(e.target.files[0]);
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);
        console.log(formData);

        try{
            const response = await auth.post('https://postman-echo.com/post', formData, {
                headers: {
                    'Content-Type':'multipart/form-data'
                }
            });
            const {fileName, filePath} = response.data;
            setUploadedFile({fileName, filePath});
        } catch(err){
            console.log(err);
            // if(err.response.status === 500) {
            //     console.log('There was a problem with the server');
            // } else {
            //     console.log(err.response.data.msg);
            // }

        }
    }
    return [uploadFile, fileName, onSubmit];
}