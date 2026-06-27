export default function Loading() {
  return (
    <main className="grid min-h-screen place-items-center bg-ink text-ivory">
      <div className="text-center">
        <div className="mx-auto mb-6 h-px w-32 overflow-hidden bg-white/10">
          <div className="h-full w-1/2 animate-[loadingLine_1.25s_ease-in-out_infinite] bg-champagne" />
        </div>
        <p className="text-xs font-medium uppercase tracking-[0.42em] text-champagne">
          Loading Film
        </p>
      </div>
    </main>
  );
}
