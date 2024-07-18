import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import YTSentimentAnalyzer from "./component/YTSentimentAnalyzer";
import AmazonSentimentAnalyzer from "./component/AmazonSentimentAnalyzer";
import NavigationButtons from "./component/NavigationButtons";
import "./App.css";
import "./WordAnimation.css"; // Import the new CSS file for animations

function App() {
  const location = useLocation();
  const [showYouTubeButton, setShowYouTubeButton] = useState(true);
  const [showAmazonButton, setShowAmazonButton] = useState(true);
  const [showHeader, setShowHeader] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (location.pathname === "/YouTube") {
      setShowYouTubeButton(false);
      setShowAmazonButton(true);
      setShowHeader(false);
      setShowContent(true);
    } else if (location.pathname === "/Amazon") {
      setShowYouTubeButton(true);
      setShowAmazonButton(false);
      setShowHeader(false);
      setShowContent(true);
    } else {
      setShowYouTubeButton(true);
      setShowAmazonButton(true);
      setShowHeader(true);
      setShowContent(false);
    }
  }, [location.pathname]);

  useEffect(() => {
    const spans = document.querySelectorAll('.word span');

    spans.forEach((span, idx) => {
      span.addEventListener('click', (e) => {
        e.target.classList.add('active');
      });
      span.addEventListener('animationend', (e) => {
        e.target.classList.remove('active');
      });

      // Initial animation
      setTimeout(() => {
        span.classList.add('active');
      }, 750 * (idx + 1));
    });

    // Cleanup event listeners on unmount
    return () => {
      spans.forEach((span) => {
        span.removeEventListener('click', () => {});
        span.removeEventListener('animationend', () => {});
      });
    };
  }, []);

  return (
    <>
      {showHeader && (
        <div className="header-container">
          <header className="header">
            <div className="word">
              <span>F</span>
              <span>E</span>
              <span>E</span>
              <span>L</span>
              <span>S</span>
              <span>N</span>
              <span>A</span>
              <span>P</span>

            </div>
          </header>
        </div>
      )}
      <NavigationButtons
        showYouTubeButton={showYouTubeButton}
        showAmazonButton={showAmazonButton}
      />
      {showContent && (
        <div className="app" id="gg">
          <Routes>
            <Route path="/YouTube" element={<YTSentimentAnalyzer />} />
            <Route path="/Amazon" element={<AmazonSentimentAnalyzer />} />
          </Routes>
        </div>
      )}
    </>
  );
}

export default App;







// new

// import React, { useState } from "react";
// import { Route, Routes, Link } from "react-router-dom";
// import SentimentAnalyzer from "./component/SentimentAnalyzer";
// import YTSentimentAnalyzer from "./component/YTSentimentAnalyzer";
// import AmazonSentimentAnalyzer from "./component/AmazonSentimentAnalyzer";
// import "./App.css";

// function App() {
//   const [isAmazonVisible, setIsAmazonVisible] = useState(false);

//   const toggleAmazonVisibility = (e) => {
//     e.preventDefault();
//     setIsAmazonVisible(!isAmazonVisible);
//   };

//   return (
//     <div>
//       <li>
//         <Link to="/YouTube" className="yt">
//           <span>
//             <p>YouTube Comment Analysis</p>
//           </span>
//         </Link>
//       </li>
//       <li>
//         <a href="/Amazon" className="amzn" onClick={toggleAmazonVisibility}>
//           <span>
//             <p>Amazon Review Analysis</p>
//           </span>
//         </a>
//       </li>
//       <Routes>
//         <Route path="/YouTube" element={<YTSentimentAnalyzer />} />
//         <Route path="/Amazon" element={<AmazonSentimentAnalyzer />} />
//       </Routes>

//       <div id="amzn" style={{ display: isAmazonVisible ? "block" : "none" }}>
//         <AmazonSentimentAnalyzer />
//       </div>
//     </div>
//   );
// }

// export default App;

// very new

// import React, { useState } from "react";
// import { Route, Routes, Link } from "react-router-dom";
// import SentimentAnalyzer from "./component/SentimentAnalyzer";
// import YTSentimentAnalyzer from "./component/YTSentimentAnalyzer";
// import AmazonSentimentAnalyzer from "./component/AmazonSentimentAnalyzer";
// import "./App.css";

// function App() {
//   const [isAmazonVisible, setIsAmazonVisible] = useState(false);
//   const [isYouTubeVisible, setIsYouTubeVisible] = useState(false);

//   const toggleAmazonVisibility = (e) => {
//     e.preventDefault();
//     setIsAmazonVisible(!isAmazonVisible);
//     setIsYouTubeVisible(false);
//   };

//   const toggleYouTubeVisibility = (e) => {
//     e.preventDefault();
//     setIsYouTubeVisible(!isYouTubeVisible);
//     setIsAmazonVisible(false);
//   };

//   return (
//     <div>
//       <li>
//         <a href="/YouTube" className="yt" onClick={toggleYouTubeVisibility}>
//           <span>
//             <p>YouTube Comment Analysis</p>
//           </span>
//         </a>
//       </li>
//       <li>
//         <a href="/Amazon" className="amzn" onClick={toggleAmazonVisibility}>
//           <span>
//             <p>Amazon Review Analysis</p>
//           </span>
//         </a>
//       </li>
//       <Routes>
//         <Route path="/YouTube" element={<YTSentimentAnalyzer />} />
//         <Route path="/Amazon" element={<AmazonSentimentAnalyzer />} />
//       </Routes>

//       {isYouTubeVisible && (
//         <div id="yt">
//           <YTSentimentAnalyzer />
//         </div>
//       )}

//       {isAmazonVisible && (
//         <div id="amzn">
//           <AmazonSentimentAnalyzer />
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;
