import React from "react";

const Products = () => {
  const data = [
    {
      img: "https://online.apollopharmacy.in/pub/media/catalog/category/health_monitors.jpg",
      heading: "Health Monitors",
    },
    {
      img: "https://online.apollopharmacy.in/pub/media/catalog/category/pain_relief.jpg",
      heading: "Pain Relief",
    },
    {
      img: "https://images.apollo247.in/pub/media/catalog/category/apollo_products_1.jpg",
      heading: "Baby Care",
    },
    {
      img: "https://images.apollo247.in/pub/media/catalog/category/nutritional_supp.jpg",
      heading: "Nutritional Drinks",
    },
    {
      img: "https://online.apollopharmacy.in/pub/media/catalog/category/pain_relief.jpg",
      heading: "Pain Relief",
    },
    {
      img: "https://online.apollopharmacy.in/pub/media/catalog/category/adult_diapers.jpg",
      heading: "Adult Diapers",
    },
    {
      img: "https://online.apollopharmacy.in/pub/media/catalog/category/vitamins_minerals.jpg",
      heading: "Vitamins & Minerals",
    },
    {
      img: "https://images.apollo247.in/pub/media/catalog/category/protein_supplements_1.jpg",
      heading: "Protein Powders",
    },
    {
      img: "https://images.apollo247.in/pub/media/catalog/category/summeressential.jpg",
      heading: "Summer Essentials",
    },
    {
      img: "https://online.apollopharmacy.in/pub/media/catalog/category/home_medical_supplies.jpg",
      heading: "Medical Supplies",
    },
    {
      img: "https://online.apollopharmacy.in/pub/media/catalog/category/intimate_care.jpg",
      heading: "Intimate Care",
    },
    {
      img: "https://online.apollopharmacy.in/pub/media/catalog/category/skincare_haircare.jpg",
      heading: "Skin & Hair Care",
    },
  ];

  return (
    <div className="w-full p-4">
      <h1 className="text-left font-bold text-2xl mb-4">
        Shop By Category (12)
      </h1>
      <div className="grid grid-cols-6 gap-8">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center"
          >
            <img
              src={item.img}
              alt={item.heading}
              className="w-20 h-20 object-cover rounded-md"
            />
            <p className="text-sm font-semibold mt-2 text-center">
              {item.heading}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
