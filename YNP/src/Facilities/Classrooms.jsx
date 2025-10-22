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
      image: "https://images.unsplash.com/photo-1581091215367-59ab6c2cde1f?w=800&h=600&fit=crop"
    },
    {
      id: 2,
      name: "Pharmacognosy & Herbal Research Lab",
      capacity: "40 students",
      description: "Dedicated to phytochemical extraction, herbal formulation, and identification of medicinal plant species for research-based learning.",
      image: "https://images.unsplash.com/photo-1581093588401-22b0baf1b6b0?w=800&h=600&fit=crop"
    },
    {
      id: 3,
      name: "Computer-Aided Drug Design Lab (CAD-DL)",
      capacity: "50 students",
      description: "AI-integrated systems for molecular modeling, virtual screening, and pharmacokinetic simulation in drug discovery.",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop"
    },
    {
      id: 4,
      name: "Lecture Hall – Gurukul Block",
      capacity: "80 students",
      description: "Spacious digital classrooms with smart boards and interactive displays designed for immersive theoretical learning.",
      image: "https://images.unsplash.com/photo-1603575448368-362b3ec28e77?w=800&h=600&fit=crop"
    },
    {
      id: 5,
      name: "Library & E-Resource Center",
      capacity: "100+ seating",
      description: "Centralized learning space offering access to journals like IJPER and JAPS with high-speed Wi-Fi and quiet study zones.",
      image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&h=600&fit=crop"
    },
    {
      id: 6,
      name: "Seminar Hall & Auditorium",
      capacity: "200+ attendees",
      description: "Used for guest lectures, national conferences, and industry conclaves promoting academic discourse and innovation.",
      image: "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?w=800&h=600&fit=crop"
    }
  ];

  const openLightbox = (image) => setLightboxImage(image);
  const closeLightbox = () => setLightboxImage(null);

  return (
    <div className="bg-white px-6 sm:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-4">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
            Modern Classrooms & <br />Learning Environments
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
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </div>

              <div className="px-5">
                <div className="bg-slate-100 rounded-3xl p-6 transition-shadow duration-300 -translate-y-16">
                  <h3 className="text-lg font-semibold mb-3 text-gray-900">{room.name}</h3>
                  <p className="text-gray-600 text-sm mb-2">{room.capacity}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{room.description}</p>
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
