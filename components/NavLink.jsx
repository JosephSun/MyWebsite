import { Link } from 'react-router'
import React from 'react'

export default React.createClass({
  render() {
    return <Link {...this.props} activeClassName="active"/>
  }
})
