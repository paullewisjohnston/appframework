import React from 'react';
import { Container, Grid, Typography, Box, Avatar} from '@mui/material'
import { Link as RouterLink } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

const styles={
  content:{
    margin: 'auto',
    padding: '0px 10px'
  },
  spacing:{
    padding: '15px'
  },
  image: {
    maxWidth: '200px',
    width: '100%',
    height: 'auto',
    margin: 'auto',
  },
  gridItem: {
    textAlign:'center',
    width: '100%',
    backgroundSize: '400px',
    backgroundPosition: 'bottom',
    backgroundRepeat: 'no-repeat'
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems:'center',
    padding: '80px 40px'
  },
  button: {
    padding: '20px'
  },
};

export default function PreviewCard(props) {
  const theme = useTheme();
  const gridNum = 12/props.item.itemsPerRow
  const height = (gridNum===12) ? "900px" : "100%"
  return(
    <Grid key={props.item.id} item xs={gridNum}>
      <Box sx={styles.gridItem} style={{ height: height, backgroundColor: props.item.background}} >
        <Container sx={styles.container} maxWidth='sm' style={{color:theme.palette.text[props.item.color]}}>
          <Avatar alt="Company Logo" src={props.item.image}  sx={{ width: 250, height: 250, marginBottom: '60px' }}/>
          <Typography variant="h3" gutterBottom component="div">
            {props.item.heading}
          </Typography>
          <Typography variant="h5" gutterBottom component="div">
            {props.item.subheading}
          </Typography>
          <Typography variant="body1" gutterBottom>
            {props.item.description}
          </Typography>
          {props.item.buttonPrimary.text &&
            <RouterLink to={"/projects/"+props.item.url} color="inherit" variant="h6" sx={styles.button}>{props.item.buttonPrimary.text}</RouterLink>
          }
          {props.item.buttonSecondary.text &&
            <RouterLink underline="hover" to={props.item.buttonSecondary.link} color="inherit" variant="h6" sx={styles.button}>{props.item.buttonSecondary.text}</RouterLink>
          }
        </Container>
      </Box>
    </Grid>
  );
}
