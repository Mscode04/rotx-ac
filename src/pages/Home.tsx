import { motion } from "framer-motion";
import { HiLightningBolt, HiSparkles, HiAcademicCap } from "react-icons/hi";
import { Link } from "react-router-dom";
import ParticleBackground from "@/components/ParticleBackground";
import NeonButton from "@/components/NeonButton";
import GlassCard from "@/components/GlassCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Home = () => {
  const features = [
    {
      icon: HiLightningBolt,
      title: "Future-Ready",
      description: "Critical thinking, creativity & leadership for tomorrow.",
    },
    {
      icon: HiSparkles,
      title: "5-Stage Journey",
      description: "From Ignition to Transformation in 5 progressive years.",
    },
    {
      icon: HiAcademicCap,
      title: "Hands-On Learning",
      description: "Innovation labs, projects & real-world experiences.",
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <ParticleBackground />
      <Navbar />

      {/* Hero Section - Simple */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl lg:text-7xl gradient-text mb-4">
            RotX Future Academy
          </h1>
          <h2 className="text-xl md:text-2xl text-foreground/90 font-poppins font-light mb-4">
            Future-Ready Learning for <span className="text-primary neon-text">Tomorrow's Innovators</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto mb-8">
            Build strong roots in values while preparing for the future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <NeonButton to="/programs" size="lg">
              Explore Programs
            </NeonButton>
            <NeonButton to="/apply" variant="outline" size="lg">
              Apply Now
            </NeonButton>
          </div>
        </div>
      </section>

      {/* Why RotX Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-orbitron font-bold text-3xl md:text-4xl gradient-text mb-3">
              Why RotX?
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Future-focused curriculum with strong value-based foundation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <GlassCard key={feature.title} glowColor={index === 1 ? "purple" : "cyan"} delay={index * 0.15}>
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4"
                >
                  <feature.icon className="w-6 h-6 text-primary" />
                </motion.div>
                <h3 className="font-orbitron font-semibold text-lg text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Promise */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent" />
        <div className="container mx-auto px-4 relative">
          <div className="grid md:grid-cols-2 gap-6">
            <GlassCard glowColor="cyan" className="text-center py-8">
              <h3 className="font-orbitron font-bold text-xl text-primary mb-3">Our Vision</h3>
              <p className="text-foreground/90 leading-relaxed">
                Create confident, curious, creative thinkers who can lead the future.
              </p>
            </GlassCard>

            <GlassCard glowColor="purple" className="text-center py-8">
              <h3 className="font-orbitron font-bold text-xl text-secondary mb-3">Our Promise</h3>
              <p className="text-foreground/90 leading-relaxed">
                Every child grows with purpose, creativity, and confidence.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <GlassCard glowColor="mixed" className="text-center py-10 px-6">
            <h2 className="font-orbitron font-bold text-2xl md:text-3xl gradient-text mb-3">
              Ready to Begin?
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto mb-6">
              Give your child the foundation for lifelong success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <NeonButton to="/apply" size="lg">Start Application</NeonButton>
              <NeonButton to="/gallery" variant="outline" size="lg">View Gallery</NeonButton>
            </div>
          </GlassCard>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;