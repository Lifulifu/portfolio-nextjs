import Link from "next/link";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main id="hero" className="bg-slate-900 min-h-screen text-white">
      {/* top bar */}
      <div className="fixed inset-x-0 z-40 bg-gradient-to-b from-slate-900 from-50% to-transparent">
        <div className="container flex items-center justify-between py-8">
          <Link href={"#top"} className="text-3xl font-mono font-bold">
            Lifu
          </Link>
          <Nav />
        </div>
      </div>

      <Hero />

      <Projects />

      <div className="py-24">asdf</div>
      <div className="py-24">asdf</div>
      <div className="py-24">asdf</div>
      <div className="py-24">asdf</div>
      <div className="py-24">asdf</div>
    </main>
  );
}
