import NavLink from './NavLink'
import React from 'react'

export default React.createClass({
  render() {
    return (
      <div>
        <h1>React Router Tutorial</h1>
        <ul role="nav" className="nav-bar">
          <li><NavLink to="/" className="nav-constant" onlyActiveOnIndex>Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/repos">Repos</NavLink></li>
          <li><NavLink to="/blogs">Blogs</NavLink></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})
