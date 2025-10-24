import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function MedicalServicesGrid() {
  const services = [
    {
      id: 1,
      title: 'Diploma in Pharmacy (D.Pharm)',
      image: 'https://ynpbpharm.in/assets/img/programs/dpharm.jpg',
      hasIcon: true,
      link: '/academics/dpharm-syllabus'  // 👈 route path
    },
    {
      id: 2,
      title: 'Bachelor of Pharmacy (B.Pharm)',
      image: 'https://ynpbpharm.in/assets/img/programs/bpharm.jpg',
      hasIcon: true,
      link: '/academics/bpharm-syllabus'
    },
    {
      id: 3,
      title: 'State of the art Laboratories',
      image: 'https://i.postimg.cc/FKVSF7j6/image.png',
      hasIcon: false,
      link: '/facilities'
    },
    {
      id: 4,
      title: 'Experienced Faculty',
      image: 'https://i.postimg.cc/ncQJNL9g/Whats-App-Image-2025-10-24-at-2-30-45-PM.jpg',
      hasIcon: false,
      link: '/bpharm-faculty'
    },
    {
      id: 5,
      title: 'Workshops & Internships',
      image: 'https://i.postimg.cc/yNr2pXdW/image.png',
      hasIcon: false,
      link: '/studentlife'
    }
  ];

  return (
    <div className="min-h-fit bg-white p-8">
      <div className="max-w-7xl mx-auto">

        {/* Center Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-normal text-gray-900 leading-snug">
            Comprehensive programs and facilities
            <br />
            <span className="text-blue-600">for aspiring pharmacists</span>
          </h2>
        </div>

        {/* First row - 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {services.slice(0, 2).map((service) => (
            <Link
              key={service.id}
              to={service.link}
              className="overflow-hidden bg-white group cursor-pointer transition-transform duration-300 block"
            >
              {/* Content Section */}
              <div className="p-6 flex mt-2 rounded-3xl bg-gray-200 items-center justify-between 
                              transition-all duration-300 group-hover:bg-blue-100">
                <h3 className="text-xl font-medium text-gray-900 transition-colors duration-300 group-hover:text-blue-500">
                  {service.title}
                </h3>

                {service.hasIcon && (
                  <div className="flex-shrink-0 w-10 h-10 rounded-full border-2 border-blue-500 
                                  flex items-center justify-center transition-all duration-300 
                                  group-hover:bg-blue-500 group-hover:rotate-45">
                    <ArrowUpRight className="w-5 h-5 text-blue-500 transition-colors duration-300 group-hover:text-white" />
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>

        {/* Second row - 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.slice(2).map((service) => (
            <Link
              key={service.id}
              to={service.link}
              className="rounded-3xl overflow-hidden bg-white group cursor-pointer transition-transform duration-300 block"
            >
              {/* Image Section */}
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover rounded-3xl transition-transform duration-300"
                />
              </div>

              {/* Content Section */}
              <div className="p-6 mt-2 rounded-3xl bg-gray-200 flex items-center justify-between 
                              transition-all duration-300 group hover:bg-blue-100 hover:shadow-md">
                <h3 className="text-xl font-medium text-gray-900 transition-colors duration-300 group-hover:text-blue-500">
                  {service.title}
                </h3>

                <div className="flex-shrink-0 w-10 h-10 rounded-full border-2 border-blue-500 
                                flex items-center justify-center transition-all duration-300 
                                group-hover:bg-blue-500 group-hover:rotate-45">
                  <ArrowUpRight className="w-5 h-5 text-blue-500 transition-colors duration-300 group-hover:text-white" />
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}
