import React from 'react';
import { Target, Microscope, Lightbulb, Users } from 'lucide-react';

export default function MissionValues() {
  const missions = [
    {
      icon: Target,
      title: "Transformative Education",
      description:
        "We aim to provide a learning experience that integrates advanced research, practical training, and a deep understanding of pharmaceutical sciences.",
    },
    {
      icon: Microscope,
      title: "Ethical & Compassionate Practice",
      description:
        "We nurture students to lead with empathy, integrity, and professionalism—serving patients and communities with genuine care and responsibility.",
    },
    {
      icon: Lightbulb,
      title: "Innovation & Research",
      description:
        "We encourage curiosity, innovation, and evidence-based research that drive progress across the pharmaceutical and healthcare sectors.",
    },
    {
      icon: Users,
      title: "Lifelong Learning & Leadership",
      description:
        "Our mission extends beyond graduation—cultivating lifelong learners and leaders dedicated to improving public health and advancing the pharmacy profession.",
    },
  ];

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-6">
        {/* Top Section - Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start mb-16">
          {/* Left Column - Mission Card */}
          <div className="lg:col-span-3 bg-gray-100 rounded-3xl p-12 order-1 lg:order-none">
            <h2 className="text-4xl font-semibold text-gray-900 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              At YNP College of Pharmacy, we aim to empower students through a
              transformative education that combines advanced research,
              hands-on training, and strong ethical values. We prepare
              compassionate, skilled professionals ready to excel in diverse
              pharmacy settings, lead with integrity, and serve their
              communities. Our mission continues beyond graduation shaping
              lifelong learners and leaders committed to societal well-being.
            </p>
          </div>

          {/* Right Column - Intro Text */}
          <div className="lg:col-span-2 order-2 lg:order-none">
            <h1 className="text-4xl md:text-6xl font-normal text-gray-900 leading-tight tracking-tight">
              Our Mission & Core Values
            </h1>
            <p className="text-gray-600 text-lg mt-4 leading-relaxed">
              Rooted in compassion, research, and excellence, YNP College of
              Pharmacy focuses on transforming students into responsible
              healthcare professionals and visionary leaders who create lasting
              positive change.
            </p>
          </div>
        </div>

        {/* Mission Grid - Four Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-16">
          {missions.map((mission, index) => (
            <div
              key={index}
              className="group transition-transform duration-300 hover:scale-105"
            >
              <mission.icon
                className="text-gray-700 w-12 h-12 mb-4 group-hover:text-blue-600 transition-colors duration-300"
                strokeWidth={1.5}
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {mission.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {mission.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
