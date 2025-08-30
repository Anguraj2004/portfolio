import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import images from "../../constants/image";
import { ExternalLinkIcon } from "@heroicons/react/solid";
import { motion } from "framer-motion";

const logos = [
  {
    image: images.pythonLogo,
    title: "Python",
  },
  {
    image: images.cppLogo,
    title: "C++",
  },
  
  {
    image: images.javascriptLogo,
    title: "JavaScript",
  },
  {
    image: images.gitLogo,
    title: "Git",
  },
  {
    image: images.htmlLogo,
    title: "HTML5",
  },
  {
    image: images.cssLogo,
    title: "CSS3",
  },
  {
    image: images.reactLogo,
    title: "React",
  },
  {
    image: images.tailwindLogo,
    title: "Tailwind",
  },
  {
    image: images.vsLogo,
    title: "Visual Studio",
  },
  
  {
    image: images.arduinoLogo,
    title: "Arduino",
  },
  {
    image: images.autodeskLogo,
    title: "Autodesk",
  },
  {
    image: images.ubuntuLogo,
    title: "Linux",
  },
];

const certifications = [
  {
    title: "IBM Introduction to Data Analytics",
    link: "https://www.credly.com/badges/ibm-data-analytics", // replace with real link if you have one
  },
  {
    title: "AICTE IDE Bootcamp (Innovation, Design, Entrepreneurship)",
    link: "https://www.aicte-india.org/ide-bootcamp", // replace with real link
  },
  {
    title: "Interpersonal Skills Training (Flextronics & SDF Foundation)",
    link: "#", // placeholder
  },
];

const TabSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      <Tabs defaultIndex={0}>
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "linear", duration: 0.5 }}
        >
          <TabList className="bg-primary flex flex-col justify-center items-center mx-auto rounded-xl mb-16 w-full dark:bg-primary-500 md:w-max md:flex-row">
            <Tab className="text-white w-full text-center cursor-pointer px-8 py-4 font-semibold focus-within:bg-secondary-400 md:w-max dark:focus-within:bg-secondary rounded-t-xl md:rounded-l-xl md:rounded-tr-none">
              Know me more
            </Tab>
            <Tab className="text-white w-full text-center cursor-pointer  px-8 py-4 font-semibold focus-within:bg-secondary-400 md:w-max dark:focus-within:bg-secondary rounded-t-none rounded-b-xl md:rounded-l-none md:rounded-r-xl">
              Technical Skills
            </Tab>
          </TabList>
        </motion.div>
        <TabPanel className="flex gap-20 items-center flex-col-reverse md:flex-row-reverse transition-all">
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "linear", duration: 0.5 }}
            className="w-full text-primary md:w-1/2 dark:text-white"
          >
            <h2 className="text-2xl font-semibold mb-2">
              Mechatronics Engineer | AI & Embedded Systems Enthusiast
            </h2>
            <p className="text-base font-normal text-neutral-700 dark:text-neutral-300">
              I am <b>Anguraj S</b>, a final-year <b>B.E. Mechatronics student at Thiagarajar College of Engineering</b> (CGPA 8.84). 
              Passionate about <b>AI, Embedded Systems, IoT, Robotics, and Image Processing</b>. 
              I have worked on projects like a <b>Sign Language to Text Translator</b>, 
              <b>Realtime Vaccine Supply Chain Monitoring System</b>, 
              and a <b>Pepper Harvesting System (patented)</b>. 
              I was a <b>Finalist in Smart India Hackathon 2023</b> (Software Edition) and actively contribute to technical, cultural, and leadership activities.
            </p>
            <br />
            <h3 className="font-semibold text-xl mb-2">Certifications 📝:</h3>
            <ul className="list-inside list-disc text-neutral-700 dark:text-neutral-300">
              {certifications.map((certification, index) => (
                <li key={index}>
                  <a
                    href={certification.link}
                    className="underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {certification.title}
                  </a>
                  <span className="ml-1 inline-flex align-middle">
                    <ExternalLinkIcon className="h-5 w-5" />
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "linear", duration: 0.5 }}
            className="w-full relative md:w-1/2 md:h-[450px]"
          >
            {!isLoaded && (
              <div className="absolute top-0 rounded-lg left-0 z-50 bg-primary-400 animate-pulse w-full md:h-[450px]" />
            )}
            <img
              src={images.angurajImage}
              className="h-full w-full z-10 object-cover object-top rounded-lg filter shadow-lg"
              alt="Image of Anguraj S"
              loading="lazy"
              width={664}
              height={450}
              onLoad={() => setIsLoaded(true)}
            />
          </motion.div>
        </TabPanel>
        <TabPanel className="flex gap-20 items-center flex-col md:flex-row-reverse transition-all">
          <div className="w-full text-center text-white max-w-3xl mx-auto md:h-[450px]">
            <motion.div
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "linear", duration: 0.5 }}
              className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4 lg:mt-8"
            >
              {logos.map((logo, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-center items-center gap-4 py-8 px-8 bg-gray-50 rounded-xl filter shadow-md dark:bg-primary-400"
                >
                  <img
                    className="h-14 object-contain dark:filter dark:invert"
                    src={logo.image}
                    alt={logo.title}
                    loading="lazy"
                    width={56}
                    height={56}
                  />
                  <h6 className="text-xl font-semibold text-primary dark:text-white">
                    {logo.title}
                  </h6>
                </div>
              ))}
            </motion.div>
          </div>
        </TabPanel>
      </Tabs>
    </>
  );
};

export default TabSection;
