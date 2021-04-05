import React from 'react';
import video2 from '../mp4/5.mp4';
import {
  Link
} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'absolute',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
    zIndex: -1,
    top: '40%',
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
        {/* <Link to="/contact"><h2>Contact</h2></Link> */}
        </ul>
        <iframe src="https://open.spotify.com/embed/album/699MjXfaoKLn0Ekds06Vpn" title="Spotify player" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        <div className={classes.root}>
          <CircularProgress color="secondary" />
        </div>
        {/* <ul>
          <a href="https://open.spotify.com/artist/0GquTEAPyRIacEm0gpCIkM?si=bMznpLCFRWCVPoVYV5Eymg" target="_blank" rel="noreferrer"><img src="spotify.svg" alt="Spotify" class="spotify"/></a>
        </ul> */}
        <ul>
          <a href="https://music.apple.com/ca/artist/matt-young/1436429231" target="_blank" rel="noreferrer"><img src="apple.svg" alt="Apple Music" className="apple"/></a>
        </ul>
      </div>

      
      
    </body>
  )
}