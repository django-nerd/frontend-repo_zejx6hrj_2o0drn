export default function Plans() {
  const plans = [
    { name: "Basic", price: "89,000 تومان", features: ["720p", "۱ دستگاه", "بدون تبلیغات"] },
    { name: "Standard", price: "129,000 تومان", features: ["1080p", "۲ دستگاه", "دانلود آفلاین"] },
    { name: "Premium", price: "179,000 تومان", features: ["4K HDR", "۴ دستگاه", "اولویت پخش"] },
  ];
  return (
    <section id="plans" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
      <h2 className="text-xl sm:text-2xl font-bold text-white text-center">پلن‌های اشتراک</h2>
      <p className="text-white/70 text-center mt-2">با توجه به نیاز خود انتخاب کنید.</p>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        {plans.map((p) => (
          <div key={p.name} className="rounded-2xl bg-zinc-900 border border-white/10 p-6 text-white">
            <h3 className="text-lg font-semibold">{p.name}</h3>
            <p className="mt-2 text-2xl font-bold text-red-400">{p.price}</p>
            <ul className="mt-4 space-y-2 text-white/80 text-sm list-disc list-inside">
              {p.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <button className="mt-6 w-full py-2 rounded-md bg-red-600 hover:bg-red-500 transition">انتخاب</button>
          </div>
        ))}
      </div>
    </section>
  );
}
