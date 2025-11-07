import { Star } from "lucide-react";

export default function MovieCard({ title, poster, rating, year }) {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-zinc-900 border border-white/10 hover:border-red-500/50 transition">
      <div className="aspect-[2/3] w-full overflow-hidden">
        <img
          src={poster}
          alt={title}
          className="h-full w-full object-cover transform transition duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-3 text-white">
        <div className="flex items-center justify-between gap-2 mb-1">
          <h3 className="text-sm font-semibold line-clamp-1" title={title}>
            {title}
          </h3>
          <span className="text-xs text-white/60">{year}</span>
        </div>
        <div className="flex items-center gap-1 text-amber-400">
          <Star className="h-4 w-4 fill-amber-400" />
          <span className="text-xs text-white/80">{rating}</span>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition" />
    </div>
  );
}
