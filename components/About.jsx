import React from 'react'

export default React.createClass({
  render() {
    return (
      <div className="content">
        <div className="container-about-text">
          <p className="testParagraph">
            As the text above in the ridiculous font suggests, my name is Joseph Sun. I am a full stack software engineer principally interested in React and Node. I have built web applications using MongoDB, Express, Node and Angular, among other technologies. I'm interested in frontend architecture and staying on the cutting edge of web technologies.

            <br/>
            <br/>

              I recently built a world-wide pair programming web application on a team of four where I implemented real-time code collaboration with Websockets, user authentication with OAuth 2.0, persistence of data with a NoSQL database and created RESTful API endpoints to handle client HTTP requests using Node.js and Express.
            <br/>
            <br/>

              In my cover letter and resume, I have the reasons why my technical skills make me a good fit for this position. I will now use this time to discuss why I believe my personality is a great fit for the culture within the organization. In essence, I believe this because I posses the qualities that the organization has listed in the application. I will now address a few of those qualities:
            <br/>
            <br/>

              In a previous product I build, PairedUp (https://github.com/JosephSun/PairedUp), I used Node.js to build the backend.  As the product is based around real-time code collaboration, Node.js asynchronous execution model and the ease at which it makes real time easy between multi-users (the event loop taking care of the multi-users and Websockets taking care of real-time communication) were particularly decisive factors in choosing which programming language to use. Another factor was the module ecosystem that Node.js carries with it. NPM was another factor that led to the decision of choosing Node.js.
          </p>
        </div>

        <img src="../PPic.jpg" alt="Profile Picture" className="profile-pic" height="42" width="42"/>


      </div>
    )
  }
})
