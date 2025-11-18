import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';
import { Home, Sparkles, HelpCircle } from 'lucide-react';

export function Navbar() {
    const [activeTab, setActiveTab] = useState('Home');
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 640);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const sections = document.querySelectorAll('section, #home');
        const observerOptions = {
            threshold: 0.3,
            rootMargin: "-10% 0px -10% 0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    if (id) {
                        const navItem = navItems.find(item => item.url === `#${id}`);
                        if (navItem) {
                            setActiveTab(navItem.name);
                        }
                    }
                }
            });
        }, observerOptions);

        sections.forEach(section => observer.observe(section));

        return () => sections.forEach(section => observer.unobserve(section));
    }, []);

    const navItems = [
        { name: 'Home', url: '#home', icon: Home },
        { name: 'Features', url: '#features', icon: Sparkles },
        { name: 'FAQ', url: '#faq', icon: HelpCircle },
    ];

    return (
        <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
            {/* Fixed Logo (Top Left) */}
            <div className="fixed top-6 left-6 pointer-events-auto">
                <a href="#" className="flex items-center space-x-2 group">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-background font-bold text-lg group-hover:shadow-neon transition-all duration-300">U</div>
                    <span className="self-center text-2xl font-semibold whitespace-nowrap tracking-tight text-white hidden md:block">Universe</span>
                </a>
            </div>

            {/* Fixed CTA (Top Right) */}
            <div className="fixed top-6 right-6 pointer-events-auto">
                <button type="button" className="text-background bg-accent hover:bg-accent-hover focus:ring-4 focus:outline-none focus:ring-accent/30 font-medium rounded-full text-sm px-6 py-2.5 text-center transition-all duration-300 shadow-neon hover:shadow-neon-hover transform hover:-translate-y-0.5">
                    Get Early Access
                </button>
            </div>

            {/* Tubelight Navbar (Center) */}
            <nav className={cn(
                "fixed left-1/2 -translate-x-1/2 pointer-events-auto transition-all duration-300",
                isMobile ? "bottom-6 top-auto" : "top-6 bottom-auto"
            )}>
                <div className="relative flex items-center gap-1 bg-white/5 border border-white/10 backdrop-blur-lg py-1 px-1 rounded-full shadow-lg">
                    {navItems.map((item) => {
                        const isActive = activeTab === item.name;
                        const Icon = item.icon;

                        return (
                            <a
                                key={item.name}
                                href={item.url}
                                onClick={() => setActiveTab(item.name)}
                                className={cn(
                                    "relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors flex items-center gap-2",
                                    isActive ? "text-accent" : "text-gray-300 hover:text-accent"
                                )}
                            >
                                <span className="hidden md:inline">{item.name}</span>
                                <span className="md:hidden"><Icon size={18} /></span>

                                {isActive && (
                                    <motion.div
                                        layoutId="lamp"
                                        className="absolute inset-0 w-full bg-white/5 rounded-full -z-10"
                                        initial={false}
                                        transition={{
                                            type: "spring",
                                            stiffness: 300,
                                            damping: 30,
                                        }}
                                    >
                                        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-accent rounded-t-full">
                                            <div className="absolute w-12 h-6 bg-accent/20 rounded-full blur-md -top-2 -left-2"></div>
                                            <div className="absolute w-8 h-6 bg-accent/20 rounded-full blur-md -top-1"></div>
                                            <div className="absolute w-4 h-4 bg-accent/20 rounded-full blur-sm top-0 left-2"></div>
                                        </div>
                                    </motion.div>
                                )}
                            </a>
                        );
                    })}
                </div>
            </nav>
        </div>
    );
}
