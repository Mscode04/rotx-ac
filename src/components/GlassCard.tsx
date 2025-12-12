import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: "cyan" | "purple" | "mixed";
  hover?: boolean;
  delay?: number;
}

const GlassCard = ({
  children,
  className,
  glowColor = "cyan",
  hover = true,
  delay = 0,
}: GlassCardProps) => {
  const glowClasses = {
    cyan: "hover:shadow-[0_0_30px_hsl(var(--neon-cyan)/0.4)]",
    purple: "hover:shadow-[0_0_30px_hsl(var(--neon-purple)/0.4)]",
    mixed: "hover:shadow-[0_0_30px_hsl(var(--neon-cyan)/0.3),0_0_60px_hsl(var(--neon-purple)/0.2)]",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={hover ? { y: -5, scale: 1.02 } : undefined}
      className={cn(
        "glass-card p-6 transition-all duration-500",
        "border border-border/30 hover:border-neon-cyan/50",
        hover && glowClasses[glowColor],
        className
      )}
    >
      {/* Holographic overlay */}
      <div className="absolute inset-0 rounded-xl holographic opacity-30 pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};

export default GlassCard;
