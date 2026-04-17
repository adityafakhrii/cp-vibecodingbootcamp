import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Problem } from "@/components/landing/Problem";
import { Solution } from "@/components/landing/Solution";
import { Projects } from "@/components/landing/Projects";
import { Roadmap } from "@/components/landing/Roadmap";
import { Schedule } from "@/components/landing/Schedule";
import { Features } from "@/components/landing/Features";
import { Mentor } from "@/components/landing/Mentor";
import { Tools } from "@/components/landing/Tools";
import { Testimonials } from "@/components/landing/Testimonials";
import { Pricing } from "@/components/landing/Pricing";
import { FAQ } from "@/components/landing/FAQ";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";
import { FloatingCTA } from "@/components/landing/FloatingCTA";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <Projects />
      <Roadmap />
      <Schedule />
      <Features />
      <Mentor />
      <Tools />
      <Testimonials />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
      <FloatingCTA />
    </main>
  );
};

export default Index;
