import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
//import itemData from './itemData';
import image from '../photos/adi-goldstein-Hli3R6LKibo-unsplash.jpg';

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
      cols: 2,
    },
    {
        img: image,
        title: 'example',
        author: 'author',
        cols: 2,
      },

  ];
 
export default function BasicImageList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ImageList rowHeight={160} className={classes.imageList} cols={3}>
        {itemData.map((item) => (
          <ImageListItem key={item.img} cols={item.cols || 1}>
            <img src={item.img} alt={item.title} />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}
