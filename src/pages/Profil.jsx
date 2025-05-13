import React from "react";
import ProfilNavigation from "../components/ProfilNavigation";
import ProfilePictureUpload from "../components/ProfilePictureUpload";

function Profil() {
  return (
    <>
      <div className="kulso">
        <div className="kozepso">
          <ProfilNavigation/>
          
          <div className="belso">
            <ProfilePictureUpload />
          </div>
        </div>
      </div>
    </>
  );
}

export default Profil;
