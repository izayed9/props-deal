import React from 'react';
import { Container, Grid, Typography, } from '@mui/material';
// import { makeStyles } from '@mui/styles';
import ReuseVedio from './ReuseVedio';

// const useStyles = makeStyles(theme => ({
//     videoContainer: {
//         position: 'relative',
//         paddingBottom: '56.25%',
//         paddingTop: '25px',
//         height: 0,
//         // overflow: 'hidden',

//         iframe : {
//         position: 'absolute',
//         top: 0,
//         left: 0,
//         width: '100%',
//         height: '100%'
//             }

//     },

// }));
const videoWidth = '960';
const  videoHeight = '415';

const AppVideo = () => {
    // const classes = useStyles();
  return (
    <Container maxWidth="lg" >
      <Grid
        container
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
              my={3}

      >
        <Grid item xs={12} my={4}  >
          <Typography variant="h2" align="center">
            Quick Video Overview
          </Typography>
        </Grid>
        <Grid item xs={12}>
          {/* <Grid container className={classes.videoContainer}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/Z7eBtCrdBN0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Grid> */}
          <ReuseVedio  width={videoWidth} height={videoHeight} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default AppVideo;
