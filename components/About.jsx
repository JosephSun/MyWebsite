import React from 'react'

export default React.createClass({
  render() {
    return (
      <div className="content">
        <div className="container-about-text">
          <h1>About the guy in the circle</h1>
          <p>
            His name is Joseph Sun and I am him or he is me. I'm never quite sure how to phrase that, Which must mean that neither does he. Huh. I am a full stack software engineer who focuses primarily on React and Node. My previous experience includes building web applications using MongoDB, Express, Node and Angular, among other technologies. You can click the word resume at the top of the website, or if your feeling lazy, you can just click here.

          </p>
          <img src="../pics/FacePic.jpg" alt="Profile Picture" className="profile-pic-two" height="42" width="42"/>

          <h1>About the wierdo in the square</h1>

          <p>
              I recently built a world-wide pair programming web application on a team of four where I implemented real-time code collaboration with Websockets, user authentication with OAuth 2.0, persistence of data with a NoSQL database and created RESTful API endpoints to handle client HTTP requests using Node.js and Express.
            <br/>
            <br/>

              In my cover letter and resume, I have the reasons why my technical skills make me a good fit for this position. I will now use this time to discuss why I believe my personality is a great fit for the culture within the organization. In essence, I believe this because I posses the qualities that the organization has listed in the application. I will now address a few of those qualities:
            <br/>
            <br/>

              In a previous product I build, PairedUp (https://github.com/JosephSun/PairedUp), I used Node.js to build the backend.  As the product is based around real-time code collaboration, Node.js asynchronous execution model and the ease at which it makes real time easy between multi-users (the event loop taking care of the multi-users and Websockets taking care of real-time communication) were particularly decisive factors in choosing which programming language to use. Another factor was the module ecosystem that Node.js carries with it. NPM was another factor that led to the decision of choosing Node.js.
          </p>
        </div>

        <img src="../pics/PPic.jpg" alt="Profile Picture" className="profile-pic"/>


      </div>
    )
  }
})
