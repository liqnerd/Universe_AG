import CurvedLoop from "@/components/ui/curved-loop";

import { Navbar } from "./components/Navbar";
import { HeroDemo } from "./components/Hero";
import { Features } from "./components/Features";
import { HowItWorks } from "./components/HowItWorks";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

function App() {
  return (
    <div className="min-h-screen bg-background text-text font-sans selection:bg-accent selection:text-background overflow-x-hidden">
      <Navbar />

      <main>
        <HeroDemo />
        <Features />
        <HowItWorks />
        <FAQ />

        {/* Final CTA */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-accent/5"></div>
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <ScrollReveal width="100%">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to simplify your freelance workflow?
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1} width="100%">
              <p className="text-xl text-gray-400 mb-10">
                Join the waitlist today and get 3 months of Pro for free when we launch.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2} width="100%">
              <form className="w-full max-w-md mx-auto">
                <div className="relative">
                  <input
                    type="email"
                    className="block w-full p-4 ps-6 text-sm text-white border border-white/10 rounded-full bg-background focus:ring-accent focus:border-accent placeholder-gray-500 focus:outline-none focus:ring-2 transition-all shadow-lg"
                    placeholder="Enter your email address"
                    required
                  />
                  <button
                    type="submit"
                    className="text-background absolute end-2 bottom-2 bg-accent hover:bg-accent-hover focus:ring-4 focus:outline-none focus:ring-accent/30 font-medium rounded-full text-sm px-6 py-2.5 transition-all duration-300 hover:shadow-neon"
                  >
                    Join the waitlist
                  </button>
                </div>
              </form>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <CurvedLoop marqueeText="Get Universe ✦ work smarter ✦ invoice faster ✦ get paid sooner✦" curveAmount={0} />
      <Footer />
    </div>
  );
}

export default App;
