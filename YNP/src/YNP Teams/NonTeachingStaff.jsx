import React, { useState } from 'react';
import { Twitter, Facebook, Instagram } from 'lucide-react';

const NonTeachingStaffSection = () => {
  const [activeFilter, setActiveFilter] = useState('All Departments');

  const departments = [
    'All Departments',
    'Administration',
    'Library',
    'Laboratory',
    'Support Staff'
  ];

  const staffMembers = [
    {
      id: 1,
      name: 'Mr. Rajesh Patil',
      role: 'Administrator - Main Office',
      department: 'Administration',
      image: ''
    },
    {
      id: 2,
      name: 'Ms. Meena Deshmukh',
      role: 'Librarian',
      department: 'Library',
      image: ''
    },
    {
      id: 3,
      name: 'Mr. Sanjay Jadhav',
      role: 'Lab Technician',
      department: 'Laboratory',
      image: ''
    },
    {
      id: 4,
      name: 'Ms. Kavita Sawant',
      role: 'Support Staff',
      department: 'Support Staff',
      image: ''
    },
    {
      id: 5,
      name: 'Mr. Anil Naik',
      role: 'Office Assistant - Administration',
      department: 'Administration',
      image: ''
    },
    {
      id: 6,
      name: 'Ms. Priya Raut',
      role: 'Library Assistant',
      department: 'Library',
      image: ''
    },
    {
      id: 7,
      name: 'Mr. Vinod Sharma',
      role: 'Lab Attendant',
      department: 'Laboratory',
      image: ''
    },
    {
      id: 8,
      name: 'Ms. Sunita Patil',
      role: 'Support Staff',
      department: 'Support Staff',
      image: ''
    }
  ];

  const filteredStaff = activeFilter === 'All Departments'
    ? staffMembers
    : staffMembers.filter(staff => staff.department === activeFilter);

  return (
    <div className="bg-white min-h-screen py-16">
      <div className="max-w-8xl mx-auto px-6 md:px-20">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-6xl font-normal text-gray-900">
            Meet Our Non-Teaching Staff
          </h1>
          <p className="text-gray-600 mt-2 text-lg">
            Dedicated non-teaching staff ensuring smooth functioning and support for our pharmacy program.
          </p>
        </div>
        {/* Staff Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredStaff.map(staff => (
            <div
              key={staff.id}
              className="bg-white overflow-hidden transition-all duration-300"
            >
              {/* Staff Image - left blank to add actual images */}
              <div className="relative">
                <img
                  src={staff.image}
                  alt={staff.name}
                  className="w-full h-72 object-cover rounded-3xl bg-gray-200"
                />
              </div>

              {/* Staff Info */}
              <div className="p-6 bg-gray-100 rounded-3xl text-center mt-3">
                <h3 className="text-lg font-semibold text-gray-900">{staff.name}</h3>
                <p className="text-gray-600 text-sm mt-1">{staff.role}</p>

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

export default NonTeachingStaffSection;
