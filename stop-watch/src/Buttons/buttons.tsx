import { JSX } from "react";
import styles from "./buttons.module.css";

interface Ibutton {
  isActive: boolean;
  isPaused: boolean;
  handleStart: () => void;
  handlePauseResume: () => void;
  handleReset: () => void;
}

export default function Buttons (props: Ibutton) : JSX.Element {

  const {isActive, isPaused, handleStart, handlePauseResume, handleReset} = props;
  console.log(isActive);

  return (
    <div className={styles.container}>
      {!isActive && !isPaused && <button className={styles.buttons  + " " + styles.start} onClick={handleStart}>Start</button>}
      {(isActive || isPaused) && 
        <div>
          <button className={styles.buttons} onClick={handlePauseResume}>{!isPaused ? "Pause" : "Resume"}</button>
          <button className={styles.buttons  + " " + styles.reset} onClick={handleReset}>Reset</button>
        </div>
      }
      
    </div>
  )
}