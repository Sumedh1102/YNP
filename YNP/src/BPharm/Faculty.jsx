import React, { useState } from 'react';
import { Twitter, Facebook, Instagram } from 'lucide-react';

const PharmacyFacultySection = () => {
  const [activeFilter, setActiveFilter] = useState('All Faculty');

  const departments = ['All Faculty'];

  const facultyMembers = [
    {
      id: 1,
      name: 'Dr. Sanket Dharashivkar',
      role: 'Principal',
      qualification: 'PhD, Master’s in Pharmacy',
      image: ''
    },
    {
      id: 2,
      name: 'Mr. Jidnesh Bhuvaneshwar Dharmameher',
      role: 'Assistant Professor',
      qualification: 'Master’s in Pharmacy',
      image: ''
    },
    {
      id: 3,
      name: 'Mr. Surendra Bhuraram Choudhary',
      role: 'Assistant Professor',
      qualification: 'Master’s in Pharmacy',
      image: ''
    },
    {
      id: 4,
      name: 'Mr. Rohidas Ramesh Khanjode',
      role: 'Assistant Professor',
      qualification: 'Master’s in Pharmacy',
      image: ''
    },
    {
      id: 5,
      name: 'Mr. Shailesh Ram Kokani',
      role: 'Assistant Professor',
      qualification: 'Master’s in Pharmacy',
      image: ''
    },
    {
      id: 6,
      name: 'Miss Samali Suhas Raut',
      role: 'Assistant Professor',
      qualification: 'Master’s in Pharmacy',
      image: ''
    },
    {
      id: 7,
      name: 'Miss Pranita Prabhakar Patil',
      role: 'Assistant Professor',
      qualification: 'Master’s in Pharmacy',
      image: ''
    },
    {
      id: 8,
      name: 'Mr. Prathamesh Ravindra Thakare',
      role: 'Assistant Professor',
      qualification: 'Master’s in Pharmacy',
      image: ''
    },
    {
      id: 9,
      name: 'Miss Gauri Vijay Patil',
      role: 'Assistant Professor',
      qualification: 'Master’s in Pharmacy',
      image: ''
    },
    {
      id: 10,
      name: 'Miss Srushti Shankar Gode',
      role: 'Assistant Professor',
      qualification: 'Master’s in Pharmacy',
      image: ''
    },
    {
      id: 11,
      name: 'Miss Neha Satish Gosalkar',
      role: 'Assistant Professor',
      qualification: 'Master’s in Pharmacy',
      image: ''
    },
    {
      id: 12,
      name: 'Miss Aarti Ashok Chaugle',
      role: 'Assistant Professor',
      qualification: 'Master’s in Pharmacy',
      image: ''
    },
    {
      id: 13,
      name: 'Mr. Kunal Kishor Pawar',
      role: 'Assistant Professor',
      qualification: 'Master’s in Pharmacy',
      image: ''
    }
  ];

  const filteredFaculty =
    activeFilter === 'All Faculty'
      ? facultyMembers
      : facultyMembers.filter(faculty => faculty.qualification === activeFilter);

  return (
    <div className="bg-white min-h-screen py-16">
      <div className="max-w-8xl mx-auto px-6 md:px-20">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-6xl font-normal text-gray-900">
            Meet Our B.Pharmacy Faculty
          </h1>
          <p className="text-gray-600 mt-2 text-lg">
            Dedicated faculty members guiding comprehensive pharmaceutical education.
          </p>
        </div>
        {/* Faculty Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredFaculty.map(faculty => (
            <div
              key={faculty.id}
              className="bg-white overflow-hidden transition-all duration-300"
            >
              {/* Faculty Image */}
              <div className="relative">
                <img
                  src={faculty.image}
                  alt={faculty.name}
                  className="w-full h-72 object-cover rounded-3xl bg-gray-200"
                />
              </div>

              {/* Faculty Info */}
              <div className="p-6 bg-gray-100 rounded-3xl text-center mt-3">
                <h3 className="text-lg font-semibold text-gray-900">{faculty.name}</h3>
                <p className="text-gray-600 text-sm mt-1">{faculty.role}</p>
                <p className="text-gray-500 text-sm mt-1 italic">{faculty.qualification}</p>

                {/* Social Icons */}
                <div className="flex justify-center gap-3 mt-4">
                  <button className="w-9 h-9 flex items-center justify-center rounded-full bg-blue-500 text-white transition duration-300">
                    <Twitter size={16} />
                  </button>
                  <button className="w-9 h-9 flex items-center justify-center rounded-full bg-blue-500 text-white transition duration-300">
                    <Facebook size={16} />
                  </button>
                  <button className="w-9 h-9 flex items-center justify-center rounded-full bg-blue-500 text-white transition duration-300">
                    <Instagram size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PharmacyFacultySection;
