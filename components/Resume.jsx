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
            <p> <Link to="https://github.com/JosephSun/PairedUp" target="_blank">PairedUp</Link> | Fullstack Software Engineer</p>
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

            <p> <Link to="https://github.com/JosephSun/booted" target="_blank">Booted</Link> | Frontend Engineer | Scrum Master | </p>

          <p> Ranking system for Software Engineering programs </p>

          <ul>

              <li>
                Implemented voting system with Angular.js
              </li>

              <li>
                Coached team through product development using agile like methodology, such as rapid iteration and sprints
              </li>

              <li>
                Spearheaded research into various APIs, informing final product choice.
              </li>

              <li>
                Created a search engine using Custom Google Search API
              </li>

              <li>
                Managed Git repository and scrum-centered backlog for a four person team using Waffle.io
              </li>

            </ul>

            <p> <Link to="https://github.com/JosephSun/Colorado-Eco-Corporation" target="_blank">Colorado Eco-Corporation</Link> | Frontend Engineer </p>

          <p>  Allows Coloradans to stay informed about their business eco-system </p>

          <ul>
              <li>
                Constructed single-page application with Angular.js and rendered information to user through client side routing
              </li>

              <li>
                Consolidated Colorado’s corporation charters through RESTfull calls
              </li>

              <li>
                Formulated the client side logic which parsed data received from external Government API calls using Angular.js
              </li>

            </ul>
        </div>

        <div>

          <h4>Experience</h4>
          
            <p> <Link to="https://github.com/JosephSun/Colorado-Eco-Corporation" target="_blank">Colorado Eco-Corporation</Link> | Frontend Engineer </p>

            <p>  Allows Coloradans to stay informed about their business eco-system </p>

            <ul>
                <li>
                  Constructed single-page application with Angular.js and rendered information to user through client side routing
                </li>

                <li>
                  Consolidated Colorado’s corporation charters through RESTfull calls
                </li>

                <li>
                  Formulated the client side logic which parsed data received from external Government API calls using Angular.js
                </li>

              </ul>
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
