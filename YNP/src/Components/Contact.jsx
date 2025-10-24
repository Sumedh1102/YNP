import { Phone, MapPin, Mail } from "lucide-react"

export default function CareCornerHeader() {
  return (
    <div className="px-4 sm:px-8 lg:px-36 my-6 sm:my-10">
      <div className="w-full bg-gray-100 py-6 sm:py-8 rounded-3xl">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 sm:gap-8 lg:gap-8">
            {/* Logo */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <div className="w-12 h-12 bg-white  rounded-full flex items-center justify-center flex-shrink-0">
                <img src="https://res.cloudinary.com/dzlik9g5v/image/upload/v1761286582/ynplogo-Photoroom_a0znp3.png" alt="" />
              </div>
              <span className="text-lg sm:text-xl font-medium text-gray-800">YNP College of Pharmacy</span>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-8 lg:gap-12 w-full lg:w-auto">
              {/* Phone Numbers */}
              <div className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0">
                  <Phone className="w-5 sm:w-6 h-5 sm:h-6 text-gray-600" strokeWidth={1.5} />
                </div>
                <div className="flex flex-col text-gray-700">
                  <h3 className="text-xs sm:text-sm">+91 72495 79956</h3>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0">
                  <MapPin className="w-5 sm:w-6 h-5 sm:h-6 text-gray-600" strokeWidth={1.5} />
                </div>
                <div className="flex flex-col text-gray-700">
                  <span className="text-xs sm:text-sm">Gurukul Shikshan Sankul,</span>
                  <span className="text-xs sm:text-sm">Asangaon, Dahanu, Palghar, Maharashtra</span>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0">
                  <Mail className="w-5 sm:w-6 h-5 sm:h-6 text-gray-600" strokeWidth={1.5} />
                </div>
                <div className="flex flex-col text-gray-700">
                  <span className="text-xs sm:text-sm">ynpbpharm2022@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
