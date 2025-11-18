import { Hero } from "@/components/ui/animated-hero"
import Particles from "@/components/ui/particles";

function HeroDemo() {
    return (
        <div id="home" className="block relative overflow-hidden min-h-screen flex items-center justify-center bg-background">
            {/* Particles Background */}
            <div className="absolute inset-0 w-full h-full">
                <Particles
                    className="absolute inset-0"
                    quantity={180}
                    ease={80}
                    color="#FFFFFF"
                    vx={1.1}
                    vy={1.1}
                    refresh
                />
            </div>

            {/* Background Glow */}
            <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[150%] md:w-[120%] lg:w-[1000px] xl:w-[1400px] h-[600px] md:h-[800px] bg-accent/10 rounded-full blur-[100px] md:blur-[150px] -z-10 opacity-50 pointer-events-none"></div>

            <div className="relative z-10 w-full">
                <Hero />
            </div>
        </div>
    );
}

export { HeroDemo };
