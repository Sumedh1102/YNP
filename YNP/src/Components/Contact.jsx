import React from 'react';
import { Phone, MapPin, Mail } from 'lucide-react';

export default function CareCornerHeader() {
  return (
    <div className='px-36 my-10'>
      <div className="w-full bg-gray-100 py-8 rounded-3xl">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between gap-8 flex-wrap ">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              
              </div>
              <span className="text-xl font-medium text-gray-800">YNP College of Pharmacy</span>
            </div>

            {/* Contact Info */}
            <div className="flex items-center gap-12 flex-wrap">
              {/* Phone Numbers */}
              <div className="flex items-start gap-3">
                <div className="mt-1">
                  <Phone className="w-6 h-6 text-gray-600" strokeWidth={1.5} />
                </div>
                <div className="flex flex-col text-gray-700">
                  <span className="text-sm">+91 12345 67890</span>
                  <span className="text-sm">+91 98765 43210</span>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3">
                <div className="mt-1">
                  <MapPin className="w-6 h-6 text-gray-600" strokeWidth={1.5} />
                </div>
                <div className="flex flex-col text-gray-700">
                  <span className="text-sm">Gurukul Shikshan Sankul,</span>
                  <span className="text-sm">Asangaon, Dahanu, Palghar, Maharashtra</span>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <div className="mt-1">
                  <Mail className="w-6 h-6 text-gray-600" strokeWidth={1.5} />
                </div>
                <div className="flex flex-col text-gray-700">
                  <span className="text-sm">info@ynpbpharm.in</span>
                  <span className="text-sm">admissions@ynpbpharm.in</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
