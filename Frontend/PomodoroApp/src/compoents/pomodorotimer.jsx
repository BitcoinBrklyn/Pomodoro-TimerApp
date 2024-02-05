import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./pomodoroclock.css"; // Import the CSS file for styling

const PomodoroClock = () => {
  const [sessionLength, setSessionLength] = useState(25);
  const [breakLength, setBreakLength] = useState(5);
  const [timer, setTimer] = useState(sessionLength * 60);
  const [isActive, setIsActive] = useState(false);
  const [isSession, setIsSession] = useState(true);

  useEffect(() => {
    let countdown;

    if (isActive && timer > 0) {
      countdown = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else if (isActive && timer === 0) {
      setIsSession((prevIsSession) => !prevIsSession);
      setTimer(isSession ? breakLength * 60 : sessionLength * 60);
    }

    return () => clearInterval(countdown);
  }, [isActive, timer, isSession, breakLength, sessionLength]);

  const handleReset = () => {
    setIsActive(false);
    setIsSession(true);
    setSessionLength(25);
    setBreakLength(5);
    setTimer(25 * 60);
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className="pomodoro-container">
      <div className="pomodoro-clock">
        <h1 className="pomodoro-title">Pomodoro Clock</h1>
        <div className="time-circle">
          <div
            className="progress-bar"
            style={{ transform: `rotate(${((timer / 60) * 360) / sessionLength}deg)` }}
          ></div>
          <div className="time-display">
            <p className="time-remaining">{formatTime(timer)}</p>
          </div>
        </div>
        <div className="buttons-container">
          <button className="control-button" onClick={() => setIsActive(!isActive)}>
            {isActive ? "Pause" : "Start"}
          </button>
          <button className="control-button" onClick={handleReset}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default PomodoroClock;
