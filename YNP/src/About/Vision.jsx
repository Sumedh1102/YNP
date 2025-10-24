import React from 'react';
import { Syringe, Award, Users, Handshake } from 'lucide-react';

export default function VisionValues() {
  const values = [
    {
      icon: Syringe,
      title: "Professional Integrity",
      description:
        "We uphold honesty, ethics, and accountability in all aspects of learning, research, and practice, inspiring trust and respect within the healthcare community.",
    },
    {
      icon: Award,
      title: "Academic Excellence",
      description:
        "We are committed to providing high-quality education that blends theoretical knowledge with practical experience, nurturing intellectual curiosity and professional growth.",
    },
    {
      icon: Users,
      title: "Leadership & Global Impact",
      description:
        "We strive to develop leaders who influence the global pharmaceutical and healthcare landscape through innovation, service, and continuous learning.",
    },
    {
      icon: Handshake,
      title: "Innovation & Collaboration",
      description:
        "Through partnerships with industry and academia, we promote scientific discovery, entrepreneurship, and collaborative solutions that advance modern healthcare.",
    },
  ];

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-6">
        {/* Top Section - Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start mb-16">
          {/* Left Column */}
          <div className="lg:col-span-2">
            <h1 className="text-4xl md:text-6xl font-normal text-gray-900 leading-tight tracking-tight">
              Our Vision & Core Values
            </h1>
            <p className="text-gray-600 text-lg mt-4 leading-relaxed">
              At YNP College of Pharmacy, we envision a future where education,
              research, and innovation come together to shape the next
              generation of pharmacy professionals. Our values guide students to
              lead with integrity, embrace innovation, and contribute to global
              healthcare advancements.
            </p>
          </div>

          {/* Right Column - Vision Card */}
          <div className="lg:col-span-3 bg-gray-100 rounded-3xl p-12">
            <h2 className="text-4xl font-semibold text-gray-900 mb-4">
              Our Vision
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our vision is to be a leader in pharmaceutical education,
              research, and innovation. We aim to cultivate academic excellence,
              professional integrity, and leadership in our students. Through
              modern teaching and industry collaboration, we strive to shape the
              future of healthcare and inspire lifelong learners dedicated to
              improving global wellness.
            </p>
          </div>
        </div>

        {/* Values Grid - Four Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-16">
          {values.map((value, index) => (
            <div
              key={index}
              className="group transition-transform duration-300 hover:scale-105"
            >
              <value.icon
                className="text-gray-700 w-12 h-12 mb-4 group-hover:text-blue-600 transition-colors duration-300"
                strokeWidth={1.5}
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {value.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
