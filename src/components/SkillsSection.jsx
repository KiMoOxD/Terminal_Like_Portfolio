import React from "react";
import { TextShimmer } from "../coreElements/textShimmer.tsx";
import SkillBar from "../components/SkillBar.jsx";


export default function SkillsSection() {
  return (
    <div id="skills">
      <div className="flex flex-col lg:flex-row m-5 lg:mt-10">
        <div className=" flex justify-center items-center basis-1/3">
          <TextShimmer
            className="text-6xl lg:text-7xl smooch-sans-normal font-bold"
            duration={1}
          >
            Skills
          </TextShimmer>
        </div>
        <div className="lg:basis-2/3 lg:px-20 *:my-2">
          <SkillBar skill={"Python"} percentage={95} />
          <SkillBar skill={"Machine Learning"} percentage={95} />
          <SkillBar skill={"Data Analysis"} percentage={85} />
          <SkillBar skill={"EDA"} percentage={90} />
        </div>
      </div>
    </div>
  );
}
