import './App.css';
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';

import memories from './components/Images/memories.png';

function App() {
  return (
    <div className="app">
      <Container maxWidth="lg">
        <AppBar className="app__appbar" position="static" color="inherit">
          {/* <Typography className="app__appbarHeading" align="center" variant="h2">Memories</Typography> */}
          <div className="app__logocontainer">
            <MoreHorizIcon fontSize="medium" />
            <img className="app__appbarLogo" src={memories} alt="memories" /> 
            <MoreHorizIcon fontSize="medium" />
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