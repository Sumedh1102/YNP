import { Link } from "react-router-dom";
import { useState } from "react"
import { ChevronDown, Menu, X } from "lucide-react"

export default function CareCornerNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isAcademicsOpen, setIsAcademicsOpen] = useState(false)
  const [isTeamOpen, setIsTeamOpen] = useState(false)
  const [isAcademicsMobileOpen, setIsAcademicsMobileOpen] = useState(false)
  const [isTeamMobileOpen, setIsTeamMobileOpen] = useState(false)
  const [isTeachingStaffOpen, setIsTeachingStaffOpen] = useState(false)

  return (
    <div>
  <a href="https://aems.vmpkp.com/aemsedudc/StudentFee/feescollectionthruprn">
           {/* 🔹 Infinite Scrolling Bar */}
      <div className="w-full bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 text-white overflow-hidden">
        <div className="whitespace-nowrap py-3">
   <p className="inline-block text-2xl font-thin animate-marquee whitespace-nowrap">
    Pay Fees Online &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    Pay Fees Online &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    Pay Fees Online &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    Pay Fees Online &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    Pay Fees Online &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    Pay Fees Online &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    Pay Fees Online &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    Pay Fees Online &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    Pay Fees Online &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    Pay Fees Online &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    Pay Fees Online &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    Pay Fees Online &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    Pay Fees Online &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    Pay Fees Online &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    Pay Fees Online &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    Pay Fees Online &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    Pay Fees Online &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    Pay Fees Online &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    Pay Fees Online &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    Pay Fees Online
  </p>
        </div>
      </div>
  </a>

      <nav className="bg-white">
      <div className="max-w-8xl mx-auto px-3 sm:px-4 md:px-6 lg:px-20">
        <div className="flex items-center justify-between h-10 mt-8">
          {/* Logo and Title */}
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <div className="w-12 h-12 sm:w-12 sm:h-12 lg:w-16 lg:h-16 flex-shrink-0">
              <img
                src="https://res.cloudinary.com/dzlik9g5v/image/upload/v1761286582/ynplogo-Photoroom_a0znp3.png"
                alt="YNP College Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col items-center text-center">
  <span className="text-xl sm:text-lg md:text-xl lg:text-3xl font-bold text-gray-900 truncate sm:truncate">
    YNP COLLEGE OF PHARMACY
  </span>
  <span>
    <p className="text-sm sm:text-base text-gray-700 font-medium">
      Approved by <span className="font-semibold">PCI</span>, Recognized by{" "}
      <span className="font-semibold">DTE</span>, Affiliated to{" "}
      <span className="font-semibold">DBATU & MSBTE</span>
    </p>
  </span>
</div>

          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-6 ml-8">
            <Link
              to="/"
              className="text-gray-600/80 font-normal text-base xl:text-xl transition-colors whitespace-nowrap"
            >
              Home
            </Link>

            <Link
              to="/about"
              className="text-gray-600/80 font-normal text-base xl:text-xl transition-colors whitespace-nowrap"
            >
              About
            </Link>

            {/* YNP Team Dropdown */}
            <div className="relative group">
              <button
                onClick={() => setIsTeamOpen(!isTeamOpen)}
                className="flex items-center gap-1 text-gray-600/80 font-normal text-base xl:text-xl  transition-colors whitespace-nowrap"
              >
                YNP Team <ChevronDown className="w-4 h-4" />
              </button>

              {isTeamOpen && (
                <div className="absolute left-0 mt-2 w-72 bg-white border border-gray-200 rounded-lg shadow-lg z-50 p-4 space-y-3">
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>
                      <Link to="/ynp-team/board-of-trustees" className=" block transition-colors">
                        Board of Trustees
                      </Link>
                    </li>
                    <li>
                      <Link to="/ynp-team/governing-board" className=" block transition-colors">
                        Governing Board
                      </Link>
                    </li>
                    <li>
                      <Link to="/ynp-team/statutory-bodies" className=" block transition-colors">
                        Statutory Bodies
                      </Link>
                    </li>
                    <li>
                      <Link to="/ynp-team/chairman-message" className=" block transition-colors">
                        Chairman's Message
                      </Link>
                    </li>
                    <li>
                      <Link to="/ynp-team/principal-message" className=" block transition-colors">
                        Vice Chairman's Message
                      </Link>
                    </li>

                    {/* Teaching Staff Dropdown */}
                    <li>
                      <button
                        onClick={() => setIsTeachingStaffOpen(!isTeachingStaffOpen)}
                        className="flex items-center justify-between w-full text-left  transition-colors"
                      >
                        Teaching Staff <ChevronDown className="w-4 h-4" />
                      </button>
                      {isTeachingStaffOpen && (
                        <ul className="pl-4 space-y-1 text-gray-700 mt-2">
                          <li>
                            <Link to="/bpharm-faculty" className=" block transition-colors">
                              B.Pharm
                            </Link>
                          </li>
                          <li>
                            <Link to="/dpharm-faculty" className=" block transition-colors">
                              D.Pharm
                            </Link>
                          </li>
                        </ul>
                      )}
                    </li>

                    <li>
                      <Link to="/ynp-team/non-teaching-staff" className=" block transition-colors">
                        Non-Teaching Staff
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Academics Dropdown */}
            <div className="relative group">
              <button
                onClick={() => setIsAcademicsOpen(!isAcademicsOpen)}
                className="flex items-center gap-1 text-gray-600/80 font-normal text-base xl:text-xl  transition-colors whitespace-nowrap"
              >
                Academics <ChevronDown className="w-4 h-4" />
              </button>

              {isAcademicsOpen && (
                <div className="absolute left-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50 p-4 space-y-3">
                  <div>
                    <span className="font-semibold text-sm text-gray-800 block mb-2">Courses</span>
                    <ul className="pl-4 space-y-1 text-gray-700 text-sm">
                      <li>
                        <Link
                          to="/academics/dpharm-syllabus"
                          onClick={() => setIsAcademicsOpen(false)}
                          className=" block transition-colors"
                        >
                          D.Pharm
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/academics/bpharm-syllabus"
                          onClick={() => setIsAcademicsOpen(false)}
                          className=" block transition-colors"
                        >
                          B.Pharm
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <a
                      href="https://res.cloudinary.com/djzzj4s72/image/upload/v1761302367/Screenshot_2025-10-24_at_4.09.15_PM_k4k1uc.png"
                      download
                      className="font-semibold text-sm text-gray-800  block transition-colors"
                    >
                      Scholarship
                    </a>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/facilities"
              className="text-gray-600/80 font-normal text-base xl:text-xl  transition-colors whitespace-nowrap"
            >
              Facilities
            </Link>

            <Link
              to="/studentlife"
              className="text-gray-600/80 font-normal text-base xl:text-xl  transition-colors whitespace-nowrap"
            >
              Student Life
            </Link>

            <Link
              to="/contact"
              className="text-gray-600/80 font-normal text-base xl:text-xl  transition-colors whitespace-nowrap"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-gray-900 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-3 sm:py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3 sm:space-y-4">
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-600/80 font-normal text-base sm:text-lg hover:text-blue-500 transition-colors"
              >
                Home
              </Link>
              <Link
                to="/about"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-600/80 font-normal text-base sm:text-lg hover:text-blue-500 transition-colors"
              >
                About
              </Link>

              {/* Mobile YNP Team Dropdown */}
              <div>
                <button
                  onClick={() => setIsTeamMobileOpen(!isTeamMobileOpen)}
                  className="flex items-center justify-between w-full text-gray-600/80 font-normal text-base sm:text-lg hover:text-blue-500 transition-colors"
                >
                  YNP Team{" "}
                  <ChevronDown className={`w-4 h-4 transition-transform ${isTeamMobileOpen ? "rotate-180" : ""}`} />
                </button>

                {isTeamMobileOpen && (
                  <div className="mt-2 pl-4 space-y-2 text-sm sm:text-base">
                    <Link to="/ynp-team/board-of-trustees" className="block hover:text-blue-600 transition-colors">
                      Board of Trustees
                    </Link>
                    <Link to="/ynp-team/governing-board" className="block hover:text-blue-600 transition-colors">
                      Governing Board
                    </Link>
                    <Link to="/ynp-team/statutory-bodies" className="hover:text-blue-600 block transition-colors">
                      Statutory Bodies
                    </Link>
                    <Link to="/ynp-team/chairman-message" className="block hover:text-blue-600 transition-colors">
                      Chairman's Message
                    </Link>
                    <Link to="/ynp-team/principal-message" className="block hover:text-blue-600 transition-colors">
                      Vice Chairman's Message
                    </Link>

                    {/* Teaching Staff Mobile Submenu */}
                    <div>
                      <button
                        onClick={() => setIsTeachingStaffOpen(!isTeachingStaffOpen)}
                        className="flex items-center justify-between w-full hover:text-blue-600 transition-colors"
                      >
                        Teaching Staff{" "}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${isTeachingStaffOpen ? "rotate-180" : ""}`}
                        />
                      </button>
                      {isTeachingStaffOpen && (
                        <div className="pl-4 mt-2 space-y-1">
                          <Link to="/bpharm-faculty" className="block hover:text-blue-600 transition-colors">
                            B.Pharm
                          </Link>
                          <Link to="/dpharm-faculty" className="block hover:text-blue-600 transition-colors">
                            D.Pharm
                          </Link>
                        </div>
                      )}
                    </div>

                    <Link to="/ynp-team/non-teaching-staff" className="block hover:text-blue-600 transition-colors">
                      Non-Teaching Staff
                    </Link>
                  </div>
                )}
              </div>

              {/* Academics (Mobile) */}
              <div>
                <button
                  onClick={() => setIsAcademicsMobileOpen(!isAcademicsMobileOpen)}
                  className="flex items-center justify-between w-full text-gray-600/80 font-normal text-base sm:text-lg hover:text-blue-500 transition-colors"
                >
                  Academics{" "}
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${isAcademicsMobileOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {isAcademicsMobileOpen && (
                  <div className="mt-2 pl-4 space-y-2 text-sm sm:text-base">
                    <span className="font-semibold text-gray-800 block">Courses</span>
                    <ul className="pl-4 space-y-1 text-gray-700">
                      <li>
                        <Link to="/academics/dpharm-syllabus" className="hover:text-blue-600 block transition-colors">
                          D.Pharm
                        </Link>
                      </li>
                      <li>
                        <Link to="/academics/bpharm-syllabus" className="hover:text-blue-600 block transition-colors">
                          B.Pharm
                        </Link>
                      </li>
                    </ul>

                    <a
                      href="https://res.cloudinary.com/djzzj4s72/image/upload/v1761302367/Screenshot_2025-10-24_at_4.09.15_PM_k4k1uc.png"
                      download
                      className="font-semibold text-gray-800 hover:text-blue-600 block transition-colors"
                    >
                      Scholarship
                    </a>
                  </div>
                )}
              </div>

              <Link
                to="/facilities"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-600/80 font-normal text-base sm:text-lg hover:text-blue-500 transition-colors"
              >
                Facilities
              </Link>
              <Link
                to="/studentlife"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-600/80 font-normal text-base sm:text-lg hover:text-blue-500 transition-colors"
              >
                Student Life
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-600/80 font-normal text-base sm:text-lg hover:text-blue-500 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
    </div>
  )
}


