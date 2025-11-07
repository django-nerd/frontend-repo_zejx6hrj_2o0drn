import MovieCard from "./MovieCard";

const demo = [
  {
    title: "Dune: Part Two",
    year: 2024,
    rating: 8.6,
    poster:
      "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
  },
  {
    title: "Oppenheimer",
    year: 2023,
    rating: 8.4,
    poster:
      "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
  },
  {
    title: "Killers of the Flower Moon",
    year: 2023,
    rating: 7.7,
    poster:
      "https://image.tmdb.org/t/p/w500/dB6Krk806zeqd0YNp2ngQ9zXteH.jpg",
  },
  {
    title: "The Batman",
    year: 2022,
    rating: 7.8,
    poster:
      "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
  },
  {
    title: "John Wick: Chapter 4",
    year: 2023,
    rating: 7.7,
    poster:
      "https://image.tmdb.org/t/p/w500/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",
  },
  {
    title: "Mission: Impossible – Dead Reckoning",
    year: 2023,
    rating: 7.6,
    poster:
      "https://image.tmdb.org/t/p/w500/NNxYkU70HPurnNCSiCjYAmacwm.jpg",
  },
];

export default function TrendingRow() {
  return (
    <section id="trending" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex items-end justify-between">
        <h2 className="text-xl sm:text-2xl font-bold text-white">پرمخاطب‌ترین‌ها</h2>
        <a href="#" className="text-sm text-red-400 hover:text-red-300">مشاهده همه</a>
      </div>
      <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {demo.map((m) => (
          <MovieCard key={m.title} {...m} />
        ))}
      </div>
    </section>
  );
}
