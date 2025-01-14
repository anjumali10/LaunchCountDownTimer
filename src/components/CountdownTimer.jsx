import React, { useState, useEffect } from "react";
import TimerCard from "./TimerCard";

const CountdownTimer = () => {
    function calculateTimeLeft(params) {
       const targetDate = new Date('2025-01-30T00:00:00')
       const now = new Date()
       const difference = targetDate - now

       return {
        days : Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
       }
    }
    const [timeLeft, settimeLeft] = useState(calculateTimeLeft())

    useEffect(() => {
      const timer = setInterval(() => {
        settimeLeft(calculateTimeLeft())
      }, 1000);
    
      return () => {
        clearInterval(timer)
      }
    }, [])
    

  return (
    <div className="flex gap-5">
        {Object.entries(timeLeft).map(([unit, value]) => (
        <TimerCard value = {value} label={unit} />
      ))}
    </div>
  );
};

export default CountdownTimer;
