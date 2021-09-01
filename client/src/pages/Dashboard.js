import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import Typography from '@material-ui/core/Typography';
import image from '../photos/adi-goldstein-Hli3R6LKibo-unsplash.jpg';
import image2 from '../photos/christina-wocintechchat-com-Q80LYxv_Tbs-unsplash.jpg';
import image3 from '../photos/jeremy-wong-weddings-464ps_nOflw-unsplash.jpg';
import image4 from '../photos/photos-by-lanty-O38Id_cyV4M-unsplash.jpg';
import image5 from '../photos/redd-PTRzqc_h1r4-unsplash.jpg';
import Box from '@material-ui/core/Box';
import {useHistory} from "react-router-dom";




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



      
      


  //The example data is structured as follows:
 
  //import image from 'path/to/image.jpg';
  //[etc...]
 
  const itemData = [
    {
      img: image,
      title: 'example',
      author: 'author',
      cols: 3,
    },
    {
        img: image2,
        title: 'example',
        author: 'author',
        cols: 1,
      },
      {
        img: image3,
        title: 'example',
        author: 'author',
        cols: 1,
      },
      {
        img: image4,
        title: 'example',
        author: 'author',
        cols: 3,
      },
      {
        img: image5,
        title: 'example',
        author: 'author',
        cols: 4,
      },

  ];
 
export default function Body() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box width="25%">
      <Typography variant="body1" align="left" color="primary" display="flex">
      Eventful is a User-Friendly event planning application designed to take control of your event.
      This will allow you to cut out the middle-man and take matters into your own hands. 
      Eventful is perfect for Weddings, Meetings, Birthdays, and much more!
      
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


