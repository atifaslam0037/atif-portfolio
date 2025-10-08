import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import EarthCanvas from "./Earth";

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState(null);

  // ✅ Initialize EmailJS
  useEffect(() => {
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
    if (publicKey) emailjs.init(publicKey);
    else console.warn("⚠️ Missing REACT_APP_EMAILJS_PUBLIC_KEY in .env.local");
  }, []);

  // ✅ Validation
  const validateForm = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    else if (form.name.trim().length < 2)
      newErrors.name = "Name must be at least 2 characters";

    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "Please enter a valid email address";

    if (!form.message.trim()) newErrors.message = "Message is required";
    else if (form.message.trim().length < 10)
      newErrors.message = "Message must be at least 10 characters";

    return newErrors;
  };

  // ✅ Input Change Handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
    if (submitStatus) setSubmitStatus(null);
  };

  // ✅ Submit Form Handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setLoading(true);
    setErrors({});
    setSubmitStatus(null);

    try {
      const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
      const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
      const autoReplyId = process.env.REACT_APP_EMAILJS_AUTO_REPLY_ID;

      if (!serviceId || !templateId || !autoReplyId) {
        throw new Error("Missing EmailJS IDs in .env.local");
      }

      const submittedAt = new Date().toLocaleString();

      const templateParams = {
        from_name: form.name,
        from_email: form.email,
        message: form.message,
        submitted_at: submittedAt,
        to_name: "Atif Aslam",
      };

      // ✅ Send email to YOU (portfolio owner)
      await emailjs.send(serviceId, templateId, templateParams);

      // ✅ Send auto-reply to USER
      await emailjs.send(serviceId, autoReplyId, {
        name: form.name,
        email: form.email,
        message: form.message,
      });

      setLoading(false);
      setSubmitStatus("success");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitStatus(null), 4000);
    } catch (err) {
      console.error("❌ Email sending failed:", err);
      setLoading(false);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus(null), 4000);
    }
  };
  return (
    <section
      id="contact"
      className="w-full min-h-screen bg-gradient-to-b from-[#0b1220] to-[#0a192f] text-gray-30"
    >
      <div className="max-w-[1100px] mx-auto px-6 sm:px-8 py-12 flex flex-col justify-center w-full">
        <div className="relative flex flex-col-reverse xl:flex-row mx-auto gap-10 overflow-hidden w-full">
          {/* Left Side: Contact Form */}
          <div className="flex-[0.75] bg-[#1e293b] p-8 rounded-2xl shadow-lg">
            <p className="text-[#94a3b8] uppercase text-sm tracking-wider mb-2">
              Get in touch
            </p>
            <h3 className="text-white text-3xl font-bold mb-6">Contact.</h3>

            <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-6">
              <label className="flex flex-col">
                <span className="text-white mb-2 font-medium">Your Name</span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="What's your name?"
                  className={`bg-[#0f172a] py-3 px-4 rounded-lg text-white outline-none border ${
                    errors.name ? "border-red-500" : "border-transparent"
                  }`}
                />
                {errors.name && <span className="text-red-400 text-sm mt-1">{errors.name}</span>}
              </label>

              <label className="flex flex-col">
                <span className="text-white mb-2 font-medium">Your Email</span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="What's your email?"
                  className={`bg-[#0f172a] py-3 px-4 rounded-lg text-white outline-none border ${
                    errors.email ? "border-red-500" : "border-transparent"
                  }`}
                />
                {errors.email && <span className="text-red-400 text-sm mt-1">{errors.email}</span>}
              </label>

              <label className="flex flex-col">
                <span className="text-white mb-2 font-medium">Your Message</span>
                <textarea
                  rows="5"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="What do you want to say?"
                  className={`bg-[#0f172a] py-3 px-4 rounded-lg text-white outline-none border ${
                    errors.message ? "border-red-500" : "border-transparent"
                  }`}
                />
                {errors.message && (
                  <span className="text-red-400 text-sm mt-1">{errors.message}</span>
                )}
              </label>

              <button
                type="submit"
                className="bg-[#3b82f6] py-3 px-8 rounded-xl text-white font-semibold shadow-md hover:bg-[#2563eb] transition"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send"}
              </button>

              {submitStatus === "success" && (
                <p className="text-green-400 mt-2">✅ Message sent successfully!</p>
              )}
              {submitStatus === "error" && (
                <p className="text-red-400 mt-2">❌ Failed to send message. Try again later.</p>
              )}
            </form>
          </div>

          {/* Right Side: 3D Earth */}
          <div className="xl:flex-1 xl:h-auto md:h-[500px] h-[350px] content-center">
            <EarthCanvas />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
