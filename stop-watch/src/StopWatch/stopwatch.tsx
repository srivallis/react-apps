import { JSX, useState, useEffect } from "react";
import Buttons from "../Buttons/buttons";
import Timer from "../Timer/timer";
import styles from "./stopwatch.module.css";

export default function StopWatch () : JSX.Element {

  const [isActive, setActiveStatus] = useState<boolean>(false);
  const [isPaused, setPauseStatus] = useState<boolean>(false);
  const [timer, updateTimer] = useState<number>(0);

  useEffect(() => {
    let interval: any = null;
    if (isActive && !isPaused) {
      interval = setInterval(() => {
          updateTimer((timer) => timer+10);
      }, 10);
    } else clearInterval(interval);
    
    return () => {
      clearInterval(interval);
    }
  }, [isActive, isPaused]);

  const handleStart = () => {
    setActiveStatus(true);
  }

  const handlePauseResume = () => {
    setActiveStatus(!isActive);
    setPauseStatus(!isPaused);
  }

  const handleReset = () => {
    setActiveStatus(false);
    updateTimer(0);
  }

  return (
    <div className={styles.container}>
      <Timer timer={timer}/>
      <Buttons isActive={isActive} isPaused={isPaused} handleStart = {handleStart} handlePauseResume = {handlePauseResume} handleReset = {handleReset}/>
    </div>
  )
}