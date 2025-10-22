import React from "react";

const Footer = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 bg-gray-300">
      <footer className="text-gray-800 py-12 rounded-t-xl font-primary">
        <div className="container mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-12 lg:max-w-6xl text-left md:text-center">
          
          {/* About Section */}
          <div className="flex flex-col items-start md:items-center">
            <h3 className="text-2xl font-semibold mb-4">ABOUT</h3>
            <p className="mb-6 text-sm text-gray-600 leading-relaxed">
              YNP College of Pharmacy, Asangaon (Tal-Dahanu) is dedicated to
              preparing students for excellence in pharmaceutical sciences,
              research, and industry. We equip future-ready pharmacists with
              knowledge, skills, and values to serve healthcare and communities.
            </p>
            <form className="flex items-center w-full max-w-sm">
              <input
                type="email"
                placeholder="Email Address"
                className="p-3 w-full text-gray-900 rounded-full outline-none text-sm"
              />
              <button
                type="button"
                className="bg-blue-500 px-8 py-3 rounded-full text-white"
              >
                ➜
              </button>
            </form>
          </div>

          {/* Explore Section */}
          <div className="flex flex-col items-start md:items-center">
            <h3 className="text-2xl font-semibold mb-4">EXPLORE</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="hover:text-green-600 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-green-600 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/courses" className="hover:text-green-600 transition-colors">
                  Courses
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-green-600 transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="flex flex-col items-start md:items-center">
            <h3 className="text-2xl font-semibold mb-4">CONTACT</h3>
            <p className="text-sm">
              V. M. Patil Krishi Pratishthan, Yamuna Saibag, Vangaon,
              Tal. Dahanu, Dist. Palghar, Maharashtra – PIN 401103
            </p>
            <p className="text-sm mt-2">WhatsApp/Phone: +91-72495-79956</p>
            <p className="text-sm mt-1">Email: ynpbpharm2022@gmail.com</p>

            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-800 hover:text-green-600">
                <span className="w-6 h-6 flex items-center justify-center border border-gray-400 rounded-full text-sm">
                  f
                </span>
              </a>
              <a href="#" className="text-gray-800 hover:text-green-600">
                <span className="w-6 h-6 flex items-center justify-center border border-gray-400 rounded-full text-sm">
                  📷
                </span>
              </a>
              <a href="#" className="text-gray-800 hover:text-green-600">
                <span className="w-6 h-6 flex items-center justify-center border border-gray-400 rounded-full text-sm">
                  t
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t text-center text-xs text-gray-500">
          © {new Date().getFullYear()} All Rights Reserved, YNP College of Pharmacy
        </div>
      </footer>
    </div>
  );
};

export default Footer;
