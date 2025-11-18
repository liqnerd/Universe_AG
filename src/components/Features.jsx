import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CheckCircle2, Clock, FileText } from "lucide-react";

const features = [
    {
        title: "Stay Organized",
        description: "Robust task management with deadlines, tags, and project grouping. Never miss a client deliverable again.",
        icon: CheckCircle2,
    },
    {
        title: "Track Your Time",
        description: "Integrated live timer and manual timesheets. Track billable hours effortlessly as you work on tasks.",
        icon: Clock,
    },
    {
        title: "Invoice in One Click",
        description: "Auto-generate professional invoices directly from your work logs. Get paid faster with less admin work.",
        icon: FileText,
    },
];

export function Features() {
    return (
        <section id="features" className="py-24 bg-background relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <ScrollReveal width="100%">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Everything you need to run your business
                        </h2>
                    </ScrollReveal>
                    <ScrollReveal delay={0.1} width="100%">
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Stop switching between five different apps. Universe brings your workflow into one seamless experience.
                        </p>
                    </ScrollReveal>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <ScrollReveal key={index} delay={index * 0.1} width="100%">
                            <div className="p-8 rounded-2xl bg-surface border border-white/5 hover:border-accent/30 transition-all duration-300 hover:-translate-y-1 group h-full">
                                <div className="w-14 h-14 bg-white/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors">
                                    <feature.icon className="w-7 h-7 text-accent" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
