import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ChevronDown } from "lucide-react";
import { cn } from "../lib/utils";

const faqs = [
    {
        question: "Will it be free?",
        answer: "Universe will have a generous free tier for individual freelancers. We will also offer a Pro plan with advanced automation and unlimited history.",
    },
    {
        question: "Can I invite team members?",
        answer: "Yes! The Pro plan supports small teams, allowing you to share projects, track team time, and manage invoices together.",
    },
    {
        question: "Can I export data for my accountant?",
        answer: "Yes, all invoices and timesheets can be exported in PDF, CSV, and XLSX formats. We also offer a free read-only \"Accountant Mode\" for secure and easy data access.",
    },
    {
        question: "Does the app work offline?",
        answer: "Yes, critical functions like task management and time tracking work fully offline, storing data locally. The system automatically performs a Smart Sync as soon as you reconnect to the internet.",
    },
];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <section id="faq" className="py-24 bg-background">
            <div className="max-w-3xl mx-auto px-6">
                <ScrollReveal width="100%">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
                        Frequently Asked Questions
                    </h2>
                </ScrollReveal>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <ScrollReveal key={index} delay={index * 0.1} width="100%">
                            <div className="border border-white/10 rounded-lg bg-surface/30 overflow-hidden">
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    className="flex items-center justify-between w-full p-5 font-medium text-left text-white focus:ring-4 focus:ring-gray-800 hover:bg-white/5 transition-colors"
                                >
                                    <span>{faq.question}</span>
                                    <ChevronDown
                                        className={cn(
                                            "w-4 h-4 transition-transform duration-300",
                                            openIndex === index ? "rotate-180" : ""
                                        )}
                                    />
                                </button>
                                <AnimatePresence>
                                    {openIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                        >
                                            <div className="p-5 border-t border-white/10 text-gray-400 pt-0">
                                                <p className="pt-5">{faq.answer}</p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
