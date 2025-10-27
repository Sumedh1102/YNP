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
    image: 'https://i.postimg.cc/rmTqM2xV/Screenshot-2025-10-24-at-3-03-18-PM-Photoroom.png'
  },

  // 👨‍🏫 Associate Professors
  {
    id: 2,
    name: 'Mr. Jidnesh Bhuvaneshwar Dharmameher',
    role: 'Associate Professor',
    qualification: 'Master’s in Pharmacy',
    image: 'https://i.postimg.cc/rFD26w3F/Screenshot-2025-10-24-at-3-04-09-PM-Photoroom.png'
  },
  {
    id: 3,
    name: 'Mr. Surendra Bhuraram Choudhary',
    role: 'Associate Professor',
    qualification: 'Master’s in Pharmacy',
    image: 'https://i.postimg.cc/0Qjc6bpr/Screenshot-2025-10-24-at-3-04-54-PM-Photoroom.png'
  },
  {
    id: 4,
    name: 'Mr. Shailesh Ram Kokani',
    role: 'Associate Professor',
    qualification: 'Master’s in Pharmacy',
    image: 'https://i.postimg.cc/1t1DSXvQ/Screenshot-2025-10-24-at-3-07-12-PM-Photoroom.png'
  },
  {
    id: 5,
    name: 'Mr. Mahesh Mohan Dharashivkar',
    role: 'Associate Professor',
    qualification: 'Master’s in Pharmacy',
    image: 'https://i.postimg.cc/sD8DDH7Q/Screenshot-2025-10-27-at-10-32-03-AM-Photoroom.png'
  },

  // 👩‍🔬 Assistant Professors
  {
    id: 6,
    name: 'Mr. Rohidas Ramesh Khanjode',
    role: 'Assistant Professor',
    qualification: 'Master’s in Pharmacy',
    image: 'https://i.postimg.cc/PrQ3RsrP/Screenshot-2025-10-24-at-3-05-56-PM-Photoroom.png'
  },
  {
    id: 7,
    name: 'Miss Samali Suhas Raut',
    role: 'Assistant Professor',
    qualification: 'Master’s in Pharmacy',
    image: 'https://i.postimg.cc/cJmJbJtc/Screenshot-2025-10-24-at-2-55-49-PM-Photoroom.png'
  },
  {
    id: 8,
    name: 'Miss Pranita Prabhakar Patil',
    role: 'Assistant Professor',
    qualification: 'Master’s in Pharmacy',
    image: 'https://i.postimg.cc/rsqNLsfL/Screenshot-2025-10-24-at-2-54-33-PM-Photoroom.png'
  },
  {
    id: 9,
    name: 'Mr. Prathamesh Ravindra Thakare',
    role: 'Assistant Professor',
    qualification: 'Master’s in Pharmacy',
    image: 'https://i.postimg.cc/DwPpJVbB/Screenshot-2025-10-24-at-2-48-55-PM-Photoroom.png'
  },
  {
    id: 10,
    name: 'Miss Gauri Vijay Patil',
    role: 'Assistant Professor',
    qualification: 'Master’s in Pharmacy',
    image: 'https://i.postimg.cc/zvwKtNNc/Screenshot-2025-10-24-at-2-49-49-PM-Photoroom.png'
  },
  {
    id: 11,
    name: 'Miss Srushti Shankar Gode',
    role: 'Assistant Professor',
    qualification: 'Master’s in Pharmacy',
    image: 'https://i.postimg.cc/yxNs5XCd/Screenshot-2025-10-24-at-2-51-00-PM-Photoroom.png'
  },
  {
    id: 12,
    name: 'Miss Neha Satish Gosalkar',
    role: 'Assistant Professor',
    qualification: 'Master’s in Pharmacy',
    image: 'https://i.postimg.cc/G3ZbzDgf/Screenshot-2025-10-24-at-2-51-54-PM-Photoroom.png'
  },
  {
    id: 13,
    name: 'Miss Aarti Ashok Chaugle',
    role: 'Assistant Professor',
    qualification: 'Master’s in Pharmacy',
    image: 'https://i.postimg.cc/FzjF0svd/Screenshot-2025-10-24-at-2-56-59-PM-Photoroom.png'
  },
  {
    id: 14,
    name: 'Mr. Kunal Kishor Pawar',
    role: 'Assistant Professor',
    qualification: 'Master’s in Pharmacy',
    image: 'https://i.postimg.cc/8CsYqKjY/Screenshot-2025-10-24-at-2-53-04-PM-Photoroom.png'
  },
  {
    id: 15,
    name: 'Mr. Rishikesh Kamlesh Jaiswal',
    role: 'Assistant Professor',
    qualification: 'Master’s in Pharmacy',
    image: 'https://i.postimg.cc/2SMqM82h/Screenshot-2025-10-27-at-10-28-56-AM-Photoroom.png'
  },
  {
    id: 16,
    name: 'Mr. Prithviraj Santosh Bhakde',
    role: 'Assistant Professor',
    qualification: 'Master’s in Pharmacy',
    image: 'https://i.postimg.cc/mZjPRSmk/Screenshot-2025-10-27-at-10-30-02-AM-Photoroom.png'
  },
  {
    id: 17,
    name: 'Mrs. Dhanashri Rajkumar Kadam',
    role: 'Assistant Professor',
    qualification: 'Master’s in Pharmacy',
    image: 'https://i.postimg.cc/5t8tr5HX/Screenshot-2025-10-27-at-10-30-50-AM-Photoroom.png'
  },
  {
    id: 18,
    name: 'Dr. Tushar Bendga',
    role: 'Assistant Professor',
    qualification: 'Pharm D',
    image: 'https://i.postimg.cc/fyyDMYbS/Screenshot-2025-10-27-at-10-32-49-AM-Photoroom.png'
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
                  className="w-full h-96 object-cover object-center rounded-3xl bg-gray-200"
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
