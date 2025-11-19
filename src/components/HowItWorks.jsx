import { ScrollReveal } from "@/components/ui/ScrollReveal";

const steps = [
    {
        number: 1,
        title: "Create Project",
        description: "Set up your client and tasks.",
    },
    {
        number: 2,
        title: "Track Time",
        description: "Log hours as you work.",
    },
    {
        number: 3,
        title: "Generate Invoice",
        description: "Send and get paid.",
    },
];

export function HowItWorks() {
    return (
        <section className="py-24 border-t border-white/5 bg-surface/20">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <ScrollReveal width="100%">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            From to-do to paid
                        </h2>
                    </ScrollReveal>
                    <ScrollReveal delay={0.1} width="100%">
                        <p className="text-gray-400">
                            Simple workflow designed for speed.
                        </p>
                    </ScrollReveal>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-white/10 -translate-y-1/2 z-0"></div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
                        {steps.map((step, index) => (
                            <ScrollReveal key={index} delay={index * 0.1} width="100%">
                                <div className="bg-background p-6 rounded-xl border border-white/5 text-center h-full">
                                    <div className="w-12 h-12 bg-surface text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 border-2 border-accent relative z-10">
                                        {step.number}
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                                    <p className="text-sm text-gray-400">{step.description}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
