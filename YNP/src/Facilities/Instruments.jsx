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
      image: "https://images.unsplash.com/photo-1581092334521-22d38c467f9b?w=800&h=600&fit=crop",
      color: "text-blue-600"
    },
    {
      id: 2,
      name: "Digital Dissolution Test Apparatus",
      department: "Pharmaceutics Laboratory",
      type: "Drug Release Testing",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=600&fit=crop"
    },
    {
      id: 3,
      name: "Tablet Compression Machine",
      department: "Pharmaceutical Technology Lab",
      type: "Formulation Equipment",
      image: "https://images.unsplash.com/photo-1615634260167-6f6b9a3b97d5?w=800&h=600&fit=crop"
    },
    {
      id: 4,
      name: "Laminar Air Flow Chamber",
      department: "Microbiology Lab",
      type: "Sterile Preparation Unit",
      image: "https://images.unsplash.com/photo-1578496479939-4112768a6c01?w=800&h=600&fit=crop"
    },
    {
      id: 5,
      name: "High Performance Thin Layer Chromatography (HPTLC)",
      department: "Pharmacognosy Lab",
      type: "Phytochemical Analysis",
      image: "https://images.unsplash.com/photo-1619027950597-9902e4ab9788?w=800&h=600&fit=crop"
    },
    {
      id: 6,
      name: "AI–Integrated Drug Design Workstation",
      department: "CAD–DL Lab",
      type: "Computational Modelling System",
      image: "https://images.unsplash.com/photo-1614028674026-a65e31bfd27d?w=800&h=600&fit=crop"
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
            Advanced Instruments <br />& Research Facilities
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
                className="relative overflow-hidden rounded-3xl mb-4 h-80"
                onClick={() => openLightbox(item.image)}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="px-5">
                <div className="bg-slate-100 rounded-3xl p-6 transition-shadow duration-300 -translate-y-16">
                  <h3 className={`text-lg font-semibold mb-2 leading-snug ${item.color || 'text-gray-900'}`}>
                    {item.name}
                  </h3>
                  <p className="text-gray-600 text-sm font-medium mb-1">
                    {item.department}
                  </p>
                  <p className="text-gray-400 text-sm">
                    {item.type}
                  </p>
                </div>
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
