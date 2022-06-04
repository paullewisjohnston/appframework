import React from 'react';
import { Container, Grid, Typography, Box } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

const styles={
  gridItem: {
    textAlign:'center',
    width: '100%',
    backgroundSize: '400px',
    backgroundPosition: 'bottom',
    backgroundRepeat: 'no-repeat'
  },
  container: {
    height:'100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'space-between',
    padding: '80px 40px'
  },
  containerImage: {
    width:'50%',
    display: 'flex',
    flexDirection: 'column',
    alignItems:'center',
    padding: '20px'
  },
  image: {
    maxWidth: '600px',
    width: '100%',
    height: 'auto',
    margin: 'auto',
  },
  containerTypographyAndLinks: {
    width:'50%',
    padding: '20px'
  },
  containerTypography: {
    display: 'flex',
    flexDirection: 'column',
    alignItems:'center',
    justifyContent:'space-evenly',
    padding: '10px'
  },
  containerLinks: {
    display: 'flex',
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'center',
    padding: '0px'
  },
  containerLink: {
    padding: '10px'
  }
};

export default function CardImageBottom(props) {
  const theme = useTheme();
  const gridNum = 12/props.item.itemsPerRow
  const height = (gridNum===12) ? "600px" : "100%"
  return(
    <Grid key={props.item.id} item xs={12} lg={gridNum}>
      <Box sx={styles.gridItem} style={{ height: height, backgroundColor: props.item.background}} >
        <Container sx={styles.container} maxWidth='lg' style={{color:theme.palette.text[props.item.color]}}>
          <Container sx={styles.containerImage}>
            <Box component="img" alt="Company Logo" src={props.item.image}  sx={styles.image}/>
          </Container>
          <Container sx={styles.containerTypographyAndLinks} >
            <Container sx={styles.containerTypography} >
              <Typography variant="h3" gutterBottom component="div">
                {props.item.heading}
              </Typography>
              <Typography variant="h5" gutterBottom component="div">
                {props.item.subheading}
              </Typography>
            </Container>
            <Container sx={styles.containerLinks} >
              {props.item.buttonPrimary.text &&
              <Box sx={styles.containerLink} >
                <RouterLink to={props.item.buttonPrimary.link} color="inherit" variant="h6">{props.item.buttonPrimary.text}</RouterLink>
              </Box >
              }
              {props.item.buttonSecondary.text &&
              <Box sx={styles.containerLink} >
                <RouterLink underline="hover" to={props.item.buttonSecondary.link} color="inherit" variant="h6">{props.item.buttonSecondary.text}</RouterLink>
              </Box >
              }
            </Container>
          </Container>
        </Container>
      </Box>
    </Grid>
  );
}

