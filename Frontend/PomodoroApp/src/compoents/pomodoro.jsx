import React, { useState, useEffect } from "react";

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
    <div
      style={{
        fontFamily: "monospace",
        textAlign: "center",
        color: "green",
        backgroundColor: "black",
        padding: "20px",
        borderRadius: "10px",
        width: "300px",
        margin: "auto",
      }}
    >
      <h1 style={{ margin: "10px 0", fontSize: "24px" }}>Pomodoro Clock</h1>
      <div style={{ marginBottom: "10px" }}></div>
      <div style={{ marginBottom: "10px" }}>
        <p style={{ fontSize: "18px" }}>
          {isSession ? "Session" : "Break"} Time Remaining: {formatTime(timer)}
        </p>
        <button
          onClick={() => setIsActive(!isActive)}
          style={{ fontSize: "16px", marginRight: "10px" }}
        >
          {isActive ? "Pause" : "Start"}
        </button>
        <button onClick={handleReset} style={{ fontSize: "16px" }}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default PomodoroClock;
