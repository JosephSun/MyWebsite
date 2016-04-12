import NavLink from './NavLink'
import React from 'react'

export default React.createClass({
  // <li><NavLink to="/repos/reactjs/react-router">React Router</NavLink></li>
  // <li><NavLink to="/repos/facebook/react">React</NavLink></li>

  // {this.props.children}
  // ?        <h2 className="content">Repos</h2>

  render() {
    return (
      <div>
        <ul className="content">
        </ul>
      </div>
    )
  }
})
