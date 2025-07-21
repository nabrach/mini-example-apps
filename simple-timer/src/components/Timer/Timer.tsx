import { useRef, useState, useEffect } from "react";
import TimerDisplay from "../TimerDisplay/TimerDisplay";
import TimerControls from "../TimerControls/TimerControls";

const Timer = () => {
  const timerRef = useRef<number | null>(null);
  const [time, setTime] = useState(() => {
    return Number(localStorage.getItem("time")) || 0;
  });
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    return localStorage.setItem("time", time.toString());
  }, [time]);

  const toggleTimer = () => {
    if (isRunning) {
      clearInterval(timerRef.current ?? undefined);
      setIsRunning(false);
    } else {
      timerRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
      setIsRunning(true);
    }
  };

  const resetTimer = () => {
    clearInterval(timerRef.current ?? undefined);
    setIsRunning(false);
    setTime(0);
    localStorage.removeItem("time");
  };

  return (
    <div>
      <TimerDisplay time={time} />
      <TimerControls
        isRunning={isRunning}
        onToggle={toggleTimer}
        onReset={resetTimer}
      />
    </div>
  );
};

export default Timer;
