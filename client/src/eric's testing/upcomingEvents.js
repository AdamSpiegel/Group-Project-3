import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    width: 600,
    height: 650,
  },
}));

const itemData = [
  {
  },

];

export default function Body() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box width="25%">
        <Typography variant="body1" align="left" color="primary" display="flex">
          Bob's and Linda's Wedding, 10-22-2021, 11:00 AM EST
          Balloons, Confetti, Candles, Dress Code: Black Tie, Ice, Beer, Wine, Snacks, Apps, Entrees, Desserts, Eatery or Bar, Clean with Guests

        </Typography>
      </Box>
      <ImageList rowHeight={160} className={classes.imageList} cols={4}>
        {itemData.map((item) => (
          <ImageListItem key={item.img} cols={item.cols || 1}>
            <img src={item.img} alt={item.title} />
          </ImageListItem>
        ))}
      </ImageList>
      <Box width="25%">
        <Typography variant="body1" align="left" color="primary" display="flex">
          Start your experience with Eventful today! Just click the "Log In" button above!
        </Typography>
      </Box>
    </div>
  );
}





