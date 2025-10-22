import React, { useEffect, useRef, useState } from 'react';

const AppointmentCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-fit bg-gray-50 flex items-center justify-center p-4">
      <div
        ref={sectionRef}
        className={`w-full max-w-6xl my-20 bg-white rounded-3xl overflow-hidden transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="flex flex-col md:flex-row">
          {/* Left Image Section */}
          <div className="w-full md:w-1/2">
            <img
              src="https://ynpbpharm.in/assets/img/gallery/gallery-3.jpg"
              alt="YNP College Faculty Consultation"
              className="w-full h-full object-cover rounded-t-xl md:rounded-l-xl md:rounded-tr-none"
            />
          </div>

          {/* Right Content Section */}
          <div className="w-full md:w-1/2 bg-blue-600 relative overflow-hidden rounded-b-xl md:rounded-r-xl md:rounded-bl-none">
            {/* Watermark Icon */}
            <div className="absolute bottom-0 right-0 opacity-10 pointer-events-none">
              <svg
                className="w-64 h-64 md:w-80 md:h-80"
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 40 L100 160 M40 100 L160 100"
                  stroke="white"
                  strokeWidth="20"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-start justify-center h-full p-10 md:p-12 lg:p-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight mb-8">
                Contact us for any enquiries
                <br />
                about YNP College Pharmacy.
              </h2>

              <button className="bg-white text-black px-8 py-3 rounded-full font-medium text-base md:text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95">
                Contact Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentCTA;
