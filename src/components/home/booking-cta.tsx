import { ArrowRight, MessageCircle } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { LuxuryButton } from "@/components/ui/luxury-button";
import { studio } from "@/constants/site";
import { createWhatsAppUrl } from "@/utils/whatsapp";

const whatsappUrl = createWhatsAppUrl(
  "Hi Aurelia Films, I would like to enquire about wedding cinematography availability."
);

export function BookingCTA() {
  return (
    <section className="border-t border-white/10 bg-ink py-24 md:py-32">
      <div className="luxury-container">
        <Reveal>
          <div className="relative overflow-hidden border border-white/10 bg-white/[0.04] p-7 shadow-luxury backdrop-blur-2xl md:p-12 lg:p-14">
            <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(216,181,109,0.12),transparent_42%,rgba(255,255,255,0.04))]" />
            <div className="relative z-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
              <div>
                <p className="inline-flex items-center gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.34em] text-champagne">
                  <MessageCircle size={16} strokeWidth={1.7} />
                  Booking Enquiry
                </p>
                <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight text-balance md:text-7xl">
                  Dates move quickly. Let us see if yours is open.
                </h2>
                <p className="mt-6 max-w-2xl text-base leading-8 text-ivory/66">
                  Share your date, city, and the kind of film you are imagining.
                  We will respond with availability and the right coverage path.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <LuxuryButton
                  href="/contact"
                  icon={<ArrowRight size={15} strokeWidth={1.8} />}
                >
                  Start Enquiry
                </LuxuryButton>
                <LuxuryButton
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  variant="secondary"
                  icon={<MessageCircle size={15} strokeWidth={1.8} />}
                >
                  WhatsApp
                </LuxuryButton>
              </div>
            </div>

            <div className="relative z-10 mt-10 grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-3">
              {[
                ["Response", "Usually within 24 hours"],
                ["Coverage", studio.location],
                ["Delivery", "Teasers, reels, and full films"]
              ].map(([label, value]) => (
                <div key={label} className="bg-ink/70 p-5">
                  <p className="text-[0.58rem] font-semibold uppercase tracking-[0.22em] text-mist">
                    {label}
                  </p>
                  <p className="mt-2 font-serif text-2xl text-ivory">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
