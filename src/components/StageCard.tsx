import { motion } from "framer-motion";
import { IconType } from "react-icons";
import GlassCard from "./GlassCard";

interface StageCardProps {
  title: string;
  subtitle: string;
  icon: IconType;
  whatYouLearn: string[];
  whatYouDo: string[];
  index: number;
  color: "cyan" | "purple";
}

const StageCard = ({
  title,
  subtitle,
  icon: Icon,
  whatYouLearn,
  whatYouDo,
  index,
  color,
}: StageCardProps) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative"
    >
      {/* Connection line */}
      {index < 4 && (
        <div className="hidden lg:block absolute left-1/2 -bottom-10 w-0.5 h-10 bg-gradient-to-b from-neon-cyan/50 to-transparent" />
      )}

      <GlassCard
        glowColor={color}
        className="relative overflow-hidden"
        delay={index * 0.1}
      >
        {/* Stage number */}
        <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-gradient-to-br from-neon-cyan/10 to-neon-purple/10 flex items-center justify-center">
          <span className="font-orbitron font-bold text-4xl text-neon-cyan/30">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {/* Header */}
        <div className="flex items-start gap-4 mb-6">
          <motion.div
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.5 }}
            className={`w-14 h-14 rounded-xl flex items-center justify-center ${
              color === "cyan"
                ? "bg-neon-cyan/20 text-neon-cyan"
                : "bg-neon-purple/20 text-neon-purple"
            }`}
          >
            <Icon size={28} />
          </motion.div>
          <div>
            <h3 className="font-orbitron font-bold text-xl md:text-2xl gradient-text">
              {title}
            </h3>
            <p className="text-muted-foreground text-sm">{subtitle}</p>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* What You Learn */}
          <div>
            <h4 className="font-orbitron font-semibold text-neon-cyan text-sm uppercase tracking-wider mb-3">
              What You Learn
            </h4>
            <ul className="space-y-2">
              {whatYouLearn.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-start gap-2 text-foreground/80 text-sm"
                >
                  <span className="text-neon-cyan mt-1">▹</span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* What You Do */}
          <div>
            <h4 className="font-orbitron font-semibold text-neon-purple text-sm uppercase tracking-wider mb-3">
              What You Do
            </h4>
            <ul className="space-y-2">
              {whatYouDo.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-start gap-2 text-foreground/80 text-sm"
                >
                  <span className="text-neon-purple mt-1">▹</span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
};

export default StageCard;
