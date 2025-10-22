import React from 'react';

export default function YNPTimeline() {
  const timelineData = [
    {
      title: "Institution Established",
      year: "2022",
      description:
        "YNP College of Pharmacy was established with a vision to become a dynamic and emerging institution committed to excellence in pharmaceutical education and research. Guided by innovation and service, the college set out to create a meaningful impact in the healthcare sector.",
    },
    {
      title: "Strong Academic Vision",
      year: "2022",
      description:
        "From its inception, YNP focused on equipping students with comprehensive knowledge, professional ethics, and practical skills to meet the evolving demands of the healthcare and pharmaceutical industries.",
    },
    {
      title: "Innovative Curriculum Development",
      year: "2023",
      description:
        "A modern curriculum was introduced—blending core pharmaceutical sciences with emerging domains such as clinical research, biotechnology, digital health, and regulatory affairs—ensuring students are both industry-ready and future-focused.",
    },
    {
      title: "Faculty Excellence",
      year: "2023",
      description:
        "Dedicated faculty members combined academic expertise with practical experience to create a learning environment that inspires inquiry, critical thinking, and innovation among students.",
    },
    {
      title: "Research & Hands-on Training",
      year: "2023",
      description:
        "YNP strengthened its research culture by offering hands-on learning opportunities. Students actively engaged in real-world projects and problem-solving initiatives aimed at improving healthcare outcomes.",
    },
    {
      title: "Community & Leadership Development",
      year: "2024",
      description:
        "Beyond academics, YNP promoted leadership, community engagement, and social responsibility through collaborations with industry and healthcare organizations, empowering students to explore diverse career paths.",
    },
    {
      title: "Path to the Future",
      year: "2025",
      description:
        "As YNP continues to grow, the institution remains dedicated to shaping the future of pharmacy education—driven by scholarship, innovation, and a commitment to serve society through impactful healthcare solutions.",
    },
  ];

  return (
    <div className="min-h-fit bg-white">
      <div className="py-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left Column - Sticky */}
          <div className="sticky top-24 self-start">
            <h1 className="text-4xl md:text-5xl font-medium text-gray-900 tracking-tight leading-tight mb-6">
              YNP College of Pharmacy: Our Journey
            </h1>
            <p className="text-gray-600 text-xl leading-relaxed">
              Established in 2022, YNP College of Pharmacy is a forward-looking
              institution dedicated to academic innovation, professional
              development, and community impact. Guided by excellence, research,
              and service, we aim to shape the next generation of
              healthcare-focused professionals.
            </p>
          </div>

          {/* Right Column - Scrollable Timeline */}
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
