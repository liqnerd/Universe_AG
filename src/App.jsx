

import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { HeroDemo } from "./components/Hero";
import { Features } from "./components/Features";
import { HowItWorks } from "./components/HowItWorks";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import emailjs from "@emailjs/browser";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

function App() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle, loading, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");

    try {
      await emailjs.send(
        "service_lv9szpj",
        "template_oe2m4nj",
        {
          user_email: email,
          email: email,
          to_email: email,
          reply_to: email,
          message: `New waitlist signup (Footer): ${email}`,
        },
        "Xvl_I-VeW5H5r1-Tj"
      );
      setStatus("success");
      setEmail("");
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

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
              <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={status === 'loading' || status === 'success'}
                    className="block w-full p-4 ps-6 text-sm text-white border border-white/10 rounded-full bg-background focus:ring-accent focus:border-accent placeholder-gray-500 focus:outline-none focus:ring-2 transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="Enter your email address"
                    required
                  />
                  <button
                    type="submit"
                    disabled={status === 'loading' || status === 'success'}
                    className={cn(
                      "absolute end-2 bottom-2 font-medium rounded-full text-sm px-6 py-2.5 transition-all duration-300",
                      status === 'success'
                        ? "bg-green-500 text-white hover:bg-green-600"
                        : "bg-accent text-background hover:bg-accent-hover hover:shadow-neon focus:ring-4 focus:outline-none focus:ring-accent/30",
                      status === 'loading' && "opacity-70 cursor-wait"
                    )}
                  >
                    {status === 'loading' ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending...
                      </span>
                    ) : status === 'success' ? (
                      <span className="flex items-center gap-2">
                        <Check size={16} />
                        Joined!
                      </span>
                    ) : (
                      "Join the waitlist"
                    )}
                  </button>
                </div>
                <p className="mt-3 text-xs text-gray-500 text-center">
                  {status === 'error' ? (
                    <span className="text-red-400">Something went wrong. Please try again.</span>
                  ) : (
                    "No spam. Unsubscribe anytime."
                  )}
                </p>
              </form>
            </ScrollReveal>
          </div>
        </section>
      </main>


      <Footer />
    </div>
  );
}

export default App;
