import React from "react";
import { Link } from "react-router-dom";

const NavigationButtons = ({ showYouTubeButton, showAmazonButton }) => {
  return (
    <nav className="nav-links">
      <ul className="ul">
        {showYouTubeButton && (
          <li>
            <Link to="/YouTube" className="yt">
              <span>YouTube Comment Analysis</span>
            </Link>
          </li>
        )}
        {showAmazonButton && (
          <li>
            <Link to="/Amazon" className="amzn">
              <span>Amazon Review Analysis</span>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default NavigationButtons;
