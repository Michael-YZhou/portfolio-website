import Grid from "@/components/grid/Grid";
import Hero from "@/components/hero/Hero";
import RecentProjects from "@/components/recent-projects/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { House } from "lucide-react";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav
          navItems={[{ name: "Home", link: "/", icon: <House /> }]}
        />
        <Hero />
        <Grid />
        <RecentProjects />
      </div>
    </main>
  );
}
