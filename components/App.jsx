import NavLink from './NavLink'
import React from 'react'

export default React.createClass({
  render() {
    return (
      <div>
        <ul role="nav" className="nav-bar">
          <li className="nav-constant"><NavLink to="/" className="nav-text" >About</NavLink></li>
          <li className="nav-constant"><NavLink to="/resume" className="nav-text" >Resume</NavLink></li>
          <li className="nav-constant"><NavLink to="/repos" className="nav-text" >Blogs</NavLink></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})
