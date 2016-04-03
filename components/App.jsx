import NavLink from './NavLink'
import React from 'react'

export default React.createClass({
  render() {
    return (
      <div>
        <h1>React Router Tutorial</h1>
        <ul role="nav" className="nav-bar">
          <li><NavLink to="/" className="nav-constant" onlyActiveOnIndex>Home</NavLink></li>
          <li><NavLink to="/about" className="nav-constant">About</NavLink></li>
          <li><NavLink to="/repos" className="nav-constant">Repos</NavLink></li>
          <li><NavLink to="/blogs" className="nav-constant">Blogs</NavLink></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})
