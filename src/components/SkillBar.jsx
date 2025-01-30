import React from "react";
import { motion } from "framer-motion";

export default function SkillBar({ skill, percentage}) {
  return (
    <div>
      <p className="font-mono mb-1">{skill}</p>
      <span className="block bg-stone-600">
        <motion.span
          initial={{ width: 0, opacity: 0.2 }}
          animate={{ width: `${percentage}%`, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center items-center h-6 bg-green-600 text-center text-[15px]/4 w-1/2"
        >
          <span className="font-bold text-white"> {percentage}% </span>
        </motion.span>
      </span>
    </div>
  );
}
