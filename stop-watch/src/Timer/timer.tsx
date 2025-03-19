import { JSX } from "react";
import styles from "./timer.module.css";

interface Itimer {
  timer: number;
}

export default function Timer (props: Itimer) : JSX.Element{
  const { timer } = props
  return (
    <div className={styles.timer_container}>
      <div>{0 + Math.floor((timer/60000) % 60)}: </div>
      <div>{0 + Math.floor((timer/1000) % 60)}: </div>
      <div>{0 + Math.floor((timer/10)%100)}</div>
    </div>
  )
}
