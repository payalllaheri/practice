import React, { useEffect, useState } from "react";

function Timer() {
  const calculateTimeLeft = () => {
    const currentDate = new Date();
    const targetDate = new Date(currentDate.getFullYear(), 9, 13); // October is month 9 (0-indexed)
    const difference = targetDate - currentDate;

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      return { days, hours, minutes, seconds };
    } else {
      return null; // Timer has expired
    }
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      const updatedTimeLeft = calculateTimeLeft();
      if (updatedTimeLeft) {
        setTimeLeft(updatedTimeLeft);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const renderTime = () => {
    if (!timeLeft) {
      return <span>Time's up!</span>;
    }

    const { days, hours, minutes, seconds } = timeLeft;
    return (
      <div className="flex gap-5">
        <div className="flex flex-col">
          <span className="text-6xl">{days} </span>
          <span>days </span>
        </div>
        <div className="flex flex-col">
          <span className="text-6xl">{hours}</span>
          <span> hours </span>
        </div>
        <div className="flex flex-col">
          <span className="text-6xl">{minutes}  </span>
          <span> minutes </span>
        </div>
       
      </div>
    );
  };

  return <div>{renderTime()}</div>;
}

export default Timer;
