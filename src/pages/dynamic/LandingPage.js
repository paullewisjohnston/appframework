import React from 'react';
import Grid from '../../components/grid/Grid';

function LandingPage(props){
  return(
    <React.Fragment>
      <Grid data={props.data} />
    </React.Fragment>
  )
}
export default LandingPage
