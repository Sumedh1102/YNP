import React, { useState } from 'react';

const StudentLifeGallery = () => {
  const galleryItems = [
    {
      id: 1,
      url: 'https://vmpkp.com/wp-content/uploads/2025/06/Events.png',
      title: 'Orientation & Induction Program',
      alt: 'New students attending YNP College of Pharmacy induction ceremony'
    },
    {
      id: 2,
      url: 'https://i.postimg.cc/qRxRhxdD/image.png',
      title: 'Pharmaceutics Lab Practice',
      alt: 'Students performing experiments in pharmaceutics laboratory'
    },
    {
      id: 3,
      url: 'https://vmpkp.com/wp-content/uploads/2025/06/WhatsApp-Image-2025-06-09-at-2.31.27-PM-1.jpeg',
      title: 'Research Presentation & Poster Session',
      alt: 'Students presenting pharmaceutical research at academic event'
    },
    {
      id: 4,
      url: 'https://vmpkp.com/wp-content/uploads/2025/06/campus-img9.jpeg',
      title: 'Cultural Festival – “PharmVision”',
      alt: 'Students performing during annual cultural and technical fest'
    },
    {
      id: 5,
      url: 'https://vmpkp.com/wp-content/uploads/2025/06/caqmpus-img8.jpeg',
      title: 'Sports & Fitness Activities',
      alt: 'Students participating in outdoor sports and games'
    },
    {
      id: 6,
      url: 'https://vmpkp.com/wp-content/uploads/2025/06/WhatsApp-Image-2025-06-10-at-3.41.39-PM.jpeg',
      title: 'Community Health Camp',
      alt: 'YNP pharmacy students volunteering in rural medical outreach'
    },
    {
      id: 7,
      url: 'https://vmpkp.com/wp-content/uploads/2025/06/WhatsApp-Image-2025-06-10-at-1.22.54-PM-1.jpeg',
      title: 'Campus Life & Friendships',
      alt: 'Students relaxing and enjoying time on campus grounds'
    },
    {
      id: 8,
      url: 'https://vmpkp.com/wp-content/uploads/2025/06/WhatsApp-Image-2025-06-09-at-2.31.20-PM.jpeg',
      title: 'Guest Lectures & Seminars',
      alt: 'Students attending an expert talk in the seminar hall'
    },
    {
      id: 9,
      url: 'https://vmpkp.com/wp-content/uploads/2025/06/WhatsApp-Image-2025-06-09-at-2.33.57-PM-2.jpeg',
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-2">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-3xl overflow-hidden transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden aspect-[4/3]">
                {!loadedImages[item.id] && (
                  <div className="absolute inset-0 flex items-center justify-center" />
                )}
                <img
                  src={item.url}
                  alt={item.alt}
                  onLoad={() => handleImageLoad(item.id)}
                  className="w-full h-full object-cover transition-transform duration-300 rounded-3xl"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentLifeGallery;
