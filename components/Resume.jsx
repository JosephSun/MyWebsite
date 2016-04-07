import { Link } from 'react-router'
import React from 'react';

export default React.createClass({

  render() {
    return (
      <div className="content">
        <div>
          <h4>Technical Skills</h4>
            <p> Strong: Javascript, Node.js, Express, Angular.js, Socket.io, Git</p>
            <p> Experienced: React, Webpack, Babel, ES6, Backbone.js, D3, jQuery, Passport.js, Heroku</p>
        </div>
        <div>
          <h4>Projects</h4>
            <p> <Link to="https://paired-up.herokuapp.com/" target="_blank">PairedUp</Link> | Fullstack Software Engineer</p>
            <p> World-Wide Pair Programming WebApp </p>
            <ul>
              <li>
                Transmitted real-time messaging and code collaboration with Websockets
              </li>

              <li>
                Architected client side and server logic for storing, displaying user profiles and documents
              </li>

              <li>
                Created RESTful API endpoints to handle client HTTP requests using Node.js and Express
              </li>

              <li>
                Persisted, queried, updated and deleted information with MongoDB
              </li>

              <li>
                Implemented user authentication with Github OAuth2 and Passport.js
              </li>
              <li>

                Developed logic for uploading files using Node.js
              </li>

              <li>
                Modularized codebase, improving team productivity and decreasing version control conflicts
              </li>
              
            </ul>
        </div>
        <div>
          <h4>Experience</h4>

        </div>
        <div>
          <h4>Education</h4>

        </div>
        <div>
          <h4>Personal</h4>

        </div>
      </div>
    )
  }
});
