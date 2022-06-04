import React from 'react';
import { IconButton} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MenuLogo from './components/MenuLogo';
import MenuCart from './components/MenuCart';
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
        {props.dataSiteConfig.cart &&
          <MenuCart sx={styles.menuIcon} {...props} mobile={true}/>
        }
        <MenuLogo sx={styles.menuIcon} {...props} edge="end" mobile={true}/>
        <IconButton sx={styles.menuIcon} color="inherit" aria-label="menu" onClick={() => props.setMenuOpen(!props.menuOpen)}>
          <MenuIcon alt="menu" />
        </IconButton>
      </React.Fragment>
    : 
      <MenuSearch {...props} mobile={true}/>
    }
    </React.Fragment>
  );
}