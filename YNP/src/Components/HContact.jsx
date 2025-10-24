import { Phone, ArrowUpRight } from "lucide-react"

export default function HealthcareSection() {
  const features = [
    {
      number: 1,
      title: "Comprehensive Curriculum",
      description:
        "YNP College offers well-structured D.Pharm and B.Pharm programs combining theory and practical training to prepare students for professional excellence.",
    },
    {
      number: 2,
      title: "Experienced Faculty",
      description:
        "Our faculty members provide guidance, mentorship, and real-world insights to foster innovation, critical thinking, and ethical practice in pharmacy education.",
    },
    {
      number: 3,
      title: "Advanced Laboratories & Research",
      description:
        "State-of-the-art laboratories and research facilities enable students to gain hands-on experience, conduct experiments, and participate in cutting-edge pharmaceutical research.",
    },
  ]

  return (
    <div className="min-h-screen bg-white p-4 sm:p-6 md:p-8 lg:p-16">
      <div className="max-w-7xl mx-auto">
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
          {/* Left Column - Features */}
          <div className="pt-0 sm:pt-6 md:pt-8 lg:pt-12">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-gray-900 mb-6 sm:mb-8 md:mb-10 lg:mb-12 leading-tight">
              Why Choose YNP College of Pharmacy
            </h1>
            <div className="bg-gray-100 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12">
              <div className="space-y-6 sm:space-y-8 md:space-y-10">
                {features.map((feature) => (
                  <div key={feature.number} className="flex gap-3 sm:gap-4 md:gap-6">
                    {/* Number Circle */}
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-white flex items-center justify-center">
                        <span className="text-blue-600 font-bold text-lg sm:text-xl md:text-2xl">{feature.number}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 pt-0 sm:pt-0.5 md:pt-1">
                      <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal text-gray-900 mb-2 sm:mb-2.5 md:mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-sm sm:text-base md:text-base text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Image with Contact Card */}
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden mt-6 md:mt-8 lg:mt-0">
            {/* Background Image */}
            <div className="w-full h-64 sm:h-96 md:h-[500px] lg:h-[800px]">
              <img
                src="https://i.postimg.cc/HnysxhfP/image.png"
                alt="Students in laboratory"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Contact Card */}
            <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-4 sm:left-6 md:left-8 right-4 sm:right-6 md:right-8 lg:right-auto lg:w-80 bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-5 md:p-6">
              <h3 className="text-base sm:text-lg md:text-xl font-medium text-gray-900 mb-3 sm:mb-4 leading-snug">
                Have Questions? Call Us
              </h3>

              {/* Phone Number */}
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 flex-shrink-0" strokeWidth={1.5} />
                <span className="text-sm sm:text-base text-gray-700 font-medium">+91 12345 67890</span>
              </div>

              {/* Contact Button */}
              <button className="flex items-center gap-2 text-sm sm:text-base text-gray-900 font-medium hover:text-blue-600 transition-colors">
                <span>Contact Admissions</span>
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-gray-300 flex items-center justify-center hover:border-blue-600 transition-colors flex-shrink-0">
                  <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
