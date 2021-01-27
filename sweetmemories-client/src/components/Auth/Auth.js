import React, { useState } from 'react';
import './Auth.css';
import {Avatar, Button, Paper, Grid, Typography, Container, TextField} from '@material-ui/core';
import LockOpenOutlinedIcon from '@material-ui/icons/LockOpenOutlined';
import {GoogleLogin} from 'react-google-login';
import Input from './Input';
import Icon from './icon';
import { useDispatch } from 'react-redux';
import { googleLogin } from '../../actions/auth';
import { useHistory } from 'react-router-dom';

function Auth(props) {
    const [isSignUp, setIsSignup]= useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = () => {

    };

    const handleChange = () => {

    }

    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);

    const switchMode = () => {
        setIsSignup((prevIsSignUp) => !prevIsSignUp);
        handleShowPassword(false);
    }

    const googleSuccess = (response) => {
        const result = response?.profileObj;
        const token = response?.tokenId;

        try {
            dispatch(googleLogin(result, token));
            history.push('/')
        } catch (error) {
            console.log(error)
        }
    }

    const googleFailure = () => {
        console.log('Google Sign In was Unsuccessful. Try Again Later');
    }
    
    return (
       <Container component="main" maxWidth="xs">
           <Paper className="auth__paper"> 
                <Avatar className="auth__avatar">
                    <LockOpenOutlinedIcon />
                </Avatar>
                <Typography variant="h5">{isSignUp ? 'Sign Up' : 'Sign In'}</Typography>
                <form className="auth__form" onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {
                            isSignUp && (
                                <>
                                    <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                                    <Input name="lastName" label="Last Name" handleChange={handleChange} half />
                                </>
                            )
                        }
                        <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
                        <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} />
                        {
                             isSignUp && (
                                    <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password"/>
                            )
                        }
                    </Grid>
                    <GoogleLogin 
                        clientId="604528269560-c4770i5dsb8c4vjuvseebm8ln5jsirqu.apps.googleusercontent.com"
                        render={(renderProps) => (
                            <Button 
                                className="auth__googlebtn" 
                                color="secondary" 
                                fullWidth 
                                onClick={renderProps.onClick} 
                                disabled={renderProps.disabled} 
                                startIcon={<Icon />}
                                variant="contained"
                            >
                                Google Sign In
                            </Button>
                        )}
                        onSuccess={googleSuccess}
                        onFailure={googleFailure}
                        cookiePolicy="single_host_origin"
                     />
                    <Button type="submit" fullWidth variant="contained" color="primary" className="auth__formbutton">
                    {isSignUp ? 'Sign Up' : 'Sign In'}
                    </Button>
                </form>
                <Grid container justify="flex-end">
                    <Grid item>
                        <Button onClick={switchMode}>
                            {isSignUp ? 'Alrady have an account? Sign In' : "Don't have an account? Sign Up"}
                        </Button>
                    </Grid>
                </Grid>
           </Paper>
       </Container>
    );
}

export default Auth;