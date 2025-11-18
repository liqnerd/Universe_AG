import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function ScrollReveal({ children, className, delay = 0, width = "fit-content" }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.6, delay: delay, ease: "easeOut" }}
            className={cn(className)}
            style={{ width }}
        >
            {children}
        </motion.div>
    );
}
