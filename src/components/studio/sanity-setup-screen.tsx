"use client";

import { AlertTriangle, ExternalLink } from "lucide-react";

type SanitySetupScreenProps = {
  dataset: string;
};

export function SanitySetupScreen({ dataset }: SanitySetupScreenProps) {
  return (
    <main className="grid min-h-screen place-items-center bg-ink px-6 text-ivory">
      <section className="w-full max-w-3xl border border-white/10 bg-white/[0.04] p-6 shadow-luxury backdrop-blur-2xl md:p-10">
        <div className="mb-8 flex items-start gap-4">
          <span className="grid size-12 shrink-0 place-items-center rounded-full border border-champagne/40 bg-champagne/10 text-champagne">
            <AlertTriangle size={22} strokeWidth={1.8} />
          </span>
          <div>
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.34em] text-champagne">
              Sanity Setup Required
            </p>
            <h1 className="mt-3 font-serif text-4xl leading-tight md:text-6xl">
              Add your project ID to open the Studio.
            </h1>
          </div>
        </div>

        <div className="grid gap-5 text-sm leading-7 text-ivory/72 md:grid-cols-2">
          <div>
            <p className="font-semibold uppercase tracking-[0.24em] text-ivory">
              What
            </p>
            <p className="mt-2">
              `NEXT_PUBLIC_SANITY_PROJECT_ID` is missing from `.env.local`.
            </p>
          </div>
          <div>
            <p className="font-semibold uppercase tracking-[0.24em] text-ivory">
              Where
            </p>
            <p className="mt-2">
              Create `.env.local` in `C:\Users\Stvrlight\Desktop\portfolio`.
            </p>
          </div>
          <div>
            <p className="font-semibold uppercase tracking-[0.24em] text-ivory">
              Why
            </p>
            <p className="mt-2">
              Sanity needs the project ID before it can load your CMS workspace.
            </p>
          </div>
          <div>
            <p className="font-semibold uppercase tracking-[0.24em] text-ivory">
              Current Dataset
            </p>
            <p className="mt-2">{dataset}</p>
          </div>
        </div>

        <div className="mt-8 border border-white/10 bg-ink/70 p-5">
          <pre className="overflow-x-auto text-xs leading-6 text-ivory/86">
            <code>{`NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2026-06-27
SANITY_REVALIDATE_SECRET=make_a_long_random_secret
NEXT_PUBLIC_SITE_URL=http://localhost:3000`}</code>
          </pre>
        </div>

        <a
          href="https://www.sanity.io/manage"
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex h-12 items-center justify-center gap-3 border border-champagne bg-champagne px-6 text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-ink transition hover:border-ivory hover:bg-ivory"
        >
          Open Sanity Manage
          <ExternalLink size={15} strokeWidth={1.8} />
        </a>
      </section>
    </main>
  );
}
