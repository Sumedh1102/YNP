import React, { useState } from 'react';
import { Twitter, Facebook, Instagram } from 'lucide-react';

const PharmacyFacultySection = () => {
  const [activeFilter, setActiveFilter] = useState('All Departments');

  const departments = [
    'All Departments',
    'Pharmaceutics',
    'Pharmacology',
    'Pharmacognosy',
    'Pharmaceutical Chemistry'
  ];

  const facultyMembers = [
    {
      id: 1,
      name: 'Dr. Sneha Patil',
      role: 'Head of Pharmaceutics Department',
      department: 'Pharmaceutics',
      image: ''
    },
    {
      id: 2,
      name: 'Dr. Rahul Deshmukh',
      role: 'Lecturer - Pharmacology',
      department: 'Pharmacology',
      image: ''
    },
    {
      id: 3,
      name: 'Ms. Priya Jadhav',
      role: 'Assistant Professor - Pharmacognosy',
      department: 'Pharmacognosy',
      image: ''
    },
    {
      id: 4,
      name: 'Dr. Amit Sawant',
      role: 'Senior Lecturer - Pharmaceutical Chemistry',
      department: 'Pharmaceutical Chemistry',
      image: ''
    },
    {
      id: 5,
      name: 'Ms. Pooja Naik',
      role: 'Lecturer - Pharmaceutics',
      department: 'Pharmaceutics',
      image: ''
    },
    {
      id: 6,
      name: 'Ms. Pooja Naik',
      role: 'Lecturer - Pharmaceutics',
      department: 'Pharmaceutics',
      image: ''
    },
    {
      id: 7,
      name: 'Ms. Pooja Naik',
      role: 'Lecturer - Pharmaceutics',
      department: 'Pharmaceutics',
      image: ''
    },
    {
      id: 8,
      name: 'Ms. Pooja Naik',
      role: 'Lecturer - Pharmaceutics',
      department: 'Pharmaceutics',
      image: ''
    }
  ];

  const filteredFaculty = activeFilter === 'All Departments'
    ? facultyMembers
    : facultyMembers.filter(faculty => faculty.department === activeFilter);

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
              {/* Faculty Image - left blank to add actual images */}
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
