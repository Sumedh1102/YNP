import React, { useState, useEffect } from 'react';

const CounterAnimation = ({ target, suffix = '', duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const numericTarget = parseInt(target);
    const increment = numericTarget / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= numericTarget) {
        setCount(numericTarget);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target, duration]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

const YNPCollegeLanding = () => {
  return (
    <div className="min-h-fit py-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Left Column */}
          <div className="md:col-span-4 flex flex-col space-y-6">
            <div className="overflow-hidden rounded-3xl">
              <img
                src="https://ynpbpharm.in/assets/images/campus.jpg"
                alt="YNP College Campus"
                className="w-full h-64 object-cover transition-transform duration-300 bg-gray-100"
              />
            </div>
            <p className="text-gray-700 text-xl leading-relaxed tracking-tight">
              YNP College of Pharmacy, Asangaon, combines modern infrastructure, research-driven learning, and ethical pharmaceutical education. Students experience hands-on lab training, holistic mentorship, and industry-aligned exposure to develop into skilled pharmacists.
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium tracking-tight hover:bg-blue-700 transition-all duration-300 hover:shadow-lg hover:scale-105 w-fit">
              Contact for Enquiry
            </button>
          </div>

          {/* Center Column */}
          <div className="md:col-span-5 flex flex-col space-y-6">
            <div className="overflow-hidden rounded-3xl">
              <img
                src="https://ynpbpharm.in/assets/images/lab.jpg"
                alt="College Laboratory"
                className="w-full h-96 object-cover transition-transform duration-300 bg-gray-100"
              />
            </div>
            <div className="grid grid-cols-2 gap-8 pt-4">
              <div className="text-center">
                <div className="text-4xl font-normal text-blue-600 mb-2 tracking-tight">
                  <CounterAnimation target="100" suffix="+" />
                </div>
                <p className="text-black text-lg font-medium tracking-tight">
                  Experienced Faculty
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-normal text-blue-600 mb-2 tracking-tight">
                  <CounterAnimation target="500" suffix="+" />
                </div>
                <p className="text-black text-lg font-medium tracking-tight">
                  Students Trained
                </p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="md:col-span-3 flex flex-col">
            <div className="overflow-hidden rounded-3xl h-full">
              <img
                src="https://ynpbpharm.in/assets/images/students.jpg"
                alt="YNP College Students"
                className="w-full h-full min-h-96 object-cover object-center transition-transform duration-300 bg-gray-100"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YNPCollegeLanding;
