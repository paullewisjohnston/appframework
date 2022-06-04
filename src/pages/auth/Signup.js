import React, {useState} from 'react';
import { Container, Paper, TextField, Button } from '@mui/material'
// import AWS from 'aws-sdk';

const styles={
  root:{
    background:'#fbfbfb',
    height: '100vh'
  },
  form:{
    '& .MuiTextField-root': {
      // margin: theme.spacing(1),
    },
    display:'flex',
    flexDirection: 'column',
    textAlign: 'center',
  },
  button:{
    marginTop: '20px'
  },
  container: {
    padding: '40px'
  },
  paper: {
    padding: '20px'
  },
};

// const poolData = {
//   UserPoolId: 'eu-west-2_vVJUIIn6W',  // get in Cognito console
//   ClientId: '7dr22gj1dtcctc9tobm99l0qfh'  // cognito console -> App clients
// }
// // create an instance of User Pool
// const cognitoService = new AWS.CognitoIdentityServiceProvider({apiVersion: '2016-04-18'});
// const userPool = new AWS.CognitoIdentityServiceProvider.CognitoUserPool(poolData);

// function signUp(email, password, name, dob) {
//   // attributes that should be placed onto user object, only name in your case
//   const attributes = [
//     { Name: 'name', Value: name },
//     { Name: 'birthdate', Value: dob }
//   ]
//   userPool.signUp(email, password, attributes, null, onSignUp);
// }

// function onSignUp(err, userData) {
//   if (err) {
//       alert (JSON.stringify(err)); // for example if user already exists
//   } else {
//       console.log(userData); // good, user was successfully created
//   }
// }

export default function Signup(props) {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState(false);
  const [dob, setDob] = useState('');
  const [dobError, setDobError] = useState(false);

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
    setEmailError(false);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
    setPasswordError(false);
  };

  const handleChangeName = (event) => {
    setName(event.target.value);
    setNameError(false);
  };

  const handleChangeDob = (event) => {
    setDob(event.target.value);
    setDobError(false);
  };

  const handleSignup = () => {
    //UI validation - error handling
    if(name==='')
    {setNameError(true)}
    if(email==='')
    {setEmailError(true)}
    if(password==='')
    {setPasswordError(true)}
    if(dob==='')
    {setDobError(true)}
    //else call api
    //signUp(email, password, name, dob);

  }

  return(
    <div sx={styles.root}>
        <Container sx={styles.container} maxWidth='xs'>
          <Paper sx={styles.paper} >
            <form sx={styles.form} noValidate autoComplete="off">
              <h1>Signup</h1>
              <TextField id="email" label="Email Address" type="email" variant="outlined" value={email} error={emailError} onChange={handleChangeEmail}/>
              <TextField id="password" label="Password" type="password" variant="outlined" value={password} error={passwordError} onChange={handleChangePassword}/>
              <TextField id="name" label="Name" type="text" variant="outlined" value={name} error={nameError} onChange={handleChangeName}/>
              <TextField id="dob" type="date" value={dob} variant="outlined" error={dobError} onChange={handleChangeDob}/>

              <Button sx={styles.button} variant="contained" color="primary" onClick={handleSignup}>
                Signup
              </Button>
              <Button sx={styles.button} variant="contained" color="primary">
                Apple
              </Button>
              <Button sx={styles.button} variant="contained" color="primary">
                Google
              </Button>
            </form>
          </Paper>
        </Container>
      </div>
  );
}
