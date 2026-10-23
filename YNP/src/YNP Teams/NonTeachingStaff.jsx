import React from 'react';
import { Twitter, Facebook, Instagram } from 'lucide-react';

const NonTeachingStaffSection = () => {
  const staffMembers = [
  {
    id: 6,
    name: 'Mr. Ashish Patil',
    role: 'Office Superintendent',
    qualification: 'B.Sc'
  },
  {
    id: 8,
    name: 'Ms. Pooja Machhi',
    role: 'Accountant',
    qualification: 'B.Com'
  },
  {
    id: 7,
    name: 'Ms. Samruddhi Bhoir',
    role: 'Senior Clerk',
    qualification: 'M.Com'
  },
  {
    id: 9,
    name: 'Ms. Riya Kore',
    role: 'Jr. Clerk',
    qualification: 'B.Com'
  },
  {
    id: 5,
    name: 'Mrs. Sunita Machhi',
    role: 'Librarian',
    qualification: 'M.Lib'
  },
  {
    id: 12,
    name: 'Mr. Manoj Ghulam',
    role: 'Librarian'
  },
  {
    id: 2,
    name: 'Mr. Vivek Medha',
    role: 'Store Keeper',
    qualification: 'B.Sc. Chemistry, B.Ed'
  },
  {
    id: 1,
    name: 'Mr. Kanchan Chambre',
    role: 'Lab Assistant',
    qualification: 'B.Sc. Chemistry'
  },
  {
    id: 3,
    name: 'Mr. Rajesh Dhadapa',
    role: 'Lab Assistant',
    qualification: 'B.Sc. Chemistry'
  },
  {
    id: 10,
    name: 'Ms. Neha Pagdhare',
    role: 'Lab Technician',
    qualification: 'DMLT'
  },
  {
    id: 11,
    name: 'Mr. Vikas Bhoye',
    role: 'Lab Assistant',
    qualification: 'B.Sc. Chemistry'
  },
  {
    id: 4,
    name: 'Mr. Hitesh Patil',
    role: 'Lab Attendant',
    qualification: 'B.Sc. Chemistry'
  }
];

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
          {staffMembers.map(staff => (
            <div
              key={staff.id}
              className="bg-white overflow-hidden transition-all duration-300"
            >
              {/* Staff Image */}
              <div className="relative">
                <img
                  src={staff.image || '/images/ynp-logo.png'}
                  alt={staff.name}
                  className={`w-full h-96 rounded-3xl bg-gray-200 ${staff.image ? 'object-top object-cover' : 'object-contain p-12'}`}
                />
              </div>

              {/* Staff Info */}
              <div className="p-6 bg-gray-100 rounded-3xl text-center mt-3">
                <h3 className="text-lg font-semibold text-gray-900">{staff.name}</h3>
                <p className="text-gray-600 text-sm mt-1">{staff.role}</p>
                <p className="text-blue-600 text-sm mt-2 font-medium">{staff.department}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NonTeachingStaffSection;
