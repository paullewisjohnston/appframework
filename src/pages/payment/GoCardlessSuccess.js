import React from 'react';
import { Container } from '@mui/material'
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

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

export default function Loading(props) {
  return(
  <Container sx={styles.container} spacing={3}>
      <Paper elevation={0} sx={styles.paper}>
        <CheckCircleIcon />
        <Typography sx={styles.title} gutterBottom>
          Direct Debit has been successfully set up!
        </Typography>
      </Paper>
  </Container>
  );
}
