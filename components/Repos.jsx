import NavLink from './NavLink'
import React from 'react'

export default React.createClass({
  render() {
    return (
      <div>
        <h2 className="avoiding-navbar">Repos</h2>
        <ul className="avoiding-navbar">
          <li><NavLink to="/repos/reactjs/react-router">React Router</NavLink></li>
          <li><NavLink to="/repos/facebook/react">React</NavLink></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})
