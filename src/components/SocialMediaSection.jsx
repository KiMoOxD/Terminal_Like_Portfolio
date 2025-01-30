import { TextLoop } from "../coreElements/textLoop.tsx";
import { Linkedin } from "lucide-react";
import { Facebook } from "lucide-react";
import { Github } from "lucide-react";

export default function SocialMediaSection() {
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="w-[200px] text-xl font-bold lg:font-normal lg:w-[280px] lg:text-3xl inline-flex whitespace-pre-wrap">
        Find me on{" "}
        <TextLoop
          className="overflow-y-clip"
          transition={{
            type: "spring",
            stiffness: 900,
            damping: 80,
            mass: 10,
          }}
          variants={{
            initial: {
              y: 20,
              rotateX: 90,
              opacity: 0,
              filter: "blur(4px)",
            },
            animate: {
              y: 0,
              rotateX: 0,
              opacity: 1,
              filter: "blur(0px)",
            },
            exit: {
              y: -20,
              rotateX: -90,
              opacity: 0,
              filter: "blur(4px)",
            },
          }}
        >
          <span>Facebook</span>
          <span>LinkedIn</span>
          <span>Github</span>
        </TextLoop>
      </p>
      <div className="relative w-full h-[80px] lg:h-[190px] mt-2">
        <div className="absolute flex left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded p-2 *:mx-2 lg:*:mx-5">
          <a href="https://www.linkedin.com/in/youssef-ahmed-9a5643244" target="_blank" rel="noreferrer">
            <Linkedin className="lg:size-8" />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100049906008785" target="_blank" rel="noreferrer">
            <Facebook className="lg:size-8" />
          </a>
          <a href="https://github.com/youssefa7med/" target="_blank" rel="noreferrer">
            <Github className="lg:size-8" />
          </a>
        </div>
      </div>
    </div>
  );
}
