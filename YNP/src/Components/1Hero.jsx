import React from 'react';

export default function EducationHero() {
  return (
  
    <div className='pt-10 px-16'>
          <div className="relative w-full min-h-screen flex items-center justify-start p-4 sm:p-8 lg:p-16 rounded-3xl overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center rounded-3xl"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?q=80&w=2000&auto=format&fit=crop')`,
        }}
      >
        {/* Subtle overlay for better card visibility */}
        <div className="absolute inset-0 bg-black bg-opacity-10 rounded-3xl"></div>
      </div>

      {/* Content Card */}
      <div className="relative z-10 bg-white rounded-3xl  p-8 sm:p-10 lg:p-12 max-w-xl w-full sm:max-w-md lg:max-w-lg">
        {/* Top Label */}
        <p className="text-blue-500 font-medium text-base sm:text-lg mb-4">
          Growth Your Education
        </p>

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
          Education Is A Path To Success In Life
        </h1>

        {/* Description Text */}
        <p className="text-gray-500 text-base sm:text-lg leading-relaxed mb-8">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.
        </p>

        {/* CTA Button */}
        <button className="bg-blue-500 text-white font-medium px-8 py-3.5 rounded-full transition-colors duration-300 shadow-md hover:shadow-lg">
          Get A Quote
        </button>
      </div>
    </div>
    </div>  
  );
}