import React from 'react';
import { AppBar, Avatar, Button, Toolbar, Typography} from '@material-ui/core';
import {Link} from 'react-router-dom'
import './Navbar.css';

import memories from '../Images/memories.png';

function Navbar(props) {
    const user = null;
    return (
        <AppBar className="navbar" position="static" color="inherit">
            {/* <Typography className="app__appbarHeading" align="center" variant="h2">Memories</Typography> */}
            <div className="navbar__logocontainer">
                {/* <MoreHorizIcon /> */}
                <Link to="/"> <img className="navbar__appbarLogo" src={memories} alt="memories" /> </Link>
                {/* <MoreHorizIcon /> */}
            </div>
            <Toolbar className="navbar__toolbar">
                {
                    user ? (
                        <div className="navbar__toolbarProfile">
                            <Avatar className="navbar__avatar" alt={user.result.name} src={user.result.imageUrl}>
                                {user.result.name.charAt(0)}
                            </Avatar>
                            <Typography className="navbar__username" variant="h6">{user.result.name}</Typography>
                            <Button variant="contained" className="navbar__logout" color="secondary">Logout</Button>
                        </div>
                    ) : (
                        <Link to="/auth"><Button variant="contained" className="navbar__signin" color="primary">Sign in</Button></Link>
                    )
                }
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;