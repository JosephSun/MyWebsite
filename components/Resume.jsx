import { Link } from 'react-router'
import React from 'react';

export default React.createClass({

  render() {
    return (
      <div className="content">
        <div className="resume">
          <div>
            <h4 className="section" >Technical Skills</h4>
            <p className="skills" > Strong: Javascript, Node.js, Express, Angular.js, Socket.io, Git</p>
            <p className="skills" > Experienced: React, Webpack, Babel, ES6, Backbone.js, D3, jQuery, Heroku</p>
          </div>
          <div>
            <h4 className="section" >Projects</h4>
            <p className="project-title" > <Link to="https://github.com/JosephSun/PairedUp" target="_blank">PairedUp</Link> | Fullstack Software Engineer</p>
            <p className="project-description"> World-Wide Pair Programming WebApp </p>
            <ul className="work-detail" >
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
            <p className="project-title"> <Link to="https://github.com/JosephSun/booted" target="_blank">Booted</Link> | Frontend Engineer | Scrum Master  </p>
            <p className="project-description"> Ranking system for Software Engineering programs </p>
            <ul className="work-detail">
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
            <p className="project-title"> <Link to="https://github.com/JosephSun/Colorado-Eco-Corporation" target="_blank">Colorado Eco-Corporation</Link> | Frontend Engineer </p>
            <p className="project-description">  Allows Coloradans to stay informed about their business eco-system </p>
            <ul className="work-detail">
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
            <h4 className="section" >Experience</h4>
            <p className="company"> HealthTrio </p>
            <p className="position"> Frontend Software Engineer | March 2016-Present  </p>
            <ul className="work-detail">
              <li>
                Enhanced development of UI framework that offers components for non-frontend engineers to build UIs
              </li>
              <li>
                Built UI for multiple healthcare-related web applications
              </li>
            </ul>
          </div>
          <div>
            <h4 className="section" >Education</h4>
            <p className="school-name">Telegraph Academy | 2016</p>
            <p className="school-description"> Advanced Software Engineering Immersive </p>
            <p className="school-name"> University of California Berkeley | 2015 </p>
            <p className="school-description"> BA Philosophy </p>
          </div>

          <div>
            <h4 className="section" >Personal</h4>
            <p className="personal">Emotional intelligence (EI) and social psychology (SP) are my two favorite topics, specifically how we can use EI to build better interpersonal relationships and how we can use SP to build healthier communities. </p>

          </div>
        </div>

      </div>
    )
  }
});
