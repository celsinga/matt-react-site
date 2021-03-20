import React from 'react';
import video3 from '../mp4/1.mp4'

export default function Contact() {
  return (
    <body>
      <div className="video">
        <video autoPlay muted loop className="vid4">
        <source src={video3} type="video/mp4"/>
        </video>
      </div>

      <div className="content">
        <h1>Matt Young</h1>
        <ul>
          <h2>Home</h2>
          <h2>Stream</h2>
        </ul>
      </div>
    </body>
  )
}