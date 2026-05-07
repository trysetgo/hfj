"use client";

import React, { useState } from "react";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ChevronDown,
  Send,
  CheckCircle,
  AlertCircle,
  Menu,
  X,
} from "lucide-react";

export const contactPageV1DefaultProps = {
  global: {
    primaryColor: "#2563EB",
    secondaryColor: "#111827",
    accentColor: "#7C3AED",
    backgroundColor: "#ffffff",
    surfaceColor: "#F9FAFB",
    textColor: "#4B5563",
    headingColor: "#111827",
    borderRadius: 16,
    sectionPadding: 80,
  },
  header: {
    enabled: true,
    logoText: "Your Company",
    links: ["Home", "Services", "About", "Contact"],
  },
  hero: {
    enabled: true,
    title: "Get in Touch",
    subtitle:
      "We'd love to hear from you. Our friendly team is always here to chat.",
  },
  form: {
    enabled: true,
    enablePhone: true,
    enableSubject: true,
    buttonText: "Send Message",
    successMessage:
      "Thanks! Your message has been sent successfully. We'll be in touch soon.",
  },
  contactInfo: {
    enabled: true,
    email: "contact@example.com",
    phone: "+1 (555) 123-4567",
    address: "123 Business Avenue, Suite 100, Tech City, TC 90210",
    hours: "Mon-Fri from 9am to 5pm EST",
  },
  map: {
    enabled: true,
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d-122.398938!3d37.791557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ3JzI5LjYiTiAxMjLCsDIzJzU2LjIiVw!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus",
  },
  faq: {
    enabled: true,
    title: "Frequently Asked Questions",
    items: [
      {
        q: "How fast do you typically respond?",
        a: "We aim to respond to all inquiries within 24 business hours.",
      },
      {
        q: "Do you offer international support?",
        a: "Yes, we support clients globally across multiple timezones.",
      },
      {
        q: "Can I book a direct consultation?",
        a: "Absolutely. Mention it in your message and we'll send a calendar link.",
      },
    ],
  },
  cta: {
    enabled: true,
    title: "Ready to start your project?",
    subtitle: "Join hundreds of successful companies growing with us.",
    buttonText: "Book a Discovery Call",
  },
  footer: {
    enabled: true,
    text: "© 2026 Your Company. All rights reserved.",
  },
};

