import React from 'react';
import { Phone, ArrowUpRight } from 'lucide-react';

export default function HealthcareSection() {
  const features = [
    {
      number: 1,
      title: "Comprehensive Curriculum",
      description: "YNP College offers well-structured D.Pharm and B.Pharm programs combining theory and practical training to prepare students for professional excellence."
    },
    {
      number: 2,
      title: "Experienced Faculty",
      description: "Our faculty members provide guidance, mentorship, and real-world insights to foster innovation, critical thinking, and ethical practice in pharmacy education."
    },
    {
      number: 3,
      title: "Advanced Laboratories & Research",
      description: "State-of-the-art laboratories and research facilities enable students to gain hands-on experience, conduct experiments, and participate in cutting-edge pharmaceutical research."
    }
  ];

  return (
    <div className="min-h-screen bg-white p-8 lg:p-16">
      <div className="max-w-7xl mx-auto">
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left Column - Features */}
          <div className='pt-12'>
            <h1 className="text-4xl lg:text-5xl font-normal text-gray-900 mb-12 leading-tight">
              Why Choose YNP College of Pharmacy
            </h1>
            <div className="bg-gray-100 rounded-3xl p-8 lg:p-12">
              <div className="space-y-10">
                {features.map((feature) => (
                  <div key={feature.number} className="flex gap-6">
                    {/* Number Circle */}
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center">
                        <span className="text-blue-600 font-bold text-2xl">{feature.number}</span>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 pt-1">
                      <h3 className="text-3xl font-normal text-gray-900 mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Image with Contact Card */}
          <div className="relative rounded-3xl overflow-hidden">
            {/* Background Image */}
            <div className="w-full h-[750px]">
              <img
                src="https://ynpbpharm.in/assets/img/gallery/gallery-6.jpg"
                alt="Students in laboratory"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Contact Card */}
            <div className="absolute bottom-8 left-8 right-8 bg-white rounded-3xl w-80 p-6">
              <h3 className="text-xl font-medium text-gray-900 mb-4 leading-snug">
                Have Questions? Call Us
              </h3>
              
              {/* Phone Number */}
              <div className="flex items-center gap-3 mb-4">
                <Phone className="w-5 h-5 text-gray-400" strokeWidth={1.5} />
                <span className="text-gray-700 font-medium">+91 12345 67890</span>
              </div>

              {/* Contact Button */}
              <button className="flex items-center gap-2 text-gray-900 font-medium hover:text-blue-600 transition-colors">
                <span>Contact Admissions</span>
                <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:border-blue-600 transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
