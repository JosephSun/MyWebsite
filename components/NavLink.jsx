import { Link } from 'react-router'
import React from 'react'

export default React.createClass({
  render() {
    return <Link {...this.props} className="content" activeClassName="active"/>
  }
})
