import { Film, Search, User } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [query, setQuery] = useState("");

  const submit = (e) => {
    e.preventDefault();
    // Simple demo interaction
    // eslint-disable-next-line no-alert
    alert(`در حال جستجو: ${query || ""}`);
  };

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-black/50 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 text-white">
          <Film className="h-6 w-6 text-red-500" />
          <span className="font-semibold tracking-tight">FlixNow</span>
        </div>

        <form onSubmit={submit} className="hidden md:flex items-center gap-2 w-full max-w-lg">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/60" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="جستجوی فیلم، سریال، بازیگر..."
              className="w-full pl-10 pr-4 py-2 rounded-md bg-white/10 text-white placeholder-white/60 outline-none focus:ring-2 focus:ring-red-500/60 border border-white/10"
            />
          </div>
          <button className="px-4 py-2 rounded-md bg-red-600 hover:bg-red-500 text-white transition">
            جستجو
          </button>
        </form>

        <button className="ml-4 inline-flex items-center gap-2 text-white/90 hover:text-white transition">
          <User className="h-5 w-5" />
          <span className="hidden sm:inline">حساب کاربری</span>
        </button>
      </div>
    </header>
  );
}
