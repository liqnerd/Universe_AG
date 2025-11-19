import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, FileText, Wallet, DollarSign, ArrowRight, Pause } from "lucide-react";

export function DashboardAnimation() {
    const [step, setStep] = useState(0);
    const [timer, setTimer] = useState(9912); // Start at 02:45:12 (in seconds)

    // Cycle steps
    useEffect(() => {
        const stepInterval = setInterval(() => {
            setStep((prev) => (prev + 1) % 3);
        }, 5000); // 5 seconds per step
        return () => clearInterval(stepInterval);
    }, []);

    // Timer logic (runs continuously)
    useEffect(() => {
        const timerInterval = setInterval(() => {
            setTimer((prev) => prev + 1);
        }, 1000);
        return () => clearInterval(timerInterval);
    }, []);

    const formatTime = (totalSeconds) => {
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;
        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    const projects = [
        { id: 1, name: "Website Redesign", client: "Acme Corp", time: timer, active: true, color: "text-blue-400", bg: "bg-blue-500/20" },
        { id: 2, name: "Mobile App", client: "Stark Ind", time: 51605, active: false, color: "text-purple-400", bg: "bg-purple-500/20" },
        { id: 3, name: "Brand Identity", client: "Wayne Ent", time: 12450, active: false, color: "text-orange-400", bg: "bg-orange-500/20" },
    ];

    const invoices = [
        { id: 1024, client: "Acme Corp", amount: "$6,000.00", status: "Sent", color: "text-blue-400", bg: "bg-blue-500/20" },
        { id: 1025, client: "Stark Ind", amount: "$12,500.00", status: "Draft", color: "text-purple-400", bg: "bg-purple-500/20" },
        { id: 1026, client: "Wayne Ent", amount: "$4,200.00", status: "Paid", color: "text-green-400", bg: "bg-green-500/20" },
    ];

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
                            className="w-full max-w-sm space-y-3"
                        >
                            {projects.map((project, index) => (
                                <motion.div
                                    key={project.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className={`bg-background/80 border ${project.active ? 'border-accent/50 shadow-[0_0_15px_rgba(210,245,88,0.1)]' : 'border-white/5'} rounded-lg p-3 shadow-lg flex items-center justify-between`}
                                >
                                    <div className="flex items-center gap-3">
                                        <div className={`p-2 ${project.bg} rounded-lg ${project.color}`}>
                                            <Clock size={16} />
                                        </div>
                                        <div>
                                            <h3 className="font-medium text-white text-sm">{project.name}</h3>
                                            <p className="text-[10px] text-gray-400">Client: {project.client}</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className={`font-mono font-bold text-sm ${project.active ? 'text-accent' : 'text-gray-500'}`}>
                                            {formatTime(project.time)}
                                        </div>
                                        {project.active ? (
                                            <div className="flex items-center justify-end gap-1 text-[10px] text-accent animate-pulse">
                                                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                                                <span>Running</span>
                                            </div>
                                        ) : (
                                            <div className="flex items-center justify-end gap-1 text-[10px] text-gray-600">
                                                <Pause size={8} />
                                                <span>Paused</span>
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    )}

                    {step === 1 && (
                        <motion.div
                            key="invoicing"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="w-full max-w-sm space-y-3"
                        >
                            <div className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">Recent Invoices</div>
                            {invoices.map((invoice, index) => (
                                <motion.div
                                    key={invoice.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.15 }}
                                    className="bg-background/80 border border-white/10 rounded-lg p-3 shadow-lg flex items-center justify-between group"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className={`p-2 ${invoice.bg} rounded-lg ${invoice.color}`}>
                                            <FileText size={16} />
                                        </div>
                                        <div>
                                            <h3 className="font-medium text-white text-sm">{invoice.client}</h3>
                                            <p className="text-[10px] text-gray-400">#{invoice.id}</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="font-bold text-white text-sm">{invoice.amount}</div>
                                        <div className={`text-[10px] ${invoice.status === 'Paid' ? 'text-green-400' : 'text-gray-500'}`}>
                                            {invoice.status}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    )}

                    {step === 2 && (
                        <motion.div
                            key="payment"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.1 }}
                            transition={{ duration: 0.5 }}
                            className="w-full max-w-sm flex flex-col items-center"
                        >
                            <div className="relative mb-6">
                                {/* Wallet */}
                                <div className="w-20 h-20 bg-background border border-white/10 rounded-2xl flex items-center justify-center shadow-2xl relative z-10">
                                    <Wallet className="text-white w-10 h-10" />
                                </div>

                                {/* Dropping Coins */}
                                {[...Array(5)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        className="absolute left-1/2 -translate-x-1/2 text-accent z-0"
                                        initial={{ y: -100, opacity: 0, scale: 0.5 }}
                                        animate={{
                                            y: 0,
                                            opacity: [0, 1, 0],
                                            scale: 1,
                                            rotate: [0, 180, 360]
                                        }}
                                        transition={{
                                            duration: 1.5,
                                            delay: i * 0.2,
                                            ease: "easeIn",
                                            repeat: Infinity,
                                            repeatDelay: 2
                                        }}
                                    >
                                        <div className="w-8 h-8 rounded-full bg-accent/20 border border-accent flex items-center justify-center text-[10px] font-bold">
                                            $
                                        </div>
                                    </motion.div>
                                ))}

                                {/* Glow behind wallet */}
                                <div className="absolute inset-0 bg-accent/20 blur-xl rounded-full -z-10 animate-pulse" />
                            </div>

                            <motion.h3
                                className="text-3xl font-bold text-white mb-2 text-center"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                            >
                                Get Paid <span className="text-accent">Sooner</span>
                            </motion.h3>

                            <motion.p
                                className="text-gray-400 text-sm text-center max-w-[200px]"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.7 }}
                            >
                                Automated follow-ups and instant payments.
                            </motion.p>
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
