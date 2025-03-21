import React from "react";

const Footer = () => {
  const images = [
    {
      img: "https://images.apollo247.in/images/ui_revamp_secure_payment_widget.svg?tr=q-80,w-100,dpr-2,c-at_max",
      heading: "Secure Payment",
    },
    {
      img: "https://images.apollo247.in/images/ui_revamp_fullyreliable_widget.svg?tr=q-80,w-200,dpr-2,c-at_max",
      heading: "Trusted by 8 Crore Indians",
    },
    {
      img: "https://images.apollo247.in/images/ui_revamp_genuineProducts_widget.svg?tr=q-80,w-150,dpr-2,c-at_max",
      heading: "Genuine Products",
    },
  ];

  return (
    <div className="flex justify-center items-center gap-4">
      {images.map((item, index) => (
        <div key={index} className="flex flex-col items-center text-center">
          <img src={item.img} alt={item.heading} className="w-18 h-18" />
          <p className="text-xs text-[#5898b3] font-semibold mt-2">{item.heading}</p>
        </div>
      ))}
    </div>
  );
};

export default Footer;
