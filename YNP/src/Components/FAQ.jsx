import React, { useState } from 'react';

const FAQSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "How can I apply for B.Pharm or D.Pharm programs?",
      answer: "You can apply online via the official YNP College of Pharmacy website or through the Maharashtra DTE portal. Admission follows the MHT-CET and DTE guidelines."
    },
    {
      id: 2,
      question: "Does YNP College offer internships and industry exposure?",
      answer: "Yes, students receive practical training through collaborations with pharmaceutical companies, hospitals, and research labs. Internships are integrated into both B.Pharm and D.Pharm curricula."
    },
    {
      id: 3,
      question: "What facilities are available on campus?",
      answer: "The college offers advanced laboratories, a central library, AI-enabled research labs, seminar halls, hostels, and community outreach centers to support holistic learning."
    },
  ];

  return (
    <section className="bg-white px-6 py-16 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <h2 className="text-2xl lg:text-5xl  font-normal leading-tight text-gray-900">
              Frequently Asked Questions about YNP College of Pharmacy
            </h2>
            
            {/* College Image */}
            <div className="overflow-hidden rounded-3xl">
              <img 
                src="https://ynpbpharm.in/assets/images/about-us.jpg" 
                alt="YNP College campus"
                className="w-full h-80 object-cover"
              />
            </div>
          </div>

          {/* Right Column - FAQ Cards */}
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                onMouseEnter={() => setHoveredCard(faq.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`bg-gray-100 rounded-2xl p-6 transition-all duration-300 cursor-pointer `}
              >
                <h3 className="font-normal text-2xl text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
