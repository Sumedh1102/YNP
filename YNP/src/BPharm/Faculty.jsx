import React, { useState } from 'react';
import { Twitter, Facebook, Instagram } from 'lucide-react';

const PharmacyFacultySection = () => {
  const [activeFilter, setActiveFilter] = useState('All Faculty');

  const departments = ['All Faculty'];

const facultyMembers = [
  // 👨‍💼 Principal
  {
    id: 1,
    name: 'Dr. Sanket Dharashivkar',
    role: 'Principal',
    qualification: 'PhD, Master’s in Pharmacy',
    image: '/faculty/sanket-dharashivkar.jpg'
  },

  // 👨‍🏫 Associate Professors
  {
    id: 4,
    name: 'Mr. Shailesh Ram Kokani',
    role: 'Associate Professor',
    qualification: 'Master’s in Pharmacy',
    image: '/faculty/shailesh-kokani.jpg'
  },
  {
    id: 5,
    name: 'Mr. Mahesh Mohan Dharashivkar',
    role: 'Associate Professor',
    qualification: 'Master’s in Pharmacy'
  },

  // 👩‍🔬 Assistant Professors
  {
    id: 6,
    name: 'Mr. Rohidas Ramesh Khanjode',
    role: 'Assistant Professor',
    qualification: 'Master’s in Pharmacy',
    image: '/faculty/rohidas-khanjode.jpg'
  },
  {
    id: 7,
    name: 'Miss Samali Suhas Raut',
    role: 'Assistant Professor',
    qualification: 'Master’s in Pharmacy',
    image: '/faculty/samali-raut.jpg'
  },
  {
    id: 9,
    name: 'Mr. Prathamesh Ravindra Thakare',
    role: 'Assistant Professor',
    qualification: 'Master’s in Pharmacy'
  },
  {
    id: 12,
    name: 'Miss Neha Satish Gosalkar',
    role: 'Assistant Professor',
    qualification: 'Master’s in Pharmacy',
    image: '/faculty/neha-gosalkar.jpg'
  },
  {
    id: 13,
    name: 'Miss Aarti Ashok Chaugle',
    role: 'Assistant Professor',
    qualification: 'Master’s in Pharmacy',
    image: '/faculty/aarti-chaugle.jpg'
  },
  {
    id: 14,
    name: 'Mr. Kunal Kishor Pawar',
    role: 'Assistant Professor',
    qualification: 'Master’s in Pharmacy'
  },
  {
    id: 15,
    name: 'Mr. Rishikesh Kamlesh Jaiswal',
    role: 'Assistant Professor',
    qualification: 'Master’s in Pharmacy'
  },
  {
    id: 16,
    name: 'Mr. Prithviraj Santosh Bhakde',
    role: 'Assistant Professor',
    qualification: 'Master’s in Pharmacy',
    image: '/faculty/prithviraj-bhakde.jpg'
  },
  {
    id: 17,
    name: 'Mrs. Dhanashri Rajkumar Kadam',
    role: 'Assistant Professor',
    qualification: 'Master’s in Pharmacy'
  },
  {
    id: 18,
    name: 'Dr. Tushar Bendga',
    role: 'Assistant Professor',
    qualification: 'Pharm D'
  },
  {
    id: 20,
    name: 'Mr. Avinash Gadhekar',
    role: 'Assistant Professor',
    qualification: 'Pharm D',
    image: '/faculty/avinash-gadhekar.jpg'
  },
  {
    id: 21,
    name: 'Mr. Sagar Raje',
    role: 'Assistant Professor',
    qualification: 'Master\u2019s in Pharmacy',
    image: '/faculty/sagar-raje.jpg'
  },
  {
    id: 22,
    name: 'Mr. Shubham Gadhire',
    role: 'Assistant Professor',
    qualification: 'Master\u2019s in Pharmacy',
    image: '/faculty/shubham-gadhire.jpg'
  },
  {
    id: 23,
    name: 'Ms. Krutisha Rane',
    role: 'Assistant Professor',
    qualification: 'Master\u2019s in Pharmacy',
    image: '/faculty/krutisha-rane.jpg'
  },
  {
    id: 24,
    name: 'Mr. Sudarshan Ahire',
    role: 'Assistant Professor',
    qualification: 'Master’s in Pharmacy'
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
                  src={faculty.image || '/images/ynp-logo.png'}
                  alt={faculty.name}
                  className={`w-full h-96 rounded-3xl bg-gray-200 ${faculty.image ? 'object-cover object-center' : 'object-contain p-12'}`}
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

export default PharmacyFacultySection;
