import React from 'react';
import { Container, Paper, TextField, Button } from '@mui/material'

const styles={
  root:{
    background:'#fbfbfb',
    height: '100vh'
  },
  form:{
    display:'flex',
    flexDirection: 'column',
    textAlign: 'center'
  },
  button:{
    marginTop  : '20px'
  },
  container: {
    padding: '40px'
  },
  paper: {
    padding: '20px'
  },
};

export default function Signin(props) {
  return(
    <div sx={styles.root}>
        <Container sx={styles.container} maxWidth='xs'>
          <Paper sx={styles.paper} >
            <form sx={styles.form} noValidate autoComplete="off">
              <h1>Signin</h1>
              <TextField id="standard-basic" label="Email Address" />
              <TextField id="filled-basic" label="Password" type="password"/>
              <Button sx={styles.button} variant="contained" color="primary">
                Signin
              </Button>
            </form>
          </Paper>
        </Container>
      </div>
  );
}
