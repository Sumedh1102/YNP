import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async' // ✅ Import Helmet

const StudentLifeGallery = () => {
  const galleryItems = [
    {
      id: 1,
      url: 'https://i.postimg.cc/fyGCMwL6/Events.png',
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
      url: 'https://i.postimg.cc/x1ywpZpQ/Whats-App-Image-2025-06-09-at-2-31-27-PM-1.jpg',
      title: 'Research Presentation & Poster Session',
      alt: 'Students presenting pharmaceutical research at academic event'
    },
    {
      id: 4,
      url: 'https://i.postimg.cc/5N8TjGVw/image.png',
      title: 'Cultural Festival – “PharmVision”',
      alt: 'Students performing during annual cultural and technical fest'
    },
    {
      id: 5,
      url: 'https://i.postimg.cc/1RqYYT48/image.png',
      title: 'Sports & Fitness Activities',
      alt: 'Students participating in outdoor sports and games'
    },
    {
      id: 6,
      url: 'https://i.postimg.cc/VN2Wqf9f/image.png',
      title: 'Community Health Camp',
      alt: 'YNP pharmacy students volunteering in rural medical outreach'
    },
    {
      id: 7,
      url: 'https://i.postimg.cc/Sxs6H2D4/image.png',
      title: 'Campus Life & Friendships',
      alt: 'Students relaxing and enjoying time on campus grounds'
    },
    {
      id: 8,
      url: 'https://i.postimg.cc/SQfcs7Pj/image.png',
      title: 'Guest Lectures & Seminars',
      alt: 'Students attending an expert talk in the seminar hall'
    },
    {
      id: 9,
      url: 'https://i.postimg.cc/PxzvCT2m/image.png',
      title: 'Library & Self-Study Zone',
      alt: 'Students engaged in reading and research in the YNP central library'
    }
  ]

  const [loadedImages, setLoadedImages] = useState({})

  const handleImageLoad = (id) => {
    setLoadedImages((prev) => ({ ...prev, [id]: true }))
  }

  return (
    <>
      <Helmet>
        <title>Student Life | YNP College of Pharmacy, Palghar</title>
        <meta
          name="description"
          content="Explore student life at YNP College of Pharmacy, Palghar. From labs and lectures to fests, sports, and community service, experience the vibrant life on campus."
        />
        <meta
          name="keywords"
          content="YNP College of Pharmacy, Palghar, Student Life, Campus Activities, Pharmacy College Events, Cultural Fest, Pharmacy Students"
        />
        <meta property="og:title" content="Student Life - YNP College of Pharmacy" />
        <meta
          property="og:description"
          content="Discover the vibrant student life at YNP College of Pharmacy, Palghar — where education meets fun through cultural events, sports, and learning experiences."
        />
        <meta property="og:image" content="/images/student-life-gallery.jpg" />
        <meta property="og:type" content="website" />
      </Helmet>

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
    </>
  )
}

export default StudentLifeGallery
