import HeroUnicorn from "../components/HeroUnicorn";
import { Header } from "@/components/header";
import { HeroContent } from "@/components/hero-content";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <HeroUnicorn />

      <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(circle_at_50%_18%,rgba(255,255,255,0.22),transparent_44%),linear-gradient(to_bottom,rgba(0,0,0,0.18),rgba(0,0,0,0.72))]" />

      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-36 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.75),rgba(0,0,0,0))]" />

      <HeroContent />

      <div className="absolute left-0 top-0 z-50 w-full p-3 md:p-4">
        <Header />
      </div>
    </div>
  );
}
