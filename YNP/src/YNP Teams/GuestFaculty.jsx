import React from 'react';

const GuestFacultySection = () => {
  const guestFaculty = [
    {
      id: 1,
      name: 'Ms. Shruti Patil',
      role: 'Guest Faculty',
      image: '/faculty/shruti-patil.jpg',
    },
  ];

  return (
    <div className="bg-white min-h-screen py-16">
      <div className="max-w-8xl mx-auto px-6 md:px-20">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-6xl font-normal text-gray-900">
            Meet Our Guest Faculty
          </h1>
          <p className="text-gray-600 mt-2 text-lg">
            Experienced guest faculty enriching our pharmacy program with industry expertise and academic excellence.
          </p>
        </div>

        {/* Faculty Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {guestFaculty.map(faculty => (
            <div
              key={faculty.id}
              className="bg-white overflow-hidden transition-all duration-300"
            >
              {/* Faculty Image */}
              <div className="relative">
                <img
                  src={faculty.image || '/images/ynp-logo.png'}
                  alt={faculty.name}
                  className={`w-full h-96 rounded-3xl bg-gray-200 ${faculty.image ? 'object-cover object-top' : 'object-contain p-12'}`}
                />
              </div>

              {/* Faculty Info */}
              <div className="p-6 bg-gray-100 rounded-3xl text-center mt-3">
                <h3 className="text-lg font-semibold text-gray-900">{faculty.name}</h3>
                <p className="text-gray-600 text-sm mt-1">{faculty.role}</p>
                <p className="text-gray-500 text-sm mt-1 italic">{faculty.qualification}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GuestFacultySection;
