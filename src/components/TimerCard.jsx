import React, { useState, useEffect } from 'react';
import './TimerCard.css'; // Importing the custom CSS file for keyframes

const TimerCard = ({ value, label }) => {
  const [previousValue, setPreviousValue] = useState(value);
  const [flip, setFlip] = useState(false);

  useEffect(() => {
    if (value !== previousValue) {
      setFlip(true);
      setPreviousValue(value);

      // Reset flip state after the animation completes (500ms)
      const timer = setInterval(() => {
        setFlip(false);
      }, 500); // Delay should match the duration of the flip animation

      return () => clearInterval(timer); // Cleanup timeout on component unmount
    }
  }, [value]);

  return (
    <div className="flex flex-col items-center justify-center perspective-1000">
      {/* Card Wrapper */}
      <div className="relative bg-gray-800 text-softred rounded-md shadow-lg w-20 h-24 md:w-24 md:h-28">
        {/* Top Half */}
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gray-700 rounded-t-md flex items-center justify-center overflow-hidden">
          <span className="absolute top-8 text-4xl md:text-5xl font-bold">{value}</span>
        </div>
        {/* Bottom Half */}
        <div className="absolute z-0 bottom-0 left-0 w-full h-1/2 bg-gray-700 rounded-b-md flex items-center justify-center overflow-hidden">
          <span className="absolute bottom-8 text-4xl md:text-5xl font-bold">{previousValue}</span>
        </div>
        {/* Flip Effect */}
        <div
          className={`absolute top-0 left-0 w-full h-1/2 bg-gray-800 flex items-center justify-center overflow-hidden origin-bottom transform ${flip ? 'animate-flip' : ''}`}
        >
          <span className="absolute top-8 text-4xl md:text-5xl font-bold">{value}</span>
        </div>
      </div>
      {/* Label */}
      <div className="text-gray-400 text-xs md:text-sm uppercase mt-2">{label}</div>
    </div>
  );
}

export default TimerCard;
