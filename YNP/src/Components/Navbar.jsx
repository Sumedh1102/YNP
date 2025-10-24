import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";

export default function CareCornerNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAcademicsOpen, setIsAcademicsOpen] = useState(false);
  const [isTeamOpen, setIsTeamOpen] = useState(false);
  const [isAcademicsMobileOpen, setIsAcademicsMobileOpen] = useState(false);
  const [isTeamMobileOpen, setIsTeamMobileOpen] = useState(false);
  const [isTeachingStaffOpen, setIsTeachingStaffOpen] = useState(false);

  return (
    <nav className="bg-white pt-3">
      <div className="max-w-8xl mx-auto px-4 sm:px-20">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 sm:w-24 sm:h-24 flex items-center justify-center">
              <img
                src="https://res.cloudinary.com/dzlik9g5v/image/upload/v1761286582/ynplogo-Photoroom_a0znp3.png"
                alt=""
                className="object-cover"
              />
            </div>
            <span className="text-xl sm:text-3xl font-bold text-gray-900">
              YNP COLLEGE OF PHARMACY
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-7 md:ml-12 lg:ml-20">
            <Link
              to="/"
              className="text-gray-600/80 font-normal text-xl hover:text-blue-500"
            >
              Home
            </Link>

            <Link
              to="/about"
              className="text-gray-600/80 font-normal text-xl hover:text-blue-500"
            >
              About
            </Link>

            {/* YNP Team Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsTeamOpen(!isTeamOpen)}
                className="flex items-center text-gray-600/80 font-normal text-xl hover:text-blue-500"
              >
                YNP Team <ChevronDown className="w-4 h-4 ml-1" />
              </button>

              {isTeamOpen && (
                <div className="absolute left-0 mt-2 w-72 bg-white border border-gray-200 rounded-3xl shadow-lg z-50 p-5 space-y-4">
                  <ul className="space-y-2 text-gray-700">
                    <li>
                      <Link
                        to="/ynp-team/board-of-trustees"
                        className="hover:text-blue-600 block"
                      >
                        Board of Trustees
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/ynp-team/governing-board"
                        className="hover:text-blue-600 block"
                      >
                        Governing Board
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/ynp-team/statutory-bodies"
                        className="hover:text-blue-600 block"
                      >
                        Satutory Bodies
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/ynp-team/chairman-message"
                        className="hover:text-blue-600 block"
                      >
                        Chairman’s Message
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/ynp-team/principal-message"
                        className="hover:text-blue-600 block"
                      >
                        Vice Chairman’s Message
                      </Link>
                    </li>

                    {/* Teaching Staff Dropdown */}
                    <li>
                      <button
                        onClick={() =>
                          setIsTeachingStaffOpen(!isTeachingStaffOpen)
                        }
                        className="flex items-center justify-between w-full text-left hover:text-blue-600"
                      >
                        Teaching Staff <ChevronDown className="w-4 h-4" />
                      </button>
                      {isTeachingStaffOpen && (
                        <ul className="pl-5 list-disc space-y-1 text-gray-700 mt-2">
                          <li>
                            <Link
                              to="/bpharm-faculty"
                              className="hover:text-blue-600 block"
                            >
                              B.Pharm
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/dpharm-faculty"
                              className="hover:text-blue-600 block"
                            >
                              D.Pharm
                            </Link>
                          </li>
                        </ul>
                      )}
                    </li>

                    <li>
                      <Link
                        to="/ynp-team/non-teaching-staff"
                        className="hover:text-blue-600 block"
                      >
                        Non-Teaching Staff
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Academics Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsAcademicsOpen(!isAcademicsOpen)}
                className="flex items-center text-gray-600/80 font-normal text-xl hover:text-blue-500"
              >
                Academics <ChevronDown className="w-4 h-4 ml-1" />
              </button>

              {isAcademicsOpen && (
                <div className="absolute left-0 mt-2 w-64 bg-white border border-gray-200 rounded-3xl shadow-lg z-50 p-5 space-y-4">
                  <div>
                    <span className="font-semibold text-lg text-gray-800 block mb-2">
                      Courses
                    </span>
                    <ul className="pl-5 list-disc space-y-1 text-gray-700">
                      <li>
                        <Link
                          to="/academics/dpharm-syllabus"
                          onClick={() => setIsAcademicsOpen(false)}
                          className="hover:text-blue-600 block"
                        >
                          D.Pharm
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/academics/bpharm-syllabus"
                          onClick={() => setIsAcademicsOpen(false)}
                          className="hover:text-blue-600 block"
                        >
                          B.Pharm
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* ✅ Scholarship PDF download link */}
                  <div>
                    <a
                      href="https://res.cloudinary.com/djzzj4s72/image/upload/v1761302367/Screenshot_2025-10-24_at_4.09.15_PM_k4k1uc.png" // replace with your actual PDF URL
                      download
                      className="font-semibold text-lg text-gray-800 hover:text-blue-600 block"
                    >
                      Scholarship
                    </a>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/facilities"
              className="text-gray-600/80 font-normal text-xl hover:text-blue-500"
            >
              Facilities
            </Link>

            <Link
              to="/studentlife"
              className="text-gray-600/80 font-normal text-xl hover:text-blue-500"
            >
              Student Life
            </Link>

            <Link
              to="/contact"
              className="text-gray-600/80 font-normal text-xl hover:text-blue-500"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-gray-900"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-600/80 font-normal text-xl hover:text-blue-500"
              >
                Home
              </Link>
              <Link
                to="/about"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-600/80 font-normal text-xl hover:text-blue-500"
              >
                About
              </Link>

              {/* Mobile YNP Team Dropdown */}
              <div>
                <button
                  onClick={() => setIsTeamMobileOpen(!isTeamMobileOpen)}
                  className="flex items-center justify-between w-full text-gray-600/80 font-normal text-xl hover:text-blue-500"
                >
                  YNP Team <ChevronDown className="w-4 h-4" />
                </button>

                {isTeamMobileOpen && (
                  <div className="mt-2 pl-4 space-y-2">
                    <Link
                      to="/ynp-team/board-of-trustees"
                      className="block hover:text-blue-600"
                    >
                      Board of Trustees
                    </Link>
                    <Link
                      to="/ynp-team/governing-board"
                      className="block hover:text-blue-600"
                    >
                      Governing Board
                    </Link>
                    <Link
                      to="/ynp-team/statutory-bodies"
                      className="hover:text-blue-600 block"
                    >
                      Satutory Bodies
                    </Link>
                    <Link
                      to="/ynp-team/chairman-message"
                      className="block hover:text-blue-600"
                    >
                      Chairman’s Message
                    </Link>
                    <Link
                      to="/ynp-team/principal-message"
                      className="block hover:text-blue-600"
                    >
                      Vice Chairman’s Message
                    </Link>

                    {/* Teaching Staff Mobile Submenu */}
                    <div>
                      <button
                        onClick={() =>
                          setIsTeachingStaffOpen(!isTeachingStaffOpen)
                        }
                        className="flex items-center justify-between w-full hover:text-blue-600"
                      >
                        Teaching Staff <ChevronDown className="w-4 h-4" />
                      </button>
                      {isTeachingStaffOpen && (
                        <div className="pl-4 mt-1 space-y-1">
                          <Link
                            to="/bpharm-faculty"
                            className="block hover:text-blue-600"
                          >
                            B.Pharm
                          </Link>
                          <Link
                            to="/dpharm-faculty"
                            className="block hover:text-blue-600"
                          >
                            D.Pharm
                          </Link>
                        </div>
                      )}
                    </div>

                    <Link
                      to="/ynp-team/non-teaching-staff"
                      className="block hover:text-blue-600"
                    >
                      Non-Teaching Staff
                    </Link>
                  </div>
                )}
              </div>

              {/* Academics (Mobile) */}
              <div>
                <button
                  onClick={() =>
                    setIsAcademicsMobileOpen(!isAcademicsMobileOpen)
                  }
                  className="flex items-center justify-between w-full text-gray-600/80 font-normal text-xl hover:text-blue-500"
                >
                  Academics <ChevronDown className="w-4 h-4" />
                </button>

                {isAcademicsMobileOpen && (
                  <div className="mt-2 pl-4 space-y-2">
                    <span className="font-semibold text-gray-800">Courses</span>
                    <ul className="pl-4 list-disc space-y-1 text-gray-700 mt-1">
                      <li>
                        <Link
                          to="/academics/dpharm-syllabus"
                          className="hover:text-blue-600 block"
                        >
                          D.Pharm
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/academics/bpharm-syllabus"
                          className="hover:text-blue-600 block"
                        >
                          B.Pharm
                        </Link>
                      </li>
                    </ul>

                    {/* ✅ Scholarship PDF download (mobile) */}
                    <a
                      href="https://res.cloudinary.com/djzzj4s72/image/upload/v1761302367/Screenshot_2025-10-24_at_4.09.15_PM_k4k1uc.png" // replace with your actual PDF URL
                      download
                      className="font-semibold text-gray-800 hover:text-blue-600 block"
                    >
                      Scholarship
                    </a>
                  </div>
                )}
              </div>

              <Link
                to="/facilities"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-600/80 font-normal text-xl hover:text-blue-500"
              >
                Facilities
              </Link>
              <Link
                to="/studentlife"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-600/80 font-normal text-xl hover:text-blue-500"
              >
                Student Life
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-600/80 font-normal text-xl hover:text-blue-500"
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
