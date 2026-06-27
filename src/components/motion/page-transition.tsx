"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

import { smoothEase } from "@/constants/motion";

export function PageTransition({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.55, ease: smoothEase }}
    >
      {children}
    </motion.div>
  );
}
