import { X } from 'lucide-react';
import { useState } from 'react';
import uvSpectrophotometer from '../assets/uv_spectrophotometer.png';
import dissolutionApparatus from '../assets/dissolution_apparatus.png';
import disintegrationTester from '../assets/disintegration_tester.png';
import friabilityTester from '../assets/friability_tester.png';

const InstrumentShowcase = () => {
  const [lightboxImage, setLightboxImage] = useState(null);

  const instruments = [
    {
      id: 1,
      name: "UV–Visible Spectrophotometer",
      department: "Pharmaceutical Chemistry Lab",
      type: "Analytical Instrument",
      image: uvSpectrophotometer,
      color: "text-blue-600"
    },
    {
      id: 2,
      name: "Digital Dissolution Test Apparatus",
      department: "Pharmaceutics Laboratory",
      type: "Drug Release Testing",
      image: dissolutionApparatus
    },
    {
      id: 3,
      name: "Tablet Compression Machine",
      department: "Pharmaceutical Technology Lab",
      type: "Formulation Equipment",
      image: disintegrationTester
    },
    {
      id: 4,
      name: "Laminar Air Flow Chamber",
      department: "Microbiology Lab",
      type: "Sterile Preparation Unit",
      image: friabilityTester
    },
    {
      id: 5,
      name: "High Performance Thin Layer Chromatography (HPTLC)",
      department: "Pharmacognosy Lab",
      type: "Phytochemical Analysis",
      image: "/images/campus/campus-front.jpg"
    },
    {
      id: 6,
      name: "AI–Integrated Drug Design Workstation",
      department: "CAD–DL Lab",
      type: "Computational Modelling System",
      image: "/images/campus/campus-atrium.jpg"
    },
    {
      id: 7,
      name: "AI–Integrated Drug Design Workstation",
      department: "CAD–DL Lab",
      type: "Computational Modelling System",
      image: "/images/campus/campus-aerial.jpg"
    },
    {
      id: 8,
      name: "AI–Integrated Drug Design Workstation",
      department: "CAD–DL Lab",
      type: "Computational Modelling System",
      image: "/images/campus/morning-assembly.jpg"
    },
    {
      id: 9,
      name: "AI–Integrated Drug Design Workstation",
      department: "CAD–DL Lab",
      type: "Computational Modelling System",
      image: "/images/campus/parade.jpg"
    },
    {
      id: 10,
      name: "AI–Integrated Drug Design Workstation",
      department: "CAD–DL Lab",
      type: "Computational Modelling System",
      image: "/images/campus/events-group.jpg"
    }
  ];

  const openLightbox = (image) => setLightboxImage(image);
  const closeLightbox = () => setLightboxImage(null);

  return (
    <div className="bg-white px-6 pt-16 sm:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-4">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
            Advanced Instruments 
          </h1>
          <p className="text-gray-600 max-w-xl">
            Discover the sophisticated analytical and formulation instruments that empower
            students and researchers to conduct world-class pharmaceutical experiments.
          </p>
        </div>

        {/* Instruments Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-20">
          {instruments.map((item) => (
            <div key={item.id} className="group cursor-pointer">
              {/* Image */}
              <div 
                className="relative overflow-hidden rounded-3xl mb-4 h-96"
                onClick={() => openLightbox(item.image)}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-96 object-cover object-center transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            <X size={32} />
          </button>

          {/* Enlarged Image */}
          <img
            src={lightboxImage}
            alt="Instrument view"
            className="max-w-full max-h-full object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default InstrumentShowcase;
