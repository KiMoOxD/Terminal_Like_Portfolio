import React from "react";
import { TextShimmer } from "../coreElements/textShimmer.tsx";
import CircularProgressBar from "./CircularProgressBar.jsx";

export default function SkillsSection() {
  return (
    <div className="flex flex-col items-center">
      <TextShimmer
        className="text-6xl lg:text-7xl smooch-sans-normal font-bold"
        duration={1}
      >
        Skills
      </TextShimmer>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 pt-10">
          <CircularProgressBar
            size={490}
            strokeWidth={15}
            progress={90}
            title="Machine Learning"
          />
          <CircularProgressBar
            size={490}
            strokeWidth={15}
            progress={90}
            title="Python"
          />
          <CircularProgressBar
            size={490}
            strokeWidth={15}
            progress={85}
            title="Data Analysis"
          />
          <CircularProgressBar
            size={490}
            strokeWidth={15}
            progress={80}
            title="EDA"
          />
      </div>
    </div>
  );
}
