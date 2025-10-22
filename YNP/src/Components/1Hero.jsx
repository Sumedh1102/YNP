import React from 'react';

export default function EducationHero() {
  return (
    <div className='pt-4 sm:pt-6 md:pt-10 px-4 sm:px-6 md:px-10 lg:px-16'>
      <div className="relative w-full min-h-[500px] sm:min-h-[600px] md:min-h-[700px] lg:min-h-screen flex items-center justify-start p-4 sm:p-6 md:p-10 lg:p-16 rounded-2xl sm:rounded-3xl overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center rounded-2xl sm:rounded-3xl"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?q=80&w=2000&auto=format&fit=crop')`,
          }}
        >
          {/* Subtle overlay for better card visibility */}
          <div className="absolute inset-0 bg-black bg-opacity-10 rounded-2xl sm:rounded-3xl"></div>
        </div>

        {/* Content Card */}
        <div className="relative z-10 bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 w-full sm:max-w-md md:max-w-lg lg:max-w-xl">
          {/* Top Label */}
          <p className="text-blue-500 font-medium text-sm sm:text-base md:text-lg mb-3 sm:mb-4">
            Growth Your Education
          </p>

          {/* Main Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4 sm:mb-5 md:mb-6">
            Education Is A Path To Success In Life
          </h1>

          {/* Description Text */}
          <p className="text-gray-500 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-7 md:mb-8">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.
          </p>

          {/* CTA Button */}
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 sm:px-7 md:px-8 py-3 sm:py-3.5 rounded-full transition-all duration-300 shadow-md hover:shadow-lg text-sm sm:text-base w-full sm:w-auto">
            Get A Quote
          </button>
        </div>
      </div>
    </div>
  );
}