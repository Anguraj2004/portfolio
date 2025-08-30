import { useEffect, useRef, useState } from "react";
import images from "../../constants/image";

const achievementsData = [
  {
    heading: "SIH 2023 Finalist",
    description:
      "Grand Finale of Smart India Hackathon (SIH) 2023 with Dhiyanesh R, Anguraj S, Rishenath E, Alagu Pariksit A, Abdul Farith, DEVIKA C G at Poornima Institute of Engineering & Technology, Jaipur - software edition.",
    image:images.sihImage,
  },
  {
    heading: "Best Outgoing Student - TCE",
    description:
      "Awarded Best Outgoing Student in Thiagarajar College of Engineering, Mechatronics Department by Dr. Mylswamy Annadurai, former ISRO Director.",
    image:images.bosImage,
  },
  
  {
    heading: "CFO at Ewin Labs",
    description:
      "CFO at our student startup Ewin Labs. 🌟 Participated in StartupTN Thiruvizha - Madurai Edition from TCE TBI. Website: https://ewinlabs.com/",
    image: images.elImage,
  },
  {
  heading: "IDE Bootcamp Completion",
  description:
    "Successfully completed the IDE Bootcamp organized by AICTE! Grateful for the enriching experience that deepened my understanding of entrepreneurship. Ready to apply these insights to drive innovation and growth.",
  image: images.ideImage, // replace with actual image path
},
{
    heading: "SDF Vidyadhan Scholar",
    description: "Proud recipient of the SDF Vidyadhan Scholarship for academic excellence.",
    image: images.sdfImage,
  },
];

// Duplicate array for smooth loop
const loopedData = [...achievementsData, ...achievementsData];

const Achievements = () => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const cardWidthPercentage = 45; // small screens
  const mdCardWidthPercentage = 30; // medium+

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let scroll = 0;
    const totalScroll = container.scrollWidth / 2; // only half (duplicated)
    const step = 0.5; // pixels per frame
    let animationFrame;

    const scrollStep = () => {
      scroll += step;
      if (scroll >= totalScroll) scroll = 0;
      container.scrollLeft = scroll;

      // update dots active index
      const cardWidth = container.scrollWidth / loopedData.length;
      const idx = Math.floor(scroll / cardWidth) % achievementsData.length;
      setActiveIndex(idx);

      animationFrame = requestAnimationFrame(scrollStep);
    };

    scrollStep();
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div className="container mx-auto py-10 px-4">

      <div
        ref={containerRef}
        className="flex space-x-6 overflow-hidden scrollbar-hide"
      >
        {loopedData.map((proj, index) => (
          <div
            key={index}
            className={`flex-shrink-0 w-[${cardWidthPercentage}%] md:w-[${mdCardWidthPercentage}%] bg-white dark:bg-neutral-800 rounded-lg shadow-lg overflow-hidden`}
          >
            <img
              src={proj.image}
              alt={proj.heading}
              className="w-full h-48 object-cover rounded-t-lg filter shadow-lg"
              loading="lazy"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2 dark:text-white">{proj.heading}</h3>
              <p className="text-neutral-700 dark:text-neutral-300 text-sm">{proj.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center mt-4 space-x-2">
        {achievementsData.map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full ${
              activeIndex === idx ? "bg-primary" : "bg-neutral-400 dark:bg-neutral-600"
            }`}
            onClick={() => {
              const container = containerRef.current;
              if (container) {
                const cardWidth = container.scrollWidth / loopedData.length;
                container.scrollLeft = cardWidth * idx;
                setActiveIndex(idx);
              }
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Achievements;
