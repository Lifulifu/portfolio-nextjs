import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-slate-900 min-h-screen text-white">
      <nav className="container py-8 flex items-center justify-between">
        <Link href={"#top"} className="text-3xl font-mono font-bold">
          Lifu
        </Link>

        {/* desktop nav */}
        <div className="hidden sm:flex items-center gap-8">desktop nav</div>

        {/* mobile nav */}
        <div className="sm:hidden">mobile nav</div>
      </nav>
    </main>
  );
}
