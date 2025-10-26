import { X } from 'lucide-react';
import { useState } from 'react';

const ClassroomShowcase = () => {
  const [lightboxImage, setLightboxImage] = useState(null);

  const classrooms = [
    {
      id: 1,
      name: "Pharmaceutics Laboratory",
      capacity: "60 students",
      description: "Equipped with advanced instruments for formulation, compounding, and dosage design, fostering hands-on pharmaceutical learning.",
      image: "https://i.postimg.cc/d0GjHGtd/Screenshot-2025-10-26-at-9-48-53-AM.png"
    },
    {
      id: 2,
      name: "Pharmacognosy & Herbal Research Lab",
      capacity: "40 students",
      description: "Dedicated to phytochemical extraction, herbal formulation, and identification of medicinal plant species for research-based learning.",
      image: "https://i.postimg.cc/J4g3RpGf/Screenshot-2025-10-26-at-9-49-40-AM.png"
    },
    {
      id: 3,
      name: "Computer-Aided Drug Design Lab (CAD-DL)",
      capacity: "50 students",
      description: "AI-integrated systems for molecular modeling, virtual screening, and pharmacokinetic simulation in drug discovery.",
      image: "https://i.postimg.cc/q7r37S4t/Screenshot-2025-10-26-at-9-51-25-AM.png"
    },
  ];

  const openLightbox = (image) => setLightboxImage(image);
  const closeLightbox = () => setLightboxImage(null);

  return (
    <div className="bg-white px-6 sm:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-4">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
            Classrooms 
          </h1>
          <p className="text-gray-600 max-w-xl">
            Explore our state-of-the-art classrooms, laboratories, and digital learning spaces
            that blend traditional mentoring with modern technology for holistic education.
          </p>
        </div>

        {/* Classroom Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-20">
          {classrooms.map((room) => (
            <div key={room.id} className="group cursor-pointer">
              <div 
                className="relative overflow-hidden rounded-3xl mb-4 h-80"
                onClick={() => openLightbox(room.image)}
              >
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover  transition-transform duration-300"
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
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            <X size={32} />
          </button>
          <img
            src={lightboxImage}
            alt="Enlarged classroom view"
            className="max-w-full max-h-full object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default ClassroomShowcase;
