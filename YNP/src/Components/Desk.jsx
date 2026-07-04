import React, { useState } from 'react';

const LeadershipMessagesSection = () => {
  const messages = [
    {
      id: 1,
      name: "Milind Patil",
      position: "Chairman",
      location: "YNP College of Pharmacy",
      image: "https://i.postimg.cc/mgh2qhry/Whats-App-Image-2025-10-23-at-11-57-16-AM.jpg",
      quote: "At YNP College of Pharmacy, we are committed to nurturing young minds to become competent and ethical pharmacists. Our focus is on quality education, research, and community service."
    },
    {
      id: 2,
      name: "Vikas Patil",
      position: "Vice Chairman",
      location: "YNP College of Pharmacy",
      image: "https://i.postimg.cc/KzGWq3G9/image.png",
      quote: "We strive to provide an environment that encourages innovation, critical thinking, and professional growth. Our vision is to shape the future of pharmacy education in India."
    },
        {
      id: 3,
      name: "Trupti Patil",
      position: "CEO",
      location: "YNP College of Pharmacy",
      image: "https://i.postimg.cc/bwFmk97N/Chat-GPT-Image-Jul-4-2026-02-03-59-PM.png",
      quote: "Through a blend of academic rigor and practical exposure, we empower our students to become leaders in pharmacy, equipped to meet the evolving challenges of healthcare."
    },
    {
      id: 4,
      name: "Lumesh Desai",
      position: "Treasurer",
      location: "YNP College of Pharmacy",
      image: "https://i.postimg.cc/Xq75sTFS/image.png",
      quote: "Our commitment to maintaining excellent infrastructure, state-of-the-art laboratories, and student welfare ensures that every learner achieves their potential."
    },
    {
      id: 5,
      name: "Vilas Raut",
      position: "Secretary",
      location: "YNP College of Pharmacy",
      image: "https://i.postimg.cc/k4TQnBxw/Whats-App-Image-2025-10-24-at-1-16-12-PM.jpg",
      quote: "V.M. Patil Krushi Pratishthan, Asangaon. He contributes to institutional coordination, documentation, and policy execution."
    },
  ];

  const [activeMessage, setActiveMessage] = useState(messages[0]);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleMessageClick = (message) => {
    if (message.id === activeMessage.id) return;

    setIsTransitioning(true);
    setTimeout(() => {
      setActiveMessage(message);
      setIsTransitioning(false);
    }, 150);
  };

  return (
    <div className="min-h-fit bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-medium text-center text-gray-900 mb-16">
          Messages from Our Leadership
        </h1>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Leader Image - Left */}
          <div className="lg:col-span-4 flex justify-center lg:justify-start">
            <div className={`transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'} w-full`}>
              <img
                src={activeMessage.image}
                alt={activeMessage.name}
                className="w-full h-[500px] rounded-3xl object-cover"
              />
            </div>
          </div>

          {/* Message Card - Center */}
          <div className="lg:col-span-4">
            <div className={`bg-gray-100 h-[500px] rounded-3xl p-10 relative transition-opacity duration-300 flex flex-col ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
              <p className="text-gray-700 text-lg leading-relaxed">
                {activeMessage.quote}
              </p>
              <div className="mt-auto pt-6">
                <div className="font-medium text-xl text-gray-900">{activeMessage.name}</div>
                <div className="text-gray-600">{activeMessage.position}</div>
              </div>
            </div>
          </div>

          {/* Leadership List - Right */}
          <div className="lg:col-span-4">
            <div className="h-[500px] flex flex-col justify-between space-y-4">
              {messages.map((message) => (
                <button
                  key={message.id}
                  onClick={() => handleMessageClick(message)}
                  className={`w-full text-left bg-gray-200 rounded-2xl p-5 transition-all duration-200 flex-1`}
                >
                  <div className="font-normal text-xl text-gray-900 mb-1">
                    {message.name}, {message.position}
                  </div>
                  <div className="text-md text-gray-600">
                    {message.location}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadershipMessagesSection;
