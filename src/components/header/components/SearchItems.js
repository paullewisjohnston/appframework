import React from 'react';
import { Button} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import Grow from '@mui/material/Grow';

const styles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  maxWidth: '600px',
  paddingLeft: '52px',
}

export default function SearchItems(props){
  return(
    <React.Fragment>
      {!props.mobile ?
        props.menuItems.map((menuItem, index) => (
          <Grow key={index} in={!props.menuOpen}>
          <Button key={index+menuItem} component={RouterLink} color="inherit" to={'/'+ menuItem.toLowerCase()} aria-label={menuItem}>{menuItem}</Button>
          </Grow>
        ))
      :
      props.menuItems.map((menuItem, index) => (
        <Button key={index+menuItem} sx={styles} component={RouterLink} color="inherit" to={'/'+menuItem.toLowerCase()} aria-label={menuItem} onClick={()=>props.setMenuOpen(false)}>
          {menuItem}
        </Button>
        ))}
    </React.Fragment>
  );
}