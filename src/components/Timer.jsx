import { useState,useRef,useEffect } from "react";

export default function Timer() {
  const [time, setTime] = useState(10);
  const [inputTime, setInputTime] = useState(10);
  const handleId = useRef(null);
  const handleChange = (e) => {
    setInputTime(e.target.value);
    setTime(e.target.value);
  };
  const handleStart=()=>{
    if (handleId.current!=null) return;
    else{
        handleId.current=setInterval(() => {
            setTime((val)=>{
                if(val==0) return 0;
                else return val-1;
            })
            
        }, 1000);

    }
   

  }
   const handleStop=()=>{
    clearInterval(handleId.current);
    handleId.current=null;

  }
   const handleReset=()=>{
    clearInterval(handleId.current);
    setTime(10);
    setInputTime(10);

  }
  useEffect(()=>{
    return ()=> clearInterval(handleId.current);
  },[])

  console.log(time);
  return (
    <>
      <h1>Timer</h1>
      
      <input
        min="1"
        type="number"
        placeholder="enter time in seconds"
        value={inputTime}
        onChange={handleChange}
      />
      <h2>{time}s</h2>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
}
