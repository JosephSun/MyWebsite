import React from 'react'

export default React.createClass({
  render() {
    return (
      <div className="content">
        <div className="container-about-text">
          <p>
            So why does everyone love containers and Docker? James Bottomley, Parallels‘ CTO of server virtualization and a leading Linux kernel developer, explained to me that VM hypervisors, such as Hyper-V, KVM, and Xen, all are "based on emulating virtual hardware. That means they’re fat in terms of system requirements."
            <br/>
            <br/>

            Therefore, according to Bottomley, with a perfectly tuned container system, you can have as many as four-to-six times the number of server application instances as you can using Xen or KVM VMs on the same hardware.
          </p>
        </div>

        <img src="../PPic.jpg" alt="Profile Picture" className="profile-pic" height="42" width="42"/>


      </div>
    )
  }
})
