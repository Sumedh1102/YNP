import { Users } from "lucide-react"

export default function ArmoniaHero() {
  return (
    <div className="px-4 sm:px-8 md:px-12 lg:px-20 py-6 sm:py-8 md:py-10">
      <div className="min-h-[400px] sm:min-h-[450px] md:min-h-[500px] bg-blue-50 rounded-2xl sm:rounded-3xl flex items-center justify-center p-4 sm:p-6">
        <div className="max-w-7xl w-full text-center">
          {/* Logo/Brand */}
          <div className="flex items-center justify-center gap-2 mb-6 sm:mb-8 md:mb-12 text-stone-500">
            <Users className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="text-xs sm:text-sm uppercase tracking-wider font-light">YNP College of Pharmacy, Palghar</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-stone-800 font-bold leading-tight mb-8 sm:mb-12 md:mb-16">
            Building Future Pharmacists with Excellence, Ethics, and Innovation at{" "}
            <span className="font-bold">YNP's B.Pharmacy Program</span>
          </h1>

          {/* Supporting Text */}
          <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-3xl mx-auto px-2 sm:px-0">
            Experience a transformative journey through comprehensive academics, practical training, and cutting edge
            research all designed to empower passionate learners to excel in healthcare and pharmaceutical sciences.
          </p>
        </div>
      </div>
    </div>
  )
}
