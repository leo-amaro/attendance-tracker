import React, { useState, useEffect } from "react";

const CurrentDate = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000); // Update the date and time every second

    // Clean up the interval on unmounting the component
    return () => clearInterval(interval);
  }, []);

  const formattedDate = currentDateTime.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const formattedTime = currentDateTime.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });

  return (
    <div className="text-center">
      <h2 className="fa-3x">{formattedDate} </h2>
      <h3 className="fa-3x">{formattedTime}</h3>
    </div>
  );
};

export default CurrentDate;
