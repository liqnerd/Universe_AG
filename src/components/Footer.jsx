import { motion } from "framer-motion";

export function Footer() {
    return (
        <footer className="border-t border-white/10 py-12 bg-background">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
                <div className="flex items-center space-x-2 mb-4 md:mb-0">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-background font-bold text-lg">
                        U
                    </div>
                    <span className="text-xl font-semibold text-white">Universe</span>
                </div>

                <div className="text-gray-500 text-sm">
                    &copy; 2025 Universe. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
