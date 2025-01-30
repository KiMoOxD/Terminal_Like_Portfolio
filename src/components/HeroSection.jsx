import { TextEffect } from "../coreElements/textEffect.tsx";
import { TextScramble } from "../coreElements/textScramble.tsx";
import youssef from "../youssef.png";

export default function HeroSection() {
  return (
    <div className="min-h-[80vh] my-8 lg:my-0 flex flex-col-reverse justify-center items-center lg:flex-row lg:justify-evenly *:flex gap-5">
      <div className="w-[85%] mt-3 lg:mt-0 lg:w-1/2 flex-col justify-center items-center text-center lg:items-start lg:text-start">
        <p className="bg-green-600 text-white font-mono px-2 py-1 w-fit">
          Hi, I'm
        </p>
        <TextScramble
          className="text-[41px] lg:text-7xl jersey-15-regular"
          duration={1.2}
          characterSet=". "
        >
          YOUSSEF AHMED
        </TextScramble>
        <TextEffect
          preset="fade-in-blur"
          speedReveal={1.1}
          speedSegment={0.3}
          className="text-2xl mb-3 smooch-sans-normal"
        >
          Data Scientest & ML Engineer.
        </TextEffect>
        <TextScramble
          className="leading-5 text-green-400 mb-6"
          duration={1.5}
        >
          expertise in data analysis, predictive modeling, and NLP. 
          Skilled in Python, SQL, and deep learning, with a strong focus on AI-driven solutions and end-to-end model deployment.
          Passionate about turning data into actionable insights to drive business growth.
        </TextScramble>
        <div className="relative w-fit">
          <a href="https://api.whatsapp.com/send?phone=201000139417" target="_blank" rel="noreferrer" className="text-sm lg:text-base relative inline-flex items-center gap-1 font-mono text-white bg-green-600 px-3 py-1 transition hover:shadow-lg hover:shadow-green-500/80 outline outline-1 outline-[#fff2f21f]">
            Contact Me
          </a>
          <a href="#skills" className="text-sm lg:text-base relative inline-flex items-center gap-1 font-mono text-green bg-stone-600 px-3 py-1 outline outline-1 outline-[#fff2f21f] ms-2">
            Download CV
          </a>
        </div>
        {/* <a href='/' className='font-mono text-white bg-green-600 px-3 py-1 w-fit '>Contact me</a> */}
      </div>
      <div className="relative justify-center items-center">
        <img src={youssef} alt="Yossef" className="size-[290px] lg:size-[450px] z-20"></img>
      </div>
    </div>
  );
}
