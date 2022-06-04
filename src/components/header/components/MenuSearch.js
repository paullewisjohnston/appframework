import React from 'react';
import { Toolbar, IconButton, InputBase, Drawer, List } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import MenuItems from './MenuItems';
import Grow from '@mui/material/Grow';

const styles={
  root:{
    padding: '30px'
  },
  searchbar:{
    maxWidth: '600px',
    width:'100%',
    margin:'auto'
  },
  menuIcon: {
    opacity: '0.8',
    width: '24px',
    height: '24px',
  },
  list:{
    maxWidth: '600px',
    width:'100%',
    margin:'auto',
  }
};

export default function MenuSearch(props){
  const [searchText, setSearchText] = React.useState('');
  const [searchResults, setSearchResults] = React.useState([]);
  const searchResultsOrNone = (searchResults.length>0) ? searchResults : ["No results found."];

  const handleChange = (event) => {
    console.log(event.target.value)
    if(event.target.value.length>0) {
      setSearchResults(props.dataSiteConfig.menuItems.filter(item => item.toLowerCase().includes(event.target.value.toLowerCase())))
      props.setSearching(true)
      console.log(searchResults.length)
    }
    else{
      props.setSearching(false)
    }
    //Hooks only update on next render so using event target value above
    setSearchText(event.target.value);
  };

  const handleCloseSearch = (event) => {
    if(searchText.length === 0){
      handleCloseDrawer()
    }
    else{
      setSearchText('');
      props.setSearching(false);
    }
  };

  const handleCloseDrawer = (event) => {
    props.setMenuOpen(false);
    props.setSearching(false);
    setSearchText('');
  };

  return(
      <Drawer
        elevation={0}
        variant="temporary"
        anchor="top"
        open={props.menuOpen}
        onClose={handleCloseDrawer}
      >
        <Toolbar variant='dense' disableGutters sx={styles.searchbar}>
        <Grow in={props.menuOpen}>
          <IconButton color="inherit" aria-label="Search" disableRipple disableFocusRipple disableTouchRipple>
            <SearchIcon sx={styles.menuIcon} alt="Search" />
          </IconButton>
          </Grow>
          <Grow in={props.menuOpen}>
          <InputBase
              id="standard-full-width"
              style={{ color:"inherit", margin: '0px 10px' }}
              placeholder="Search paullewisjohnston.com"
              fullWidth
              autoComplete='off'
              autoFocus={!props.mobile}
              onChange={handleChange}
              value={searchText}
            />
            </Grow>
            <Grow in={props.menuOpen}>
          <IconButton color="inherit" aria-label="Close" onClick={handleCloseSearch}>
            <CloseIcon sx={styles.menuIcon} alt="Close" />
          </IconButton>
          </Grow>
        </Toolbar>
        <List sx={styles.list}>
          {!props.searching && <MenuItems {...props} mobile={true}/>}
          {props.searching && <MenuItems {...props} menuItems={searchResultsOrNone} mobile={true}/>} 
        </List>
      </Drawer>
  );
}