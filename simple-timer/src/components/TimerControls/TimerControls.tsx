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
  return (
    <>
      <button
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
