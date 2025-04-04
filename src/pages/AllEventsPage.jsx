import React from 'react'
import ProfilNavigation from '../components/ProfilNavigation'
import ProfileEventComponent from '../components/ProfileEventComponent'

function AllEvents() {
  return (
    <>
        <div className="kulso">
      <div className="kozepso">
        <ProfilNavigation/>
        
        <div className="belso">
          <ProfileEventComponent/>
        </div>
      </div>
    </div>
    </>
  )
}

export default AllEvents