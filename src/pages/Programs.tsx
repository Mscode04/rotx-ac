import { motion } from "framer-motion";
import { HiLightBulb, HiGlobe, HiChip, HiPuzzle, HiAcademicCap } from "react-icons/hi";
import ParticleBackground from "@/components/ParticleBackground";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StageCard from "@/components/StageCard";
import GlassCard from "@/components/GlassCard";
import NeonButton from "@/components/NeonButton";

const stages = [
  {
    title: "IGNITION",
    subtitle: "Where Curiosity Begins",
    icon: HiLightBulb,
    whatYouLearn: ["Strong academics", "Creative thinking", "Early leadership", "Communication skills"],
    whatYouDo: ["Fun learning tasks", "Brain-boost activities", "Starter clubs"],
    color: "cyan" as const,
  },
  {
    title: "DISCOVERY",
    subtitle: "Understanding the World",
    icon: HiGlobe,
    whatYouLearn: ["Digital awareness", "Project-based learning", "Emotional intelligence"],
    whatYouDo: ["Mini-projects", "Field discovery", "Community tasks"],
    color: "purple" as const,
  },
  {
    title: "EVOLUTION",
    subtitle: "Building Future Skills",
    icon: HiChip,
    whatYouLearn: ["Critical thinking", "Entrepreneurial mindset", "Presentation skills"],
    whatYouDo: ["Innovation labs", "Design thinking", "Student exhibitions"],
    color: "cyan" as const,
  },
  {
    title: "EXECUTION",
    subtitle: "Ideas Into Reality",
    icon: HiPuzzle,
    whatYouLearn: ["Planning & leadership", "Public speaking", "Digital creation"],
    whatYouDo: ["Build prototypes", "Organize events", "Digital portfolios"],
    color: "purple" as const,
  },
  {
    title: "TRANSFORMATION",
    subtitle: "Become a RotX Achiever",
    icon: HiAcademicCap,
    whatYouLearn: ["Life & career skills", "Independence", "Global awareness"],
    whatYouDo: ["Social projects", "Career labs", "Graduation showcase"],
    color: "cyan" as const,
  },
];

const Programs = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <ParticleBackground />
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-12 relative">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-orbitron font-bold text-3xl md:text-5xl gradient-text mb-4"
          >
            5-Stage Learning Journey
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground max-w-xl mx-auto"
          >
            Progressive learning from curious minds to confident innovators.
          </motion.p>
        </div>
      </section>

      {/* Timeline Progress */}
      <section className="py-8 relative">
        <div className="container mx-auto px-4">
          <div className="hidden lg:flex justify-between items-center mb-12 relative">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-full" />
            {stages.map((stage, index) => (
              <motion.div
                key={stage.title}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative z-10 flex flex-col items-center"
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  index % 2 === 0 ? "bg-primary" : "bg-secondary"
                } neon-glow`}>
                  <stage.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="font-orbitron font-semibold text-xs mt-2 text-foreground/70">
                  {stage.title}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Stage Cards */}
          <div className="space-y-6">
            {stages.map((stage, index) => (
              <StageCard key={stage.title} {...stage} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Promise */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <GlassCard glowColor="cyan" className="text-center py-8">
              <h3 className="font-orbitron font-bold text-xl text-primary mb-3">RotX Vision</h3>
              <p className="text-foreground/90 italic">
                "Create thinkers, makers, innovators & global achievers."
              </p>
            </GlassCard>
            <GlassCard glowColor="purple" className="text-center py-8">
              <h3 className="font-orbitron font-bold text-xl text-secondary mb-3">RotX Promise</h3>
              <p className="text-foreground/90 italic">
                "Every child grows with purpose, creativity & confidence."
              </p>
            </GlassCard>
          </div>

          <div className="text-center">
            <NeonButton to="/apply" size="lg">Apply Now</NeonButton>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Programs;