import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Download } from 'lucide-react';

const CommitteesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const committees = [
  {
    id: 1,
    name: "Anti-Ragging Committee",
    description: "Ensures the campus is free from ragging and enforces anti-ragging policies.",
    pdfLink: "https://i.postimg.cc/VvdHnrv9/Anti-Ragging-Committee-1.jpg",
    image: "https://i.postimg.cc/VvdHnrv9/Anti-Ragging-Committee-1.jpg"
  },
  {
    id: 2,
    name: "Grievance & Redressal Committee",
    description: "Addresses student grievances and ensures a fair and transparent resolution process.",
    pdfLink: "https://i.postimg.cc/sgSqThcn/Grievance-Redressal-Committee-1.jpg",
    image: "https://i.postimg.cc/sgSqThcn/Grievance-Redressal-Committee-1.jpg"
  },
  {
    id: 3,
    name: "Entrepreneurship Development Committee",
    description: "Encourages innovation and entrepreneurship among students through various initiatives.",
    pdfLink: "https://i.postimg.cc/sxXbmH69/Minutes-of-Entrepreneurship-Development-Committee-1.jpg",
    image: "https://i.postimg.cc/sxXbmH69/Minutes-of-Entrepreneurship-Development-Committee-1.jpg"
  },
  {
    id: 4,
    name: "SC/ST Committee",
    description: "Promotes welfare and support for SC/ST students in academic and campus activities.",
    pdfLink: "https://i.postimg.cc/43vCx9Hg/SC-ST-Committee-1.jpg",
    image: "https://i.postimg.cc/43vCx9Hg/SC-ST-Committee-1.jpg"
  },
  {
    id: 5,
    name: "Training & Placement Cell",
    description: "Facilitates career guidance, internships, and job placement opportunities for students.",
    pdfLink: "https://i.postimg.cc/bNdj9rWH/Training-Placement-Cell-1.jpg",
    image: "https://i.postimg.cc/bNdj9rWH/Training-Placement-Cell-1.jpg"
  },
  {
    id: 6,
    name: "Women Development Cell",
    description: "Empowers women students and staff through awareness programs and leadership training.",
    pdfLink: "https://i.postimg.cc/LsjSgW7Q/Women-Development-Cell-2.jpg",
    image: "https://i.postimg.cc/LsjSgW7Q/Women-Development-Cell-2.jpg"
  }
];

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? committees.length - 3 : prev - 3));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= committees.length - 3 ? 0 : prev + 3));
  };

  const visibleCommittees = committees.slice(currentIndex, currentIndex + 3);

  return (
    <div className="bg-white py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex items-start justify-between mb-12">
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight tracking-tight max-w-2xl">
            YNP College Committees & Policies
          </h1>
          
          {/* Navigation Arrows */}
          <div className="flex gap-3 flex-shrink-0">
            <button
              onClick={handlePrevious}
              className="border border-gray-300 p-3 rounded-full hover:bg-gray-100 transition"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </button>
            <button
              onClick={handleNext}
              className="border border-gray-300 p-3 rounded-full hover:bg-gray-100 transition"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5 text-gray-700" />
            </button>
          </div>
        </div>

        {/* Cards Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {visibleCommittees.map((committee) => (
            <div key={committee.id} className="flex flex-col bg-gray-50 rounded-3xl p-8 justify-between transition-all">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">{committee.name}</h3>
                <p className="text-gray-500 mt-3">{committee.description}</p>
              </div>
              <a
                href={committee.pdfLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition mt-6 w-fit"
              >
                <Download className="w-5 h-5" /> Download
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommitteesCarousel;
