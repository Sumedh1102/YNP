import React from 'react';
import { Twitter, Facebook, Instagram } from 'lucide-react';

const DPharmFacultySection = () => {
  const facultyMembers = [
    {
      id: 1,
      name: 'Dr. Sanket Dharashivkar',
      role: 'Principal',
      qualification: 'PhD, Master’s in Pharmacy',
      image: '',
    },
    {
      id: 2,
      name: 'Mr. Shailesh Ram Kokani',
      role: 'Head of Department',
      qualification: 'Master’s in Pharmacy',
      image: '',
    },
    {
      id: 3,
      name: 'Miss. Snevika Vikram Dhodi',
      role: 'Lecturer',
      qualification: 'Bachelor’s in Pharmacy',
      image: '',
    },
    {
      id: 4,
      name: 'Miss. Anjali Bansh Gopal Singh',
      role: 'Lecturer',
      qualification: 'Bachelor’s in Pharmacy',
      image: '',
    },
    {
      id: 5,
      name: 'Miss. Priyanka Rajendra Wadile',
      role: 'Lecturer',
      qualification: 'Bachelor’s in Pharmacy',
      image: '',
    },
    {
      id: 6,
      name: 'Mr. Yash Suresh Patil',
      role: 'Lecturer',
      qualification: 'Bachelor’s in Pharmacy',
      image: '',
    },
    {
      id: 7,
      name: 'Miss. Tanvi Ishwarlal Ambire',
      role: 'Lecturer',
      qualification: 'Bachelor’s in Pharmacy',
      image: '',
    },
    {
      id: 8,
      name: 'Miss. Samali Suhas Raut',
      role: 'Assistant Professor',
      qualification: 'Master’s in Pharmacy',
      image: '',
    },
  ];

  return (
    <div className="bg-white min-h-screen py-16">
      <div className="max-w-8xl mx-auto px-6 md:px-20">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-6xl font-normal text-gray-900">
            D.Pharmacy Faculty Team
          </h1>
          <p className="text-gray-600 mt-3 text-lg max-w-2xl mx-auto">
            Meet our dedicated faculty members guiding the Diploma in Pharmacy program at YNP College of Pharmacy. 
          </p>
        </div>

        {/* Faculty Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {facultyMembers.map((faculty) => (
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
                <h3 className="text-lg font-semibold text-gray-900">
                  {faculty.name}
                </h3>
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

export default DPharmFacultySection;
