import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, FileText, CheckCircle2, DollarSign, ArrowRight } from "lucide-react";

export function DashboardAnimation() {
    const [step, setStep] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setStep((prev) => (prev + 1) % 3);
        }, 3500); // Change step every 3.5 seconds

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative w-full h-full bg-surface/50 backdrop-blur-md rounded-xl border border-white/10 overflow-hidden flex flex-col">
            {/* Header / Toolbar */}
            <div className="h-12 border-b border-white/5 flex items-center px-4 gap-2">
                <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                </div>
                <div className="ml-4 h-6 w-32 bg-white/5 rounded-md" />
            </div>

            {/* Main Content Area */}
            <div className="flex-1 relative p-6 flex items-center justify-center">
                <AnimatePresence mode="wait">
                    {step === 0 && (
                        <motion.div
                            key="tracking"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="w-full max-w-sm"
                        >
                            <div className="bg-background/80 border border-white/10 rounded-lg p-4 shadow-xl">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400">
                                            <Clock size={20} />
                                        </div>
                                        <div>
                                            <h3 className="font-medium text-white">Website Redesign</h3>
                                            <p className="text-xs text-gray-400">Client: Acme Corp</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <motion.div
                                            className="text-xl font-mono font-bold text-accent"
                                            animate={{ opacity: [1, 0.5, 1] }}
                                            transition={{ duration: 1, repeat: Infinity }}
                                        >
                                            02:45:12
                                        </motion.div>
                                        <p className="text-xs text-green-400">Tracking...</p>
                                    </div>
                                </div>
                                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                    <motion.div
                                        className="h-full bg-accent"
                                        initial={{ width: "0%" }}
                                        animate={{ width: "100%" }}
                                        transition={{ duration: 3.5, ease: "linear" }}
                                    />
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {step === 1 && (
                        <motion.div
                            key="invoicing"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="w-full max-w-sm"
                        >
                            <div className="bg-background/80 border border-white/10 rounded-lg p-4 shadow-xl relative overflow-hidden">
                                {/* Scanning effect */}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/10 to-transparent"
                                    initial={{ top: "-100%" }}
                                    animate={{ top: "100%" }}
                                    transition={{ duration: 1.5, ease: "easeInOut" }}
                                />

                                <div className="flex items-center justify-between mb-6">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-purple-500/20 rounded-lg text-purple-400">
                                            <FileText size={20} />
                                        </div>
                                        <div>
                                            <h3 className="font-medium text-white">Invoice #1024</h3>
                                            <p className="text-xs text-gray-400">Generating...</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-400">Design Services</span>
                                        <span className="text-white">$2,400.00</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-400">Development</span>
                                        <span className="text-white">$3,600.00</span>
                                    </div>
                                    <div className="h-px w-full bg-white/10 my-2" />
                                    <div className="flex justify-between font-bold">
                                        <span className="text-white">Total</span>
                                        <span className="text-accent">$6,000.00</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {step === 2 && (
                        <motion.div
                            key="payment"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.1 }}
                            transition={{ duration: 0.5 }}
                            className="w-full max-w-sm"
                        >
                            <div className="bg-background/80 border border-green-500/30 rounded-lg p-6 shadow-xl flex flex-col items-center text-center relative overflow-hidden">
                                <div className="absolute inset-0 bg-green-500/5" />

                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                                    className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4 text-green-400"
                                >
                                    <CheckCircle2 size={32} />
                                </motion.div>

                                <h3 className="text-xl font-bold text-white mb-1">Payment Received</h3>
                                <p className="text-gray-400 text-sm mb-4">Invoice #1024 has been paid.</p>

                                <div className="flex items-center gap-2 text-2xl font-bold text-green-400">
                                    <DollarSign size={24} />
                                    <span>6,000.00</span>
                                </div>

                                <motion.div
                                    className="mt-4 text-xs text-green-500/70 flex items-center gap-1"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.5 }}
                                >
                                    Funds available instantly <ArrowRight size={10} />
                                </motion.div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Progress Indicators */}
            <div className="h-12 border-t border-white/5 flex items-center justify-center gap-8 px-6">
                <div className={`flex items-center gap-2 text-xs transition-colors duration-300 ${step === 0 ? 'text-accent' : 'text-gray-600'}`}>
                    <Clock size={14} />
                    <span>Track</span>
                </div>
                <div className={`w-8 h-px transition-colors duration-300 ${step > 0 ? 'bg-accent/50' : 'bg-white/5'}`} />
                <div className={`flex items-center gap-2 text-xs transition-colors duration-300 ${step === 1 ? 'text-purple-400' : 'text-gray-600'}`}>
                    <FileText size={14} />
                    <span>Invoice</span>
                </div>
                <div className={`w-8 h-px transition-colors duration-300 ${step > 1 ? 'bg-green-500/50' : 'bg-white/5'}`} />
                <div className={`flex items-center gap-2 text-xs transition-colors duration-300 ${step === 2 ? 'text-green-400' : 'text-gray-600'}`}>
                    <DollarSign size={14} />
                    <span>Get Paid</span>
                </div>
            </div>
        </div>
    );
}
