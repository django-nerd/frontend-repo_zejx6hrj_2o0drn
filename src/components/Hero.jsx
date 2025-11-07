export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-zinc-900 to-black">
      <div
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517602302552-471fe67acf66?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-30"
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 text-center text-white">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
          سینمای آنلاین، هر زمان، هر کجا
        </h1>
        <p className="mt-4 text-white/80 max-w-2xl mx-auto">
          جدیدترین فیلم‌ها و سریال‌ها را با کیفیت عالی تماشا کنید. بدون تبلیغات، با رابطی ساده و سریع.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a href="#trending" className="px-6 py-3 rounded-md bg-red-600 hover:bg-red-500 transition">شروع تماشا</a>
          <a href="#plans" className="px-6 py-3 rounded-md bg-white/10 hover:bg-white/20 transition">پلن‌های اشتراک</a>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black" />
    </section>
  );
}
