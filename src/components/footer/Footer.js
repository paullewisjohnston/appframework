import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { LinkedIn, GitHub, Email } from '@mui/icons-material';
import { Container, Grid, Typography, IconButton} from '@mui/material';

const styles = {
  root: {
    flexGrow: 1,
    textAlign: 'left',
    alignItems: 'center',
    fontSize: '20px',
    background: '#FBFBFB',
  },
  title: {
    textAlign: 'left',
    alignItems: 'center',
    margin: 'auto',
  },
  footer: {
    fontSize: '14px',
    padding: '16px'
  },
  footerTitle: {
    fontSize: '16px',
    display: 'block',

  },
  footerItem: {
    fontSize: '14px',
    display: 'block',
  },
  social: {
    fontSize: '14px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  }
};

export default function Footer(props) {
  return (
    <div sx={styles.root}>
      <Container maxWidth='md'>
        <Grid sx={styles.footer} container spacing={3}>
          {props.dataSiteConfig.footerItems.map((footerItemSet, index) => (
            <Grid key={"Footer-Grid"+index} sx={styles.footer} item xs={6} sm={4} md={2}>
              { footerItemSet.map((footerItem, index) => (
                index === 0 ?
                <Typography key={footerItem+index} component={RouterLink} underline="none" to={"/"+footerItem} color="inherit" variant="h6" sx={styles.footerTitle}>{footerItem}</Typography>
                :
                <Typography key={footerItem+index} component={RouterLink} underline="none" to={"/"+footerItem} color="inherit" variant="body2" sx={styles.footerItem}>{footerItem}</Typography>
              ))}
              </Grid>
          ))}
          <Grid sx={styles.social} item xs={12}>
            <Typography variant="body1" sx={styles.social}>{props.dataSiteConfig.copyright}</Typography>
            {props.dataSiteConfig.linkedin &&
              <IconButton aria-label="linkedin" href={props.dataSiteConfig.linkedin} target='_blank'>
                <LinkedIn/>
              </IconButton>
            }
            {props.dataSiteConfig.github &&
              <IconButton aria-label="github" href={props.dataSiteConfig.github} target='_blank'>
                <GitHub/>
              </IconButton>
            }
            <IconButton aria-label="email" href={"mailto:"+props.dataSiteConfig.email}>
              <Email/>
            </IconButton>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}