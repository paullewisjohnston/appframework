import React from 'react';
import { IconButton, Avatar} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const styles={
  logo: {
    width: '24px',
    height: '24px'
  },
  logoMobile: {
    flexGrow: 1
  },
  button: {
    opacity: '0.8',
    width: '40px',
    height: '40px',
    margin: '0px'
  }
};

export default function MenuLogo(props){

  const style = (props.mobile===true) ? styles.logoMobile : ""

  return(
    <React.Fragment>
      <div sx={style}>
        <IconButton edge="start" sx={styles.button} component={RouterLink} to="/" color="inherit">
          <Avatar sx={styles.logo} alt={props.dataSiteConfig.title} src={props.dataSiteConfig.logo} />
        </IconButton>
      </div>
    </React.Fragment>
  );
}