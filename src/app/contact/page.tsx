import {
  CalendarDays,
  Camera,
  Mail,
  MapPin,
  MessageCircle,
  Phone
} from "lucide-react";
import type { Metadata } from "next";

import { ContactForm } from "@/components/contact/contact-form";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Reveal } from "@/components/motion/reveal";
import { LuxuryButton } from "@/components/ui/luxury-button";
import { getStudioProfile } from "@/sanity/lib/site";
import { createWhatsAppUrl } from "@/utils/whatsapp";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Enquire about wedding cinematography availability, films, teasers, reels, and full wedding coverage.",
  alternates: {
    canonical: "/contact"
  },
  openGraph: {
    title: "Contact Aurelia Films",
    description:
      "Enquire about wedding cinematography availability, films, teasers, reels, and full wedding coverage.",
    url: "/contact"
  }
};

export default async function ContactPage() {
  const studio = await getStudioProfile();
  const whatsappUrl = createWhatsAppUrl(
    `Hi ${studio.name}, I would like to enquire about wedding cinematography availability.`,
    studio.whatsapp
  );
  const contactItems = [
    {
      label: "WhatsApp",
      value: studio.phone,
      href: whatsappUrl,
      icon: MessageCircle,
      external: true
    },
    {
      label: "Email",
      value: studio.email,
      href: `mailto:${studio.email}`,
      icon: Mail,
      external: false
    },
    {
      label: "Phone",
      value: studio.phone,
      href: `tel:${studio.phone.replace(/\s/g, "")}`,
      icon: Phone,
      external: false
    },
    {
      label: "Instagram",
      value: "View profile",
      href: studio.instagram,
      icon: Camera,
      external: true
    }
  ] as const;

  return (
    <main className="min-h-screen bg-ink text-ivory">
      <SiteHeader studio={studio} />

      <section className="luxury-container grid gap-12 pt-36 pb-20 md:pt-44 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)] lg:items-start">
        <Reveal>
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.36em] text-champagne">
            Contact
          </p>
          <h1 className="mt-5 max-w-4xl font-serif text-6xl leading-[0.9] text-balance md:text-8xl">
            Tell us where the story begins.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-9 text-ivory/68">
            Share your date, location, and the kind of film you are imagining.
            The enquiry opens in WhatsApp with your details already composed.
          </p>

          <div className="mt-10 grid gap-3">
            {contactItems.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noreferrer" : undefined}
                  className="group flex items-center gap-4 border border-white/10 bg-white/[0.035] p-4 transition hover:border-champagne/45 hover:bg-white/[0.055]"
                >
                  <span className="grid size-11 place-items-center border border-champagne/35 bg-champagne/10 text-champagne transition group-hover:bg-champagne group-hover:text-ink">
                    <Icon size={18} strokeWidth={1.7} />
                  </span>
                  <span>
                    <span className="block text-[0.58rem] font-semibold uppercase tracking-[0.22em] text-mist">
                      {item.label}
                    </span>
                    <span className="mt-1 block text-sm text-ivory">{item.value}</span>
                  </span>
                </a>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <ContactForm studio={studio} />
        </Reveal>
      </section>

      <section className="border-y border-white/10 bg-charcoal py-12">
        <div className="luxury-container grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-3">
          {[
            {
              icon: CalendarDays,
              label: "Best Time",
              value: "Enquire once your date is fixed"
            },
            {
              icon: MapPin,
              label: "Coverage",
              value: studio.location
            },
            {
              icon: MessageCircle,
              label: "Fastest Reply",
              value: "WhatsApp enquiry"
            }
          ].map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.label} className="flex gap-4 bg-charcoal p-6">
                <span className="grid size-11 shrink-0 place-items-center border border-champagne/35 bg-champagne/10 text-champagne">
                  <Icon size={18} strokeWidth={1.7} />
                </span>
                <span>
                  <span className="block text-[0.58rem] font-semibold uppercase tracking-[0.22em] text-mist">
                    {item.label}
                  </span>
                  <span className="mt-2 block font-serif text-2xl text-ivory">
                    {item.value}
                  </span>
                </span>
              </div>
            );
          })}
        </div>
      </section>

      <section className="luxury-container py-24">
        <Reveal>
          <div className="flex flex-col gap-7 border border-white/10 bg-white/[0.035] p-7 md:flex-row md:items-end md:justify-between md:p-10">
            <div>
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.36em] text-champagne">
                Prefer a direct note?
              </p>
              <h2 className="mt-5 max-w-3xl font-serif text-4xl leading-tight md:text-6xl">
                Send a simple message and we will take it from there.
              </h2>
            </div>
            <LuxuryButton
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              icon={<MessageCircle size={15} strokeWidth={1.8} />}
            >
              WhatsApp Now
            </LuxuryButton>
          </div>
        </Reveal>
      </section>

      <SiteFooter studio={studio} />
    </main>
  );
}
