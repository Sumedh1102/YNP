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
        "Graduates qualify for roles in healthcare, pharmaceutical industry, clinical research, regulatory affairs, marketing, and government services, benefiting from YNP's industry ties and comprehensive training.",
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
        "YNP B.Pharm alumni contribute through drug development, public health initiatives, clinical service excellence, and pharmaceutical research, embodying the college's ethos of innovation and ethical practice.",
    },
  ]

  return (
    <div className="min-h-fit bg-white">
      <div className="py-8 md:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Left Column */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900 tracking-tight leading-tight mb-4 md:mb-6">
              The Journey of a B.Pharmacy Student at YNP College of Pharmacy
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
              Our B.Pharm program integrates pharmaceutical science, technology, clinical skills, and ethics, preparing
              students for dynamic careers dedicated to advancing healthcare and improving patient outcomes.
            </p>
          </div>

          {/* Right Column - Timeline */}
          <div className="space-y-4 sm:space-y-6 md:space-y-8">
            {timelineData.map((milestone, index) => (
              <div
                key={index}
                className="bg-gray-100 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-14 transition-all duration-300 hover:shadow-md hover:scale-[1.01]"
              >
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal text-gray-800 mb-3 md:mb-4">
                  {milestone.title} - ({milestone.year})
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">{milestone.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
