
const CircularProgressBar = ({ size = 100, strokeWidth = 8, progress = 0, title = "Progress Bar"}) => {
  const radius = (size - strokeWidth) / 2; // Calculate radius based on size and stroke width
  const circumference = 2 * Math.PI * radius; // Calculate the circumference of the circle

  // Calculate the stroke dash offset for the progress arc
  const offset = ((100 - progress) / 100) * circumference;

  return <div className="flex flex-col items-center w-fit gap-5">
    <h3 className="font-mono text-md">{title}</h3>
    <div className="flex items-center justify-center w-fit">
      <svg
        className="w-[140px] h-[140px]" // Adjust size dynamically if needed
        viewBox={`0 0 ${size} ${size}`}
      >
        {/* Background Circle (Track) */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#e0e0e0" // Gray color for the track
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />

        {/* Progress Circle (Indicator) */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#4caf50" // Green color for progress
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform={`rotate(-90 ${size / 2} ${size / 2})`} // Rotate to start from top
        />
      </svg>

      {/* Text Inside the Circle */}
      <div className="absolute text-center">
        <span className="text-xl font-bold">{progress}%</span>
      </div>
    </div>
    </div>
};

export default CircularProgressBar;