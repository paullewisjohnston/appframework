import React from 'react';
import MenuLogo from './components/MenuLogo';
import MenuItems from './components/MenuItems';
import MenuIcons from './components/MenuIcons';
import MenuSearch from './components/MenuSearch';

export default function HeaderDesktop(props){

  return(
    <React.Fragment>
      {!props.menuOpen ? 
      <React.Fragment>
        <MenuLogo {...props}/>
        <MenuItems {...props}/>
        <MenuIcons {...props}/>
      </React.Fragment>
      : 
      <MenuSearch {...props}/>
    }
    </React.Fragment>
  )
}