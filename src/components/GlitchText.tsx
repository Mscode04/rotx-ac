import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlitchTextProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
}

const GlitchText = ({ text, className, as: Component = "h1" }: GlitchTextProps) => {
  return (
    <motion.div
      className="relative inline-block"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Component
        className={cn(
          "relative font-orbitron font-bold",
          className
        )}
      >
        {/* Main text */}
        <span className="relative z-10">{text}</span>
        
        {/* Glitch layers */}
        <span
          className="absolute inset-0 text-neon-cyan opacity-70"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 33%, 0 33%)",
            transform: "translateX(-2px)",
            animation: "glitch 2s infinite linear alternate-reverse",
          }}
          aria-hidden="true"
        >
          {text}
        </span>
        <span
          className="absolute inset-0 text-neon-purple opacity-70"
          style={{
            clipPath: "polygon(0 67%, 100% 67%, 100% 100%, 0 100%)",
            transform: "translateX(2px)",
            animation: "glitch 3s infinite linear alternate-reverse",
          }}
          aria-hidden="true"
        >
          {text}
        </span>
      </Component>
    </motion.div>
  );
};

export default GlitchText;
