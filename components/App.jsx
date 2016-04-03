import NavLink from './NavLink'
import React from 'react'

export default React.createClass({
  render() {
    return (
      <div>
        <ul role="nav" className="nav-bar">
          <li className="nav-constant"><NavLink to="/" className="nav-text"  onlyActiveOnIndex>Home</NavLink></li>
          <li className="nav-constant"><NavLink to="/about" className="nav-text" >About</NavLink></li>
          <li className="nav-constant"><NavLink to="/repos" className="nav-text" >Repos</NavLink></li>
          <li className="nav-constant"><NavLink to="/blogs" className="nav-text" >Blogs</NavLink></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})
