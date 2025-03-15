import React, { useState, useEffect } from "react";
import { FaCircleChevronRight, FaCircleChevronLeft } from "react-icons/fa6";



const Carousel = () => {
  const [index, setIndex] = useState(0);

  const images = [
    "https://images.apollo247.in/pd-cms/cms/2024-06/Frame%201814106267.png?tr=q-80,f-webp,w-1000,dpr-2,c-at_max",
    "https://images.apollo247.in/pd-cms/cms/2024-06/web_4x.jpg?tr=q-80,f-webp,w-1000,dpr-2,c-at_max",
    "https://images.apollo247.in/pd-cms/cms/2024-11/HH_Web.jpg?tr=q-80,f-webp,w-1000,dpr-2,c-at_max",
  ];

  
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval)
  }, [index])
  
  const nextSlide = () => {
    setIndex((preIndex) => (preIndex + 1) % images.length)
  }

 const prevSlide = () => {
   setIndex((prevIndex) =>
     prevIndex === 0 ? images.length - 1 : prevIndex - 1
   )
 };

  return (
    <div className="relative w-full overflow-hidden rounded-lg shadow-lg">
      <div
        className="flex w-full transition-transform duration-500"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Slide ${i + 1}`}
            className="w-full h-[200px]  flex-shrink-0"
          />
        ))}
      </div>

      <FaCircleChevronLeft
        onClick={prevSlide}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-600 cursor-pointer"
        size={32}
      />

      <FaCircleChevronRight
        onClick={nextSlide}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-600 cursor-pointer"
        size={32}
      />

      <div className="fixed left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            className={`h-2 ${
              index === i
                ? "w-6 rounded-md bg-blue-500"
                : "w-2 rounded-full bg-gray-400"
            } transition-all`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
