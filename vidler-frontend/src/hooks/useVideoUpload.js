import { useState, useContext } from 'react';
import user from '../apis/user';
import {swalMessage} from '../apis/swal'

export default () => {
    const [uploadedFile, setUploadedFile] = useState({});
    const [uploadPercentage, setUploadPercentage] = useState(0);
    const [form, setForm] = useState({
        title:'',
        description: '',
        file: {}
    });

    const handleChange =(e) => {
        if (e.target.name === 'file') {
            setForm({...form, [e.target.name]:e.target.files[0]});
        } else {
            setForm({...form, [e.target.name]:e.target.value});
        }
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', form.file);
        try{
            const response = await user.post('http://localhost:8080/storage/uploadFile', formData, {
                headers: {
                    'Content-Type':'multipart/form-data'
                },
                onUploadProgress: progressEvent => {
                    setUploadPercentage(
                        parseInt(
                            Math.round((progressEvent.loaded * 100) / progressEvent.total)
                    )
                );
                    //Clear percentage
                    setTimeout(() => setUploadPercentage(0), 10000);
                }
            });

            try {
                const urlLink = response.data;
                const videoData = {
                    username: 'testing',
                    title: form.title,
                    link: urlLink,
                    description: form.description,
                    thumbnail: 'placeholder',
                    view_counts: 0
                }
                // const response = await auth.post('/signup', form);
                const videoResponse = await user.post('http://localhost:8080/video/uploadVideo', videoData);
                if (videoResponse) {
                    setUploadedFile({'url': urlLink});
                    swalMessage('success', 'File Uploaded!', urlLink);
                } else {
                    swalMessage('error', 'Oops...', 'There was a problem with the server');
                    console.log('failed here')
                }
                // console.log(response);
            } catch (err) {
                swalMessage('error', 'Oops...', err.response.data.message);
                console.log('why i fail here')
            }


        } catch(err){
            // console.log(err);
            if(err.response.status === 500) {
                swalMessage('error', 'Oops...', 'There was a problem with the server');
            } else {
                swalMessage('error', 'Oops...', err.response.data.message);
                console.log('mega fail here')
            }

        }
    }
    return [handleChange, onSubmit, uploadPercentage];
}