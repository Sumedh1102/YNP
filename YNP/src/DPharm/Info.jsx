export default function HealthcareTimeline() {
  const timelineData = [
    {
      title: "Fundamentals of Pharmaceutics and Pharmaceutical Chemistry",
      year: "Part I – Semester 1",
      description:
        "Students begin their D.Pharm journey with Pharmaceutics–I and Pharmaceutical Chemistry–I, gaining an understanding of dosage forms, physical and chemical properties of drugs, packaging, sterilization, and basic pharmaceutical calculations.",
    },
    {
      title: "Study of Natural Drugs and Biological Systems",
      year: "Part I – Semester 2",
      description:
        "The semester focuses on Pharmacognosy, Biochemistry, and Human Anatomy & Physiology. Learners explore natural drug sources, biochemical principles, and human body systems to understand how medicines act within biological frameworks.",
    },
    {
      title: "Health Education and Community Pharmacy",
      year: "Part I – Applied Component",
      description:
        "Students are introduced to community health, disease prevention, nutrition, and first aid. Emphasis is placed on public health, epidemiology, and the pharmacist’s role in health education and disease control.",
    },
    {
      title: "Advanced Pharmaceutics and Medicinal Chemistry",
      year: "Part II – Semester 3",
      description:
        "This stage covers Pharmaceutics–II and Pharmaceutical Chemistry–II, focusing on prescription handling, compounding, dosage formulation, sterile preparations, and detailed study of organic and medicinal compounds used in therapy.",
    },
    {
      title: "Pharmacology, Toxicology, and Jurisprudence",
      year: "Part II – Semester 4",
      description:
        "Students study drug actions, mechanisms, and safety, alongside Indian pharmaceutical laws including the Drugs & Cosmetics Act, Pharmacy Act, and NDPS Act. This builds professional ethics and legal awareness in pharmacy practice.",
    },
    {
      title: "Drug Store, Business Management, and Hospital Pharmacy",
      year: "Final Term",
      description:
        "The curriculum integrates management principles, accounting, and inventory control with hospital and clinical pharmacy training. Students learn hospital procedures, record management, and modern dispensing systems using technology.",
    },
    {
      title: "Practical Training and Career Readiness",
      year: "After Course Completion",
      description:
        "A 500-hour practical training in hospitals or pharmacies ensures real-world exposure. Graduates are prepared for roles in community and hospital pharmacies, the pharmaceutical industry, and higher studies such as B.Pharm.",
    },
  ]

  return (
    <div className="min-h-fit bg-white">
      <div className="py-8 md:py-16 px-4 md:px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Left Column - Sticky */}
          <div className="md:sticky md:top-24 self-start">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900 tracking-tight leading-tight mb-4 md:mb-6">
              Diploma in Pharmacy (D.Pharm) at YNP College of Pharmacy
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed">
              The D.Pharm program at YNP is a two-year professional diploma approved by the Pharmacy Council of India.
              It blends theory and extensive practical training across pharmaceutics, pharmacology, chemistry, and
              clinical pharmacy—preparing students for careers in community, hospital, and industrial pharmacy sectors.
            </p>
          </div>

          {/* Right Column - Scrollable Timeline */}
          <div className="space-y-4 md:space-y-8">
            {timelineData.map((milestone, index) => (
              <div
                key={index}
                className="bg-gray-100 rounded-2xl md:rounded-3xl p-6 md:p-10 lg:p-14 transition-all duration-300 hover:shadow-md hover:scale-[1.01]"
              >
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal text-gray-800 mb-3 md:mb-4">
                  {milestone.title} – ({milestone.year})
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                  {milestone.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
