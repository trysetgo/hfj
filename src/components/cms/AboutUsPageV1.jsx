"use client";

import React from "react";
import { motion } from "framer-motion";

export const aboutUsPageDefaultProps = {
  global: {
    primaryColor: "#2563EB",
    secondaryColor: "#111827",
    accentColor: "#9333EA",
    backgroundColor: "#ffffff",
    textColor: "#1f2937",
    fontFamily: "sans-serif",
  },
  sections: {
    header: {
      enabled: true,
      content: {
        logo: "Aura",
        links: ["Our Story", "Mission", "Team", "Careers"],
      },
      style: { backgroundColor: "#ffffff", textColor: "#111827" },
      layout: { padding: 20 },
    },
    hero: {
      enabled: true,
      content: {
        title: "We Build Experiences That Matter",
        subtitle:
          "Driven by passion, powered by innovation. We are shaping the future of digital experiences.",
        cta: "Explore Our Work",
      },
      style: {
        backgroundColor: "#f9fafb",
        textColor: "#111827",
        primaryButton: "#2563EB",
      },
      layout: { padding: 120, alignment: "center" },
      animation: { enabled: true, type: "fade-up", duration: 0.8 },
    },
    story: {
      enabled: true,
      content: {
        title: "Our Story",
        story:
          "It started with a simple idea: technology should empower people, not overwhelm them. Since our founding, we've remained dedicated to building tools that foster creativity and solve real-world problems. Every product we design is a testament to our commitment to quality, accessibility, and human-centric design.",
        image:
          "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
      },
      style: { backgroundColor: "#ffffff", textColor: "#1f2937" },
      layout: { padding: 96, imagePosition: "right" },
      animation: { enabled: true },
    },
    mission: {
      enabled: true,
      content: {
        title: "Mission & Vision",
        mission:
          "To accelerate the world's transition to intuitive digital ecosystems.",
        vision:
          "A world where technology operates seamlessly in the background, empowering human creativity.",
      },
      style: {
        backgroundColor: "#111827",
        textColor: "#f9fafb",
        cardBg: "#1f2937",
      },
      layout: { padding: 96 },
      animation: { enabled: true },
    },
    services: {
      enabled: true,
      content: {
        title: "Our Services",
        items: [
          {
            title: "Web Development",
            description: "Modern and responsive websites built for scale.",
          },
          {
            title: "UI/UX Design",
            description:
              "Intuitive and beautiful interfaces designed for users.",
          },
          {
            title: "Digital Strategy",
            description:
              "Grow your online presence with data-driven marketing.",
          },
        ],
      },
      style: {
        backgroundColor: "#f9fafb",
        textColor: "#111827",
        cardBg: "#ffffff",
        iconColor: "#2563EB",
      },
      layout: { padding: 96, columns: 3 },
      animation: { enabled: true },
    },
    timeline: {
      enabled: true,
      content: {
        title: "Our Journey",
        events: [
          {
            year: "2018",
            title: "The Beginning",
            description: "Founded in a small garage.",
          },
          {
            year: "2020",
            title: "First Milestone",
            description: "Reached 10,000 active users.",
          },
          {
            year: "2023",
            title: "Global Expansion",
            description: "Opened offices in London and Tokyo.",
          },
        ],
      },
      style: {
        backgroundColor: "#f9fafb",
        textColor: "#1f2937",
        accentColor: "#2563EB",
      },
      layout: { padding: 96 },
      animation: { enabled: true },
    },
    team: {
      enabled: true,
      content: {
        title: "Meet the Team",
        members: [
          {
            name: "Alice Johnson",
            role: "CEO & Founder",
            image:
              "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80",
          },
          {
            name: "Bob Smith",
            role: "CTO",
            image:
              "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
          },
          {
            name: "Charlie Davis",
            role: "Head of Design",
            image:
              "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&q=80",
          },
        ],
      },
      style: { backgroundColor: "#ffffff", textColor: "#1f2937" },
      layout: { padding: 96, columns: 3 },
      animation: { enabled: true },
    },
    stats: {
      enabled: true,
      content: {
        items: [
          { label: "Active Users", value: "2M+" },
          { label: "Countries", value: "45" },
          { label: "Team Members", value: "150+" },
        ],
      },
      style: { backgroundColor: "#2563EB", textColor: "#ffffff" },
      layout: { padding: 80 },
      animation: { enabled: true },
    },
    testimonials: {
      enabled: true,
      content: {
        title: "What They Say",
        items: [
          {
            quote:
              "This company completely transformed our workflow. Highly recommended!",
            author: "Sarah Jenkins, VP Marketing",
          },
          {
            quote:
              "The attention to detail and customer support is unparalleled.",
            author: "David Chen, Startup Founder",
          },
        ],
      },
      style: {
        backgroundColor: "#f9fafb",
        textColor: "#111827",
        cardBg: "#ffffff",
      },
      layout: { padding: 96 },
      animation: { enabled: true },
    },
    values: {
      enabled: true,
      content: {
        title: "Our Core Values",
        items: [
          { title: "Integrity", description: "We do the right thing, always." },
          {
            title: "Innovation",
            description: "We push boundaries and challenge the status quo.",
          },
          {
            title: "Empathy",
            description: "We listen, understand, and care about our users.",
          },
        ],
      },
      style: { backgroundColor: "#ffffff", textColor: "#111827" },
      layout: { padding: 96 },
      animation: { enabled: true },
    },
    cta: {
      enabled: true,
      content: {
        title: "Ready to Build Together?",
        subtitle: "Join us on our mission to create exceptional experiences.",
        buttonText: "Get in Touch",
      },
      style: {
        backgroundColor: "#111827",
        textColor: "#ffffff",
        buttonBg: "#9333EA",
      },
      layout: { padding: 120 },
      animation: { enabled: true },
    },
    footer: {
      enabled: true,
      content: { text: "© 2026 Your Company. All rights reserved." },
      style: { backgroundColor: "#ffffff", textColor: "#6b7280" },
      layout: { padding: 40 },
    },
  },
};

