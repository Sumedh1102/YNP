import React from 'react';
import { Twitter, Facebook, Instagram } from 'lucide-react';

const DPharmFacultySection = () => {
  const facultyMembers = [
    {
      id: 1,
      name: 'Dr. Sanket Dharashivkar',
      role: 'Principal',
      qualification: 'PhD, Master’s in Pharmacy',
      image: 'https://i.postimg.cc/rmTqM2xV/Screenshot-2025-10-24-at-3-03-18-PM-Photoroom.png',
    },
    {
      id: 2,
      name: 'Mr. Shailesh Ram Kokani',
      role: 'Head of Department',
      qualification: 'Master’s in Pharmacy',
      image: 'https://i.postimg.cc/1t1DSXvQ/Screenshot-2025-10-24-at-3-07-12-PM-Photoroom.png',
    },
    {
      id: 3,
      name: 'Miss. Samali Suhas Raut',
      role: 'Assistant Professor',
      qualification: 'Master’s in Pharmacy',
      image: 'https://i.postimg.cc/cJmJbJtc/Screenshot-2025-10-24-at-2-55-49-PM-Photoroom.png',
    },
    {
      id: 8,
      name: 'Miss. Tanvi Ishwarlal Ambhire',
      role: 'Assistant Professor',
      qualification: 'Master’s in Pharmacy',
      image: '/faculty/tanvi-ambhire.jpg',
    },
    {
      id: 4,
      name: 'Miss. Snevika Vikram Dhodi',
      role: 'Lecturer',
      qualification: 'Bachelor’s in Pharmacy',
      image: 'https://i.postimg.cc/rpsqpNY4/Screenshot-2025-10-24-at-3-11-11-PM-Photoroom.png',
    },
    {
      id: 9,
      name: 'Miss. Priyanshi Tiwari',
      role: 'Lecturer',
      qualification: 'Bachelor\'s in Pharmacy',
      image: 'https://i.postimg.cc/SxJvTKbH/image.png',
    },
    {
      id: 10,
      name: 'Miss. Akanksha Patil',
      role: 'Lecturer',
      qualification: 'Bachelor\'s in Pharmacy',
      image: 'https://i.postimg.cc/JnmKLrvf/image.png',
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
                  className="w-full h-96 object-cover rounded-3xl bg-gray-200"
                />
              </div>

              {/* Faculty Info */}
              <div className="p-6 bg-gray-100 rounded-3xl text-center mt-3">
                <h3 className="text-lg font-semibold text-gray-900">
                  {faculty.name}
                </h3>
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

export default DPharmFacultySection;
