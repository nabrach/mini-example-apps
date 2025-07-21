interface TimerDisplayProps {
  time: number;
}

const TimerDisplay = ({ time }: TimerDisplayProps) => {
  return <h2 className="text-4xl font-semibold mt-4">Timer: {time}</h2>;
};

export default TimerDisplay;
