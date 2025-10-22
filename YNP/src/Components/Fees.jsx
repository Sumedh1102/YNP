import React from 'react';

export default function VirtualAppointmentHero() {
  return (
    <section className="min-h-fit bg-gray-50 flex items-center justify-center p-4 md:p-8">
      <div className="max-w-7xl w-full overflow-hidden">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left Content */}
          <div className="flex-1 p-8 md:p-12 lg:p-16 xl:p-20 bg-gray-100 rounded-l-3xl">
            <h2 className="text-4xl md:text-5xl lg:text-5xl font-normal text-gray-900 mb-6 leading-tight">
              Schedule a call for expert
              <br />
              consultation anytime.
            </h2>
            <p className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed">
              YNP College of Pharmacy provides personalized guidance and consultation over calls for students and healthcare inquiries. Speak directly with our faculty and staff to get academic advice, mentorship, and professional guidance tailored to your needs.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-4 rounded-full transition-colors duration-200 text-base md:text-lg">
              Schedule a Call
            </button>
          </div>

          {/* Right Image */}
          <div className="flex-1 w-full lg:w-auto">
            <div className="relative h-full min-h-[400px] lg:min-h-[300px]">
              <img
                src="https://ynpbpharm.in/assets/img/gallery/gallery-2.jpg"
                alt="Consultation call at YNP College Pharmacy"
                className="w-[500px] h-[600px] object-cover lg:rounded-3xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
