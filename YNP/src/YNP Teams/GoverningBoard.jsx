import React from "react";

const trustees = [
  {
    id: 1,
    name: "Mr. Milind Patil",
    position: "Chairman",
    description:
      "Chairman, V.M. Patil Krushi Pratishthan, Asangaon. Mr. Milind Patil provides strategic leadership and vision for the institution’s growth, ensuring the highest standards of education and governance.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Mr. Vikas Patil",
    position: "Vice Chairman",
    description:
      "Vice Chairman, V.M. Patil Krushi Pratishthan, Asangaon. A dedicated educationist committed to institutional excellence and continuous improvement.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Mrs. Trupti Patil",
    position: "CEO",
    description:
      "CEO, V.M. Patil Krushi Pratishthan, Asangaon. She plays a vital role in shaping the administrative and academic policies that drive the college’s success.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "Mr. Lumesh Desai",
    position: "Finance Director",
    description:
      "Finance Director, V.M. Patil Krushi Pratishthan, Asangaon. Oversees financial planning, budgeting, and transparency across institutional operations.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 5,
    name: "Mr. Vilas Raut",
    position: "Secretary",
    description:
      "Secretary, V.M. Patil Krushi Pratishthan, Asangaon. He contributes to institutional coordination, documentation, and policy execution.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 6,
    name: "Dr. Vinod Mohitkar",
    position: "Director of Technical Education, Maharashtra",
    description:
      "A respected education administrator providing valuable guidance to ensure academic standards and compliance with state education frameworks.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 7,
    name: "Dr. M.R. Chitlange",
    position: "Deputy Secretary, MSBTE Region",
    description:
      "An experienced academic leader who brings regulatory expertise and supports curriculum enhancement and quality assurance.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 8,
    name: "Dr. Priyanka Patil",
    position: "Dean & Director, Sigma Institute of Pharmacy, Vadodara",
    description:
      "An educational expert contributing her insights into pharmaceutical education, research innovation, and institutional development.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 9,
    name: "Mr. Vikas Vilasrao Patil",
    position: "Senior Manager, Prosfora Technologies R&D Centre, Navi Mumbai",
    description:
      "An industry expert who bridges academia and industry, enhancing practical learning and professional development opportunities for students.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 10,
    name: "Mr. Sailesh Kokani",
    position: "Assistant Professor, YNP College of Pharmacy, Asangaon",
    description:
      "A subject expert member dedicated to academic excellence and student mentorship in the field of pharmaceutical sciences.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 11,
    name: "Dr. Sanket Dharashivkar",
    position: "Principal, YNP College of Pharmacy, Asangaon",
    description:
      "Serves as the Member Secretary of the Governing Body, ensuring effective coordination and implementation of academic policies.",
    image: "https://via.placeholder.com/150",
  },
];

const BoardOfTrustees = () => {
  return (
    <div className="min-h-screen bg-white px-4 sm:px-6 md:px-16 py-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-medium text-center text-gray-800 mb-4">
          Governing Body
        </h1>

        {/* Subheading about YNP College of Pharmacy */}
        <p className="text-center text-gray-500 text-lg md:text-xl max-w-4xl mx-auto mb-12 leading-relaxed">
          The <span className="">YNP College of Pharmacy</span> operates under
          the guidance of the Governing Body comprising visionary leaders, academic experts, and industry
          professionals from <span className="">V.M. Patil Krushi Pratishthan, Asangaon</span>.
          This body ensures academic excellence, transparency, and the holistic development of students.
        </p>

        <div className="space-y-8">
          {trustees.map((trustee) => (
            <div
              key={trustee.id}
              className="bg-white rounded-3xl  transition-shadow duration-300 p-6 md:p-8"
            >
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <img
                  src={trustee.image}
                  alt={trustee.name}
                  className="w-32 h-32 md:w-96 md:h-96 object-cover bg-slate-100 rounded-3xl flex-shrink-0"
                />
                <div className="flex-1 text-center md:text-left">
                  <h2 className="text-3xl font-semibold text-gray-800 mb-1">
                    {trustee.name}
                  </h2>
                  <p className="text-blue-600 font-medium  mb-3">
                    {trustee.position}
                  </p>
                  <p className="text-gray-700 text-xl leading-relaxed">
                    {trustee.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BoardOfTrustees;
