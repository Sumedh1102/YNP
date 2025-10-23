export default function HealthcareTimeline() {
  const timelineData = [
    {
      title: "Introduction to Pharmacy Fundamentals",
      year: "Semester 1",
      description:
        "The D.Pharm journey begins with core subjects like Pharmaceutical Chemistry, Human Anatomy & Physiology, and Health Education. These form the foundation for understanding drug composition, body functions, and public health principles.",
    },
    {
      title: "Practical Dispensing and Compounding",
      year: "Semester 2",
      description:
        "Students gain hands-on skills in dispensing medications, preparing formulations, and learning pharmaceutical calculations to ensure safety and efficacy in drug delivery.",
    },
    {
      title: "Pharmacology and Therapeutics",
      year: "Semester 3",
      description:
        "Focus shifts to the study of drug actions, side effects, and therapeutic uses. Emphasis is on understanding how medicines interact with the human body and managing patient care safely.",
    },
    {
      title: "Community Pharmacy and Patient Counseling",
      year: "Semester 4",
      description:
        "Students learn frontline clinical and communication skills. Training includes patient counseling, rational drug use, pharmacy ethics, and regulatory compliance.",
    },
    {
      title: "Industrial Training and Hospital Internship",
      year: "Final Semester",
      description:
        "A mandatory internship phase where students rotate through hospitals and retail pharmacies. They apply academic knowledge in real-world settings, gaining exposure to pharmaceutical operations and patient interactions.",
    },
    {
      title: "Career Opportunities and Skill Development",
      year: "Program Completion",
      description:
        "The D.Pharm degree equips graduates for roles in community pharmacies, hospitals, and the pharmaceutical industry. Additional training encourages entrepreneurship, research participation, and preparation for further studies like B.Pharm.",
    },
    {
      title: "Supportive Learning Environment at YNP",
      year: "Ongoing",
      description:
        "YNP College offers personalized mentoring, digital learning tools including AI co-pilots, access to state-of-the-art laboratories, and a supportive peer network, ensuring holistic development and readiness for evolving healthcare challenges.",
    },
  ]

  return (
    <div className="min-h-fit bg-white">
      <div className="py-8 md:py-16 px-4 md:px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Left Column - Sticky */}
          <div className="md:sticky md:top-24 self-start">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900 tracking-tight leading-tight mb-4 md:mb-6">
              The Diploma in Pharmacy (D.Pharm) program at YNP College of Pharmacy
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed">
              The D.Pharm program at YNP is a 2-year comprehensive curriculum designed to prepare students for
              proficient pharmaceutical practice. It integrates theoretical knowledge with rigorous practical training,
              aligned with AICTE and PCI standards, and supported by industry and clinical partnerships.
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
