import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrendingRow from "./components/TrendingRow";
import Plans from "./components/Plans";

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-['Inter']">
      <Navbar />
      <main>
        <Hero />
        <TrendingRow />
        <Plans />
      </main>
      <footer className="mt-10 border-t border-white/10 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/70">
          <p>© {new Date().getFullYear()} FlixNow — همه حقوق محفوظ است.</p>
          <nav className="flex items-center gap-4 text-sm">
            <a href="#" className="hover:text-white">حریم خصوصی</a>
            <a href="#" className="hover:text-white">قوانین</a>
            <a href="#" className="hover:text-white">ارتباط با ما</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}

export default App;
