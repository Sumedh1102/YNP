import { X } from 'lucide-react';
import { useState } from 'react';

const InstrumentShowcase = () => {
  const [lightboxImage, setLightboxImage] = useState(null);

  const instruments = [
    {
      id: 1,
      name: "UV–Visible Spectrophotometer",
      department: "Pharmaceutical Chemistry Lab",
      type: "Analytical Instrument",
      image: "https://i.postimg.cc/50T9XQLC/Screenshot-2025-10-26-at-9-42-19-AM.png",
      color: "text-blue-600"
    },
    {
      id: 2,
      name: "Digital Dissolution Test Apparatus",
      department: "Pharmaceutics Laboratory",
      type: "Drug Release Testing",
      image: "https://i.postimg.cc/vHW8mBBL/Screenshot-2025-10-26-at-9-42-56-AM.png"
    },
    {
      id: 3,
      name: "Tablet Compression Machine",
      department: "Pharmaceutical Technology Lab",
      type: "Formulation Equipment",
      image: "https://i.postimg.cc/JhdMFHT6/Screenshot-2025-10-26-at-9-43-30-AM.png"
    },
    {
      id: 4,
      name: "Laminar Air Flow Chamber",
      department: "Microbiology Lab",
      type: "Sterile Preparation Unit",
      image: "https://i.postimg.cc/wjqzTQZ2/Screenshot-2025-10-26-at-9-44-10-AM.png"
    },
    {
      id: 5,
      name: "High Performance Thin Layer Chromatography (HPTLC)",
      department: "Pharmacognosy Lab",
      type: "Phytochemical Analysis",
      image: "https://i.postimg.cc/SRbF06W0/Screenshot-2025-10-26-at-9-44-43-AM.png"
    },
    {
      id: 6,
      name: "AI–Integrated Drug Design Workstation",
      department: "CAD–DL Lab",
      type: "Computational Modelling System",
      image: "https://i.postimg.cc/767dN5j9/Screenshot-2025-10-26-at-9-45-45-AM.png"
    },
    {
      id: 7,
      name: "AI–Integrated Drug Design Workstation",
      department: "CAD–DL Lab",
      type: "Computational Modelling System",
      image: "https://i.postimg.cc/d19QS3mr/Screenshot-2026-07-03-at-9-30-56-PM.png"
    },
    {
      id: 8,
      name: "AI–Integrated Drug Design Workstation",
      department: "CAD–DL Lab",
      type: "Computational Modelling System",
      image: "https://i.postimg.cc/nL4nCrW1/Screenshot-2026-07-03-at-9-31-09-PM.png"
    },
    {
      id: 9,
      name: "AI–Integrated Drug Design Workstation",
      department: "CAD–DL Lab",
      type: "Computational Modelling System",
      image: "https://i.postimg.cc/J0n86qzF/Screenshot-2026-07-03-at-9-31-18-PM.png"
    },
    {
      id: 10,
      name: "AI–Integrated Drug Design Workstation",
      department: "CAD–DL Lab",
      type: "Computational Modelling System",
      image: "https://i.postimg.cc/RVW9wX8M/Screenshot-2026-07-03-at-9-31-27-PM.png"
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
