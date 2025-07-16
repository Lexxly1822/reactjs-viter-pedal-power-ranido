import React from "react";

const CardTrail = ({ img, title, country, level, description, miles }) => {
  return (
    <>
      {/* Trail  */}
      <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition">
        <img
          src={img}
          alt="Whistler Bike Park"
          className="w-full h-64 object-cover"
        />
        <div className="p-8">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-2xl font-bold">{title}</h3>
              <p className="text-blue-600">{country}</p>
            </div>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
              {level}
            </span>
          </div>
          <p className="text-gray-600 mb-4">{description}</p>
          <div className="flex justify-between items-center">
            <span className="text-gray-500">{miles}</span>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition">
              Trail Details
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardTrail;
