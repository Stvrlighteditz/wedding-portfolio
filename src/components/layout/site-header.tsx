"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, MessageCircle, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { smoothEase } from "@/constants/motion";
import { navigation, studio } from "@/constants/site";
import { useLockBodyScroll } from "@/hooks/use-lock-body-scroll";
import { cn } from "@/utils/cn";

const whatsappUrl = `https://wa.me/${studio.whatsapp}?text=${encodeURIComponent(
  "Hi, I would like to enquire about wedding cinematography availability."
)}`;

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useLockBodyScroll(isOpen);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 24);
  });

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: smoothEase }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 border-b transition duration-500",
          isScrolled
            ? "border-white/10 bg-ink/72 shadow-[0_18px_60px_rgba(0,0,0,0.38)] backdrop-blur-2xl"
            : "border-white/0 bg-transparent"
        )}
      >
        <div className="mx-auto flex h-20 w-full max-w-[1500px] items-center justify-between px-5 md:px-8 lg:px-10">
          <Link href="/" className="group flex items-center gap-4" aria-label={studio.name}>
            <span className="grid size-10 place-items-center rounded-full border border-champagne/50 bg-ink/40 text-sm font-semibold text-champagne shadow-[0_0_28px_rgba(216,181,109,0.16)] transition group-hover:border-champagne">
              AF
            </span>
            <span className="hidden leading-none sm:block">
              <span className="block font-serif text-xl text-ivory">{studio.name}</span>
              <span className="mt-1 block text-[0.58rem] font-semibold uppercase tracking-[0.28em] text-mist">
                Wedding Films
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary navigation">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-ivory/72 transition hover:text-champagne"
              >
                {item.label}
                <span className="absolute -bottom-2 left-0 h-px w-0 bg-champagne transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="hidden h-11 items-center justify-center gap-2 border border-champagne/55 px-5 text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-champagne transition hover:border-champagne hover:bg-champagne hover:text-ink md:inline-flex"
            >
              <MessageCircle size={15} strokeWidth={1.8} />
              Book
            </Link>
            <button
              type="button"
              className="grid size-11 place-items-center border border-white/14 bg-white/[0.04] text-ivory backdrop-blur-xl transition hover:border-champagne/70 hover:text-champagne lg:hidden"
              onClick={() => setIsOpen(true)}
              aria-label="Open navigation menu"
            >
              <Menu size={20} strokeWidth={1.7} />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            className="fixed inset-0 z-[60] bg-ink/96 text-ivory backdrop-blur-2xl lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28 }}
          >
            <div className="flex h-20 items-center justify-between px-5">
              <Link href="/" className="font-serif text-2xl" onClick={() => setIsOpen(false)}>
                {studio.name}
              </Link>
              <button
                type="button"
                className="grid size-11 place-items-center border border-white/14 bg-white/[0.04] text-ivory transition hover:border-champagne/70 hover:text-champagne"
                onClick={() => setIsOpen(false)}
                aria-label="Close navigation menu"
              >
                <X size={20} strokeWidth={1.7} />
              </button>
            </div>

            <motion.nav
              className="flex min-h-[calc(100svh-5rem)] flex-col justify-center px-6 pb-10"
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: {
                  transition: {
                    staggerChildren: 0.07,
                    delayChildren: 0.1
                  }
                }
              }}
              aria-label="Mobile navigation"
            >
              <div className="space-y-1">
                {navigation.map((item) => (
                  <motion.div
                    key={item.href}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      show: { opacity: 1, y: 0 }
                    }}
                  >
                    <Link
                      href={item.href}
                      className="block border-b border-white/10 py-5 font-serif text-4xl text-ivory transition hover:text-champagne"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 }
                }}
                className="mt-9"
              >
                <Link
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-12 items-center justify-center gap-3 border border-champagne bg-champagne px-6 text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-ink"
                >
                  <MessageCircle size={16} strokeWidth={1.8} />
                  Book a Date
                </Link>
              </motion.div>
            </motion.nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
