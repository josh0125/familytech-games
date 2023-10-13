import React, { useState, useEffect } from 'react';

function Timer() {
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
  
    // Define a function to increment the timer
    const incrementTimer = () => {
      setSeconds(seconds + 1);
      if (seconds == 59) {
        setMinutes(minutes + 1);
        setSeconds(0);
      } 
    };
  
    // Use useEffect to update the timer every second (1000 milliseconds)
    useEffect(() => {
      const timerInterval = setInterval(incrementTimer, 1000);
 
      // Return a cleanup function to clear the interval when the component unmounts
      return () => clearInterval(timerInterval);
    }, [seconds]);
  
    return (
      <div>
        <h1>Timer: { minutes } minutes {seconds} seconds</h1>
      </div>
    );
  }
  
  export default Timer;
  