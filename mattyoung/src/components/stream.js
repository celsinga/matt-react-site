import React from 'react';
import video2 from '../mp4/5.mp4';

export default function Stream() {
  return (
    <body>
      <div className="video">
        <video autoPlay muted loop className="vid4">
        <source src={video2} type="video/mp4"/>
        </video>
      </div>

      <div className="content">
        <h1>Matt Young</h1>
        <ul>
          <h2>Home</h2>
          <h2>Contact</h2>
        </ul>
      </div>
    </body>
  )
}