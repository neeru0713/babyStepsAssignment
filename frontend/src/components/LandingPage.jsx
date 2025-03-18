import React from 'react'
import Carousel from './carousel/Carousel'
import Chips from "./Chips";
import { FaChevronRight } from "react-icons/fa";
import CardCarousel from "./carousel/CardCarousel";
import Products from './Products';


const LandingPage = () => {
  return (
    <div className="flex flex-col gap-20">
      <Carousel />
      <div className="flex justify-between items-center">
        <Chips
          img="https://images.apollo247.in/images/home-screen/contentful/MedicineIcon_ServiceNavigator.png?tr=q-80,f-webp,w-50,dpr-2,c-at_max"
          heading="Buy Medicines & Essentials"
          subHeading="2HRS DELIVERY"
          icon={<FaChevronRight />}
          bgColor="#e9fbef"
          textColor="#465d2f"
        />
        <Chips
          img="	https://images.apollo247.in/images/ui_revamp_video_consult.svg?tr=q-80,w-50,dpr-2,c-at_max"
          heading="Doctor Appointment"
          subHeading="Book Now"
          icon={<FaChevronRight />}
          bgColor="#fef3d5"
          textColor="#685b2a"
        />
        <Chips
          img="https://images.apollo247.in/images/ui_revamp_labtest.svg?tr=q-80,w-50,dpr-2,c-at_max"
          heading="Lab Tests"
          subHeading="AT HOME"
          icon={<FaChevronRight />}
          bgColor="#fcedf2"
          textColor="#783a58"
        />
        <Chips
          img="https://images.apollo247.in/images/home-screen/contentful/Insurance_icon_service_navigator.png?tr=q-80,f-webp,w-50,dpr-2,c-at_max"
          heading="Insurance"
          subHeading="EXPLORE PLANS"
          icon={<FaChevronRight />}
          bgColor="#e5eeff"
          textColor="#3571df"
        />
      </div>
      <CardCarousel />
      <img src="https://images.apollo247.in/images/home-screen/contentful/Circle_Banner_Web.png?tr=q-80,f-webp,w-800,dpr-1,c-at_max%20800w,%20https://images.apollo247.in/images/home-screen/contentful/Circle_Banner_Web.png?tr=q-80,f-webp,w-800,dpr-2,c-at_max%201600w,%20https://images.apollo247.in/images/home-screen/contentful/Circle_Banner_Web.png?tr=q-80,f-webp,w-800,dpr-3,c-at_max%202400w,%20https://images.apollo247.in/images/home-screen/contentful/Circle_Banner_Web.png?tr=q-80,f-webp,w-800,dpr-4,c-at_max%203200w,%20https://images.apollo247.in/images/home-screen/contentful/Circle_Banner_Web.png?tr=q-80,f-webp,w-800,dpr-5,c-at_max%204000w,%20https://images.apollo247.in/images/home-screen/contentful/Circle_Banner_Web.png?tr=q-80,f-webp,w-800,dpr-6,c-at_max%204800w" />
      <Products/>
    </div>
  );
}

export default LandingPage