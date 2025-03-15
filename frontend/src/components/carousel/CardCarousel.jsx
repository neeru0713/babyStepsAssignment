import React, { useState, useEffect } from "react";
import { FaCircleChevronRight, FaCircleChevronLeft } from "react-icons/fa6";

const images = [
  "https://images.apollo247.in/pd-cms/cms/2024-06/web_2x.jpg?tr=q-80,f-webp,w-300,dpr-1,c-at_max%20300w,%20https://images.apollo247.in/pd-cms/cms/2024-06/web_2x.jpg?tr=q-80,f-webp,w-300,dpr-2,c-at_max%20600w,%20https://images.apollo247.in/pd-cms/cms/2024-06/web_2x.jpg?tr=q-80,f-webp,w-300,dpr-3,c-at_max%20900w,%20https://images.apollo247.in/pd-cms/cms/2024-06/web_2x.jpg?tr=q-80,f-webp,w-300,dpr-4,c-at_max%201200w,%20https://images.apollo247.in/pd-cms/cms/2024-06/web_2x.jpg?tr=q-80,f-webp,w-300,dpr-5,c-at_max%201500w,%20https://images.apollo247.in/pd-cms/cms/2024-06/web_2x.jpg?tr=q-80,f-webp,w-300,dpr-6,c-at_max%201800w",
  "https://images.apollo247.in/pd-cms/cms/2024-09/UR.Life_Banner_412x200_4.jpg?tr=q-80,f-webp,w-450,dpr-2,c-at_max",
  "https://images.apollo247.in/pd-cms/cms/2024-08/410x200%20(1).jpg?tr=q-80,f-webp,w-450,dpr-2,c-at_max",
  "https://images.apollo247.in/pd-cms/cms/2024-07/monsoon%20essential%20410x200.jpg?tr=q-80,f-webp,w-450,dpr-2,c-at_max%20900w",

];

const CardCarousel = () => {
  const [index, setIndex] = useState(0);

    
     useEffect(() => {
        const interval = setInterval(() => {
          nextSlide();
        }, 3000);
        return () => clearInterval(interval)
      }, [index])
      

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="flex flex-col">
      <div className="relative w-full overflow-hidden ">
        <div
          className="flex transition-transform duration-500 w-full gap-4"
          style={{ transform: `translateX(-${index * (100 / 3)}%)` }}
        >
          {images.concat(images).map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`slide ${i + 1}`}
              className="w-1/3 h-[200px] flex-shrink-0 rounded-xl shadow-lg"
            />
          ))}
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-600"
        >
          <FaCircleChevronLeft />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-600"
        >
          <FaCircleChevronRight />
        </button>
      </div>
      <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            className={`h-2 ${
              index === i
                ? "w-6   rounded-md bg-blue-500"
                : "w-2 rounded-full bg-gray-400"
            } transition-all`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default CardCarousel;
