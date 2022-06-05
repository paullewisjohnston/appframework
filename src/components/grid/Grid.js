import React from 'react';
import SubscriptionCard from './cards/SubscriptionCard';
import CardImageLeft from './cards/CardImageLeft';
import CardImageTop from './cards/CardImageTop';
import CardImageRight from './cards/CardImageRight';
import CardImageBottom from './cards/CardImageBottom';
import CardImageNone from './cards/CardImageNone';
import { Grid as GridLayout} from '@mui/material';

const styles={
  root: {
    flexGrow: 1
  }
};

const cardSelector = (props, item) => {
  return(
    <React.Fragment>
      {item.type==="CardImageLeft" && <CardImageLeft {...props} item={item}/>}
      {item.type==="CardImageTop" && <CardImageTop {...props} item={item}/>}
      {item.type==="CardImageRight" && <CardImageRight {...props} item={item}/>}
      {item.type==="CardImageBottom" && <CardImageBottom {...props} item={item}/>}
      {item.type==="CardImageNone" && <CardImageNone {...props} item={item}/>}
      {item.type==="SubscriptionCard" && <SubscriptionCard {...props} item={item}/>}
    </React.Fragment>
  )
}

export default function Grid(props) {
  return (
    <GridLayout container sx={styles.root}>
      {props.dynamicPage ? 
        <GridLayout container spacing={1}>
          <React.Fragment key={props.data.id}>
              {cardSelector(props, props.data)}
            </React.Fragment>
        </GridLayout>
      :
        <GridLayout container spacing={1}>
          {props.data.map(item => (
            <React.Fragment key={item.id}>
              {cardSelector(props, item)}
            </React.Fragment>
            ))}
        </GridLayout>
      }
    </GridLayout>
  );
}
