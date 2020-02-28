import React,{useContext} from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import PostData from './video.json'
import {CheckStatus} from '../context/CheckStatus'
import SimpleModal from './SimpleModal.js';

const useStyles = makeStyles(theme => ({
  cardMedia: {
    cursor: "pointer",
  },
  root: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
}));

export default function MediaControlCard({props}) {
  const classes = useStyles();
  const user = useContext(CheckStatus)
  let lvl=props
  const handleChange=user.handleChange
  const callfunc = () => {
    handleChange()
  };

  return (
    <div>
    <div>
    <SimpleModal/>
    </div>
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">Trying the stuff now lets see what happens asjckjdbvkjenfwnckeqhfcnbjnfckjwnvjkefenvkw</Typography>
          <Typography variant="subtitle1" color="textSecondary">video aa gyi hai</Typography>
        </CardContent>
      </div>
      <CardMedia
        className={classes.cardMedia}
        component="video"
        src={require("../"+PostData[lvl].src)}
        controls
        height="640"
        onEnded={callfunc}/>
    </Card>
    </div>
  );
}
