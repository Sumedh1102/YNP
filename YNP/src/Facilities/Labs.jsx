import { X } from 'lucide-react';
import { useState } from 'react';

const LabsShowcase = () => {
  const [lightboxImage, setLightboxImage] = useState(null);

  const labs = [
    {
      id: 1,
      title: "Pharmaceutics Laboratory",
      focus: "Formulation & Drug Delivery",
      description: "Equipped with modern instruments for developing tablets, capsules, and novel drug delivery systems under controlled environments.",
      image: "https://i.postimg.cc/C1Vfzt00/Screenshot-2025-10-26-at-9-35-20-AM.png"
    },
    {
      id: 2,
      title: "Pharmaceutical Chemistry Lab",
      focus: "Analytical & Synthetic Chemistry",
      description: "Facilitates synthesis, analysis, and characterization of drug molecules using advanced spectrophotometric and chromatographic techniques.",
      image: "https://i.postimg.cc/GmW45NHp/Screenshot-2025-10-26-at-9-35-55-AM.png",
      titleColor: "text-blue-600"
    },
    {
      id: 3,
      title: "Pharmacognosy Lab",
      focus: "Herbal & Natural Product Research",
      description: "Focuses on identification, extraction, and formulation of herbal medicines — integrating traditional knowledge with modern research.",
      image: "https://i.postimg.cc/SKLxtK0k/Screenshot-2025-10-26-at-9-37-23-AM.png"
    },
    {
      id: 4,
      title: "Pharmacology Lab",
      focus: "Drug Action & Toxicology",
      description: "Supports simulation-based experiments for studying drug effects, mechanisms, and pharmacodynamics through ethical and AI-integrated setups.",
      image: "https://i.postimg.cc/jjhR4kNV/Screenshot-2025-10-26-at-9-38-02-AM.png"
    },
    {
      id: 5,
      title: "Computer-Aided Drug Design Lab (CAD-DL)",
      focus: "AI-driven Drug Discovery",
      description: "Advanced digital lab featuring molecular modeling, pharmacokinetic analysis, and virtual simulation tools powered by AI algorithms.",
      image: "https://i.postimg.cc/Vv2wNyyD/Screenshot-2025-10-26-at-9-38-40-AM.png"
    },
    {
      id: 6,
      title: "Soil & Water Testing Laboratory",
      focus: "Agro-Pharmacology & Outreach",
      description: "Provides analytical services to local farmers and supports research on soil and water quality for sustainable agricultural practices.",
      image: "https://i.postimg.cc/d0JY3mfn/Screenshot-2025-10-26-at-9-39-29-AM.png"
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
            Laboratories 
          </h1>
          <p className="text-gray-600 max-w-xl">
            Explore YNP’s modern laboratories designed for innovation, research, and discovery
            where students learn by experimenting and advancing pharmaceutical science.
          </p>
        </div>

        {/* Labs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-20">
          {labs.map((lab) => (
            <div key={lab.id} className="group cursor-pointer">
              {/* Image Container */}
              <div 
                className="relative overflow-hidden rounded-3xl mb-4 h-80"
                onClick={() => openLightbox(lab.image)}
              >
                <img
                  src={lab.image}
                  alt={lab.title}
                  className="w-full h-full object-cover  transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black opacity-0  transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            <X size={32} />
          </button>
          <img
            src={lightboxImage}
            alt="Enlarged lab view"
            className="max-w-full max-h-full object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default LabsShowcase;
