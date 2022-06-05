import React from 'react';
import { Container, Grid, Typography, Box, Button} from '@mui/material'
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
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems:'center',
    justifyContent:'center',
    padding: '100px 40px'
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
    padding: '0 10px 0 10px'
  },
  containerImage: {
    display: 'flex',
    flexDirection: 'column',
    alignItems:'center',
    padding: '20px'
  },
  image: {
    maxWidth: '200px',
    width: '100%',
    height: 'auto',
    margin: 'auto',
  },
};

export default function PreviewCardImageBottom(props) {
  const theme = useTheme();
  const gridNum = 12/props.item.itemsPerRow
  const height = (gridNum===12) ? "700px" : "650px"
  return(
    <Grid key={props.item.id} item xs={12} lg={gridNum}>
      <Box sx={styles.gridItem} style={{ height: height, backgroundColor: props.item.background}} >
        <Container sx={styles.container} maxWidth='sm' style={{color:theme.palette.text[props.item.color]}}>
        <Container sx={styles.containerTypography} >
            <Typography variant="h3" gutterBottom component="div">
              {props.item.heading}
            </Typography>
            <Typography variant="body1" gutterBottom component="div">
              {props.item.subheading}
            </Typography>
          </Container>
          <Container sx={styles.containerLinks} >
            {props.item.buttonPrimary.text &&
            <Box sx={styles.containerLink} >
              <Button variant='outlined' component={RouterLink} to={props.item.buttonPrimary.link} >{props.item.buttonPrimary.text}</Button>
            </Box >
            }
            {props.item.buttonSecondary.text &&
            <Box sx={styles.containerLink} >
              <Button variant='contained' component={RouterLink} to={props.item.buttonSecondary.link} >{props.item.buttonSecondary.text}</Button>
            </Box >
            }
          </Container>
          <Container sx={styles.containerImage}>
            <Box component="img" alt="image description" src={props.item.image}  sx={{ width: 250, height: 250, marginTop: '40px' }}/>
          </Container>
        </Container>
      </Box>
    </Grid>
  );
}

