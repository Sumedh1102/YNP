import React from 'react';
import { Download } from 'lucide-react';

const StatutoryBodies = () => {
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


  return (
    <div className="bg-white py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 tracking-tight">
            Statutory Bodies
          </h1>
          <p className="text-gray-600 mt-3 text-lg max-w-2xl mx-auto">
            Our institution maintains transparency and governance through various statutory committees.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {committees.map((committee) => (
            <div
              key={committee.id}
              className="flex flex-col bg-gray-50 rounded-3xl p-8 justify-between shadow-sm hover:shadow-md transition-all"
            >
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

export default StatutoryBodies;
