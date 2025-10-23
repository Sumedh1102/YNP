import React from 'react';

export default function EducationHero() {
  return (
    <div className='pt-4 sm:pt-6 md:pt-10 px-4 sm:px-6 md:px-10 lg:px-16'>
      <div className="relative w-full min-h-[500px] sm:min-h-[600px] md:min-h-[700px] lg:min-h-[700px] flex items-center justify-start p-4 sm:p-6 md:p-10 lg:p-16 rounded-2xl sm:rounded-3xl overflow-hidden">
        
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center rounded-2xl sm:rounded-3xl"
          style={{
            backgroundImage: `url('https://i.postimg.cc/8zZwmBPH/Chat-GPT-Image-Oct-23-2025-06-15-04-PM.png')`,
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-20 rounded-2xl sm:rounded-3xl"></div>
        </div>

        {/* Content Card */}
        <div className="relative z-10 bg-white rounded-3xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 w-full sm:max-w-md md:max-w-lg lg:max-w-xl">
          
          {/* Top Label */}
          <p className="text-blue-600 font-medium text-sm sm:text-base md:text-lg mb-3 sm:mb-4 uppercase tracking-wide">
            YNP College of Pharmacy
          </p>

          {/* Main Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4 sm:mb-5 md:mb-6">
            Empowering Tomorrow’s Healthcare Innovators
          </h1>

          {/* Description Text */}
          <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-7 md:mb-8">
            Rooted in the values of excellence and social responsibility, 
            YNP College of Pharmacy stands as a modern center for pharmaceutical learning. 
            We inspire students to blend scientific knowledge with compassion, 
            preparing them to lead in research, innovation, and ethical healthcare practice. 
            Our mission is to cultivate capable professionals who contribute meaningfully 
            to the well-being of society through dedication and integrity.
          </p>
        </div>
      </div>
    </div>
  );
}
