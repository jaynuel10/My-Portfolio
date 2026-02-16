import { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Twitter,
  Facebook,
  MessageCircle,
  Check,
  AlertCircle,
} from "lucide-react";
import emailjs from "@emailjs/browser";

export default function Contact({ isDark }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // "success", "error", or null

  // Initialize EmailJS (replace with your actual Service ID)
  useEffect(() => {
    emailjs.init("service_4c7e2jz");
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      setStatus({ type: "error", message: "Please fill in all fields" });
      setTimeout(() => setStatus(null), 3000);
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({ type: "error", message: "Please enter a valid email" });
      setTimeout(() => setStatus(null), 3000);
      return;
    }

    setLoading(true);

    try {
      // Send email using EmailJS
      await emailjs.send("LIVKfrELhUMeTejod", "Jay", {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: "johnsonaldoceo100@gmail.com",
      });

      setStatus({
        type: "success",
        message: "Message sent successfully! I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus(null), 5000);
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus({
        type: "error",
        message:
          "Failed to send message. Please try again or contact me directly.",
      });
      setTimeout(() => setStatus(null), 3000);
    } finally {
      setLoading(false);
    }
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/johnson-emmanuel-7a3351133/",
      color: "hover:text-blue-600",
    },
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/jaynuel10",
      color: "hover:text-gray-700",
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://x.com/JaycodeZ_10",
      color: "hover:text-blue-400",
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://www.facebook.com/share/173pKv2riS/",
      color: "hover:text-blue-500",
    },
    {
      name: "WhatsApp",
      icon: MessageCircle,
      url: "#",
      color: "hover:text-green-500",
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:johnsonaldoceo100@gmail.com",
      color: "hover:text-red-500",
    },
  ];

  return (
    <section
      id="contact"
      className={`${isDark ? "bg-gray-900 text-white" : "bg-gradient-to-br from-blue-50 to-indigo-100 text-gray-900"} py-16 sm:py-20 px-4 sm:px-6 transition-colors duration-300`}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center">
          Get In Touch
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 mb-8 sm:mb-12">
          {/* Contact Methods */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
              Contact Information
            </h3>
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start gap-4">
                <Mail className="text-blue-500 flex-shrink-0 mt-1" size={24} />
                <div>
                  <p className="font-semibold">Email</p>
                  <p className={isDark ? "text-gray-300" : "text-gray-600"}>
                    johnsonaldoceo100@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="text-blue-500 flex-shrink-0 mt-1" size={24} />
                <div>
                  <p className="font-semibold">Phone</p>
                  <p className={isDark ? "text-gray-300" : "text-gray-600"}>
                    +234 903 222 4305
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin
                  className="text-blue-500 flex-shrink-0 mt-1"
                  size={24}
                />
                <div>
                  <p className="font-semibold">Location</p>
                  <p className={isDark ? "text-gray-300" : "text-gray-600"}>
                    Nigeria
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Contact Form */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
              Send Me a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                disabled={loading}
                className={`w-full px-4 py-3 sm:py-4 rounded-lg border-2 text-base cursor-text ${
                  isDark
                    ? "bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                    : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                } focus:outline-none focus:border-blue-500 transition-colors disabled:opacity-50`}
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                disabled={loading}
                className={`w-full px-4 py-3 sm:py-4 rounded-lg border-2 text-base cursor-text ${
                  isDark
                    ? "bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                    : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                } focus:outline-none focus:border-blue-500 transition-colors disabled:opacity-50`}
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                disabled={loading}
                className={`w-full px-4 py-3 sm:py-4 rounded-lg border-2 resize-none text-base cursor-text ${
                  isDark
                    ? "bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                    : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                } focus:outline-none focus:border-blue-500 transition-colors disabled:opacity-50`}
              ></textarea>

              {/* Status Message */}
              {status && (
                <div
                  className={`p-3 rounded-lg flex items-center gap-2 text-sm sm:text-base ${
                    status.type === "success"
                      ? isDark
                        ? "bg-green-900 text-green-200"
                        : "bg-green-100 text-green-700"
                      : isDark
                        ? "bg-red-900 text-red-200"
                        : "bg-red-100 text-red-700"
                  }`}
                >
                  {status.type === "success" ? (
                    <Check size={20} />
                  ) : (
                    <AlertCircle size={20} />
                  )}
                  <span>{status.message}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className={`w-full font-bold py-3 sm:py-4 rounded-lg transition-all min-h-12 ${
                  loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-500 hover:bg-blue-600 active:scale-95 cursor-pointer"
                } text-white`}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>

        {/* Social Links */}
        <div
          className={`rounded-lg p-6 sm:p-8 transition-all duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer ${
            isDark ? "bg-gray-800" : "bg-white"
          }`}
          style={!isDark ? { backgroundColor: "#ffffff" } : {}}
        >
          <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-center">
            Connect With Me
          </h3>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {socialLinks.map((social, idx) => {
              const Icon = social.icon;
              return (
                <a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={social.name}
                  className={`p-3 sm:p-4 rounded-full transition-all duration-300 min-h-12 min-w-12 flex items-center justify-center transform hover:scale-125 hover:shadow-lg cursor-pointer ${
                    isDark
                      ? "bg-gray-700 text-gray-300 hover:bg-blue-500 hover:text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-blue-500 hover:text-white"
                  }`}
                >
                  <Icon size={28} />
                </a>
              );
            })}
          </div>
          <p
            className={`text-center mt-6 sm:mt-8 text-sm sm:text-base ${isDark ? "text-gray-300" : "text-gray-600"}`}
          >
            Feel free to reach out through any platform. I'm always open to new
            opportunities and collaborations!
          </p>
        </div>
      </div>
    </section>
  );
}
