import React, { useState } from 'react';

export default function AppointmentForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    date: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert('Appointment request submitted successfully!');
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4 mt-10">
      <div className="max-w-7xl w-full bg-white rounded-3xl overflow-hidden">
        <div className="grid md:grid-cols-2 gap-0">
          {/* Left Side - Image Section */}
          <div className="bg-white p-8 md:p-12 flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-normal text-gray-800 mb-2">
              Book an appointment
            </h1>
            <h2 className="text-4xl md:text-5xl font-normal text-gray-800 mb-8">
              Right now !
            </h2>
            
            <div className="relative bg-gray-300 rounded-3xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=700&fit=crop" 
                alt="Professional on phone"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-gray-700 text-white px-4 py-2 rounded text-sm">
                Please fill in this field.
              </div>
            </div>
          </div>

          {/* Right Side - Form Section */}
          <div className="p-8 md:p-12 bg-slate-100 rounded-3xl">
            <div className="space-y-6">
              {/* Name Field */}
              <div>
                <label className="block text-gray-800 font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First name here..."
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border-0 rounded-lg text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Last Name Field */}
              <div>
                <label className="block text-gray-800 font-medium mb-2">
                  Last name
                </label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last name here..."
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border-0 rounded-lg text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-gray-800 font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="EX.name@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border-0 rounded-lg text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Phone Number Field */}
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
                  className="w-full px-4 py-3 bg-gray-50 border-0 rounded-lg text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Date Field */}
              <div>
                <label className="block text-gray-800 font-medium mb-2">
                  Date
                </label>
                <input
                  type="text"
                  name="date"
                  placeholder="DD/MM/YYYY"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border-0 rounded-lg text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-gray-800 font-medium mb-2">
                  Leave Us a Message
                </label>
                <textarea
                  name="message"
                  placeholder="Write Your Message here..."
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 bg-gray-50 border-0 rounded-lg text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-full transition duration-200 shadow-lg"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}