import Projects from "./ProjectsData.json";
import Project from "./components/Project.jsx";
import SkillsSection from "./components/SkillsSection.jsx";
import SocialMediaSection from "./components/SocialMediaSection.jsx";
import HeroSection from "./components/HeroSection.jsx";
import { TextShimmer } from "./coreElements/textShimmer.tsx";
import { Spotlight } from "./coreElements/spotLight.tsx";
import { useState } from "react";


function App() {
  let [showMoreFlag, setShowMoreFlag] = useState(0)
  let projects = [];

  if (!showMoreFlag) {
    projects = [...Projects].splice(0, 4);
  } else {
    projects = [...Projects]
  }

  return (
    <>
      <div className="text-green-500 max-w-screen-xl px-10 mx-auto">
        <HeroSection />

        <SocialMediaSection />

        <SkillsSection />

        <div id="projects" className="my-10 lg:my-20 text-center">
          <TextShimmer
            className="text-6xl lg:text-7xl smooch-sans-normal font-bold"
            duration={1}
          >
            Projects
          </TextShimmer>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
            {projects.map((project) => (
              <Project
                imageSrc={project.imageSrc}
                strLink={project.strLink}
                ghLink={project.ghLink}
                title={project.title}
                description={project.description}
                webLink={project.webLink ? project.webLink : ""}
              />
            ))}
          </div>
          {!showMoreFlag && <button className="py-2 px-4 border border-green-500 border-dashed" onClick={() => setShowMoreFlag(1)}>
            Show more...
          </button>}
        </div>
      </div>
      <Spotlight
        className="bg-green-700 blur-2xl"
        size={64}
        springOptions={{
          bounce: 0.3,
          duration: 0.1,
        }}
      />
    </>
  );
}

export default App;
