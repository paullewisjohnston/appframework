import React, {useState} from 'react';
import { AppBar, Toolbar, Container} from '@mui/material';
import HeaderDesktop from './HeaderDesktop';
import HeaderMobile from './HeaderMobile'

const styles = {
  root: {
    flexGrow: 1,
    background: 'rgb(46, 46, 46)',
  },
  toolbar:{
    justifyContent: 'space-between'
  }
}

export default function Header(props) {
  const [cartOpen, setCartOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searching, setSearching] = useState(false)

  return (
    <div sx={styles.root}>
      <AppBar position="fixed">
        <Container fixed maxWidth='md' sx={styles.toolbar}>
          <Toolbar variant='dense' disableGutters sx={styles.toolbar}>
           { props.desktop ?
              <HeaderDesktop 
                dataSiteConfig={props.dataSiteConfig}
                menuItems={props.dataSiteConfig.menuItems}
                setMenuOpen={setMenuOpen}
                menuOpen={menuOpen}
                setCartOpen={setCartOpen}
                cartOpen={cartOpen}
                setSearching={setSearching}
                searching={searching}/>
              :
              <HeaderMobile 
                dataSiteConfig={props.dataSiteConfig}
                menuItems={props.dataSiteConfig.menuItems}
                setMenuOpen={setMenuOpen}
                menuOpen={menuOpen}
                setCartOpen={setCartOpen}
                cartOpen={cartOpen}
                setSearching={setSearching}
                searching={searching}/>
           }
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}