const ContactPageV1 = (incomingProps) => {
  const props = incomingProps.props || incomingProps;
  const { isPreviewing, isEditable } = incomingProps;

  const config = {
    global: { ...contactPageV1DefaultProps.global, ...(props.global || {}) },
    header: { ...contactPageV1DefaultProps.header, ...(props.header || {}) },
    hero: { ...contactPageV1DefaultProps.hero, ...(props.hero || {}) },
    form: { ...contactPageV1DefaultProps.form, ...(props.form || {}) },
    contactInfo: {
      ...contactPageV1DefaultProps.contactInfo,
      ...(props.contactInfo || {}),
    },
    map: { ...contactPageV1DefaultProps.map, ...(props.map || {}) },
    faq: { ...contactPageV1DefaultProps.faq, ...(props.faq || {}) },
    cta: { ...contactPageV1DefaultProps.cta, ...(props.cta || {}) },
    footer: { ...contactPageV1DefaultProps.footer, ...(props.footer || {}) },
  };

  const isBuilderMode = isEditable && !isPreviewing;

  // State
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
    message: "",
  });
  const [formState, setFormState] = useState({ status: "idle", errors: {} }); // idle | loading | success | error

  // Handlers
  const handleEditorClick = (e) => {
    if (isBuilderMode) e.preventDefault();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formState.errors[name]) {
      setFormState((prev) => ({
        ...prev,
        errors: { ...prev.errors, [name]: null },
      }));
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Invalid email format";
    }
    if (!formData.message.trim()) errors.message = "Message is required";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isBuilderMode) return;

    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormState({ status: "error", errors });
      return;
    }

    setFormState({ status: "loading", errors: {} });

    // Simulate API call
    setTimeout(() => {
      setFormState({ status: "success", errors: {} });
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "General Inquiry",
        message: "",
      });
      setTimeout(() => setFormState({ status: "idle", errors: {} }), 5000);
    }, 1500);
  };

  const sectionPaddingClass = `py-[${config.global.sectionPadding}px]`;

  return (
    <div
      className="w-full min-h-screen flex flex-col font-sans"
      style={{
        backgroundColor: config.global.backgroundColor,
        color: config.global.textColor,
      }}
    >
      {/* HEADER */}
      {config.header.enabled && (
        <header
          className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md"
          style={{ borderColor: "rgba(0,0,0,0.05)" }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
            <div
              className="text-2xl font-extrabold tracking-tight"
              style={{ color: config.global.primaryColor }}
            >
              {config.header.logoText}
            </div>

            <nav className="hidden md:flex items-center gap-8">
              {config.header.links.map((link, i) => (
                <a
                  key={i}
                  href="#"
                  onClick={handleEditorClick}
                  className="text-sm font-semibold transition-colors hover:opacity-70"
                  style={{ color: config.global.headingColor }}
                >
                  {link}
                </a>
              ))}
            </nav>

            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{ color: config.global.headingColor }}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden border-t bg-white px-4 py-4 space-y-4"
              >
                {config.header.links.map((link, i) => (
                  <a
                    key={i}
                    href="#"
                    onClick={handleEditorClick}
                    className="block text-base font-medium"
                    style={{ color: config.global.headingColor }}
                  >
                    {link}
                  </a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </header>
      )}

      {/* MAIN CONTENT */}
      <main className="flex-1 w-full">
        {/* HERO SECTION */}
        {config.hero.enabled && (
          <section
            className="w-full relative overflow-hidden"
            style={{
              paddingTop: config.global.sectionPadding,
              paddingBottom: config.global.sectionPadding / 2,
              backgroundColor: config.global.surfaceColor,
            }}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6"
                style={{ color: config.global.headingColor }}
              >
                {config.hero.title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
                style={{ color: config.global.textColor }}
              >
                {config.hero.subtitle}
              </motion.p>
            </div>
          </section>
        )}

        {/* CONTACT GRID */}
        <section
          className="w-full"
          style={{ paddingBottom: config.global.sectionPadding }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative -mt-8 z-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
              {/* LEFT: Contact Info & Map */}
              <div className="lg:col-span-5 space-y-8">
                {config.contactInfo.enabled && (
                  <div
                    className="p-8 shadow-xl rounded-2xl border"
                    style={{
                      backgroundColor: "#ffffff",
                      borderColor: "rgba(0,0,0,0.05)",
                      borderRadius: config.global.borderRadius,
                    }}
                  >
                    <h3
                      className="text-2xl font-bold mb-8"
                      style={{ color: config.global.headingColor }}
                    >
                      Contact Information
                    </h3>

                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div
                          className="p-3 rounded-lg"
                          style={{
                            backgroundColor: `${config.global.primaryColor}15`,
                            color: config.global.primaryColor,
                          }}
                        >
                          <Mail size={24} />
                        </div>
                        <div>
                          <p
                            className="text-sm font-semibold uppercase tracking-wider mb-1"
                            style={{ color: config.global.textColor }}
                          >
                            Email Us
                          </p>
                          <a
                            href={`mailto:${config.contactInfo.email}`}
                            onClick={handleEditorClick}
                            className="text-lg font-medium hover:underline"
                            style={{ color: config.global.headingColor }}
                          >
                            {config.contactInfo.email}
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div
                          className="p-3 rounded-lg"
                          style={{
                            backgroundColor: `${config.global.primaryColor}15`,
                            color: config.global.primaryColor,
                          }}
                        >
                          <Phone size={24} />
                        </div>
                        <div>
                          <p
                            className="text-sm font-semibold uppercase tracking-wider mb-1"
                            style={{ color: config.global.textColor }}
                          >
                            Call Us
                          </p>
                          <a
                            href={`tel:${config.contactInfo.phone}`}
                            onClick={handleEditorClick}
                            className="text-lg font-medium hover:underline"
                            style={{ color: config.global.headingColor }}
                          >
                            {config.contactInfo.phone}
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div
                          className="p-3 rounded-lg"
                          style={{
                            backgroundColor: `${config.global.primaryColor}15`,
                            color: config.global.primaryColor,
                          }}
                        >
                          <MapPin size={24} />
                        </div>
                        <div>
                          <p
                            className="text-sm font-semibold uppercase tracking-wider mb-1"
                            style={{ color: config.global.textColor }}
                          >
                            Visit Us
                          </p>
                          <p
                            className="text-lg font-medium leading-snug"
                            style={{ color: config.global.headingColor }}
                          >
                            {config.contactInfo.address}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div
                          className="p-3 rounded-lg"
                          style={{
                            backgroundColor: `${config.global.primaryColor}15`,
                            color: config.global.primaryColor,
                          }}
                        >
                          <Clock size={24} />
                        </div>
                        <div>
                          <p
                            className="text-sm font-semibold uppercase tracking-wider mb-1"
                            style={{ color: config.global.textColor }}
                          >
                            Working Hours
                          </p>
                          <p
                            className="text-lg font-medium"
                            style={{ color: config.global.headingColor }}
                          >
                            {config.contactInfo.hours}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {config.map.enabled && (
                  <div
                    className="rounded-2xl overflow-hidden shadow-xl border"
                    style={{
                      borderColor: "rgba(0,0,0,0.05)",
                      height: "300px",
                      borderRadius: config.global.borderRadius,
                    }}
                  >
                    <iframe
                      src={config.map.embedUrl}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Office Location Map"
                    />
                  </div>
                )}
              </div>

              {/* RIGHT: Form */}
              {config.form.enabled && (
                <div
                  className="lg:col-span-7 p-8 md:p-10 shadow-2xl border"
                  style={{
                    backgroundColor: "#ffffff",
                    borderColor: "rgba(0,0,0,0.05)",
                    borderRadius: config.global.borderRadius,
                  }}
                >
                  <h3
                    className="text-3xl font-extrabold mb-8"
                    style={{ color: config.global.headingColor }}
                  >
                    Send us a message
                  </h3>

                  {formState.status === "success" ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center justify-center text-center py-12 px-6 rounded-xl"
                      style={{
                        backgroundColor: `${config.global.primaryColor}10`,
                      }}
                    >
                      <CheckCircle
                        size={64}
                        style={{ color: config.global.primaryColor }}
                        className="mb-4"
                      />
                      <h4
                        className="text-2xl font-bold mb-2"
                        style={{ color: config.global.headingColor }}
                      >
                        Message Sent!
                      </h4>
                      <p
                        className="text-lg"
                        style={{ color: config.global.textColor }}
                      >
                        {config.form.successMessage}
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label
                            className="text-sm font-semibold"
                            style={{ color: config.global.headingColor }}
                          >
                            Full Name *
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            disabled={formState.status === "loading"}
                            className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:outline-none transition-shadow ${formState.errors.name ? "border-red-500" : "border-gray-200"}`}
                            style={{
                              backgroundColor: config.global.surfaceColor,
                              color: config.global.headingColor,
                            }}
                            placeholder="John Doe"
                          />
                          {formState.errors.name && (
                            <p className="text-red-500 text-xs flex items-center gap-1">
                              <AlertCircle size={12} />
                              {formState.errors.name}
                            </p>
                          )}
                        </div>
                        <div className="space-y-2">
                          <label
                            className="text-sm font-semibold"
                            style={{ color: config.global.headingColor }}
                          >
                            Email Address *
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            disabled={formState.status === "loading"}
                            className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:outline-none transition-shadow ${formState.errors.email ? "border-red-500" : "border-gray-200"}`}
                            style={{
                              backgroundColor: config.global.surfaceColor,
                              color: config.global.headingColor,
                            }}
                            placeholder="john@example.com"
                          />
                          {formState.errors.email && (
                            <p className="text-red-500 text-xs flex items-center gap-1">
                              <AlertCircle size={12} />
                              {formState.errors.email}
                            </p>
                          )}
                        </div>
                      </div>

                      {(config.form.enablePhone ||
                        config.form.enableSubject) && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {config.form.enablePhone && (
                            <div className="space-y-2">
                              <label
                                className="text-sm font-semibold"
                                style={{ color: config.global.headingColor }}
                              >
                                Phone Number
                              </label>
                              <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                disabled={formState.status === "loading"}
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:outline-none transition-shadow"
                                style={{
                                  backgroundColor: config.global.surfaceColor,
                                  color: config.global.headingColor,
                                }}
                                placeholder="+1 (555) 000-0000"
                              />
                            </div>
                          )}
                          {config.form.enableSubject && (
                            <div className="space-y-2">
                              <label
                                className="text-sm font-semibold"
                                style={{ color: config.global.headingColor }}
                              >
                                Subject
                              </label>
                              <select
                                name="subject"
                                value={formData.subject}
                                onChange={handleInputChange}
                                disabled={formState.status === "loading"}
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:outline-none transition-shadow appearance-none"
                                style={{
                                  backgroundColor: config.global.surfaceColor,
                                  color: config.global.headingColor,
                                }}
                              >
                                <option>General Inquiry</option>
                                <option>Sales / Pricing</option>
                                <option>Technical Support</option>
                                <option>Partnership</option>
                              </select>
                            </div>
                          )}
                        </div>
                      )}

                      <div className="space-y-2">
                        <label
                          className="text-sm font-semibold"
                          style={{ color: config.global.headingColor }}
                        >
                          Message *
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          disabled={formState.status === "loading"}
                          rows={5}
                          className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:outline-none transition-shadow resize-none ${formState.errors.message ? "border-red-500" : "border-gray-200"}`}
                          style={{
                            backgroundColor: config.global.surfaceColor,
                            color: config.global.headingColor,
                          }}
                          placeholder="How can we help you?"
                        />
                        {formState.errors.message && (
                          <p className="text-red-500 text-xs flex items-center gap-1">
                            <AlertCircle size={12} />
                            {formState.errors.message}
                          </p>
                        )}
                      </div>

                      <button
                        type="submit"
                        disabled={formState.status === "loading"}
                        className="w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-white text-lg shadow-lg hover:opacity-90 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                        style={{ backgroundColor: config.global.primaryColor }}
                      >
                        {formState.status === "loading"
                          ? "Sending..."
                          : config.form.buttonText}
                        {formState.status !== "loading" && <Send size={20} />}
                      </button>
                    </form>
                  )}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        {config.faq.enabled && (
          <section
            className="w-full"
            style={{
              paddingBottom: config.global.sectionPadding,
              backgroundColor: config.global.backgroundColor,
            }}
          >
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2
                className="text-3xl md:text-4xl font-extrabold text-center mb-10"
                style={{ color: config.global.headingColor }}
              >
                {config.faq.title}
              </h2>
              <div className="space-y-4">
                {config.faq.items.map((item, i) => (
                  <div
                    key={i}
                    className="border rounded-xl overflow-hidden shadow-sm"
                    style={{
                      borderColor: "rgba(0,0,0,0.05)",
                      backgroundColor: config.global.surfaceColor,
                    }}
                  >
                    <button
                      className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    >
                      <span
                        className="font-bold text-lg"
                        style={{ color: config.global.headingColor }}
                      >
                        {item.q}
                      </span>
                      <ChevronDown
                        size={20}
                        className={`transform transition-transform ${openFaq === i ? "rotate-180" : ""}`}
                        style={{ color: config.global.primaryColor }}
                      />
                    </button>
                    <AnimatePresence>
                      {openFaq === i && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div
                            className="px-6 pb-6 pt-0 text-base"
                            style={{ color: config.global.textColor }}
                          >
                            {item.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA SECTION */}
        {config.cta.enabled && (
          <section
            className="w-full text-center"
            style={{
              paddingTop: config.global.sectionPadding,
              paddingBottom: config.global.sectionPadding,
              backgroundColor: config.global.secondaryColor,
            }}
          >
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
                {config.cta.title}
              </h2>
              <p className="text-xl text-gray-300 mb-10">
                {config.cta.subtitle}
              </p>
              <a
                href="#"
                onClick={handleEditorClick}
                className="inline-block px-8 py-4 rounded-xl font-bold text-white text-lg shadow-xl hover:scale-105 transition-transform"
                style={{ backgroundColor: config.global.primaryColor }}
              >
                {config.cta.buttonText}
              </a>
            </div>
          </section>
        )}
      </main>

      {/* FOOTER */}
      {config.footer.enabled && (
        <footer
          className="w-full py-8 border-t text-center"
          style={{
            backgroundColor: config.global.surfaceColor,
            borderColor: "rgba(0,0,0,0.05)",
          }}
        >
          <p
            className="text-sm font-medium"
            style={{ color: config.global.textColor }}
          >
            {config.footer.text}
          </p>
        </footer>
      )}
    </div>
  );
};

export default ContactPageV1;
