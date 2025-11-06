import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'

export default function AppointmentForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    location: '',
    course: '',
    message: ''
  })

  const [result, setResult] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setResult('Sending...')

    const data = new FormData()
    data.append('access_key', 'ece892b2-6349-43b0-9a7d-ebba06392780')
    Object.entries(formData).forEach(([key, value]) => data.append(key, value))

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: data
      })

      const resData = await response.json()
      if (resData.success) {
        setResult('Form Submitted Successfully!')
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          location: '',
          course: '',
          message: ''
        })
      } else {
        setResult('Error submitting form. Please try again.')
      }
    } catch (error) {
      console.error(error)
      setResult('Error submitting form. Please try again.')
    }
  }

  const mapSrc = `https://www.google.com/maps/embed?pb=!1m27!1m12!1m3!1d3751.6409484156725!2d72.74409537547236!3d19.897377625673506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m12!3e6!4m4!1s0x3be721f81fc256cf%3A0x72a0be29a152e779!3m2!1d19.8973244!2d72.7466663!4m5!1s0x3be721f81fc256cf%3A0x72a0be29a152e779!2sRoad%2C%20Raipada%2C%20Asangaon%2C%20Asangaon%20Bk.%2C%20Maharashtra%20401103!3m2!1d19.8973244!2d72.7466663!5e0!3m2!1sen!2sin!4v1761284206549!5m2!1sen!2sin`

  return (
    <>
      {/* ✅ SEO Meta Tags */}
      <Helmet>
        <title>Contact & Admissions | YNP College of Pharmacy, Palghar</title>
        <meta
          name="description"
          content="Get in touch with YNP College of Pharmacy, Palghar. Schedule an appointment or enquire about B.Pharm and D.Pharm admissions using our online contact form."
        />
        <meta
          name="keywords"
          content="YNP College of Pharmacy, Palghar, Contact Form, Pharmacy Admission, B.Pharm Admission, D.Pharm Admission, Appointment Form"
        />
        <meta property="og:title" content="Contact Us - YNP College of Pharmacy" />
        <meta
          property="og:description"
          content="Reach out to YNP College of Pharmacy for course details, admissions, or any queries. Our team is here to assist you."
        />
        <meta property="og:image" content="/images/college-campus.jpg" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* ✅ Page Layout */}
      <div className="min-h-screen bg-white flex items-center justify-center p-4 mt-10">
        <div className="max-w-7xl w-full bg-white rounded-3xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Left Side - Google Map */}
            <div className="bg-white p-8 md:p-12 flex flex-col justify-center">
              <div className="mb-6 text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-semibold text-gray-800">
                  Visit Our Location
                </h1>
                <p className="text-gray-600 mt-2 text-lg">
                  Find us easily using the map below.
                </p>
              </div>
              <div className="relative rounded-3xl overflow-hidden h-full">
                <iframe
                  title="Asangaon, Maharashtra - Google Map"
                  src={mapSrc}
                  width="100%"
                  height="450"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-[300px] sm:h-[400px] md:h-full rounded-3xl"
                />
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="p-8 md:p-12 bg-slate-100 rounded-3xl">
              <form className="space-y-6" onSubmit={handleSubmit}>
                {/* Full Name */}
                <div>
                  <label className="block text-gray-800 font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Enter your full name..."
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border-0 rounded-full text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-gray-800 font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Ex. name@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border-0 rounded-full text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-gray-800 font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Ex. (225) 555-0118"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border-0 rounded-full text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                {/* Location */}
                <div>
                  <label className="block text-gray-800 font-medium mb-2">
                    Location
                  </label>
                  <input
                    type="text"
                    name="location"
                    placeholder="Enter your location..."
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border-0 rounded-full text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                {/* Course Selection */}
                <div>
                  <label className="block text-gray-800 font-medium mb-2">
                    Course Selection
                  </label>
                  <select
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border-0 rounded-full text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select a course</option>
                    <option value="F.Y. D.Pharm">F.Y. D.Pharm</option>
                    <option value="F.Y. B.Pharm">F.Y. B.Pharm</option>
                    <option value="Direct Second Year">Direct Second Year</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-gray-800 font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    placeholder="Write your message here..."
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-3 bg-gray-50 border-0 rounded-3xl text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-full transition duration-200 shadow-lg"
                >
                  Submit
                </button>

                {/* Result Message */}
                {result && <p className="text-center mt-2 text-gray-700">{result}</p>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
