import React from 'react';
import { Download } from 'lucide-react';

const StatutoryBodies = () => {
 const governingBody = [
  { id: 1, name: "Mr. Milind Patil", details: "Chairman, V.M. Patil Krushi Pratishthan, Asangaon", designation: "Chairman" },
  { id: 2, name: "Mr. Vikas Patil", details: "Vice-Chairman, V.M. Patil Krushi Pratishthan, Asangaon", designation: "Member" },
  { id: 3, name: "Mr. Lumesh Desai", details: "Director, Finance Department, V.M. Patil Krushi Pratishthan, Asangaon", designation: "Member" },
  { id: 4, name: "Mr. Vilas Raut", details: "Secretary, V.M. Patil Krushi Pratishthan, Asangaon", designation: "Member" },
  { id: 5, name: "Ms. Trupti Patil", details: "CEO, V.M. Patil Krushi Pratishthan, Asangaon", designation: "Member" },
  { id: 6, name: "Dr. Priyanka Patil", details: "Dean and Director, Sigma Institute of Pharmacy, Vadodara", designation: "Educational Expert" },
  { id: 7, name: "Mr. Vikas Vilasrao Patil", details: "Senior Manager, Prosfora Technologies R&D Centre, Pawane MIDC, Navi Mumbai", designation: "Industry Expert" },
  { id: 8, name: "Mr. Sailesh Kokani", details: "Assistant Professor, YNP College of Pharmacy, Asangaon", designation: "Subject Expert - Member" },
  { id: 9, name: "Dr. Sanket Dharashivkar", details: "Principal, YNP College of Pharmacy, Asangaon", designation: "Member Secretary" }
];

 const committees = [
  {
    id: 1,
    name: "Anti-Ragging Committee",
    description: "Ensures the campus is free from ragging and enforces anti-ragging policies.",
    pdfLink: "/docs/committees/anti-ragging-committee.pdf"
  },
  {
    id: 2,
    name: "Grievance Redressal Committee",
    description: "Addresses student grievances and ensures a fair and transparent resolution process.",
    pdfLink: "/docs/committees/grievance-redressal-committee.pdf"
  },
  {
    id: 3,
    name: "Entrepreneurship Development Committee",
    description: "Encourages innovation and entrepreneurship among students through various initiatives.",
    pdfLink: "/docs/committees/entrepreneurship-development-committee.pdf"
  },
  {
    id: 4,
    name: "SC/ST Committee",
    description: "Promotes welfare and support for SC/ST students in academic and campus activities.",
    pdfLink: "/docs/committees/sc-st-committee.pdf"
  },
  {
    id: 5,
    name: "Training & Placement Cell",
    description: "Facilitates career guidance, internships, and job placement opportunities for students.",
    pdfLink: "/docs/committees/training-placement-cell.pdf"
  },
  {
    id: 6,
    name: "Women Development Cell",
    description: "Empowers women students and staff through awareness programs and leadership training.",
    pdfLink: "/docs/committees/women-development-cell.pdf"
  },
  {
    id: 7,
    name: "Anti-Harassment Committee",
    description: "Prevents sexual harassment and provides a confidential mechanism for students and staff to report complaints.",
    pdfLink: "/docs/committees/anti-harassment-committee.pdf"
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
          <p className="text-gray-500 mt-1">Academic Year 2026-27</p>
        </div>

        {/* Governing Body */}
        <div className="bg-gray-50 rounded-3xl p-6 md:p-10 mb-12 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
            <div className="max-w-3xl">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">Governing Body</h2>
              <p className="text-gray-500 mt-3">
                The Governing Body is a statutory committee which monitors the academic administration at the institute.
                It meets once a year, makes recommendations for improving the standard and quality of teaching, determines
                the program of instructions and internal evaluation, and reviews the progress of studies in the college.
              </p>
            </div>
            <a
              href="/docs/committees/governing-body.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition w-fit flex-shrink-0"
            >
              <Download className="w-5 h-5" /> Download
            </a>
          </div>

          <div className="divide-y divide-gray-200 border-y border-gray-200">
            {governingBody.map((member) => (
              <div key={member.id} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-6 py-4">
                <span className="hidden sm:block w-6 text-gray-400">{member.id}.</span>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-gray-500 text-sm">{member.details}</p>
                </div>
                <p className="text-blue-600 font-medium sm:text-right sm:w-56">{member.designation}</p>
              </div>
            ))}
          </div>
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
