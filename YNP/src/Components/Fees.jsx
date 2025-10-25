export default function VirtualAppointmentHero() {
  return (
    <section className="min-h-screen bg-gray-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
      <div className="max-w-7xl w-full overflow-hidden">
        <div className="flex flex-col lg:flex-row items-center gap-0 lg:gap-0">
          {/* Left Content */}
          <div className="w-full lg:flex-1 p-6 sm:p-8 md:p-12 lg:p-16 xl:p-20 bg-gray-300 rounded-t-3xl sm:rounded-l-3xl lg:rounded-tr-none lg:rounded-l-3xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-gray-900 mb-4 sm:mb-6 leading-tight">
              Check Your Academic Results Online
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              Students of YNP College of Pharmacy can now easily access their semester results online. Select your
              respective program below to view your results. Stay updated with your academic progress in just one click!
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="https://result.msbte.ac.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black font-medium px-6 sm:px-8 py-3 sm:py-4 rounded-3xl transition-colors duration-200 text-sm sm:text-base md:text-lg text-center"
              >
                View D.Pharm Results
              </a>
              <a
                href="https://dbatu.ac.in/result/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black font-medium px-6 sm:px-8 py-3 sm:py-4 rounded-3xl transition-colors duration-200 text-sm sm:text-base md:text-lg text-center"
              >
                View B.Pharm Results
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full lg:flex-1 lg:w-auto">
            <div className="relative w-full h-auto flex justify-center items-center">
              <img
                src="https://i.pinimg.com/736x/bc/2e/07/bc2e07c52294cb802580ad8f768047ed.jpg"
                alt="Students checking results online"
                className="w-full h-[700px] max-w-sm sm:max-w-md md:max-w-lg lg:max-w-none lg:w-full object-cover rounded-b-3xl lg:rounded-3xl aspect-square sm:aspect-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
