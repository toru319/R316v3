import React, { useState, useEffect } from 'react';
import '../App.css';

const LoadingScreen: React.FC = () => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage((prevPercentage) => {
        const newPercentage = prevPercentage + 10;
        return newPercentage > 100 ? 100 : newPercentage;
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="loading-screen" className="position-fixed top-0 start-0 w-100 h-100 bg-white d-flex flex-column justify-content-center align-items-center">
      <div className="loading-animation">
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
      <div className="loading-percentage mt-3">
        {percentage}%
      </div>
    </div>
  );
};

export default LoadingScreen;