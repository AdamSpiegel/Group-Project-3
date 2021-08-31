import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

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


function Success() {
    const classes = useStyles();
    // Used for updating user after they purchase subscription i.e. "subscribe: true"
    return (
        <div className={classes.root}>
            <Box width="25%">
                <Typography variant="body1" align="left" color="primary" display="flex">
                    <h1>Congratulations!</h1>
                    <h2>Thank you for purchasing your subscription!  Eventful looks forward to working with you on planning your next successful event!</h2>
                    <h2>You will now be redirected to the home page</h2>
                </Typography>
            </Box>
        </div>
    );
}

export default Success;
