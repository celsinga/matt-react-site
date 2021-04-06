import React from 'react';
import video3 from '../mp4/1.mp4';
import {
  Link
} from "react-router-dom";
import EmailIcon from '@material-ui/icons/Email';
import InstagramIcon from '@material-ui/icons/Instagram';
import PauseIcon from '@material-ui/icons/Pause';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

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

      {/* <div className="music-player">
        <button style={{backgroundColor: 'transparent', border: 'none', color: 'white', marginRight: '20px'}}> <PauseIcon style={{fontSize: '3em'}} /> </button>
      </div> */}
    </body>
  )
}