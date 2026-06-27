"use client";

import { Send } from "lucide-react";
import { type FormEvent, useMemo, useState } from "react";

import { LuxuryButton } from "@/components/ui/luxury-button";
import { portfolioCategories } from "@/constants/site";
import { createBookingMessage, createWhatsAppUrl } from "@/utils/whatsapp";
import type { StudioProfile } from "@/utils/studio-profile";

type FormState = {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  eventDate: string;
  location: string;
  guestCount: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  eventType: "Wedding Highlights",
  eventDate: "",
  location: "",
  guestCount: "",
  message: ""
};

type ContactFormProps = {
  studio: StudioProfile;
};

export function ContactForm({ studio }: ContactFormProps) {
  const [form, setForm] = useState<FormState>(initialState);

  const whatsappUrl = useMemo(() => {
    return createWhatsAppUrl(
      createBookingMessage({
        name: form.name || "Client",
        email: form.email,
        phone: form.phone,
        eventType: form.eventType,
        eventDate: form.eventDate,
        location: form.location,
        guestCount: form.guestCount,
        message: form.message
      }, studio.name),
      studio.whatsapp
    );
  }, [form, studio.name, studio.whatsapp]);

  function updateField(field: keyof FormState, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="border border-white/10 bg-white/[0.035] p-5 shadow-luxury backdrop-blur-2xl md:p-7"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <label className="grid gap-2">
          <span className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-champagne">
            Name
          </span>
          <input
            required
            value={form.name}
            onChange={(event) => updateField("name", event.target.value)}
            className="h-12 border border-white/12 bg-ink/70 px-4 text-sm text-ivory outline-none transition placeholder:text-mist/55 focus:border-champagne"
            placeholder="Your name"
          />
        </label>

        <label className="grid gap-2">
          <span className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-champagne">
            Phone
          </span>
          <input
            value={form.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            className="h-12 border border-white/12 bg-ink/70 px-4 text-sm text-ivory outline-none transition placeholder:text-mist/55 focus:border-champagne"
            placeholder="+91 ..."
          />
        </label>

        <label className="grid gap-2">
          <span className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-champagne">
            Email
          </span>
          <input
            type="email"
            value={form.email}
            onChange={(event) => updateField("email", event.target.value)}
            className="h-12 border border-white/12 bg-ink/70 px-4 text-sm text-ivory outline-none transition placeholder:text-mist/55 focus:border-champagne"
            placeholder="name@email.com"
          />
        </label>

        <label className="grid gap-2">
          <span className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-champagne">
            Event Type
          </span>
          <select
            value={form.eventType}
            onChange={(event) => updateField("eventType", event.target.value)}
            className="h-12 border border-white/12 bg-ink/70 px-4 text-sm text-ivory outline-none transition focus:border-champagne"
          >
            {portfolioCategories.map((category) => (
              <option key={category}>{category}</option>
            ))}
          </select>
        </label>

        <label className="grid gap-2">
          <span className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-champagne">
            Event Date
          </span>
          <input
            type="date"
            value={form.eventDate}
            onChange={(event) => updateField("eventDate", event.target.value)}
            className="h-12 border border-white/12 bg-ink/70 px-4 text-sm text-ivory outline-none transition focus:border-champagne"
          />
        </label>

        <label className="grid gap-2">
          <span className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-champagne">
            Location
          </span>
          <input
            value={form.location}
            onChange={(event) => updateField("location", event.target.value)}
            className="h-12 border border-white/12 bg-ink/70 px-4 text-sm text-ivory outline-none transition placeholder:text-mist/55 focus:border-champagne"
            placeholder="City or venue"
          />
        </label>

        <label className="grid gap-2 md:col-span-2">
          <span className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-champagne">
            Guest Count
          </span>
          <input
            value={form.guestCount}
            onChange={(event) => updateField("guestCount", event.target.value)}
            className="h-12 border border-white/12 bg-ink/70 px-4 text-sm text-ivory outline-none transition placeholder:text-mist/55 focus:border-champagne"
            placeholder="Approximate number of guests"
          />
        </label>

        <label className="grid gap-2 md:col-span-2">
          <span className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-champagne">
            Notes
          </span>
          <textarea
            value={form.message}
            onChange={(event) => updateField("message", event.target.value)}
            rows={6}
            className="resize-none border border-white/12 bg-ink/70 px-4 py-3 text-sm leading-7 text-ivory outline-none transition placeholder:text-mist/55 focus:border-champagne"
            placeholder="Tell us about the wedding, rituals, locations, or film style you love."
          />
        </label>
      </div>

      <div className="mt-7">
        <LuxuryButton
          type="submit"
          icon={<Send size={15} strokeWidth={1.8} />}
        >
          Send on WhatsApp
        </LuxuryButton>
      </div>
    </form>
  );
}
