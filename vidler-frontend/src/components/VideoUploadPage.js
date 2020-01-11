import React, {useState} from 'react';
import auth from '../apis/auth';
import useVideoUpload from '../hooks/useVideoUpload';

const VideoUploadPage = () => {
    const [uploadFile, fileName, onSubmit] = useVideoUpload();

    return(
        <div className = "row">
            <form className = "col s12" onSubmit={onSubmit}>
                <div className = "row">
                    <div className = "file-field input-field">
                        <div className = "btn">
                            <span>Browse</span>
                            <input type = "file" name="video" onChange={uploadFile}/>
                        </div>
                        
                        <div className = "file-path-wrapper">
                            <input className = "file-path validate" type = "text" 
                                id='uploadFile' placeholder = {fileName} 
                            />
                        </div>
                    </div>
                </div>
                <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                    <i className="material-icons right"></i>
              </button>
            </form>       
     </div>
    );

}

export default VideoUploadPage;