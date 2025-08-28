import { useState, useEffect, useRef } from "react";
export default function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const intervalId = useRef(null);

  let handleStart = () => {
    if (isRunning) return;
    else {
      setIsRunning(true);
      intervalId.current = setInterval(() => {
        setTime((prev) => prev + 10);
      }, 10);
    }
  };
  let handleStop = () => {
    clearInterval(intervalId.current);
    setIsRunning(false);
  };
  let handleReset = () => {
    clearInterval(intervalId.current);
    setIsRunning(false);
    setTime(0);
  };
  const formatTime = (ms) => {
    let hr = Math.floor(ms / (1000 * 60 * 60));
    let min = Math.floor(ms / (1000 * 60) % 60);
    let sec = Math.floor(ms / 1000 % 60);
    let millisec = Math.floor(ms % 1000/10);
    return `${String(hr).padStart(2, "0")}:${
      String(min)
      .padStart(2, "0")}:${String(sec).padStart(2, "0")}:${
      String(millisec)
      .padStart(2, "0")}`;
  };

  return (
    <div >
      <h1>Stopwatch</h1>
      <h2>{formatTime(time)}</h2>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>

      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
