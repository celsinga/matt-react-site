import React from 'react';
import video2 from '../mp4/5.mp4';
import {
  Link
} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import AppleIcon from '@material-ui/icons/Apple';
import song3 from '../Song3.mp3';

import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import AudioPlayer from 'material-ui-audio-player';

const muiTheme = createMuiTheme({});

const srcSet = [
  // song1,
  // song2,
  song3
  // song4
];

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'absolute',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
    zIndex: -1,
    top: '50%',
    left: '45%'
  },
}));

export default function Stream() {
  const classes = useStyles();

  return (
    <body>
      <div className="video">
        <video autoPlay muted loop className="vid4">
        <source src={video2} type="video/mp4"/>
        </video>
      </div>

      <div className="content">
      <Link to="/"><h1>Matt Young</h1></Link>
        <ul>
          <a href="https://music.apple.com/ca/artist/matt-young/1436429231" target="_blank" rel="noreferrer"><AppleIcon style={{fontSize:'3em'}} /></a>
        </ul>

        <iframe src="https://open.spotify.com/embed/album/699MjXfaoKLn0Ekds06Vpn" title="Spotify player" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        <div className={classes.root}>
          <CircularProgress color="secondary" />
        </div>
        
      </div>

      <div className="audio-player">
        <ThemeProvider theme={muiTheme}>
          <AudioPlayer 
          elevation={1}
          width="30%"
          variation="default"
          spacing={2}
          order="reverse"
          preload="auto"
          autoplay={true}
          src={srcSet} />
        </ThemeProvider>
      </div>

     

      
      
    </body>
  )
}