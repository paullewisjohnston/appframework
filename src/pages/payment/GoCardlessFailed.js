import React from 'react';
import { Container } from '@mui/material'
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ErrorIcon from '@mui/icons-material/Error';

const styles={
  container:{
    display: 'flex',
    justifyContent: 'center',
    margin: 'auto',
  },
  paper:{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    margin: 'auto',
    maxWidth: '500px',
    minWidth: '500px',
    minHeight: '80vh',
  }
};

export default function GoCardlessFailed(props) {
  return(
  <Container sx={styles.container} spacing={3}>
      <Paper elevation={0} sx={styles.paper}>
        <ErrorIcon />
        <Typography sx={styles.title} gutterBottom>
          Setting up the direct debit has failed. Please try again!
        </Typography>
      </Paper>
  </Container>
  );
}