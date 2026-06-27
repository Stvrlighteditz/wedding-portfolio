import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-ink px-6 text-center text-ivory">
      <section className="max-w-2xl">
        <p className="mb-5 text-xs font-medium uppercase tracking-[0.4em] text-champagne">
          404
        </p>
        <h1 className="font-serif text-5xl leading-tight md:text-7xl">
          This frame never made the final cut.
        </h1>
        <p className="mx-auto mt-6 max-w-lg text-base leading-8 text-mist">
          The page you are looking for has moved or no longer exists.
        </p>
        <Link
          href="/"
          className="mt-9 inline-flex h-12 items-center justify-center border border-champagne/60 px-7 text-xs font-semibold uppercase tracking-[0.24em] text-champagne transition hover:border-champagne hover:bg-champagne hover:text-ink"
        >
          Back Home
        </Link>
      </section>
    </main>
  );
}
