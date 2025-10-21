import React, { useState, useEffect } from "react";

const CategoryIcons = {
  "Working": (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 -10 53 53" fill="currentColor" className="w-6 h-6 text-[var(--sec)] opacity-70"><path d="M30.133 1.552c-1.090-1.044-2.291-1.573-3.574-1.573-2.006 0-3.47 1.296-3.87 1.693-0.564 0.558-19.786 19.788-19.786 19.788-0.126 0.126-0.217 0.284-0.264 0.456-0.433 1.602-2.605 8.71-2.627 8.782-0.112 0.364-0.012 0.761 0.256 1.029 0.193 0.192 0.45 0.295 0.713 0.295 0.104 0 0.208-0.016 0.31-0.049 0.073-0.024 7.41-2.395 8.618-2.756 0.159-0.048 0.305-0.134 0.423-0.251 0.763-0.754 18.691-18.483 19.881-19.712 1.231-1.268 1.843-2.59 1.819-3.925-0.025-1.319-0.664-2.589-1.901-3.776zM22.37 4.87c0.509 0.123 1.711 0.527 2.938 1.765 1.24 1.251 1.575 2.681 1.638 3.007-3.932 3.912-12.983 12.867-16.551 16.396-0.329-0.767-0.862-1.692-1.719-2.555-1.046-1.054-2.111-1.649-2.932-1.984 3.531-3.532 12.753-12.757 16.625-16.628zM4.387 23.186c0.55 0.146 1.691 0.57 2.854 1.742 0.896 0.904 1.319 1.9 1.509 2.508-1.39 0.447-4.434 1.497-6.367 2.121 0.573-1.886 1.541-4.822 2.004-6.371zM28.763 7.824c-0.041 0.042-0.109 0.11-0.19 0.192-0.316-0.814-0.87-1.86-1.831-2.828-0.981-0.989-1.976-1.572-2.773-1.917 0.068-0.067 0.12-0.12 0.141-0.14 0.114-0.113 1.153-1.106 2.447-1.106 0.745 0 1.477 0.34 2.175 1.010 0.828 0.795 1.256 1.579 1.27 2.331 0.014 0.768-0.404 1.595-1.24 2.458z"></path></svg>
  ),
  "Graduating early": (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-5 0 32 32" fill="currentColor" className="w-6 h-6 text-[var(--sec)] opacity-70"><path d="M21.080 12.84l-8.92-3.24c-0.4-0.16-0.88-0.2-1.16-0.2-0.32 0-0.76 0.040-1.16 0.2l-8.92 3.24c-0.84 0.32-0.92 0.88-0.92 1.12s0.080 0.8 0.92 1.12l0.4 0.12v3.32c0 0.48 0.36 0.84 0.84 0.84s0.84-0.36 0.84-0.84v-2.72l1.56 0.56v3.76c0 1.64 3.84 2.44 6.44 2.44s6.44-0.76 6.44-2.44v-3.72l3.64-1.32c0.84-0.28 0.92-0.88 0.92-1.12s-0.080-0.8-0.92-1.12zM15.8 19.92c-0.48 0.32-2.28 0.96-4.76 0.96s-4.32-0.64-4.76-0.96v-2.92l3.6 1.32c0.4 0.16 0.88 0.2 1.16 0.2s0.76-0.040 1.16-0.2l3.6-1.32v2.92zM11.6 16.72c-0.28 0.12-0.88 0.12-1.16 0l-7.64-2.76 7.6-2.76c0.28-0.12 0.88-0.12 1.16 0l7.64 2.76-7.6 2.76z"></path></svg>
  ),
  "Hoo's Motor Club": (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-2.1 -2.1 21.68 21.68" fill="currentColor" className="w-6 h-6 text-[var(--sec)] opacity-70"><path d="M17.477,8.149c-0.079-0.739-3.976-0.581-3.976-0.581L11.853,5.23H4.275L3.168,7.567H0v2.404 l2.029,0.682c0.123-0.836,0.843-1.48,1.711-1.48c0.939,0,1.704,0.751,1.73,1.685l6.62,0.041c0.004-0.951,0.779-1.726,1.733-1.726 c0.854,0,1.563,0.623,1.704,1.439l1.479-0.17C17.006,10.442,17.556,8.887,17.477,8.149z M4.007,7.568l0.746-1.771h2.864 l0.471,1.771H4.007z M8.484,7.568L8.01,5.797h3.67l1.137,1.771H8.484z"></path> <circle cx="3.759" cy="10.966" r="1.289"></circle> <circle cx="13.827" cy="10.9" r="1.29"></circle></svg>
  ),
};

const Status = () => {
  const [openItem, setOpenItem] = useState(null);
  const [lastOpenItem, setLastOpenItem] = useState(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [imageCache, setImageCache] = useState({});

  const skills = {
    "Working": [
      "Currently building something to improve customer service for small and mid-sized businesses",
      "/school.png"
    ],
    "Graduating early": [
      "On track to graduate two years ahead of schedule",
      "/grad.png"
    ],
    "Hoo's Motor Club": [
      "I always enjoy going to meets here",
      "/car.png"
    ],
  };

  // Preload all images when component mounts
  useEffect(() => {
    const preloadImages = async () => {
      const imagePromises = Object.values(skills).map(([_, imageSrc]) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = imageSrc;
          img.onload = () => {
            setImageCache(prev => ({
              ...prev,
              [imageSrc]: img
            }));
            resolve(imageSrc);
          };
          img.onerror = reject;
        });
      });

      try {
        await Promise.all(imagePromises);
        setImagesLoaded(true);
      } catch (error) {
        console.error("Failed to preload images:", error);
        setImagesLoaded(true);
      }
    };

    preloadImages();
  }, []);

  const toggleItem = (item) => {
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
            {imagesLoaded ? (
              <img 
                className={`absolute w-full h-full object-cover rounded-lg transition-opacity duration-300 ${openItem ? 'opacity-30' : 'opacity-100'}`}
                src={currentImageSrc}
                alt={openItem ? skills[openItem][0] : "Background image"}
              />
            ) : (
              <div className="absolute w-full h-full bg-background rounded-lg animate-pulse"></div>
            )}
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