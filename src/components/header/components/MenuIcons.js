import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { IconButton} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CartIcon from '@mui/icons-material/LocalMallOutlined';
import MenuSearch from './MenuSearch';
import MenuCart from './MenuCart';

const styles={
  menuIcons: {
    display: 'flex'
  },
  menuIcon: {
    opacity: '0.8',
  },
};

export default function MenuIcons(props){
  return(
    <React.Fragment>
      {!props.mobile ?
      <React.Fragment>
        {
          props.dataSiteConfig.search &&
          <IconButton sx={styles.menuIcon} color="inherit" onClick={()=>props.setMenuOpen(!props.menuOpen)}>
            <SearchIcon alt="Search" />
          </IconButton>
        }
        {
          props.dataSiteConfig.cart &&
          <MenuCart/>
        }
      </React.Fragment>
      :
      <div sx={styles.menuIcons}>
        {
          props.dataSiteConfig.search &&
          <MenuSearch hideClose={true} mobile={true}/>
        }
        {
          props.dataSiteConfig.cart &&
          <IconButton sx={styles.menuIcon} component={RouterLink} to='/cart' color="inherit">
            <CartIcon alt="Cart" />
          </IconButton>
        }
      </div>
      }
    </React.Fragment>
  );
}