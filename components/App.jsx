import NavLink from './NavLink'
import React from 'react'

export default React.createClass({
  render() {
    return (
      <div>
        <h1>React Router Tutorial</h1>
        <ul role="nav" className="nav-bar">
          <li className="nav-constant"><NavLink to="/"  onlyActiveOnIndex>Home</NavLink></li>
          <li className="nav-constant"><NavLink to="/about" >About</NavLink></li>
          <li className="nav-constant"><NavLink to="/repos" >Repos</NavLink></li>
          <li className="nav-constant"><NavLink to="/blogs" >Blogs</NavLink></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})
