import { Camera, Mail, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";

import { navigation, portfolioCategories } from "@/constants/site";
import { createWhatsAppUrl } from "@/utils/whatsapp";
import type { StudioProfile } from "@/utils/studio-profile";

type SiteFooterProps = {
  studio: StudioProfile;
};

export function SiteFooter({ studio }: SiteFooterProps) {
  const whatsappUrl = createWhatsAppUrl(
    `Hi ${studio.name}, I would like to enquire about wedding cinematography.`,
    studio.whatsapp
  );

  return (
    <footer className="border-t border-white/10 bg-charcoal text-ivory">
      <div className="luxury-container py-14">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_0.65fr_0.65fr]">
          <div>
            <Link href="/" className="font-serif text-4xl text-ivory">
              {studio.name}
            </Link>
            <p className="mt-5 max-w-md text-sm leading-7 text-ivory/62">
              Luxury wedding films with editorial restraint, emotional pacing,
              and a calm client experience from enquiry to final delivery.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="grid size-11 place-items-center border border-white/12 bg-white/[0.035] text-champagne transition hover:border-champagne hover:bg-champagne hover:text-ink"
                aria-label="WhatsApp"
              >
                <MessageCircle size={18} strokeWidth={1.7} />
              </a>
              <a
                href={`mailto:${studio.email}`}
                className="grid size-11 place-items-center border border-white/12 bg-white/[0.035] text-champagne transition hover:border-champagne hover:bg-champagne hover:text-ink"
                aria-label="Email"
              >
                <Mail size={18} strokeWidth={1.7} />
              </a>
              <a
                href={`tel:${studio.phone.replace(/\s/g, "")}`}
                className="grid size-11 place-items-center border border-white/12 bg-white/[0.035] text-champagne transition hover:border-champagne hover:bg-champagne hover:text-ink"
                aria-label="Phone"
              >
                <Phone size={18} strokeWidth={1.7} />
              </a>
              <a
                href={studio.instagram}
                target="_blank"
                rel="noreferrer"
                className="grid size-11 place-items-center border border-white/12 bg-white/[0.035] text-champagne transition hover:border-champagne hover:bg-champagne hover:text-ink"
                aria-label="Instagram"
              >
                <Camera size={18} strokeWidth={1.7} />
              </a>
            </div>
          </div>

          <div>
            <p className="text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-champagne">
              Pages
            </p>
            <nav className="mt-5 grid gap-3" aria-label="Footer navigation">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-ivory/64 transition hover:text-champagne"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-champagne">
              Collections
            </p>
            <div className="mt-5 grid grid-cols-2 gap-3">
              {portfolioCategories.slice(0, 8).map((category) => (
                <Link
                  key={category}
                  href={`/portfolio?category=${encodeURIComponent(category)}`}
                  className="text-sm text-ivory/64 transition hover:text-champagne"
                >
                  {category}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-mist md:flex-row md:items-center md:justify-between">
          <p>{new Date().getFullYear()} {studio.name}. All rights reserved.</p>
          <p>{studio.location}</p>
        </div>
      </div>
    </footer>
  );
}
