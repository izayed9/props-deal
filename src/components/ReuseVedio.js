import React from 'react'
import { Grid,  } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
    videoContainer: {
        position: 'relative',
        paddingBottom: '56.25%',
        paddingTop: '25px',
        height: 0,
        // overflow: 'hidden',

        iframe : {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%'
            }

    },

}));

const ReuseVedio = ({width, height}) => {
    const classes = useStyles();
    return (
        <Grid container className={classes.videoContainer}>
            <iframe
              width={width}
              height={height}
              src="https://www.youtube.com/embed/Z7eBtCrdBN0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Grid>
    )
}

export default ReuseVedio
