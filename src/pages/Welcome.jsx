import React from "react";
import "../style/Welcome.css";
import WelcomeText from "../components/WelcomeText";

const Welcome = () => {
  return (
    <main>
      <div className="welcome-container">
        <div className="left-section-main">
          <WelcomeText />
        </div>
        <div className="right-section-main">
            <img src="https://placehold.co/600x1200" alt="placeholder" />
        </div>
      </div>
    </main>
  );
};

export default Welcome;
