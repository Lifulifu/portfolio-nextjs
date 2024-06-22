import Link from "next/link";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main id="hero" className="font-mono bg-slate-900 min-h-screen text-white">
      {/* top bar */}
      <div className="fixed inset-x-0 z-40 bg-gradient-to-b from-slate-900 from-50% to-transparent">
        <div className="container flex items-center justify-between py-8">
          <Link
            href={"#top"}
            className="text-3xl font-mono font-bold after:content-[''] after:block after:w-4 after:h-1 after:mx-auto after:bg-teal-400 after:translate-y-1"
          >
            Lifu
          </Link>
          <Nav />
        </div>
      </div>

      <Hero />

      <Projects />

      <Footer />
    </main>
  );
}
