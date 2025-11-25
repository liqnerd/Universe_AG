import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { DashboardAnimation } from "./dashboard-animation";
import emailjs from "@emailjs/browser";
import { Check } from "lucide-react";

function Hero() {
    const [titleNumber, setTitleNumber] = useState(0);
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
                    message: `New waitlist signup: ${email}`,
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
            <div className="container mx-auto px-4">
                <div className="flex gap-8 pt-48 pb-20 lg:py-40 items-center justify-center flex-col">

                    {/* Text Content */}
                    <div className="flex gap-4 flex-col">
                        <h1 className="text-4xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular">
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
                    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto mb-12">
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
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                disabled={status === 'loading' || status === 'success'}
                                className="block w-full p-4 ps-10 text-sm text-white border border-white/10 rounded-full bg-white/5 focus:ring-accent focus:border-accent placeholder-gray-500 focus:outline-none focus:ring-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                placeholder="Enter your email address"
                                required
                            />
                            <button
                                type="submit"
                                disabled={status === 'loading' || status === 'success'}
                                className={cn(
                                    "absolute end-2.5 bottom-2.5 font-medium rounded-full text-sm px-6 py-2 transition-all duration-300",
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

                    {/* Dashboard Preview */}
                    <div className="relative mt-20 md:mt-32 mx-auto max-w-5xl w-full">
                        <div className="relative rounded-xl border border-white/10 bg-surface/50 backdrop-blur-sm shadow-2xl overflow-hidden aspect-[3/4] md:aspect-[16/9] group">
                            <DashboardAnimation />
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl -z-10"></div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export { Hero };