const AboutUsPageV1 = (incomingProps) => {
  const props = incomingProps.props || incomingProps;
  const { isPreviewing, isEditable } = incomingProps;

  // Merge default props with incoming to prevent crashes
  const config = {
    global: { ...aboutUsPageDefaultProps.global, ...(props.global || {}) },
    sections: {
      header: {
        ...aboutUsPageDefaultProps.sections.header,
        ...(props.sections?.header || {}),
      },
      hero: {
        ...aboutUsPageDefaultProps.sections.hero,
        ...(props.sections?.hero || {}),
      },
      story: {
        ...aboutUsPageDefaultProps.sections.story,
        ...(props.sections?.story || {}),
      },
      mission: {
        ...aboutUsPageDefaultProps.sections.mission,
        ...(props.sections?.mission || {}),
      },
      services: {
        ...aboutUsPageDefaultProps.sections.services,
        ...(props.sections?.services || {}),
      },
      timeline: {
        ...aboutUsPageDefaultProps.sections.timeline,
        ...(props.sections?.timeline || {}),
      },
      team: {
        ...aboutUsPageDefaultProps.sections.team,
        ...(props.sections?.team || {}),
      },
      stats: {
        ...aboutUsPageDefaultProps.sections.stats,
        ...(props.sections?.stats || {}),
      },
      testimonials: {
        ...aboutUsPageDefaultProps.sections.testimonials,
        ...(props.sections?.testimonials || {}),
      },
      values: {
        ...aboutUsPageDefaultProps.sections.values,
        ...(props.sections?.values || {}),
      },
      cta: {
        ...aboutUsPageDefaultProps.sections.cta,
        ...(props.sections?.cta || {}),
      },
      footer: {
        ...aboutUsPageDefaultProps.sections.footer,
        ...(props.sections?.footer || {}),
      },
    },
  };

  const isAnim = (sectionKey) => {
    const sec = config.sections[sectionKey];
    return sec?.animation?.enabled && !isEditable;
  };

  const animProps = (sectionKey, delay = 0) => {
    if (!isAnim(sectionKey)) return {};
    return {
      initial: { opacity: 0, y: 30 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-50px" },
      transition: {
        duration: config.sections[sectionKey].animation?.duration || 0.6,
        delay,
      },
    };
  };

  return (
    <div
      style={{
        fontFamily: config.global.fontFamily,
        backgroundColor: config.global.backgroundColor,
      }}
      className="w-full overflow-hidden"
    >
      {/* Header */}
      {config.sections.header.enabled && (
        <header
          className="sticky top-0 z-50 w-full border-b border-gray-200/20 backdrop-blur-md"
          style={{
            backgroundColor: `${config.sections.header.style.backgroundColor}F2`,
            color: config.sections.header.style.textColor,
            padding: `${config.sections.header.layout.padding}px 0`,
          }}
        >
          <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
            <div className="text-2xl font-bold tracking-tighter">
              {config.sections.header.content.logo}
            </div>
            <nav className="hidden md:flex gap-8">
              {config.sections.header.content.links.map((link, i) => (
                <a
                  key={i}
                  href="#"
                  className="text-sm font-medium opacity-80 hover:opacity-100 transition-opacity"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>
        </header>
      )}

      {/* Hero Section */}
      {config.sections.hero.enabled && (
        <section
          style={{
            backgroundColor: config.sections.hero.style.backgroundColor,
            color: config.sections.hero.style.textColor,
            padding: `${config.sections.hero.layout.padding}px 0`,
          }}
          className={`relative w-full ${config.sections.hero.layout.alignment === "center" ? "text-center" : "text-left"}`}
        >
          <motion.div
            {...animProps("hero")}
            className="max-w-5xl mx-auto px-6 flex flex-col items-center"
          >
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
              {config.sections.hero.content.title}
            </h1>
            <p className="text-xl md:text-2xl opacity-80 max-w-3xl mb-10 leading-relaxed">
              {config.sections.hero.content.subtitle}
            </p>
            <button
              style={{
                backgroundColor: config.sections.hero.style.primaryButton,
              }}
              className="px-8 py-4 rounded-full text-white font-semibold text-lg hover:shadow-lg transition-transform hover:-translate-y-1"
            >
              {config.sections.hero.content.cta}
            </button>
          </motion.div>
        </section>
      )}

      {/* Story Section */}
      {config.sections.story.enabled && (
        <section
          style={{
            backgroundColor: config.sections.story.style.backgroundColor,
            color: config.sections.story.style.textColor,
            padding: `${config.sections.story.layout.padding}px 0`,
          }}
        >
          <div
            className={`max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center ${config.sections.story.layout.imagePosition === "left" ? "md:flex-row-reverse" : ""}`}
          >
            <motion.div
              {...animProps("story", 0.1)}
              className={`${config.sections.story.layout.imagePosition === "left" ? "md:order-2" : ""}`}
            >
              <h2 className="text-4xl font-bold mb-6">
                {config.sections.story.content.title}
              </h2>
              <p className="text-lg opacity-80 leading-relaxed whitespace-pre-line">
                {config.sections.story.content.story}
              </p>
            </motion.div>
            <motion.div
              {...animProps("story", 0.3)}
              className={`${config.sections.story.layout.imagePosition === "left" ? "md:order-1" : ""}`}
            >
              <img
                src={config.sections.story.content.image}
                alt="Our Story"
                className="w-full h-auto rounded-3xl shadow-2xl object-cover aspect-[4/3]"
              />
            </motion.div>
          </div>
        </section>
      )}

      {/* Mission & Vision Section */}
      {config.sections.mission.enabled && (
        <section
          style={{
            backgroundColor: config.sections.mission.style.backgroundColor,
            color: config.sections.mission.style.textColor,
            padding: `${config.sections.mission.layout.padding}px 0`,
          }}
        >
          <div className="max-w-7xl mx-auto px-6">
            <motion.h2
              {...animProps("mission")}
              className="text-4xl font-bold text-center mb-16"
            >
              {config.sections.mission.content.title}
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                {...animProps("mission", 0.1)}
                style={{
                  backgroundColor: config.sections.mission.style.cardBg,
                }}
                className="p-12 rounded-3xl shadow-xl"
              >
                <h3 className="text-2xl font-bold mb-4 opacity-90">
                  Our Mission
                </h3>
                <p className="text-xl opacity-80 leading-relaxed">
                  {config.sections.mission.content.mission}
                </p>
              </motion.div>
              <motion.div
                {...animProps("mission", 0.2)}
                style={{
                  backgroundColor: config.sections.mission.style.cardBg,
                }}
                className="p-12 rounded-3xl shadow-xl"
              >
                <h3 className="text-2xl font-bold mb-4 opacity-90">
                  Our Vision
                </h3>
                <p className="text-xl opacity-80 leading-relaxed">
                  {config.sections.mission.content.vision}
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* Services Section */}
      {config.sections.services.enabled && (
        <section
          style={{
            backgroundColor: config.sections.services.style.backgroundColor,
            color: config.sections.services.style.textColor,
            padding: `${config.sections.services.layout.padding}px 0`,
          }}
        >
          <div className="max-w-7xl mx-auto px-6">
            <motion.h2
              {...animProps("services")}
              className="text-4xl font-bold text-center mb-16"
            >
              {config.sections.services.content.title}
            </motion.h2>
            <div
              className={`grid grid-cols-1 md:grid-cols-${config.sections.services.layout.columns} gap-8`}
            >
              {config.sections.services.content.items.map((service, idx) => (
                <motion.div
                  key={idx}
                  {...animProps("services", idx * 0.1)}
                  style={{
                    backgroundColor: config.sections.services.style.cardBg,
                  }}
                  className="p-8 rounded-2xl shadow-sm border border-gray-100"
                >
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mb-6"
                    style={{
                      backgroundColor: `${config.sections.services.style.iconColor}15`,
                      color: config.sections.services.style.iconColor,
                    }}
                  >
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-lg opacity-80 leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Timeline Section */}
      {config.sections.timeline.enabled && (
        <section
          style={{
            backgroundColor: config.sections.timeline.style.backgroundColor,
            color: config.sections.timeline.style.textColor,
            padding: `${config.sections.timeline.layout.padding}px 0`,
          }}
        >
          <div className="max-w-4xl mx-auto px-6">
            <motion.h2
              {...animProps("timeline")}
              className="text-4xl font-bold text-center mb-16"
            >
              {config.sections.timeline.content.title}
            </motion.h2>
            <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 before:to-transparent">
              {config.sections.timeline.content.events.map((event, idx) => (
                <motion.div
                  key={idx}
                  {...animProps("timeline", idx * 0.1)}
                  className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                >
                  <div
                    className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-blue-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10"
                    style={{
                      backgroundColor:
                        config.sections.timeline.style.accentColor,
                    }}
                  ></div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl shadow-lg bg-white border border-gray-100">
                    <div
                      className="font-bold text-xl mb-1"
                      style={{
                        color: config.sections.timeline.style.accentColor,
                      }}
                    >
                      {event.year}
                    </div>
                    <h4 className="text-lg font-bold mb-2 text-gray-900">
                      {event.title}
                    </h4>
                    <p className="text-gray-600">{event.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Team Section */}
      {config.sections.team.enabled && (
        <section
          style={{
            backgroundColor: config.sections.team.style.backgroundColor,
            color: config.sections.team.style.textColor,
            padding: `${config.sections.team.layout.padding}px 0`,
          }}
        >
          <div className="max-w-7xl mx-auto px-6">
            <motion.h2
              {...animProps("team")}
              className="text-4xl font-bold text-center mb-16"
            >
              {config.sections.team.content.title}
            </motion.h2>
            <div
              className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-${config.sections.team.layout.columns} gap-12`}
            >
              {config.sections.team.content.members.map((member, idx) => (
                <motion.div
                  key={idx}
                  {...animProps("team", idx * 0.1)}
                  className="group flex flex-col items-center text-center"
                >
                  <div className="w-48 h-48 mb-6 overflow-hidden rounded-full shadow-lg border-4 border-white">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
                    />
                  </div>
                  <h4 className="text-2xl font-bold mb-1">{member.name}</h4>
                  <p className="text-lg opacity-70">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Stats Section */}
      {config.sections.stats.enabled && (
        <section
          style={{
            backgroundColor: config.sections.stats.style.backgroundColor,
            color: config.sections.stats.style.textColor,
            padding: `${config.sections.stats.layout.padding}px 0`,
          }}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/20">
              {config.sections.stats.content.items.map((stat, idx) => (
                <motion.div
                  key={idx}
                  {...animProps("stats", idx * 0.1)}
                  className="py-6 md:py-0"
                >
                  <div className="text-5xl md:text-7xl font-extrabold mb-2 tracking-tighter">
                    {stat.value}
                  </div>
                  <div className="text-lg md:text-xl font-medium opacity-80">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Testimonials */}
      {config.sections.testimonials.enabled && (
        <section
          style={{
            backgroundColor: config.sections.testimonials.style.backgroundColor,
            color: config.sections.testimonials.style.textColor,
            padding: `${config.sections.testimonials.layout.padding}px 0`,
          }}
        >
          <div className="max-w-7xl mx-auto px-6">
            <motion.h2
              {...animProps("testimonials")}
              className="text-4xl font-bold text-center mb-16"
            >
              {config.sections.testimonials.content.title}
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {config.sections.testimonials.content.items.map(
                (testimonial, idx) => (
                  <motion.div
                    key={idx}
                    {...animProps("testimonials", idx * 0.1)}
                    style={{
                      backgroundColor:
                        config.sections.testimonials.style.cardBg,
                    }}
                    className="p-10 rounded-3xl shadow-sm border border-gray-100"
                  >
                    <svg
                      className="w-10 h-10 text-gray-300 mb-6"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                    >
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    <p className="text-xl font-medium leading-relaxed mb-6">
                      "{testimonial.quote}"
                    </p>
                    <div className="font-semibold opacity-70">
                      — {testimonial.author}
                    </div>
                  </motion.div>
                ),
              )}
            </div>
          </div>
        </section>
      )}

      {/* Values Section */}
      {config.sections.values.enabled && (
        <section
          style={{
            backgroundColor: config.sections.values.style.backgroundColor,
            color: config.sections.values.style.textColor,
            padding: `${config.sections.values.layout.padding}px 0`,
          }}
        >
          <div className="max-w-7xl mx-auto px-6">
            <motion.h2
              {...animProps("values")}
              className="text-4xl font-bold text-center mb-16"
            >
              {config.sections.values.content.title}
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {config.sections.values.content.items.map((value, idx) => (
                <motion.div
                  key={idx}
                  {...animProps("values", idx * 0.1)}
                  className="text-center"
                >
                  <div className="w-16 h-16 mx-auto bg-gray-100 text-gray-800 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
                  <p className="text-lg opacity-75">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      {config.sections.cta.enabled && (
        <section
          style={{
            backgroundColor: config.sections.cta.style.backgroundColor,
            color: config.sections.cta.style.textColor,
            padding: `${config.sections.cta.layout.padding}px 0`,
          }}
        >
          <motion.div
            {...animProps("cta")}
            className="max-w-4xl mx-auto px-6 text-center"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              {config.sections.cta.content.title}
            </h2>
            <p className="text-xl md:text-2xl opacity-80 mb-10">
              {config.sections.cta.content.subtitle}
            </p>
            <button
              style={{ backgroundColor: config.sections.cta.style.buttonBg }}
              className="px-10 py-5 rounded-full text-white font-bold text-xl shadow-xl hover:scale-105 transition-transform"
            >
              {config.sections.cta.content.buttonText}
            </button>
          </motion.div>
        </section>
      )}

      {/* Footer */}
      {config.sections.footer.enabled && (
        <footer
          style={{
            backgroundColor: config.sections.footer.style.backgroundColor,
            color: config.sections.footer.style.textColor,
            padding: `${config.sections.footer.layout.padding}px 0`,
          }}
          className="border-t border-gray-200"
        >
          <div className="max-w-7xl mx-auto px-6 text-center font-medium">
            {config.sections.footer.content.text}
          </div>
        </footer>
      )}
    </div>
  );
};

export default AboutUsPageV1;
