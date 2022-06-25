import React from 'react';
import SubscriptionCard from './cards/subscriptionCards/SubscriptionCard';
import PreviewCardImageLeft from './cards/previewCards/PreviewCardImageLeft';
import PreviewCardImageTop from './cards/previewCards/PreviewCardImageTop';
import PreviewCardImageRight from './cards/previewCards/PreviewCardImageRight';
import PreviewCardImageBottom from './cards/previewCards/PreviewCardImageBottom';
import PreviewCardImageNone from './cards/previewCards/PreviewCardImageNone';
import DownloadAppCard from './cards/downloadAppCards/DownloadAppCard';
import DownloadAppCardBottom from './cards/downloadAppCards/DownloadAppCardBottom';
import { Grid as GridLayout} from '@mui/material';

const styles={
  root: {
    flexGrow: 1
  }
};

const cardSelector = (props, item) => {
  return(
    <React.Fragment>
      {item.type==="PreviewCardImageLeft" && <PreviewCardImageLeft {...props} item={item}/>}
      {item.type==="PreviewCardImageTop" && <PreviewCardImageTop {...props} item={item}/>}
      {item.type==="PreviewCardImageRight" && <PreviewCardImageRight {...props} item={item}/>}
      {item.type==="PreviewCardImageBottom" && <PreviewCardImageBottom {...props} item={item}/>}
      {item.type==="PreviewCardImageNone" && <PreviewCardImageNone {...props} item={item}/>}
      {item.type==="SubscriptionCard" && <SubscriptionCard {...props} item={item}/>}
      {item.type==="DownloadAppCard" && <DownloadAppCard {...props} item={item}/>}
      {item.type==="DownloadAppCardBottom" && <DownloadAppCardBottom {...props} item={item}/>}
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
