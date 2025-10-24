export default function HealthcareTimeline() {
  const timelineData = [
    {
      title: "Laying the Foundations of Pharmacy",
      year: "Year 1",
      description:
        "Students begin their journey with core sciences including Human Anatomy & Physiology, Pharmaceutical Analysis, Pharmaceutics, and Pharmaceutical Inorganic Chemistry. Supporting courses like Communication Skills and Remedial Biology/Mathematics build essential academic and professional abilities.",
    },
    {
      title: "Exploring Biochemical and Organic Principles",
      year: "Year 2",
      description:
        "The second year deepens scientific understanding through Pharmaceutical Organic Chemistry, Biochemistry, Pathophysiology, and Computer Applications in Pharmacy. Practical sessions strengthen experimental, analytical, and computational skills for pharmaceutical formulation and biological evaluation.",
    },
    {
      title: "Developing Core Pharmaceutical Competence",
      year: "Year 3",
      description:
        "Students advance into Pharmaceutical Microbiology, Physical Pharmaceutics, Medicinal Chemistry, Pharmacology, and Pharmacognosy. Emphasis is placed on understanding drug design, pharmacological action, natural product chemistry, and manufacturing principles.",
    },
    {
      title: "Integrating Advanced Knowledge and Application",
      year: "Year 4",
      description:
        "The curriculum focuses on Industrial Pharmacy, Pharmacology, Biopharmaceutics, Biotechnology, and Quality Assurance. Practice School and Project Work provide real-world exposure, blending clinical insight, industrial training, and research methodology.",
    },
    {
      title: "Emerging as Industry-Ready Professionals",
      year: "Graduation Phase",
      description:
        "Graduates are equipped with comprehensive knowledge in Instrumental Analysis, Novel Drug Delivery Systems, and Pharmacy Practice. Exposure to regulatory affairs, pharmacovigilance, and industrial operations prepares them for multifaceted roles across healthcare and pharmaceutical sectors.",
    },
    {
      title: "Pursuing Higher Education and Research",
      year: "Post-Graduation",
      description:
        "Students may pursue M.Pharm, Pharm.D, Ph.D., or MBA programs specializing in Pharmaceutical Technology, Pharmacology, or Regulatory Sciences—enhancing expertise in research, academia, and global healthcare innovation.",
    },
    {
      title: "Contributing to Global Healthcare Advancement",
      year: "Lifelong Impact",
      description:
        "YNP B.Pharm alumni excel in fields such as formulation research, clinical trials, regulatory policy, and public health. They uphold professional ethics and innovation, contributing meaningfully to the evolving landscape of global healthcare.",
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
              The B.Pharm program at YNP College follows the PCI-prescribed curriculum,
              blending pharmaceutical sciences, clinical applications, technology, and
              professional ethics to shape competent, compassionate healthcare leaders.
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
