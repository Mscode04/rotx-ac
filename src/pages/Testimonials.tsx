import { motion } from "framer-motion";
import ParticleBackground from "@/components/ParticleBackground";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TestimonialSlider from "@/components/TestimonialSlider";
import GlassCard from "@/components/GlassCard";
import NeonButton from "@/components/NeonButton";
import { HiUserGroup, HiStar, HiHeart } from "react-icons/hi";

const stats = [
  { icon: HiUserGroup, value: "500+", label: "Students" },
  { icon: HiStar, value: "98%", label: "Satisfaction" },
  { icon: HiHeart, value: "5", label: "Years" },
];

const Testimonials = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <ParticleBackground />
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-12 relative">
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-orbitron font-bold text-3xl md:text-5xl gradient-text mb-4"
          >
            What Parents Say
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground max-w-md mx-auto"
          >
            Real experiences from our RotX family.
          </motion.p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard glowColor={index === 1 ? "purple" : "cyan"} className="text-center py-6">
                  <stat.icon className={`w-6 h-6 mx-auto mb-2 ${index === 1 ? "text-secondary" : "text-primary"}`} />
                  <h3 className="font-orbitron font-bold text-2xl gradient-text">{stat.value}</h3>
                  <p className="text-muted-foreground text-xs">{stat.label}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Slider */}
      <section className="py-12 relative">
        <div className="container mx-auto px-4 relative">
          <TestimonialSlider />
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 relative">
        <div className="container mx-auto px-4">
          <GlassCard glowColor="mixed" className="text-center py-10 px-6 max-w-xl mx-auto">
            <h2 className="font-orbitron font-bold text-2xl gradient-text mb-3">
              Join Our Community
            </h2>
            <p className="text-muted-foreground mb-6 text-sm">
              Be part of the transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <NeonButton to="/apply">Apply Now</NeonButton>
              <NeonButton to="/contact" variant="outline">Contact Us</NeonButton>
            </div>
          </GlassCard>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Testimonials;