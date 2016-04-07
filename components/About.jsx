import { Link } from 'react-router'
import NavLink from './NavLink'
import React from 'react'


export default React.createClass({
  render() {
    return (
      <div className="content">
        <div className="container-about-text">
          <h1>About the guy in the circle</h1>
          <p>
            His name is Joseph Sun and I am him or he is me. I'm never quite sure how to phrase that, which must mean that neither does he. Huh. I am a full stack software engineer who focuses primarily on React and Node. My previous experience includes building web applications using Express, Node and Angular, among other technologies. If you want a more detailed version of my experience, you can click the word resume at the top of the website or, if your feeling lazy, you can just click <NavLink to="/repos">here</NavLink>.

          </p>
          <img src="../pics/FacePic.jpg" alt="Profile Picture" className="profile-pic-two" height="42" width="42"/>

          <h1>About the wierdo in the square</h1>

          <p>
              His passions include building with a purpose and increasing his productivity (like I said, wierdo-I mean, look at how he refers to himself in third person). He likes to dabble in frontend architecture from time to time but mostly just focuses on buildiing features.
              <br/>
              <br/>
              This is the part where I would list my good qualities (did the switch between third person to first person confuse you? It sure confused him) but I'm pretty sure everyone says the same thing (have you ever met someone who has claimed they are not hard working?). So, I'll let you fill in the blank. I am ______. That is why you should ______. Hopefully you filled in both blanks with good things.
              <br/>
              <br/>
              Feel free to contact me and/or check out my work. You can find me on <Link to="https://github.com/JosephSun" target="_blank">Github</Link>, <Link to="https://twitter.com/BazzKhurshid" target="_blank">Twitter</Link>, and <Link to="https://www.linkedin.com/in/josephsun4" target="_blank">LinkedIn</Link>.
          </p>
        </div>

        <img src="../pics/PPic.jpg" alt="Profile Picture" className="profile-pic"/>


      </div>
    )
  }
})
