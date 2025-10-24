export default function AboutFirmHero() {
  return (
    <div className="min-h-fit my-12 md:my-20 w-full max-w-8xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 bg-white overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.1fr] gap-6 md:gap-8 lg:gap-12">
        {/* Left Column - Content */}
        <div className="p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col justify-center">
          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
            About
          </h1>

          {/* Description */}
          <p className="text-gray-600 text-sm sm:text-base md:text-base lg:text-lg leading-relaxed mb-6 max-w-3xl">
            Established in 2022, YNP College of Pharmacy is a dynamic and emerging institution committed to excellence
            in pharmaceutical education and research. Though young in years, we are guided by a strong vision to become
            a center of academic innovation, professional development, and community impact. From the outset, our focus
            has been on equipping students with the knowledge, skills, and ethical grounding required to meet the
            evolving demands of the healthcare and pharmaceutical sectors. Our curriculum blends core pharmaceutical
            sciences with emerging fields such as clinical research, biotechnology, digital health, and regulatory
            affairs ensuring our graduates are both industry-ready and future focused. Our dedicated faculty members
            bring a mix of academic expertise and practical experience, fostering a learning environment that encourages
            inquiry, critical thinking, and innovation. We emphasize research and hands-on training, giving students
            opportunities to engage with real-world challenges and contribute meaningfully to healthcare solutions.
            Beyond academics, we actively promote leadership, service, and community engagement. Through collaborations
            with industry and healthcare organizations, we provide students with exposure to diverse career paths and
            practical experiences. As we continue to grow, YNP College of Pharmacy remains committed to shaping the
            future of pharmacy education—grounded in scholarship, inspired by service, and driven by a passion to make a
            difference.
          </p>
        </div>

        {/* Right Column - Image */}
        <div className="relative h-64 sm:h-80 md:h-96 lg:h-[700px] flex items-center justify-center p-4 sm:p-6 md:p-8">
          <img
            src="https://i.postimg.cc/xj3mVsvx/image.png"
            alt="Professional portrait of a woman in business attire"
            className="object-cover w-full h-full rounded-3xl"
          />
        </div>
      </div>
    </div>
  )
}
