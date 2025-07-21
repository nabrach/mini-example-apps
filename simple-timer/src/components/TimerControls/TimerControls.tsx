import { useEffect, useRef } from "react";

interface TimerControlsProps {
  isRunning: boolean;
  onToggle: () => void;
  onReset: () => void;
}

const TimerControls = ({
  isRunning,
  onToggle,
  onReset,
}: TimerControlsProps) => {
  const startBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (startBtnRef.current) {
      startBtnRef.current.focus();
    }
  }, []);
  return (
    <>
      <button
        ref={startBtnRef}
        onClick={onToggle}
        className="mt-3 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        {isRunning ? "Stop" : "Start"}
      </button>
      <button
        onClick={onReset}
        className="ml-3 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
      >
        Reset
      </button>
    </>
  );
};

export default TimerControls;
