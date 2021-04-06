import React from 'react';
import video from '../mp4/6.mp4';
import {
  Link
} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import song1 from '../MattSong.mp3';
import song2 from '../Song2.mp3';
import song3 from '../Song3.mp3';
import song4 from '../Velvet.mp3';


import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import AudioPlayer from 'material-ui-audio-player';

const muiTheme = createMuiTheme({});

const srcSet = [
  // song1,
  song2,
  // song3,
  // song4
];

const useStyles = makeStyles((theme) => {
  return {
    root: {
      [theme.breakpoints.down('sm')]: {
        width: '100%',
      },
    },
    mainSlider: {
      color: 'black',
      '& .MuiSlider-rail': {
        color: 'black',
      }
    }
  }
})

export default function Home() {


  return (
    <body>
      <div className="video">
        <video autoPlay muted loop className="vid4">
        <source src={video} type="video/mp4"/>
        </video>
      </div>

      <div className="content">
        <a href="https://open.spotify.com/album/699MjXfaoKLn0Ekds06Vpn?si=H0V8izUTRPima59M-GShiQ" target="_blank" rel="noreferrer"><h1>Matt Young</h1></a>
        <ul>
          <Link to="/stream"><h2>Stream</h2></Link>
          <Link to="/contact"><h2>Contact</h2></Link>
        </ul>
      </div>

      <div className="audio-player">
        <ThemeProvider theme={muiTheme}>
          <AudioPlayer 
          useStyles={useStyles}
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