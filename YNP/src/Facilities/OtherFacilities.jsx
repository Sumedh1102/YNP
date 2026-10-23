import { X } from 'lucide-react';
import { useState } from 'react';

const FacilitiesShowcase = () => {
  const [lightboxImage, setLightboxImage] = useState(null);

  const facilities = [
    {
      id: 1,
      title: "Central Library & E-Resource Center",
      facilityType: "Learning Resource Hub",
      description:
        "A digital and print library providing access to pharmaceutical journals, research databases, and a quiet study environment for students.",
      image:
        "/images/campus/morning-assembly.jpg",
    },
    {
      id: 2,
      title: "Auditorium & Seminar Hall",
      facilityType: "Academic Events & Conferences",
      description:
        "A fully equipped hall hosting national seminars, guest lectures, and intercollegiate academic events promoting intellectual exchange.",
      image:
        "/images/campus/cultural-event.jpg",
      titleColor: "text-blue-600",
    },
    {
      id: 3,
      title: "Student Hostels",
      facilityType: "Accommodation Facility",
      description:
        "Separate hostels for boys and girls with hygienic mess, 24×7 security, Wi-Fi, and study-friendly environments ensuring student comfort and safety.",
      image:
        "/images/campus/campus-front.jpg",
    },
    {
      id: 4,
      title: "Canteen & Dining Facility",
      facilityType: "Food & Nutrition Center",
      description:
        "A clean, well-ventilated canteen providing nutritious meals, beverages, and snacks for students and staff throughout the day.",
      image:
        "/images/campus/campus-atrium.jpg",
    },
    {
      id: 5,
      title: "Sports & Fitness Zone",
      facilityType: "Recreational Facility",
      description:
        "Indoor and outdoor sports infrastructure including volleyball, badminton, and gym facilities promoting physical health and teamwork.",
      image:
        "/images/campus/band-performance.jpg",
    },
    {
      id: 6,
      title: "Medicinal Plant Garden",
      facilityType: "Pharmacognosy Research Garden",
      description:
        "A curated garden featuring medicinal herbs used for pharmacognostic studies, promoting green learning and environmental sustainability.",
      image:
        "/images/campus/awareness-rally.jpg",
    },
  ];

  const openLightbox = (image) => setLightboxImage(image);
  const closeLightbox = () => setLightboxImage(null);

  return (
    <div className="bg-white px-6 pt-16 sm:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-4">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
            Campus Facilities <br />& Amenities
          </h1>
          <p className="text-gray-600 max-w-xl">
            YNP College of Pharmacy offers a holistic campus experience with
            academic, residential, and recreational facilities designed to
            nurture intellectual growth and well-being.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-20">
          {facilities.map((facility) => (
            <div key={facility.id} className="group cursor-pointer">
              {/* Image */}
              <div
                className="relative overflow-hidden rounded-3xl mb-4 h-96"
                onClick={() => openLightbox(facility.image)}
              >
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-96 object-cover transition-transform duration-300"
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
            alt="Facility view"
            className="max-w-full max-h-full object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default FacilitiesShowcase;
