import React from "react";

const chairman = {
  name: "Mr. Vikas Madhukar Patil",
  designation: "Vice Chairman",
  message: "At YNP College of Pharmacy, our Vice Chairman serves as an invaluable pillar of support and leadership, contributing to the institution's growth and success with unwavering dedication and expertise. With a keen understanding of the evolving landscape of pharmaceutical education, our Vice Chairman plays a pivotal role in shaping strategic initiatives and fostering collaborative partnerships. Their visionary approach and commitment to excellence inspire innovation and drive progress throughout the institution.",
  image: "",
  signature: "https://via.placeholder.com/150x50/ffffff/000000?text=Signature"
};

const ChairmansMessage = () => {
  return (
    <div className="min-h-fit bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-medium text-gray-800 mb-2">
          Vice Chairman's Message
          </h1>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-xl  overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Image Section */}
            <div className="md:w-2/5 p-8 flex items-center justify-center bg-white">
              <div className="text-center">
                <img 
                  src={chairman.image} 
                  alt={chairman.name} 
                  className="w-96 rounded-3xl h-96  object-cover mx-auto bg-gray-100"
                />
                <div className="mt-6">
                  <h2 className="text-2xl font-bold text-gray-800">{chairman.name}</h2>
                  <p className="text-blue-600 font-semibold text-lg mt-1">{chairman.designation}</p>
                </div>
              </div>
            </div>

            {/* Message Section */}
            <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
              <div className="relative">
                <p className="text-gray-700 leading-relaxed text-justify text-base md:text-lg">
                  {chairman.message}
                </p>
              </div>

              {/* Signature */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-gray-600 font-medium">{chairman.name}</p>
                <p className="text-gray-500 text-sm">{chairman.designation}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChairmansMessage;