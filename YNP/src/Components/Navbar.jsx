import { Link, useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import { ChevronDown, Menu, X } from "lucide-react"

export default function CareCornerNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isAcademicsOpen, setIsAcademicsOpen] = useState(false)
  const [isTeamOpen, setIsTeamOpen] = useState(false)
  const [isAcademicsMobileOpen, setIsAcademicsMobileOpen] = useState(false)
  const [isTeamMobileOpen, setIsTeamMobileOpen] = useState(false)
  const [isTeachingStaffOpen, setIsTeachingStaffOpen] = useState(false)

  const location = useLocation()

  const closeAllDropdowns = () => {
    setIsTeamOpen(false)
    setIsAcademicsOpen(false)
    setIsTeachingStaffOpen(false)
    setIsTeamMobileOpen(false)
    setIsAcademicsMobileOpen(false)
    setIsMenuOpen(false)
  }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [location])


  return (
    <div>
      {/* 🔹 Scrolling Fee Banner */}
      <a href="https://aems.vmpkp.com/aemsedudc/StudentFee/feescollectionthruprn">
        <div className="w-full bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 text-white overflow-hidden">
          <div className="whitespace-nowrap py-2 sm:py-3">
<p className="inline-block text-lg sm:text-xl md:text-2xl font-thin animate-marquee whitespace-nowrap"> Pay Fees Online &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Pay Fees Online &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Pay Fees Online &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Pay Fees Online &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Pay Fees Online &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Pay Fees Online &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Pay Fees Online &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Pay Fees Online &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Pay Fees Online &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Pay Fees Online &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Pay Fees Online &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Pay Fees Online &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Pay Fees Online &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Pay Fees Online &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Pay Fees Online &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Pay Fees Online &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Pay Fees Online &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Pay Fees Online &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Pay Fees Online &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Pay Fees Online </p>
          </div>
        </div>
      </a>

      {/* 🔹 Navbar */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-8xl mx-auto px-3 sm:px-4 md:px-6 lg:px-16">
          <div className="flex items-center justify-between h-auto py-3 sm:py-4 md:py-6 lg:py-8">
            {/* 🔸 Logo Section */}
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex-shrink-0">
                <img
                  src="https://res.cloudinary.com/dzlik9g5v/image/upload/v1761286582/ynplogo-Photoroom_a0znp3.png"
                  alt="YNP College Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col text-left min-w-0">
                <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900">
                  YNP COLLEGE OF PHARMACY
                </span>
                <p className="text-xs sm:text-sm md:text-base text-gray-700 font-medium">
                  Approved by <span className="font-semibold">PCI</span>, Recognized by{" "}
                  <span className="font-semibold">DTE</span>, Affiliated to{" "}
                  <span className="font-semibold">DBATU & MSBTE</span>
                </p>
              </div>
            </div>

            {/* 🔸 Desktop Menu */}
            <div className="hidden lg:flex items-center gap-5 ml-4">
              <NavLink to="/" onClick={closeAllDropdowns}>Home</NavLink>
              <NavLink to="/about" onClick={closeAllDropdowns}>About</NavLink>

              {/* 🔹 YNP Team Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsTeamOpen(!isTeamOpen)}
                  className="flex items-center gap-1 text-gray-700 hover:text-blue-600"
                >
                  YNP Team <ChevronDown className="w-4 h-4" />
                </button>

                {isTeamOpen && (
                  <div className="absolute left-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50 p-3 space-y-2">
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li><Link to="/ynp-team/board-of-trustees" onClick={closeAllDropdowns}>Board of Trustees</Link></li>
                      <li><Link to="/ynp-team/governing-board" onClick={closeAllDropdowns}>Governing Board</Link></li>
                      <li><Link to="/ynp-team/statutory-bodies" onClick={closeAllDropdowns}>Statutory Bodies</Link></li>
                      <li><Link to="/ynp-team/chairman-message" onClick={closeAllDropdowns}>Chairman's Message</Link></li>
                      <li><Link to="/ynp-team/principal-message" onClick={closeAllDropdowns}>Vice Chairman's Message</Link></li>

                      {/* 🔸 Teaching Staff Dropdown */}
                      <li>
                        <button
                          onClick={() => setIsTeachingStaffOpen(!isTeachingStaffOpen)}
                          className="flex justify-between w-full text-left hover:text-blue-600"
                        >
                          Teaching Staff <ChevronDown className={`w-4 h-4 transition-transform ${isTeachingStaffOpen ? "rotate-180" : ""}`} />
                        </button>
                        {isTeachingStaffOpen && (
                          <ul className="pl-4 mt-2 space-y-1">
                            <li><Link to="/bpharm-faculty" onClick={closeAllDropdowns}>B.Pharm</Link></li>
                            <li><Link to="/dpharm-faculty" onClick={closeAllDropdowns}>D.Pharm</Link></li>
                          </ul>
                        )}
                      </li>

                      <li><Link to="/ynp-team/non-teaching-staff" onClick={closeAllDropdowns}>Non-Teaching Staff</Link></li>
                    </ul>
                  </div>
                )}
              </div>

              {/* 🔹 Academics Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsAcademicsOpen(!isAcademicsOpen)}
                  className="flex items-center gap-1 text-gray-700 hover:text-blue-600"
                >
                  Academics <ChevronDown className="w-4 h-4" />
                </button>

                {isAcademicsOpen && (
                  <div className="absolute left-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-50 p-3">
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li><Link to="/academics/dpharm-syllabus" onClick={closeAllDropdowns}>D.Pharm</Link></li>
                      <li><Link to="/academics/bpharm-syllabus" onClick={closeAllDropdowns}>B.Pharm</Link></li>
                    </ul>
                    <a
                      href="https://ibb.co/QjdCn9SR"
                      download
                      onClick={closeAllDropdowns}
                      className="block mt-3 font-semibold text-sm text-gray-800 hover:text-blue-600"
                    >
                      Scholarship
                    </a>
                  </div>
                )}
              </div>

              <NavLink to="/facilities" onClick={closeAllDropdowns}>Facilities</NavLink>

              {/* ✅ Added Fees Option */}
             <NavLink to="/frafees" onClick={closeAllDropdowns}>Fees</NavLink>

              <NavLink to="/studentlife" onClick={closeAllDropdowns}>Student Life</NavLink>
              <NavLink to="/contact" onClick={closeAllDropdowns}>Contact Us</NavLink>
            </div>

            {/* 🔸 Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-gray-900 transition"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* 🔸 Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden py-3 border-t border-gray-200">
              <div className="flex flex-col space-y-2">
                <MobileLink to="/" onClick={closeAllDropdowns}>Home</MobileLink>
                <MobileLink to="/about" onClick={closeAllDropdowns}>About</MobileLink>

                <MobileDropdown
                  title="YNP Team"
                  isOpen={isTeamMobileOpen}
                  toggle={() => setIsTeamMobileOpen(!isTeamMobileOpen)}
                >
                  <MobileLink to="/ynp-team/board-of-trustees" onClick={closeAllDropdowns}>Board of Trustees</MobileLink>
                  <MobileLink to="/ynp-team/governing-board" onClick={closeAllDropdowns}>Governing Board</MobileLink>
                  <MobileLink to="/ynp-team/statutory-bodies" onClick={closeAllDropdowns}>Statutory Bodies</MobileLink>
                  <MobileLink to="/ynp-team/chairman-message" onClick={closeAllDropdowns}>Chairman's Message</MobileLink>
                  <MobileLink to="/ynp-team/principal-message" onClick={closeAllDropdowns}>Vice Chairman's Message</MobileLink>

                  <MobileDropdown
                    title="Teaching Staff"
                    isOpen={isTeachingStaffOpen}
                    toggle={() => setIsTeachingStaffOpen(!isTeachingStaffOpen)}
                  >
                    <MobileLink to="/bpharm-faculty" onClick={closeAllDropdowns}>B.Pharm</MobileLink>
                    <MobileLink to="/dpharm-faculty" onClick={closeAllDropdowns}>D.Pharm</MobileLink>
                  </MobileDropdown>

                  <MobileLink to="/ynp-team/non-teaching-staff" onClick={closeAllDropdowns}>Non-Teaching Staff</MobileLink>
                </MobileDropdown>

                <MobileDropdown
                  title="Academics"
                  isOpen={isAcademicsMobileOpen}
                  toggle={() => setIsAcademicsMobileOpen(!isAcademicsMobileOpen)}
                >
                  <MobileLink to="/academics/dpharm-syllabus" onClick={closeAllDropdowns}>D.Pharm</MobileLink>
                  <MobileLink to="/academics/bpharm-syllabus" onClick={closeAllDropdowns}>B.Pharm</MobileLink>
                  <a
                    href="https://ibb.co/QjdCn9SR"
                    download
                    onClick={closeAllDropdowns}
                    className="block py-1 text-gray-700 hover:text-blue-600 transition"
                  >
                    Scholarship
                  </a>
                </MobileDropdown>

                <MobileLink to="/facilities" onClick={closeAllDropdowns}>Facilities</MobileLink>

                {/* ✅ Added Fees Option */}
                <MobileLink to="/fees" onClick={closeAllDropdowns}>Fees</MobileLink>

                <MobileLink to="/studentlife" onClick={closeAllDropdowns}>Student Life</MobileLink>
                <MobileLink to="/contact" onClick={closeAllDropdowns}>Contact Us</MobileLink>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  )
}

/* 🔸 Helper Components */

function NavLink({ to, children, onClick }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="text-gray-700 hover:text-blue-600 text-sm xl:text-base transition"
    >
      {children}
    </Link>
  )
}

function MobileLink({ to, children, onClick }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="block py-2 text-gray-700 text-sm hover:text-blue-600 transition"
    >
      {children}
    </Link>
  )
}

function MobileDropdown({ title, children, isOpen, toggle }) {
  return (
    <div>
      <button
        onClick={toggle}
        className="flex items-center justify-between w-full py-2 text-gray-700 hover:text-blue-600 transition"
      >
        {title}
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>
      {isOpen && <div className="pl-4">{children}</div>}
    </div>
  )
}
