import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface NeonButtonProps {
  children: React.ReactNode;
  to?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
}

const NeonButton = ({
  children,
  to,
  onClick,
  variant = "primary",
  size = "md",
  className,
  type = "button",
  disabled = false,
}: NeonButtonProps) => {
  const baseStyles = cn(
    "relative font-orbitron font-semibold uppercase tracking-wider transition-all duration-300",
    "overflow-hidden group",
    {
      "px-4 py-2 text-sm": size === "sm",
      "px-6 py-3 text-base": size === "md",
      "px-8 py-4 text-lg": size === "lg",
    },
    {
      "bg-gradient-to-r from-neon-cyan to-neon-purple text-primary-foreground rounded-lg neon-glow hover:scale-105":
        variant === "primary",
      "bg-neon-purple/20 text-neon-purple border-2 border-neon-purple rounded-lg hover:bg-neon-purple/30 neon-glow-purple":
        variant === "secondary",
      "bg-transparent text-neon-cyan border-2 border-neon-cyan rounded-lg hover:bg-neon-cyan/10 animate-border-glow":
        variant === "outline",
    },
    disabled && "opacity-50 cursor-not-allowed",
    className
  );

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      <motion.span
        className="absolute inset-0 bg-gradient-to-r from-neon-cyan/20 to-neon-purple/20"
        initial={{ x: "-100%", opacity: 0 }}
        whileHover={{ x: "100%", opacity: 1 }}
        transition={{ duration: 0.5 }}
      />
    </>
  );

  if (to) {
    return (
      <motion.div
        whileHover={{ scale: disabled ? 1 : 1.05 }}
        whileTap={{ scale: disabled ? 1 : 0.95 }}
      >
        <Link to={to} className={baseStyles}>
          {content}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseStyles}
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
    >
      {content}
    </motion.button>
  );
};

export default NeonButton;
