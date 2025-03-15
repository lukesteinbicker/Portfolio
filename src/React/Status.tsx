import React, { useState } from "react";

const CategoryIcons = {
  "Edtech project": (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-1.28 -1.28 18.56 18.56" fill="currentColor" className="w-6 h-6 text-[var(--sec)] opacity-70"> <path d="M13 0L16 3L9 10H6V7L13 0Z"></path> <path d="M1 1V15H15V9H13V13H3V3H7V1H1Z"></path></svg>
  ),
  "Graduating early": (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-5 0 32 32" fill="currentColor" className="w-6 h-6 text-[var(--sec)] opacity-70"><path d="M21.080 12.84l-8.92-3.24c-0.4-0.16-0.88-0.2-1.16-0.2-0.32 0-0.76 0.040-1.16 0.2l-8.92 3.24c-0.84 0.32-0.92 0.88-0.92 1.12s0.080 0.8 0.92 1.12l0.4 0.12v3.32c0 0.48 0.36 0.84 0.84 0.84s0.84-0.36 0.84-0.84v-2.72l1.56 0.56v3.76c0 1.64 3.84 2.44 6.44 2.44s6.44-0.76 6.44-2.44v-3.72l3.64-1.32c0.84-0.28 0.92-0.88 0.92-1.12s-0.080-0.8-0.92-1.12zM15.8 19.92c-0.48 0.32-2.28 0.96-4.76 0.96s-4.32-0.64-4.76-0.96v-2.92l3.6 1.32c0.4 0.16 0.88 0.2 1.16 0.2s0.76-0.040 1.16-0.2l3.6-1.32v2.92zM11.6 16.72c-0.28 0.12-0.88 0.12-1.16 0l-7.64-2.76 7.6-2.76c0.28-0.12 0.88-0.12 1.16 0l7.64 2.76-7.6 2.76z"></path></svg>
  ),
  "Hoo's Motor Club": (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-2.1 -2.1 21.68 21.68" fill="currentColor" className="w-6 h-6 text-[var(--sec)] opacity-70"><path d="M17.477,8.149c-0.079-0.739-3.976-0.581-3.976-0.581L11.853,5.23H4.275L3.168,7.567H0v2.404 l2.029,0.682c0.123-0.836,0.843-1.48,1.711-1.48c0.939,0,1.704,0.751,1.73,1.685l6.62,0.041c0.004-0.951,0.779-1.726,1.733-1.726 c0.854,0,1.563,0.623,1.704,1.439l1.479-0.17C17.006,10.442,17.556,8.887,17.477,8.149z M4.007,7.568l0.746-1.771h2.864 l0.471,1.771H4.007z M8.484,7.568L8.01,5.797h3.67l1.137,1.771H8.484z"></path> <circle cx="3.759" cy="10.966" r="1.289"></circle> <circle cx="13.827" cy="10.9" r="1.29"></circle></svg>
  ),
};

const Status = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);
  const [lastOpenItem, setLastOpenItem] = useState<string | null>(null);

  const skills = {
    "Edtech project": [
      "Right now I'm working on a modern learning management system. It's a huge undertaking. I'll provide more info soon...",
      "/school.png"
    ],
    "Graduating early": [
      "I completed half of my degree in high school through AP credit, so some creative scheduling has put me on track to gradute two years early. While UVA is a great place, I can't wait to forge my own path.",
      "/grad.png"
    ],
    "Hoo's Motor Club": [
      "The car scene at UVA is great, in many ways better than back home. It's always fun to go on cruises through the Appalachian mountains and attend local meets.",
      "/car.png"
    ],
  };

  const toggleItem = (item: string) => {
    if (openItem === item) {
      setOpenItem(null);
      setLastOpenItem(item);
    } else {
      setOpenItem(item);
      setLastOpenItem(item);
    }
  };

  const currentImageSrc = openItem 
    ? skills[openItem][1] 
    : (lastOpenItem ? skills[lastOpenItem][1] : "/school.png");

  return (
    <div className="flex flex-col lg:flex-row w-full">
      <div className="lg:w-1/2 text-left pt-3 md:pt-9 lg:pr-4">
        <h3 className="text-4xl md:text-5xl font-medium text-[var(--white)] mb-6">
          What I've been up to
        </h3>
        <ul className="space-y-4 mt-4 text-lg">
          {Object.entries(skills).map(([category, items]) => (
            <li key={category} className="w-full">
              <div
                onClick={() => toggleItem(category)}
                className="w-full bg-[#1414149c] rounded-2xl text-left hover:bg-[var(--white-icon-tr)] transition-all border border-[var(--white-icon-tr)] cursor-pointer overflow-hidden"
              >
                <div className="flex items-center gap-3 p-4">
                  {CategoryIcons[category]}
                  <div className="flex items-center gap-2 flex-grow justify-between">
                    <div className="min-w-0 overflow-hidden">
                      <span className="block truncate text-[var(--white)] text-lg">
                        {category}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
  
      <div className="lg:w-1/2 pt-3 md:pt-9 lg:pl-4 flex items-start justify-center">
        <div className="w-full text-[var(--white)] text-lg">
          <div className="relative w-full lg:h-80 h-64">
            <img 
              className={`absolute w-full h-full object-cover rounded-lg ${openItem ? 'opacity-30' : 'opacity-100'}`}
              src={currentImageSrc}
              alt={openItem ? skills[openItem][0] : "Background image"}
            />
            {openItem && (
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-[var(--white)] p-4">
                  {skills[openItem][0]}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Status;