import React from 'react';
import { Users } from 'lucide-react';

export default function ArmoniaHero() {
  return (
    <div className='px-20 py-10'>
      <div className="min-h-[500px] bg-blue-50 rounded-3xl flex items-center justify-center p-6">
        <div className="max-w-5xl w-full">
          {/* Logo/Brand */}
          <div className="flex items-center justify-center gap-2 mb-12 text-stone-500">
            <Users className="w-5 h-5" />
            <span className="text-sm uppercase tracking-wider font-light">
              YNP College of Pharmacy
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-5xl text-center text-stone-800 font-light leading-tight mb-16">
            Building a <span className="font-normal">strong foundation in pharmacy</span> through 
            <br />
            <span className="font-normal">Diploma in Pharmacy (D.Pharm)</span> program at YNP College of Pharmacy.
          </h1>

          {/* Subheading */}
          <p className="text-center text-stone-600 text-lg md:text-xl max-w-3xl mx-auto font-light">
            The D.Pharmacy program at YNP College of Pharmacy is a two-year professional course 
            designed to prepare students for a rewarding career in the healthcare and pharmaceutical industry. 
          </p>
        </div>
      </div>
    </div>
  );
}
