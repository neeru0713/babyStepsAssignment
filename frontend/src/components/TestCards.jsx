import React, { useState, useEffect } from "react";
import { CgChevronDown } from "react-icons/cg";
import { FaCircleChevronRight, FaCircleChevronLeft } from "react-icons/fa6";

const testData = [
  {
    id: 1,
    name: "CBC Test (Complete Blood Count)",
    testsIncluded: "30 Tests Included",
    price: 478,
    originalPrice: 637,
    discount: "25% off",
    memberPrice: 382,
    img: "https://images.apollo247.in/images/diagnostics/App/Items/Test/Blood_Studies.png?tr=q-80,f-webp,w-100,dpr-2,c-at_max",
  },
  {
    id: 2,
    name: "HbA1c Test (Hemoglobin A1c)",
    testsIncluded: "3 Tests Included",
    price: 899,
    originalPrice: 1200,
    discount: "30% off",
    memberPrice: 700,
    img: "https://images.apollo247.in/images/diagnostics/App/Items/Test/Diabetes.png?tr=q-80,f-webp,w-100,dpr-2,c-at_max",
  },
  {
    id: 3,
    name: "Thyroid Function Test",
    testsIncluded: "3 Tests Included",
    price: 599,
    originalPrice: 850,
    discount: "29% off",
    memberPrice: 550,
    img: "https://images.apollo247.in/images/diagnostics/App/Items/Test/Diabetes.png?tr=q-80,f-webp,w-100,dpr-2,c-at_max",
  },
  {
    id: 4,
    name: "Lipid Profile Test",
    testsIncluded: "6 Tests Included",
    price: 899,
    originalPrice: 1200,
    discount: "30% off",
    memberPrice: 700,
    img: "https://images.apollo247.in/images/diagnostics/App/Items/Test/Diabetes.png?tr=q-80,f-webp,w-100,dpr-2,c-at_max",
  },
  {
    id: 5,
    name: "Kidney Function Test",
    testsIncluded: "8 Tests Included",
    price: 520,
    originalPrice: 750,
    discount: "30% off",
    memberPrice: 460,
    img: "https://images.apollo247.in/images/diagnostics/App/Items/Test/Diabetes.png?tr=q-80,f-webp,w-100,dpr-2,c-at_max",
  },
  {
    id: 6,
    name: "Vitamin D Test",
    testsIncluded: "1 Test Included",
    price: 999,
    originalPrice: 1300,
    discount: "23% off",
    memberPrice: 800,
    img: "https://images.apollo247.in/images/diagnostics/App/Items/Test/Diabetes.png?tr=q-80,f-webp,w-100,dpr-2,c-at_max",
  },
  {
    id: 7,
    name: "Iron Studies",
    testsIncluded: "4 Tests Included",
    price: 799,
    originalPrice: 1000,
    discount: "20% off",
    memberPrice: 700,
    img: "https://images.apollo247.in/images/diagnostics/App/Items/Test/Iron_Studies.png?tr=q-80,f-webp,w-100,dpr-2,c-at_max",
  },
  {
    id: 8,
    name: "Diabetes Test",
    testsIncluded: "2 Tests Included",
    price: 350,
    originalPrice: 450,
    discount: "22% off",
    memberPrice: 280,
    img: "https://images.apollo247.in/images/diagnostics/App/Items/Test/Diabetes.png?tr=q-80,f-webp,w-100,dpr-2,c-at_max",
  },
];

const TestCards = () => {
  const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       nextSlide();
//     }, 3000);
//     return () => clearInterval(interval);
//   }, [index]);

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % 2);
  };

  const prevSlide = () => {
    setIndex(
      (prevIndex) => (prevIndex - 1 + testData.length) % testData.length
    );
  };

  return (
    <div className="flex flex-col w-full gap-6 relative">
      {/* Header */}
      <div className="flex w-full justify-between">
        <h1 className="font-bold text-2xl">Top Booked Tests (42)</h1>
        <h1 className="text-[#116c89] text-md font-bold cursor-pointer">
          View All
        </h1>
      </div>

      {/* Carousel Container */}
      <div className="relative w-full overflow-hidden">
        <div
          className="pb-6 flex transition-transform duration-200 w-full gap-1"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {testData.map((test) => (
            <div
              key={test.id}
              className="w-[24%] flex-shrink-0 rounded-lg border border-gray-300 p-4 flex flex-col gap-3"
            >
              <div className="row-1 flex gap-4">
                <div className="image-div rounded-lg border-[#eeefed]">
                  <img
                    className="h-[60px] w-[60px]"
                    src={test.img}
                    alt="Test"
                  />
                </div>
                <div className="test-info flex flex-col items-start text-left p-1">
                  <div className="font-semibold text-[16px] leading-[19px] w-[80%]">
                    {test.name}
                  </div>
                  <div className="text-xs text-gray-500">
                    {test.testsIncluded}
                  </div>
                </div>
              </div>

              <div className="row-2 flex gap-2 items-center">
                <div className="flex flex-col">
                  <div className="flex gap-2">
                    <div className="flex items-center font-bold text-lg">
                      ₹ {test.price}
                    </div>
                    <div className="flex items-center text-[#b1b1b0] line-through text-xs">
                      ( ₹ {test.originalPrice})
                    </div>
                    <div className="flex text-[#248940] font-bold items-center text-sm">
                      {test.discount}
                    </div>
                  </div>

                  <div className="flex bg-[#fef3d5] w-[100%] p-[1px] rounded items-center">
                    <img
                      src="https://images.apollo247.in/images/icons/circle-icon.svg"
                      alt="Member Price"
                    />
                    <h1 className="text-[#904819] text-[10px] w-[60%] font-semibold">
                      Member price
                    </h1>
                    <div className="text-[10px] flex text-[#904819] text-xs items-center">
                      <h1 className="font-bold">₹{test.memberPrice}</h1>
                      <CgChevronDown className="text-lg" />
                    </div>
                  </div>
                </div>
                <button className="rounded-md bg-[#116c89] text-white font-bold px-8 py-2 text-sm">
                  Add
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      {index > 0 && (
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-600"
        >
          <FaCircleChevronLeft />
        </button>
      )}

      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-600"
      >
        <FaCircleChevronRight />
      </button>
    </div>
  );
};

export default TestCards;
