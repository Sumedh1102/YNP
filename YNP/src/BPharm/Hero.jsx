import React from 'react';
import { Users } from 'lucide-react';

export default function ArmoniaHero() {
  return (
    <div className='px-20 py-10'>
      <div className="min-h-[500px] bg-blue-50 rounded-3xl flex items-center justify-center p-6">
        <div className="max-w-4xl w-full text-center">
          {/* Logo/Brand */}
          <div className="flex items-center justify-center gap-2 mb-12 text-stone-500">
            <Users className="w-5 h-5" />
            <span className="text-sm uppercase tracking-wider font-light">YNP College of Pharmacy</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-stone-800 font-light leading-tight mb-16">
            Building Future Pharmacists with Excellence, Ethics, and Innovation at{' '}
            <span className="font-normal">YNP's B.Pharmacy Program</span>
          </h1>

          {/* Supporting Text */}
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Experience a transformative journey through comprehensive academics, practical training, and cutting edge research all designed to empower passionate learners to excel in healthcare and pharmaceutical sciences.
          </p>
        </div>
      </div>
    </div>
  );
}
