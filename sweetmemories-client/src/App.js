import './App.css';
import {BrowserRouter as Router, Link, Route, Switch, Redirect} from 'react-router-dom';
import {Container, Grow, Grid} from '@material-ui/core';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import Navbar from './components/Navbar/Navbar';
import {useDispatch} from 'react-redux';
import {getPosts} from './actions/posts';

import { useEffect, useState } from 'react';

function App() {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Router>
      <div className="app">
        <Container maxWidth="lg">
          <Navbar />
          <Grow in>
            <Container>
              <Grid className="app_postcontainer" container justify="space-between" alignItems="stretch" spacing={3}>
                <Grid item xs={12} sm={7}>
                  <Posts setCurrentId={setCurrentId} />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Form currentId={currentId} setCurrentId={setCurrentId} />
                </Grid>
              </Grid>
            </Container>
          </Grow>
        </Container>
      </div>
    </Router>
  );
}

export default App;
