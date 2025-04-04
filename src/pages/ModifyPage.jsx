import React from 'react'
import ModifyProfile from '../components/ModifyProfile'
import ProfilNavigation from '../components/ProfilNavigation'

function ModifyPage() {
  return (
    <>
    <div className="kulso">
      <div className="kozepso">
        <ProfilNavigation/>
        
        <div className="belso">
          <ModifyProfile/>
        </div>
      </div>
    </div>
  </>
  )
}

export default ModifyPage