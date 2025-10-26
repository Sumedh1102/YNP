import React from 'react';
import { Twitter, Facebook, Instagram } from 'lucide-react';

const NonTeachingStaffSection = () => {
  const staffMembers = [
  {
    id: 6,
    name: 'Mr. Ashish Patil',
    role: 'Office Superintendent',
    qualification: 'B.Sc',
    image: 'https://i.postimg.cc/W3grbVqK/Screenshot-2025-10-26-at-10-13-33-AM.png'
  },
  {
    id: 8,
    name: 'Ms. Pooja Machhi',
    role: 'Accountant',
    qualification: 'B.Com',
    image: 'https://i.postimg.cc/N0r2ptDj/Screenshot-2025-10-26-at-10-14-50-AM.png'
  },
  {
    id: 7,
    name: 'Ms. Samruddhi Bhoir',
    role: 'Senior Clerk',
    qualification: 'M.Com',
    image: 'https://i.postimg.cc/661w5Ztp/Screenshot-2025-10-26-at-10-19-13-AM.png'
  },
  {
    id: 9,
    name: 'Ms. Riya Kore',
    role: 'Jr. Clerk',
    qualification: 'B.Com',
    image: 'https://i.postimg.cc/WpKLPPw3/Screenshot-2025-10-26-at-10-20-20-AM.png'
  },
  {
    id: 5,
    name: 'Mrs. Sunita Machhi',
    role: 'Librarian',
    qualification: 'M.Lib',
    image: 'https://i.postimg.cc/0N6DFDkb/Screenshot-2025-10-26-at-10-13-12-AM.png'
  },
  {
    id: 2,
    name: 'Mr. Vivek Medha',
    role: 'Store Keeper',
    qualification: 'B.Sc. Chemistry, B.Ed',
    image: 'https://i.postimg.cc/RF6d7262/Screenshot-2025-10-26-at-10-11-25-AM.png'
  },
  {
    id: 1,
    name: 'Mr. Kanchan Chambre',
    role: 'Lab Assistant',
    qualification: 'B.Sc. Chemistry',
    image: 'https://i.postimg.cc/QCcqP5qb/Screenshot-2025-10-26-at-10-11-56-AM.png'
  },
  {
    id: 3,
    name: 'Mr. Rajesh Dhadapa',
    role: 'Lab Assistant',
    qualification: 'B.Sc. Chemistry',
    image: 'https://i.postimg.cc/VkKW3zjs/Screenshot-2025-10-26-at-10-12-17-AM.png'
  },
  {
    id: 4,
    name: 'Mr. Hitesh Patil',
    role: 'Lab Attendant',
    qualification: 'B.Sc. Chemistry',
    image: 'https://i.postimg.cc/gkdyjxD4/Screenshot-2025-10-26-at-10-12-39-AM.png'
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
                  src={staff.image || 'https://via.placeholder.com/300x300.png?text=Staff+Image'}
                  alt={staff.name}
                  className="w-full h-96 object-top object-cover rounded-3xl bg-gray-200"
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
