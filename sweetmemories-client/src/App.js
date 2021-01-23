import './App.css';
import {Container, AppBar, Grow, Grid} from '@material-ui/core';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import {useDispatch} from 'react-redux';
import {getPosts} from './actions/posts';

import memories from './components/Images/memories.png';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div className="app">
      <Container maxWidth="lg">
        <AppBar className="app__appbar" position="static" color="inherit">
          {/* <Typography className="app__appbarHeading" align="center" variant="h2">Memories</Typography> */}
          <div className="app__logocontainer">
            <MoreHorizIcon />
            <img className="app__appbarLogo" src={memories} alt="memories" /> 
            <MoreHorizIcon />
          </div>
        </AppBar>
        <Grow in>
          <Container>
            <Grid container justify="space-between" alignItems="stretch" spacing={3}>
              <Grid item xs={12} sm={7}>
                <Posts />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Form />
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
    </div>
  );
}

export default App;
