import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { LinkedIn, GitHub, Email } from '@mui/icons-material';
import { Container, Grid, Typography, IconButton, Link} from '@mui/material';

const styles = {
  root: {
    flexGrow: 1,
    textAlign: 'left',
    alignItems: 'center',
    background: '#FBFBFB',
  },
  title: {
    textAlign: 'left',
    alignItems: 'center',
    margin: 'auto',
  },
  footer: {
    padding: '16px'
  },
  footerTitle: {
    display: 'block'

  },
  footerItem: {
    display: 'block'
  },
  social: {
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
                <Link key={footerItem+index} component={RouterLink} underline="none" to={"/"+footerItem} color="inherit" variant="body1" sx={styles.footerTitle}>{footerItem}</Link>
                :
                <Link key={footerItem+index} component={RouterLink} underline="none" to={"/"+footerItem} color="inherit" variant="body2" sx={styles.footerItem}>{footerItem}</Link>
              ))}
              </Grid>
          ))}
          <Grid sx={styles.social} item xs={12}>
            <Typography variant="body2" sx={styles.social}>{props.dataSiteConfig.copyright}</Typography>
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