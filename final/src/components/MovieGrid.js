import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
// import IconButton from '@material-ui/core/IconButton';
// import InfoIcon from '@material-ui/icons/Info';
// import tileData from './tileData';

const useStyles = makeStyles(theme => ({
  root: {
    // display: 'flex',
    // flexWrap: 'wrap',
    // justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: '#141414',
  },
  gridList: {
    width: 1600,
    height: 1600,
    padding:0
    
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));
 

export default function MovieGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cols={4}  cellHeight={200} padding={0} className={classes.gridList}>
        {/* <GridListTile key="Subheader" cols={2}  style={{ height: 'auto' }}>
          
        // </GridListTile> */}
        {/* <ListSubheader component="div">December</ListSubheader> */}
        {[0,1,2,3,4,5,6,7,8,10,11,12].map(tile => (
          <GridListTile rows={2} cols={1} >
          
            <img src="https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60" alt="movie" />
            <GridListTileBar
              title="abcd"
              subtitle={<span>by: "abcd"</span>}
            //   actionIcon={
            //     // <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
            //     //   <InfoIcon />
            //     // </IconButton>
            //   }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}