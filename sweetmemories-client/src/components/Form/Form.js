import React, { useState } from 'react';
import {TextField, Button, Paper} from '@material-ui/core';
import FileBase from 'react-file-base64';
import './Form.css';
import {useDispatch} from 'react-redux';
import { createPost } from '../../actions/posts';

function Form(props) {
    const [postData, setPostData] = useState({
        creator: '',
        title: '',
        message: '',
        tags: '',
        selectedFile: ''
    });
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(createPost(postData))
    }

    const clear = () => {
        
    }
    return (
        <Paper className="form__paper">
            <h4 className="form__heading">Creating Memory</h4>
            <form autoComplete="off" noValidate  onSubmit={handleSubmit}>
                <TextField 
                    name="creator" 
                    variant="outlined" 
                    label="Creator" 
                    fullWidth 
                    value={postData.creator} 
                    onChange={(e) => setPostData({...postData, creator: e.target.value})} 
                />
                <TextField 
                    name="title" 
                    variant="outlined" 
                    label="Title" 
                    fullWidth 
                    value={postData.title} 
                    onChange={(e) => setPostData({...postData, title: e.target.value})} 
                />
                <TextField 
                    name="message" 
                    variant="outlined" 
                    label="Message" 
                    fullWidth 
                    value={postData.message} 
                    onChange={(e) => setPostData({...postData, message: e.target.value})} 
                />
                <TextField 
                    name="tags" 
                    variant="outlined" 
                    label="Tags" 
                    fullWidth 
                    value={postData.tags} 
                    onChange={(e) => setPostData({...postData, tags: e.target.value})} 
                />
                {/* <div className="form__fileInput"> */}
                    <FileBase
                        type="file"
                        multiple={false}
                        onDone={({base64}) => setPostData({...postData, selectedFile: base64})}
                    />
                {/* </div> */}
                <Button 
                    type="submit" 
                    className="form__btnSubmit" 
                    variant="contained" 
                    color="primary" 
                    size="large">
                        Submit
                </Button>
                <Button 
                    onClick={clear} 
                    className="form__btnSubmit" 
                    variant="contained" 
                    color="secondary" 
                    size="small">
                        Clear
                </Button>
            </form>
        </Paper>
    );
}

export default Form;