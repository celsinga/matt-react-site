import React from 'react';
import video3 from '../mp4/1.mp4';
import {
  Link
} from "react-router-dom";
import EmailIcon from '@material-ui/icons/Email';
import InstagramIcon from '@material-ui/icons/Instagram';
import song4 from '../Velvet.mp3';

import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import AudioPlayer from 'material-ui-audio-player';

const muiTheme = createMuiTheme({});

const srcSet = [
  // song1,
  // song2,
  // song3,
  song4
];

export default function Contact() {
  return (
    <body>
      <div className="video">
        <video autoPlay muted loop className="vid4">
        <source src={video3} type="video/mp4"/>
        </video>
      </div>

      <div className="content">
        <Link to="/"><h1>Matt Young</h1></Link>
        <ul className="contact-icons">
        <a href="mailto:mattyoung.mgmt@gmail.com" target="_blank" rel="noreferrer"><EmailIcon style={{fontSize:'3em'}} /></a>
        <a href="https://www.instagram.com/youngmattyoung/" target="_blank" rel="noreferrer"><InstagramIcon style={{fontSize:'3em'}} /></a>
        </ul>
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