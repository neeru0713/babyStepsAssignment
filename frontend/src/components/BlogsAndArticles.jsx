import React, {useState} from 'react'
import { FaCircleChevronRight, FaCircleChevronLeft } from "react-icons/fa6";


const BlogsAndArticles = () => {
  const [index, setIndex] = useState(0);
  

  const data = [
    {
      id: 1,
      img: "https://images.apollo247.in/pd-cms/cms/2025-03/top-view-assortment-medicine-table.jpg?tr=q-80,f-webp,w-200,dpr-2,c-at_max",
      describtions:
        "I want to get my periods immediately. Suggest medicine for me to get periods within a day",
      heading: "By Apollo 24|7 - 18.03.25",
    },
    {
      id: 2,
      img: "https://images.apollo247.in/pd-cms/cms/2025-03/Annual-health-checkup-benefits%20(1).jpg?tr=q-80,f-webp,w-200,dpr-2,c-at_max",
      describtions:
        "Empowering Your Health: The Benefits of Annual Health Checkups",
      heading: "By Apollo 24|7 - 18.03.25",
    },
    {
      id: 3,
      img: "https://images.apollo247.in/pd-cms/cms/2025-03/Preventive-health-check-up%20(1)%20(4).jpg?tr=q-80,f-webp,w-200,dpr-2,c-at_max",
      describtions: "Best Preventive Health Checkup Packages in 2025y",
      heading: "By Apollo 24|7 - 18.03.25",
    },
    {
      id: 4,
      img: "https://images.apollo247.in/pd-cms/cms/2025-03/preventive-health-checkup-80d%20(4).jpg?tr=q-80,f-webp,w-200,dpr-2,c-at_max",
      describtions: "Preventive Health Checkup Tax Benefit Under Section 80D",
      heading: "By Apollo 24|7 - 18.03.25",
    },
    {
      id: 5,
      img: "https://images.apollo247.in/pd-cms/cms/2024-08/probiotics-health%20(2).jpg?tr=q-80,f-webp,w-200,dpr-2,c-at_max",
      describtions: "What are the best sources of probiotics for diabetics?",
      heading: "By Apollo 24|7 - 18.03.25",
    },
    {
      id: 6,
      img: "https://images.apollo247.in/pd-cms/cms/2023-08/Shutterstock_1050601700.jpg?tr=q-80,f-webp,w-200,dpr-2,c-at_max",
      describtions: "Shingles Diet: Essential Foods To Eat And Avoid",
      heading: "By Apollo 24|7 - 18.03.25",
    },
    {
      id: 7,
      img: "https://images.apollo247.in/pd-cms/cms/2025-03/What%20Is%20The%20Esr%20Level%20In%20Cancer%20Patients%20(1).jpg?tr=q-80,f-webp,w-200,dpr-2,c-at_max",
      describtions:
        "What is the ESR Level in Cancer Patients: How ESR is Used In Cancer Follow-up and Program",
      heading: "By Apollo 24|7 - 18.03.25",
    },
    {
      id: 8,
      img: "https://images.apollo247.in/pd-cms/cms/2025-02/Why%20ESR%20Is%20High%20In%20Female%20(1).jpg?tr=q-80,f-webp,w-200,dpr-2,c-at_max  ",
      describtions:
        "Why ESR is High in Females? Causes of Elevated ESR in Women Explained",
      heading: "By Apollo 24|7 - 18.03.25",
    },
    {
      id: 9,
      img: "https://images.apollo247.in/pd-cms/cms/2025-02/WhatsApp%20Image%202025-02-14%20at%2015.26.33%20(1).jpg?tr=q-80,f-webp,w-200,dpr-2,c-at_max",
      describtions:
        "How Much CRP Level is Dangerous: Key Insights on Inflammation Risks",
      heading: "By Apollo 24|7 - 18.03.25",
    },
    {
      id: 10,
      img: "https://images.apollo247.in/pd-cms/cms/2025-02/Blue%20Tea%20Benefits%20(1)%20(1).jpg?tr=q-80,f-webp,w-200,dpr-2,c-at_max",
      describtions:
        "Blue Tea Benefits: Learning About This Antioxidant-Rich Drink",
      heading: "By Apollo 24|7 - 18.03.25",
    },
    {
      id: 11,
      img: "https://images.apollo247.in/pd-cms/cms/2025-02/vitamins%20for%20hair%20growth%20and%20thickness%20(1).jpg?tr=q-80,f-webp,w-200,dpr-2,c-at_max",
      describtions:
        "Vitamins for Hair Growth and Thickness: Essential Nutrients for Fuller, Healthier Hair",
      heading: "By Apollo 24|7 - 18.03.25",
    },
    {
      id: 12,
      img: "https://images.apollo247.in/pd-cms/cms/2025-02/Which%20Vitamin%20Is%20Good%20For%20Hair%20(1).jpg?tr=q-80,f-webp,w-200,dpr-2,c-at_max",
      describtions:
        "Which Vitamin Is Good for Hair?: A Complete Guide to Hair-Friendly Vitamins",
      heading: "By Apollo 24|7 - 18.03.25",
    },
    {
      id: 13,
      img: "https://images.apollo247.in/pd-cms/cms/2025-02/Curd%20Benefits%20(2).jpg?tr=q-80,f-webp,w-200,dpr-2,c-at_max",
      describtions:
        "Curd Benefits: Explore the Nutritional Value That Makes Curd a Superfood for Daily Diets",
      heading: "By Apollo 24|7 - 18.03.25",
    },
    {
      id: 14,
      img: "https://images.apollo247.in/pd-cms/cms/2025-02/Custard%20Apple%20Benefits%20(2).jpg?tr=q-80,f-webp,w-200,dpr-2,c-at_max",
      describtions:
        "Custard Apple Benefits: A Nutrient-Rich Superfruit for a Healthy Diet",
      heading: "By Apollo 24|7 - 18.03.25",
    },
    {
      id: 15,
      img: "https://images.apollo247.in/pd-cms/cms/2025-02/makhana%20benefits%20(3)%20(1).jpg?tr=q-80,f-webp,w-200,dpr-2,c-at_max",
      describtions:
        "Makhana Benefits: Traditional Superfood & A Healthy Snacking Alternative",
      heading: "By Apollo 24|7 - 18.03.25",
    },
    {
      id: 16,
      img: "https://images.apollo247.in/pd-cms/cms/2025-02/Biotin%20Rich%20Foods%20(1).jpg?tr=q-80,f-webp,w-200,dpr-2,c-at_max",
      describtions:
        "Biotin Rich Foods: The Best Dietary Choices to Boost Your Biotin Intake Naturally",
      heading: "By Apollo 24|7 - 18.03.25",
    },
    {
      id: 17,
      img: "https://images.apollo247.in/pd-cms/cms/2025-02/Sugar%20Cane%20Juice%20Benefits%20(2).jpg?tr=q-80,f-webp,w-200,dpr-2,c-at_max",
      describtions:
        "Sugar Cane Juice Benefits: How This Natural Drink Boosts Energy and Hydrates the Body",
      heading: "By Apollo 24|7 - 18.03.25",
    },
    {
      id: 18,
      img: "https://images.apollo247.in/pd-cms/cms/2025-02/saunf%20water%20benefits%20(1).jpg?tr=q-80,f-webp,w-200,dpr-2,c-at_max",
      describtions:
        "Saunf Water Benefits: Nutrients And Health Advantages Of Drinking Saunf Water",
      heading: "By Apollo 24|7 - 18.03.25",
    },
    {
      id: 19,
      img: "https://images.apollo247.in/pd-cms/cms/2025-02/ABC%20Juice%20Benefits%20(2).jpg?tr=q-80,f-webp,w-200,dpr-2,c-at_max",
      describtions:
        "ABC Juice Benefits: Why This Vitamin-Packed Juice Is Great for Overall Wellness?",
      heading: "By Apollo 24|7 - 18.03.25",
    },
    {
      id: 20,
      img: "https://images.apollo247.in/pd-cms/cms/2025-02/Black%20Raisins%20Benefits%20(1).jpg?tr=q-80,f-webp,w-200,dpr-2,c-at_max",
      describtions:
        "Black Raisins Benefits: How They Boost Immunity and Improve Overall Health",
      heading: "By Apollo 24|7 - 18.03.25",
    },
    {
      id: 21,
      img: "https://images.apollo247.in/pd-cms/cms/2025-02/How%20to%20Increase%20Wbc%20Count%20(2).jpg?tr=q-80,f-webp,w-200,dpr-2,c-at_max",
      describtions:
        "Best Preventive Health Checkup Why You Should Regularly Check Your Blood Pressure at Home in 2025y",
      heading: "By Apollo 24|7 - 18.03.25",
    },
    {
      id: 22,
      img: "https://images.apollo247.in/pd-cms/cms/2025-02/how%20to%20control%20thyroid%20in%20female%20(2).jpg?tr=q-80,f-webp,w-200,dpr-2,c-at_max",
      describtions:
        "How to Increase WBC Count: Understanding the Causes of Low WBC and How to Address It",
      heading: "By Apollo 24|7 - 18.03.25",
    },
    {
      id: 23,
      img: "https://images.apollo247.in/pd-cms/cms/2025-02/triple%20marker%20test%20(1)%20(2).jpg?tr=q-80,f-webp,w-200,dpr-2,c-at_max",
      describtions:
        "WHow To Control Thyroid In Female: Managing Thyroid Imbalance Through Diet And Lifestyle",
      heading: "By Apollo 24|7 - 18.03.25",
    },
    {
      id: 24,
      img: "https://images.apollo247.in/pd-cms/cms/2025-02/how%20to%20increase%20hemoglobin%20(1)%20(2).jpg?tr=q-80,f-webp,w-200,dpr-2,c-at_max",
      describtions:
        "Triple Marker Test When Should You Consider Getting This Prenatal Screening",
      heading: "By Apollo 24|7 - 18.03.25",
    },
    {
      id: 25,
      img: "https://images.apollo247.in/pd-cms/cms/2025-02/Vitamin%20D%20vegetables%20(1).jpg?tr=q-80,f-webp,w-200,dpr-2,c-at_max",
      describtions:
        "I want to get my periods immediately. Suggest medicine for me to get periods within a dayI want to get my periods immediately. Suggest medicine for me to get periods within a day",
      heading: "By Apollo 24|7 - 18.03.25",
    },
    {
      id: 26,
      img: "https://images.apollo247.in/pd-cms/cms/2025-02/hbsag%20test%20(1).jpg?tr=q-80,f-webp,w-200,dpr-2,c-at_max",
      describtions:
        "Vitamin D Vegetables: How To Include Vitamin D-Rich Vegetables In Your Diet",
      heading: "By Apollo 24|7 - 18.03.25",
    },
    {
      id: 27,
      img: "https://images.apollo247.in/pd-cms/cms/2025-03/Preventive-health-check-up%20(1)%20(4).jpg?tr=q-80,f-webp,w-200,dpr-2,c-at_max",
      describtions: "Best Preventive Health Checkup Packages in 2025y",
      heading: "By Apollo 24|7 - 18.03.25",
    },
    {
      id: 28,
      img: "https://images.apollo247.in/pd-cms/cms/2025-03/preventive-health-checkup-80d%20(4).jpg?tr=q-80,f-webp,w-200,dpr-2,c-at_max",
      describtions:
        "HBsAg Test: How It Helps Monitor Chronic Hepatitis B and Prevent Complications",
      heading: "By Apollo 24|7 - 18.03.25",
    },
    {
      id: 29,
      img: "https://images.apollo247.in/pd-cms/cms/2025-02/Signs%20of%20Recovery%20from%20Typhoid%20(1)%20(1).jpg?tr=q-80,f-webp,w-200,dpr-2,c-at_max",
      describtions:
        "Signs of Recovery from Typhoid: How to Track Your Progress and Know You’re Recovering",
      heading: "By Apollo 24|7 - 18.03.25",
    },
    {
      id: 30,
      img: "https://images.apollo247.in/pd-cms/cms/https://images.apollo247.in/pd-cms/cms/2025-02/pus%20culture%20test%20(2).jpg?tr=q-80,f-webp,w-200,dpr-2,c-at_max-08/Shutterstock_1050601700.jpg?tr=q-80,f-webp,w-200,dpr-2,c-at_max",
      describtions:
        "Pus Culture Test: What It Is And How It Helps Diagnose Infections?",
      heading: "By Apollo 24|7 - 18.03.25",
    },
  ];

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % 5);
  };

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };
    return (
      <div className="flex flex-col w-full gap-6 relative">
        <div className=" Header flex w-full justify-between">
          <h1 className="font-bold text-xl">Blogs and Articles for you (30)</h1>
          <h1 className="text-[#116c89] text-md font-bold cursor-pointer">
            View All
          </h1>
        </div>

        <div className="Carousel Container flex gap-2.5 relative w-full overflow-hidden">
          {data.map((item) => (
            <div
              key={item.id}
              className="flex flex-col gap-2 pb-6 flex transition-transform duration-500 w-[16%] gap-2 flex-shrink-0"
              style={{ transform: `translateX(-${index * 600}%)` }}
            >
              <img
                className="rounded-lg w-[200px] h-[120px]"
                src={item.img}
                alt="Blog"
              />
              <p className="text-xs font-semibold text-left">
                {item.describtions}
              </p>
              <h1 className="text-gray-500 text-xs text-left">
                {item.heading}
              </h1>
            </div>
          ))}
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
}

export default BlogsAndArticles