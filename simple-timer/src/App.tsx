import { useState, useRef } from "react";

const App = () => {
  const timerRef = useRef<number | null>(null);
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

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

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-gray-100 border rounded shadow-lg text-center">
      <h2 className="text-4xl font-semibold mt-4">Timer: {time}</h2>
      <button
        onClick={toggleTimer}
        className="mt-3 bg-green-500 text-white px-4 py-2 rounded hover: bg-green-600"
      >
        {isRunning ? "Stop" : "Start"}
      </button>
    </div>
  );
};

export default App;
