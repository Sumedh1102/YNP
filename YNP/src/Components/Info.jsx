import React from 'react';

export default function HealthcareHero() {
  return (
    <div className="min-h-max my-10 md:my-20 bg-gray-100 flex items-center justify-center px-4 sm:px-6 py-12 md:py-20">
      <div className="max-w-7xl w-full">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-4 md:space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-gray-900 leading-tight">
              Shaping Tomorrow's Pharmacists
              <br />
              with Knowledge & Innovation.
            </h1>
            
            <div className="space-y-3 md:space-y-4 text-gray-600 text-base md:text-lg">
              <p>
                YNP College of Pharmacy is dedicated to providing high-quality pharmaceutical 
                education through its D.Pharm and B.Pharm programs. Our curriculum combines 
                theoretical knowledge with hands-on training to prepare students for careers 
                in healthcare, research, and pharmacy practice.
              </p>
              
              <p>
                Equipped with advanced laboratories, experienced faculty, and a student-focused 
                learning environment, YNP fosters innovation, critical thinking, and ethical 
                practice. We aim to create skilled professionals ready to contribute meaningfully 
                to healthcare and society.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2 md:pt-4">
              <button className="bg-blue-600 text-base md:text-lg hover:bg-blue-700 text-white font-medium px-6 md:px-8 py-3 rounded-full transition-colors">
                View Programs
              </button>
              <button className="bg-gray-800 text-base md:text-lg hover:bg-gray-900 text-white font-medium px-6 md:px-8 py-3 rounded-full transition-colors">
                Contact Us
              </button>
            </div>
          </div>
          
          {/* Right Content */}
          <div className="space-y-6 md:space-y-8 flex flex-col items-center lg:items-start">
            {/* Image */}
            <div className="rounded-3xl overflow-hidden w-full sm:w-[420px] lg:w-[470px] lg:translate-x-28">
              <img
                src="https://ynpbpharm.in/assets/img/gallery/gallery-5.jpg"
                alt="Students at YNP College of Pharmacy"
                className="w-full h-48 sm:h-56 md:h-64 object-cover bg-gray-200"
              />
            </div>
            
            {/* College Highlights */}
            <div className="bg-white rounded-3xl p-6 md:p-8 w-full sm:w-[380px] lg:w-[420px]">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-10">
                College Timings
              </h2>

              <div className="space-y-5 md:space-y-7 text-gray-700 text-sm md:text-base">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Monday - Friday</span>
                  <span className="text-gray-600">9:00 AM - 5:00 PM</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="font-medium">Saturday</span>
                  <span className="text-gray-600">9:00 AM - 1:00 PM</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="font-medium">Sunday</span>
                  <span className="text-gray-600">Closed</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}