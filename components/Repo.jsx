import React from 'react'

export default React.createClass({
  render() {
    return (
      <div>
        <h2 className="avoiding-navbar">{this.props.params.repoName}</h2>
      </div>
    )
  }
})
