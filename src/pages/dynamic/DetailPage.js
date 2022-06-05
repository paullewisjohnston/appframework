import React from 'react';
import Grid from '../../components/grid/Grid';
import { useParams } from "react-router-dom";
import { useTheme } from '@mui/material/styles';

function DetailPage(props){
  const theme = useTheme();
  let params = useParams();
  return(
    <React.Fragment style={{color:theme['color1'],background:theme['color2']}}>
      <Grid {...props} dynamicPage={true} theme={props.theme} data={props.data.find(page => page.url.toString() === params.id)}/>
    </React.Fragment>
  )
}
export default DetailPage