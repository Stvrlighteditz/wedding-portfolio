"use client";

import Link from "next/link";
import type { ReactNode } from "react";

import { cn } from "@/utils/cn";

type LuxuryButtonProps = {
  children: ReactNode;
  className?: string;
  href?: string;
  icon?: ReactNode;
  target?: string;
  rel?: string;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "ghost";
  onClick?: () => void;
  "aria-label"?: string;
};

const variants = {
  primary:
    "border-champagne bg-champagne text-ink shadow-[0_18px_55px_rgba(216,181,109,0.24)] hover:bg-ivory hover:border-ivory",
  secondary:
    "border-white/20 bg-white/[0.06] text-ivory backdrop-blur-xl hover:border-champagne/70 hover:bg-champagne/10 hover:text-champagne",
  ghost:
    "border-transparent bg-transparent text-ivory/80 hover:text-champagne"
};

export function LuxuryButton({
  children,
  className,
  href,
  icon,
  target,
  rel,
  type = "button",
  variant = "primary",
  onClick,
  "aria-label": ariaLabel
}: LuxuryButtonProps) {
  const classes = cn(
    "group inline-flex h-12 items-center justify-center gap-3 border px-6 text-[0.7rem] font-semibold uppercase tracking-[0.24em] transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-champagne md:h-[3.25rem]",
    variants[variant],
    className
  );

  const content = (
    <>
      <span>{children}</span>
      {icon ? (
        <span className="grid size-4 place-items-center transition duration-300 group-hover:translate-x-0.5">
          {icon}
        </span>
      ) : null}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        target={target}
        rel={rel}
        aria-label={ariaLabel}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  );
}
