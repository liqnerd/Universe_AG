import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { DashboardAnimation } from "./dashboard-animation";

function Hero() {
    const [titleNumber, setTitleNumber] = useState(0);
    const titles = useMemo(
        () => ["invoice faster", "get paid sooner", "work smarter"],
        []
    );

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (titleNumber === titles.length - 1) {
                setTitleNumber(0);
            } else {
                setTitleNumber(titleNumber + 1);
            }
        }, 2000);
        return () => clearTimeout(timeoutId);
    }, [titleNumber, titles]);

    return (
        <div className="w-full">
            <div className="container mx-auto">
                <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">

                    {/* Text Content */}
                    <div className="flex gap-4 flex-col">
                        <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular">
                            <span className="text-spektr-cyan-50">Get Universe and,</span>
                            <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                                &nbsp;
                                {titles.map((title, index) => (
                                    <motion.span
                                        key={index}
                                        className="absolute font-semibold"
                                        initial={{ opacity: 0, y: "-100" }}
                                        transition={{ type: "spring", stiffness: 50 }}
                                        animate={
                                            titleNumber === index
                                                ? {
                                                    y: 0,
                                                    opacity: 1,
                                                }
                                                : {
                                                    y: titleNumber > index ? -150 : 150,
                                                    opacity: 0,
                                                }
                                        }
                                    >
                                        {title}
                                    </motion.span>
                                ))}
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
                            Universe combines your to-dos, time tracking, and invoicing – so you never lose billable hours again.
                            The all-in-one OS for modern freelancers.
                        </p>
                    </div>

                    {/* Email Form */}
                    <form className="w-full max-w-md mx-auto mb-12">
                        <label htmlFor="email" className="mb-2 text-sm font-medium text-gray-300 sr-only">Email address</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                    <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                                    <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                                </svg>
                            </div>
                            <input
                                type="email"
                                id="email"
                                className="block w-full p-4 ps-10 text-sm text-white border border-white/10 rounded-full bg-white/5 focus:ring-accent focus:border-accent placeholder-gray-500 focus:outline-none focus:ring-2 transition-all"
                                placeholder="Enter your email address"
                                required
                            />
                            <button
                                type="submit"
                                className="text-background absolute end-2.5 bottom-2.5 bg-accent hover:bg-accent-hover focus:ring-4 focus:outline-none focus:ring-accent/30 font-medium rounded-full text-sm px-6 py-2 transition-all duration-300 hover:shadow-neon"
                            >
                                Join the waitlist
                            </button>
                        </div>
                        <p className="mt-3 text-xs text-gray-500 text-center">No spam. Unsubscribe anytime.</p>
                    </form>

                    {/* Dashboard Preview */}
                    <div className="relative mt-12 mx-auto max-w-5xl w-full">
                        <div className="relative rounded-xl border border-white/10 bg-surface/50 backdrop-blur-sm shadow-2xl overflow-hidden aspect-[16/9] group">
                            <DashboardAnimation />
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl -z-10"></div>
                        <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl -z-10"></div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export { Hero };
