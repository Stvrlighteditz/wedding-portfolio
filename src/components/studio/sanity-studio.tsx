"use client";

import { NextStudio } from "next-sanity/studio/client-component";

import { SanitySetupScreen } from "@/components/studio/sanity-setup-screen";

import config from "../../../sanity.config";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID?.trim();
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export function SanityStudio() {
  if (!projectId) {
    return <SanitySetupScreen dataset={dataset} />;
  }

  return <NextStudio config={config} />;
}
