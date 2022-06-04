import { createTheme } from '@mui/material/styles';

export const Theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#0066cc',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#ffffff',
      paper: '#fbfbfd',
    },
    text: {
      primary: 'rgba(0,0,0,0.8)',
      secondary: 'rgba(0,0,0,0.5)',
      primaryLight: 'rgba(255,255,255,0.9)',
      secondaryLight: 'rgba(255,255,255,0.7)',
    },
    divider: 'rgba(0,0,0,0.05)',
  },
  typography: {
    fontFamily: 'Open Sans',
    h1: {
      fontFamily: 'Lato',
      fontSize: '4rem',
    },
    h2: {
      fontFamily: 'Lato',
      fontSize: '3.5rem',
    },
    h3: {
      fontFamily: 'Lato',
      fontSize: '3rem'
    },
    h4: {
      fontFamily: 'Lato',
      fontSize: '2.5rem'
    },
    h5: {
      fontFamily: 'Lato',
      fontSize: '2rem'
    },
    h6: {
      fontFamily: 'Lato',
      fontSize: '1.5rem'
    },
    button: {
      textTransform: 'none'
    }
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root:{
          backgroundColor: 'rgb(0, 0, 0, 0.8)',
          backdropFilter: 'saturate(180%) blur(20px)',
          elevation: 0
        }
      },
      defaultProps: {
        elevation: 0,
      }
    },
    MuiList:{
      styleOverrides: {
        root:{
          backgroundColor: 'white',
          borderBottomLeftRadius: '18px',
          borderBottomRightRadius: '18px',
          color: 'rgb(0 0 0 / 54%)',
        }
      }
    },
    MuiDrawer: {
      styleOverrides: {
        paper:{
          color: 'white',
          backgroundColor: 'transparent',
        },
      },
      defaultProps: {
        elevation: 0,
      }
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      }
    },
    MuiLink: {
      defaultProps: {
        underline: 'hover',
      }
    },
  },
});