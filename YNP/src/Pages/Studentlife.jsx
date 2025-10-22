import React, { useState } from 'react';

const StudentLifeGallery = () => {
  const galleryItems = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop',
      title: 'Orientation & Induction Program',
      alt: 'New students attending YNP College of Pharmacy induction ceremony'
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=600&fit=crop',
      title: 'Pharmaceutics Lab Practice',
      alt: 'Students performing experiments in pharmaceutics laboratory'
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1581092334521-22d38c467f9b?w=800&h=600&fit=crop',
      title: 'Research Presentation & Poster Session',
      alt: 'Students presenting pharmaceutical research at academic event'
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&h=600&fit=crop',
      title: 'Cultural Festival – “PharmVision”',
      alt: 'Students performing during annual cultural and technical fest'
    },
    {
      id: 5,
      url: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=800&h=600&fit=crop',
      title: 'Sports & Fitness Activities',
      alt: 'Students participating in outdoor sports and games'
    },
    {
      id: 6,
      url: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&h=600&fit=crop',
      title: 'Community Health Camp',
      alt: 'YNP pharmacy students volunteering in rural medical outreach'
    },
    {
      id: 7,
      url: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=600&fit=crop',
      title: 'Campus Life & Friendships',
      alt: 'Students relaxing and enjoying time on campus grounds'
    },
    {
      id: 8,
      url: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop',
      title: 'Guest Lectures & Seminars',
      alt: 'Students attending an expert talk in the seminar hall'
    },
    {
      id: 9,
      url: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&h=600&fit=crop',
      title: 'Library & Self-Study Zone',
      alt: 'Students engaged in reading and research in the YNP central library'
    }
  ];

  const [loadedImages, setLoadedImages] = useState({});

  const handleImageLoad = (id) => {
    setLoadedImages((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="bg-white pt-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-medium text-gray-800 mb-2">
            Student Life at YNP College of Pharmacy
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Beyond classrooms and laboratories, YNP offers a vibrant campus experience filled with 
            cultural fests, sports, outreach programs, and lifelong friendships.
          </p>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-3xl overflow-hidden transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden aspect-[4/3] bg-gray-100">
                {!loadedImages[item.id] && (
                  <div className="absolute inset-0 flex items-center justify-center" />
                )}
                <img
                  src={item.url}
                  alt={item.alt}
                  onLoad={() => handleImageLoad(item.id)}
                  className="w-full h-full object-cover transition-transform duration-300 rounded-3xl group-hover:scale-105"
                />
              </div>

              {/* Caption */}
              <div className="p-6 bg-slate-100 rounded-3xl mt-2">
                <h3 className="text-lg font-semibold text-gray-800 text-center">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentLifeGallery;
