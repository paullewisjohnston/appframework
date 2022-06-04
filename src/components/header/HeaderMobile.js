import React from 'react';
import { IconButton} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MenuLogo from './components/MenuLogo';
import MenuSearch from './components/MenuSearch';

const styles={
  menuIcon: {
    opacity: '0.8',
    width: '40px',
    height: '40px'
  },
  paper: {
    background: 'rgb(34, 34, 34, 0.8)',
    backdropFilter: 'saturate(180%) blur(20px)',
    color: 'white',
  }
};

export default function HeaderMobile(props){
  return(
    <React.Fragment>
    {!props.menuOpen ? 
      <React.Fragment>
        <MenuLogo {...props} mobile={true}/>
        <IconButton sx={styles.menuIcon} edge="end" color="inherit" aria-label="menu" onClick={() => props.setMenuOpen(!props.menuOpen)}>
          <MenuIcon alt="menu" />
        </IconButton>
      </React.Fragment>
    : 
      <MenuSearch {...props} mobile={true}/>
    }
    </React.Fragment>
  );
}