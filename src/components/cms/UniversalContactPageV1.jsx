"use client";

import React, { useMemo, useState } from "react";
import { CalendarDays, ChevronRight, Clock, Mail, MapPin, MessageCircle, Phone, Send, X } from "lucide-react";

const defaultMethods = [
  { id: "email", icon: "mail", title: "Email", value: "hello@atelierco.com", description: "For proposals, partnerships, and detailed project notes.", actionLabel: "Send email", href: "mailto:hello@atelierco.com" },
  { id: "phone", icon: "phone", title: "Call", value: "+1 (555) 014-9082", description: "Speak with our client desk Monday through Friday.", actionLabel: "Call now", href: "tel:+15550149082" },
  { id: "chat", icon: "chat", title: "Live chat", value: "Average reply: 4 min", description: "Best for quick questions, support, and active accounts.", actionLabel: "Open chat", href: "#" },
];

const defaultLocations = [
  { id: "sf", city: "San Francisco", label: "West Coast Studio", address: "120 Market Street, San Francisco, CA", hours: "Mon-Fri, 9:00-18:00", image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=84" },
  { id: "ny", city: "New York", label: "Client Lounge", address: "88 Spring Street, New York, NY", hours: "By appointment", image: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=84" },
];

const defaultFields = [
  { id: "name", label: "Full name", type: "text", placeholder: "Jane Cooper", required: true },
  { id: "email", label: "Email", type: "email", placeholder: "jane@company.com", required: true },
  { id: "company", label: "Company", type: "text", placeholder: "Company name", required: false },
  { id: "budget", label: "Budget", type: "select", placeholder: "Select range", required: false, options: ["Under $5k", "$5k-$20k", "$20k-$75k", "$75k+"] },
  { id: "message", label: "Message", type: "textarea", placeholder: "Tell us what you are building...", required: true },
];

export const universalContactPageV1DefaultProps = {
  global: {
    fontFamily: "Inter, ui-sans-serif, system-ui",
    pageBackground: "#f7f4ee",
    surfaceColor: "#ffffff",
    primaryColor: "#111827",
    accentColor: "#a47745",
    mutedColor: "#6b6258",
    borderColor: "rgba(17, 24, 39, 0.12)",
    successColor: "#166534",
    maxWidth: "1180px",
    radius: "26px",
    shadow: "0 24px 80px rgba(17, 24, 39, 0.12)",
    sectionPadding: "80px 24px",
  },
  hero: {
    eyebrow: "Contact",
    title: "Let us shape the right next step.",
    subtitle: "A premium, adaptable contact page for sales, support, partnerships, bookings, and local inquiries.",
    body: "Give visitors every practical path to reach you while keeping the page polished, calm, and conversion-ready.",
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1600&q=84",
    imageAlt: "Team collaborating in a premium office",
  },
  form: {
    title: "Send an inquiry",
    subtitle: "Share a few details and the right person will respond.",
    submitLabel: "Send message",
    successTitle: "Message prepared",
    successText: "This demo form is ready for your site integration.",
    consentText: "By submitting, you agree to be contacted about your request.",
    actionUrl: "",
    method: "POST",
    fields: defaultFields,
  },
  contactMethods: defaultMethods,
  locations: defaultLocations,
  map: {
    enabled: true,
    title: "Visit or book a remote consultation",
    embedUrl: "https://www.google.com/maps?q=San%20Francisco&output=embed",
    fallbackImage: "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1600&q=84",
  },
  support: {
    enabled: true,
    title: "Common paths",
    items: [
      { id: "sales", title: "Sales inquiry", text: "For pricing, proposals, and implementation planning.", drawerTitle: "Sales inquiry details", drawerBody: "Route high-intent buyers to your sales process, qualification questions, booking links, or account team." },
      { id: "support", title: "Customer support", text: "For active projects, billing, and product help.", drawerTitle: "Support request details", drawerBody: "Use this drawer for support hours, priority channels, helpdesk links, and escalation details." },
      { id: "partners", title: "Partnerships", text: "For collaborations, suppliers, and media requests.", drawerTitle: "Partnership details", drawerBody: "Describe what partnership requests you accept and what information your team needs up front." },
    ],
  },
  footerCta: {
    enabled: true,
    title: "Prefer a scheduled conversation?",
    subtitle: "Add your booking link, calendar workflow, or concierge intake path.",
    buttonLabel: "Book a time",
    buttonHref: "#",
  },
};

const deepMerge = (base, incoming) => {
  const out = { ...base };
  Object.entries(incoming || {}).forEach(([key, value]) => {
    out[key] = value && typeof value === "object" && !Array.isArray(value) && base[key] && typeof base[key] === "object" && !Array.isArray(base[key]) ? deepMerge(base[key], value) : value;
  });
  return out;
};

const toArray = (value) => Array.isArray(value) ? value : value && typeof value === "object" ? Object.values(value) : [];
const iconMap = { mail: Mail, phone: Phone, chat: MessageCircle, map: MapPin, clock: Clock, calendar: CalendarDays };

const UniversalContactPageV1 = (incomingProps) => {
  const props = incomingProps.props || incomingProps;
  const { isPreviewing, isEditable } = incomingProps;
  const config = useMemo(() => deepMerge(universalContactPageV1DefaultProps, props), [props]);
  const { global, hero, form, contactMethods, locations, map, support, footerCta } = config;
  const [submitted, setSubmitted] = useState(false);
  const [activeDrawer, setActiveDrawer] = useState(null);
  const builderLocked = isEditable && !isPreviewing;

  const submitForm = (event) => {
    if (builderLocked || !form.actionUrl) event.preventDefault();
    if (!builderLocked) setSubmitted(true);
  };

  return (
    <div className="min-h-screen w-full" style={{ backgroundColor: global.pageBackground, color: global.primaryColor, fontFamily: global.fontFamily }}>
      <section style={{ padding: global.sectionPadding }}>
        <div className="mx-auto grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]" style={{ maxWidth: global.maxWidth }}>
          <div>
            <p className="mb-4 text-xs font-black uppercase tracking-[0.28em]" style={{ color: global.accentColor }}>{hero.eyebrow}</p>
            <h1 className="m-0 text-4xl font-black leading-tight tracking-tight md:text-6xl" style={{ color: global.primaryColor }}>{hero.title}</h1>
            <p className="mt-5 text-xl leading-8" style={{ color: global.mutedColor }}>{hero.subtitle}</p>
            <p className="mt-4 leading-7" style={{ color: global.mutedColor }}>{hero.body}</p>
          </div>
          <img src={hero.image} alt={hero.imageAlt} className="h-[460px] w-full object-cover" style={{ borderRadius: global.radius, boxShadow: global.shadow }} />
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto grid gap-6 lg:grid-cols-[0.9fr_1.1fr]" style={{ maxWidth: global.maxWidth }}>
          <div className="space-y-4">
            {toArray(contactMethods).map((method) => {
              const Icon = iconMap[method.icon] || Mail;
              return (
                <a key={method.id} href={method.href || "#"} onClick={(event) => builderLocked && event.preventDefault()} className="group block border p-5 no-underline transition-transform hover:-translate-y-1" style={{ backgroundColor: global.surfaceColor, borderColor: global.borderColor, borderRadius: global.radius, boxShadow: "0 12px 36px rgba(17, 24, 39, 0.06)" }}>
                  <div className="flex items-start gap-4">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl" style={{ backgroundColor: global.pageBackground, color: global.accentColor }}><Icon size={20} /></span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-lg font-black" style={{ color: global.primaryColor }}>{method.title}</span>
                      <span className="mt-1 block text-sm font-bold" style={{ color: global.accentColor }}>{method.value}</span>
                      <span className="mt-2 block text-sm leading-6" style={{ color: global.mutedColor }}>{method.description}</span>
                      <span className="mt-4 inline-flex items-center gap-2 text-sm font-black" style={{ color: global.primaryColor }}>{method.actionLabel}<ChevronRight size={16} /></span>
                    </span>
                  </div>
                </a>
              );
            })}
          </div>

          <form action={form.actionUrl || undefined} method={form.method} onSubmit={submitForm} className="border p-6 md:p-8" style={{ backgroundColor: global.surfaceColor, borderColor: global.borderColor, borderRadius: global.radius, boxShadow: global.shadow }}>
            <h2 className="text-3xl font-black" style={{ color: global.primaryColor }}>{form.title}</h2>
            <p className="mt-2 leading-7" style={{ color: global.mutedColor }}>{form.subtitle}</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {toArray(form.fields).map((field) => (
                <FormField key={field.id} field={field} global={global} />
              ))}
            </div>
            <p className="mt-5 text-xs leading-5" style={{ color: global.mutedColor }}>{form.consentText}</p>
            <button className="mt-5 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-black text-white" style={{ backgroundColor: global.primaryColor }}>
              {form.submitLabel}
              <Send size={16} />
            </button>
            {submitted ? <div className="mt-5 rounded-2xl border p-4" style={{ borderColor: global.successColor, color: global.successColor }}><strong>{form.successTitle}</strong><p className="mt-1 text-sm">{form.successText}</p></div> : null}
          </form>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto grid gap-6 lg:grid-cols-2" style={{ maxWidth: global.maxWidth }}>
          {toArray(locations).map((location) => (
            <article key={location.id} className="overflow-hidden border" style={{ backgroundColor: global.surfaceColor, borderColor: global.borderColor, borderRadius: global.radius }}>
              <img src={location.image} alt={location.city} className="h-56 w-full object-cover" />
              <div className="p-6">
                <p className="text-xs font-black uppercase tracking-[0.24em]" style={{ color: global.accentColor }}>{location.label}</p>
                <h3 className="mt-2 text-2xl font-black" style={{ color: global.primaryColor }}>{location.city}</h3>
                <p className="mt-3 flex gap-2 leading-6" style={{ color: global.mutedColor }}><MapPin size={18} /> {location.address}</p>
                <p className="mt-2 flex gap-2 leading-6" style={{ color: global.mutedColor }}><Clock size={18} /> {location.hours}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {map.enabled ? (
        <section className="px-6 pb-20">
          <div className="mx-auto overflow-hidden border" style={{ maxWidth: global.maxWidth, backgroundColor: global.surfaceColor, borderColor: global.borderColor, borderRadius: global.radius, boxShadow: global.shadow }}>
            <div className="p-6"><h2 className="text-3xl font-black">{map.title}</h2></div>
            {map.embedUrl ? <iframe title={map.title} src={map.embedUrl} className="h-[420px] w-full border-0" loading="lazy" /> : <img src={map.fallbackImage} alt={map.title} className="h-[420px] w-full object-cover" />}
          </div>
        </section>
      ) : null}

      {support.enabled ? (
        <section className="px-6 pb-20">
          <div className="mx-auto" style={{ maxWidth: global.maxWidth }}>
            <h2 className="mb-6 text-3xl font-black">{support.title}</h2>
            <div className="grid gap-4 md:grid-cols-3">
              {toArray(support.items).map((item) => (
                <button key={item.id} className="border p-5 text-left" onClick={() => !builderLocked && setActiveDrawer(item)} style={{ backgroundColor: global.surfaceColor, borderColor: global.borderColor, borderRadius: global.radius }}>
                  <h3 className="text-xl font-black">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6" style={{ color: global.mutedColor }}>{item.text}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-black" style={{ color: global.accentColor }}>More details <ChevronRight size={16} /></span>
                </button>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {footerCta.enabled ? (
        <section className="px-6 pb-20">
          <div className="mx-auto border p-8 text-center" style={{ maxWidth: global.maxWidth, backgroundColor: global.surfaceColor, borderColor: global.borderColor, borderRadius: global.radius }}>
            <h2 className="text-3xl font-black">{footerCta.title}</h2>
            <p className="mx-auto mt-3 max-w-2xl leading-7" style={{ color: global.mutedColor }}>{footerCta.subtitle}</p>
            <a href={footerCta.buttonHref} onClick={(event) => builderLocked && event.preventDefault()} className="mt-6 inline-flex rounded-full px-6 py-3 text-sm font-black text-white no-underline" style={{ backgroundColor: global.primaryColor }}>{footerCta.buttonLabel}</a>
          </div>
        </section>
      ) : null}

      {activeDrawer ? <SupportDrawer item={activeDrawer} global={global} close={() => setActiveDrawer(null)} /> : null}
    </div>
  );
};

const FormField = ({ field, global }) => {
  const style = { borderColor: global.borderColor, borderRadius: "16px" };
  const className = `w-full border bg-white px-4 py-3 text-sm outline-none ${field.type === "textarea" ? "min-h-[140px]" : ""}`;
  return (
    <label className={field.type === "textarea" ? "md:col-span-2" : ""}>
      <span className="mb-1 block text-xs font-black uppercase tracking-[0.16em]" style={{ color: global.mutedColor }}>{field.label}{field.required ? " *" : ""}</span>
      {field.type === "textarea" ? <textarea name={field.id} required={field.required} placeholder={field.placeholder} className={className} style={style} /> : field.type === "select" ? <select name={field.id} required={field.required} className={className} style={style}><option value="">{field.placeholder}</option>{toArray(field.options).map((option) => <option key={option}>{option}</option>)}</select> : <input name={field.id} type={field.type} required={field.required} placeholder={field.placeholder} className={className} style={style} />}
    </label>
  );
};

const SupportDrawer = ({ item, global, close }) => (
  <div className="fixed inset-0 z-50 bg-black/45">
    <aside className="ml-auto h-full w-full max-w-xl overflow-auto p-6" style={{ backgroundColor: global.surfaceColor }}>
      <button className="mb-6 rounded-full border p-3" onClick={close} style={{ borderColor: global.borderColor }}><X size={18} /></button>
      <p className="text-xs font-black uppercase tracking-[0.24em]" style={{ color: global.accentColor }}>{item.title}</p>
      <h2 className="mt-3 text-3xl font-black">{item.drawerTitle}</h2>
      <p className="mt-5 text-lg leading-8" style={{ color: global.mutedColor }}>{item.drawerBody}</p>
    </aside>
  </div>
);

export default UniversalContactPageV1;
