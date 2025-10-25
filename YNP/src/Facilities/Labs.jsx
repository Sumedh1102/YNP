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
      image: "https://images.unsplash.com/photo-1581093588401-22b0baf1b6b0?w=800&h=600&fit=crop"
    },
    {
      id: 2,
      title: "Pharmaceutical Chemistry Lab",
      focus: "Analytical & Synthetic Chemistry",
      description: "Facilitates synthesis, analysis, and characterization of drug molecules using advanced spectrophotometric and chromatographic techniques.",
      image: "https://images.unsplash.com/photo-1581092334521-22d38c467f9b?w=800&h=600&fit=crop",
      titleColor: "text-blue-600"
    },
    {
      id: 3,
      title: "Pharmacognosy Lab",
      focus: "Herbal & Natural Product Research",
      description: "Focuses on identification, extraction, and formulation of herbal medicines — integrating traditional knowledge with modern research.",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=600&fit=crop"
    },
    {
      id: 4,
      title: "Pharmacology Lab",
      focus: "Drug Action & Toxicology",
      description: "Supports simulation-based experiments for studying drug effects, mechanisms, and pharmacodynamics through ethical and AI-integrated setups.",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop"
    },
    {
      id: 5,
      title: "Computer-Aided Drug Design Lab (CAD-DL)",
      focus: "AI-driven Drug Discovery",
      description: "Advanced digital lab featuring molecular modeling, pharmacokinetic analysis, and virtual simulation tools powered by AI algorithms.",
      image: "https://images.unsplash.com/photo-1614028674026-a65e31bfd27d?w=800&h=600&fit=crop"
    },
    {
      id: 6,
      title: "Soil & Water Testing Laboratory",
      focus: "Agro-Pharmacology & Outreach",
      description: "Provides analytical services to local farmers and supports research on soil and water quality for sustainable agricultural practices.",
      image: "https://images.unsplash.com/photo-1564410267845-9339e32a79b1?w=800&h=600&fit=crop"
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
            Laboratories &<br />Research Spaces
          </h1>
          <p className="text-gray-600 max-w-xl">
            Explore YNP’s modern laboratories designed for innovation, research, and discovery —
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

              {/* Content Card */}
              <div className="px-5">
                <div className="bg-slate-100 rounded-3xl p-6 transition-shadow duration-300 -translate-y-16">
                  <h3 className={`text-lg font-semibold mb-2 leading-snug ${lab.titleColor || 'text-gray-900'}`}>
                    {lab.title}
                  </h3>
                  <p className="text-gray-600 text-sm font-medium mb-1">{lab.focus}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{lab.description}</p>
                </div>
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
