import React from 'react';

export default function HealthcareTimeline() {
  const timelineData = [
    {
      title: "Building a Strong Pharmaceutical Foundation",
      year: "Year 1",
      description:
        "Students dive into core subjects including Human Anatomy & Physiology, Pharmaceutical Chemistry, Communication Skills, and Pharmaceutics. This foundational year establishes scientific understanding essential for pharmacy practice.",
    },
    {
      title: "Hands-on Practical Training",
      year: "Year 2",
      description:
        "The curriculum includes Pharmaceutical Analysis, Organic Chemistry, and Physical Pharmaceutics supported by rigorous laboratory work, fostering expertise in drug formulation and quality control.",
    },
    {
      title: "Advanced Drug Knowledge and Therapeutics",
      year: "Year 3",
      description:
        "Focus areas expand to Medicinal Chemistry, Pharmacology, Pharmacognosy, and Biopharmaceutics. Students explore drug mechanisms, natural products, and dosage form design preparing for diverse pharmaceutical roles.",
    },
    {
      title: "Industrial Exposure and Clinical Practice",
      year: "Year 4",
      description:
        "Students engage in industrial pharmacy, pharmacy practice, novel drug delivery systems, and mandatory internships. This stage links theory with practical industry insights and patient care experience.",
    },
    {
      title: "Versatile Career Paths Post Graduation",
      year: "Post Graduation",
      description:
        "Graduates qualify for roles in healthcare, pharmaceutical industry, clinical research, regulatory affairs, marketing, and government services, benefiting from YNP’s industry ties and comprehensive training.",
    },
    {
      title: "Advanced Studies and Specializations",
      year: "Further Education",
      description:
        "Options include M.Pharm, Pharm.D, Ph.D., MBA in Pharmaceutical Management and Biotechnology, enabling academic, research, and leadership advancement in pharmaceutical sciences.",
    },
    {
      title: "Contributing to Healthcare Innovation",
      year: "Lifelong Impact",
      description:
        "YNP B.Pharm alumni contribute through drug development, public health initiatives, clinical service excellence, and pharmaceutical research, embodying the college’s ethos of innovation and ethical practice.",
    },
  ];

  return (
    <div className="min-h-fit bg-white">
      <div className="py-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <div className="sticky top-24 self-start">
            <h1 className="text-4xl md:text-5xl font-medium text-gray-900 tracking-tight leading-tight mb-6">
              The Journey of a B.Pharmacy Student at YNP College of Pharmacy
            </h1>
            <p className="text-gray-600 text-xl leading-relaxed">
              Our B.Pharm program integrates pharmaceutical science, technology, clinical skills, and ethics, preparing students for dynamic careers dedicated to advancing healthcare and improving patient outcomes.
            </p>
          </div>

          {/* Right Column - Timeline */}
          <div className="space-y-8">
            {timelineData.map((milestone, index) => (
              <div
                key={index}
                className="bg-gray-100 rounded-3xl p-14 transition-all duration-300 hover:shadow-md hover:scale-[1.01]"
              >
                <h2 className="text-3xl font-normal text-gray-800 mb-4">
                  {milestone.title} - ({milestone.year})
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {milestone.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
