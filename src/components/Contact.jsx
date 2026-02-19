import { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );

      const data = await response.json();
      alert(data.message);

      if (data.success) {
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      }
    } catch (error) {
      alert("Something went wrong!", error);
    }
  };

  return (
    <section id="contact" className="py-24 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-4xl font-bold mb-12 border-b-4 border-blue-500 inline-block pb-2">
          Contact Me
        </h2>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Side - Contact Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-blue-500">
              Let's Connect
            </h3>

            <p className="text-gray-400 leading-7">
              I'm open to backend development opportunities, internships, and
              collaborations. Feel free to reach out.
            </p>

            <div className="space-y-6 text-gray-300 text-lg">
              <div className="flex items-center space-x-4">
                <FaEnvelope className="text-blue-500 text-xl" />
                <a
                  href="mailto:gourav.gilhare2023@ssipmt.com"
                  className="hover:text-blue-500 transition"
                >
                  gourav.gilhare2023@ssipmt.com
                </a>
              </div>

              <div className="flex items-center space-x-4">
                <FaPhoneAlt className="text-blue-500 text-xl" />
                <span>+91 81030 13661</span>
              </div>

              <div className="flex items-center space-x-4">
                <FaMapMarkerAlt className="text-blue-500 text-xl" />
                <span>Raipur, Chhattisgarh, India</span>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-gray-900 p-8 rounded-2xl shadow-lg space-y-6"
          >
            {/* Name */}
            <div>
              <label className="block mb-2 text-gray-400">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your name"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-2 text-gray-400">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block mb-2 text-gray-400">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full p-3 rounded-lg bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Write your message..."
              ></textarea>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 py-3 rounded-lg font-semibold hover:bg-blue-600 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
