import React from "react";
import { BriefcaseIcon, CalendarIcon } from "@heroicons/react/solid";
import { motion } from "framer-motion";

const TwoColumnCard = () => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
      className="grid grid-cols-1 gap-10 items-center md:grid-cols-2"
    >
      {/* Professional Experiences */}
      <motion.div
        variants={{
          offscreen: { y: 150 },
          onscreen: {
            y: 0,
            transition: { type: "spring", bounce: 0.4, duration: 1 },
          },
        }}
        whileHover={{ scale: 1.02 }}
        className="cursor-pointer bg-gray-50 px-6 py-16 rounded-3xl h-full filter shadow-md relative md:px-10 dark:bg-primary-500"
      >
        <h6 className="text-2xl font-bold text-primary mb-4 dark:text-white">
          Professional Experiences
        </h6>
        <div className="relative mb-4">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center">
            <span className="uppercase px-2 bg-gray-50 text-sm text-gray-500 dark:bg-primary-500">
              embedUR Systems
            </span>
          </div>
        </div>
        <span className="mt-2 text-xs flex items-center justify-start uppercase text-neutral-600 dark:text-neutral-300">
          <CalendarIcon className="h-4 mr-2 text-neutral-600 dark:text-neutral-300" />
          JAN, 2025 – PRESENT
        </span>
        <span className="mt-1 text-xs flex items-center justify-start uppercase text-neutral-600 dark:text-neutral-300">
          <BriefcaseIcon className="h-4 mr-2 text-neutral-600 dark:text-neutral-300" />
          Project Intern
        </span>
        <ul className="mt-2 text-base text-primary-400 list-inside list-disc dark:text-neutral-200">
          <li>Worked remotely as a Project Intern focusing on networking and embedded systems.</li>
          <li>Hands-on with Linux, WiFi testing, and Shell scripting.</li>
          <li>Developed scripts and tools using Python and C for automation and testing.</li>
        </ul>

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center">
            <span className="uppercase px-2 bg-gray-50 text-sm text-gray-500 dark:bg-primary-500">
              JK Fenner (India) Ltd
            </span>
          </div>
        </div>
        <span className="mt-2 text-xs flex items-center justify-start uppercase text-neutral-600 dark:text-neutral-300">
          <CalendarIcon className="h-4 mr-2 text-neutral-600 dark:text-neutral-300" />
          JUN, 2023 – JUL, 2023
        </span>
        <span className="mt-1 text-xs flex items-center justify-start uppercase text-neutral-600 dark:text-neutral-300">
          <BriefcaseIcon className="h-4 mr-2 text-neutral-600 dark:text-neutral-300" />
          Intern
        </span>
        <ul className="mt-2 text-base text-primary-400 list-inside list-disc dark:text-neutral-200">
          <li>Worked in the manufacturing unit of V-belts and rubber pipes.</li>
          <li>Gained exposure to PLC Ladder Logic programming.</li>
          <li>Hands-on experience with heavy equipment and production processes.</li>
        </ul>
      </motion.div>

      {/* Other Experiences */}
      <motion.div
        variants={{
          offscreen: { y: 300 },
          onscreen: {
            y: 0,
            transition: { type: "spring", bounce: 0.4, duration: 1.5 },
          },
        }}
        whileHover={{ scale: 1.02 }}
        className="bg-gray-50 px-6 py-16 rounded-3xl h-full relative filter shadow-md md:px-10 dark:bg-primary-500"
      >
        <h6 className="text-2xl font-bold text-primary mb-4 dark:text-white">
          Other Experiences
        </h6>

        <ul className="text-base text-primary-400 list-inside list-disc dark:text-neutral-200 space-y-3">
          <li>
            <b>National Cadet Corps (NCC)</b> – Company Sergeant Major (Jul 2023 – Jun 2024), Cadet (Dec 2021 – Jun 2023)  
            <br /> Skills: Leadership, Teamwork, Event Management, Endurance
          </li>
          <li>
            <b>ISHRAE</b> – Student Member (Jan 2023 – Present), Secretary TCE Chapter (Jun 2024 – May 2025)  
            <br /> Skills: CAD, CFD, Thermal Analysis
          </li>
          <li>
            <b>Mechatronics Engineering Association – TCE</b>  
            <br /> General Secretary (2024–25), Joint Secretary (2023–24)  
            <br /> Skills: Hosting Events, Poster Design
          </li>
          <li>
            <b>Shrishti Cultural Association – TCE</b>  
            <br /> Overall Organizing Secretary (2024–25), Member (2021–24)  
            <br /> Skills: Hosting Events
          </li>
          <li>
            <b>IUCEE EWB – TCE Student Chapter</b> – Member (Feb 2022 – Feb 2023)  
            <br /> Skills: Project Management, Team Building
          </li>
        </ul>
      </motion.div>
    </motion.div>
  );
};

export default TwoColumnCard;
