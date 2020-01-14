import React, {useState} from 'react';
import Progress from './Progress';
import useVideoUpload from '../hooks/useVideoUpload';

const VideoUploadPage = () => {
    const [handleChange, onSubmit, uploadPercentage] = useVideoUpload('');
    
    return(
        <div className="center">
        {/* Temporary Logo; Replace this later. */}
        <div className="auth-logo"></div>
        <div className="welcome-text">
          Enter details below to upload your video!
        </div>
        <div className="container form-container">
          <div className="row">
            <form className="col s10 offset-s1 auth-form z-depth-2" onSubmit={onSubmit}>
            <p>Upload Progress: {uploadPercentage}</p>
            <Progress percentage={uploadPercentage}/>
              <div className="row">
                  <div className="input-field col s11">
                      <input id="title" name="title" type="text" onChange={handleChange} required/>
                      <label htmlFor="title">Title</label>
                  </div>
                  <div className="input-field col s11">
                      <input id="description" name="description" type="text" onChange={handleChange} required/>
                      <label htmlFor="description">Description</label>
                  </div>
                  <div className = "row">
                  <div className = "file-field input-field col s10">
                      <div className = "btn">
                          <span>Browse</span>
                          <input type = "file" name="file" onChange={handleChange}/>
                      </div>
                      <div className = "file-path-wrapper">
                          <input className = "file-path validate" type = "text" 
                                  id='uploadFile' />
                      </div>
                  </div>
                  <button className="btn waves-effect waves-light" type="submit" name="action" >Submit
                      <i className="material-icons right"></i>
                  </button>
              </div>
              </div>
            </form>
          </div>
          
        </div>
      </div>

    );

}

export default VideoUploadPage;