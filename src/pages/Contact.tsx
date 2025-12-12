import { motion } from "framer-motion";
import { HiLocationMarker, HiPhone, HiMail } from "react-icons/hi";
import { FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";
import ParticleBackground from "@/components/ParticleBackground";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GlassCard from "@/components/GlassCard";

const Contact = () => {
  const contactInfo = [
    { icon: HiLocationMarker, label: "Address", value: "RotX Future Academy, Your City, India" },
    { icon: HiPhone, label: "Phone", value: "+91 98765 43210" },
    { icon: HiMail, label: "Email", value: "info@rotxschool.com" },
  ];

  const socialLinks = [
    { icon: FaWhatsapp, href: "#", label: "WhatsApp" },
    { icon: FaInstagram, href: "#", label: "Instagram" },
    { icon: FaYoutube, href: "#", label: "YouTube" },
  ];

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
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground max-w-md mx-auto"
          >
            We'd love to hear from you.
          </motion.p>
        </div>
      </section>

      {/* Contact Info & Map */}
      <section className="py-8 relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <GlassCard glowColor="cyan" className="h-full">
                <h2 className="font-orbitron font-bold text-xl gradient-text mb-6">Get In Touch</h2>

                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={info.label}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-4"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-muted-foreground text-xs">{info.label}</p>
                        <p className="text-foreground text-sm font-medium">{info.value}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Social Links */}
                <div className="mt-8 pt-6 border-t border-border/30">
                  <h3 className="font-orbitron font-semibold text-sm text-secondary mb-3">Follow Us</h3>
                  <div className="flex gap-3">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + index * 0.1 }}
                        whileHover={{ scale: 1.1, y: -3 }}
                        className="w-10 h-10 rounded-lg bg-muted/30 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                        aria-label={social.label}
                      >
                        <social.icon size={18} />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </GlassCard>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <GlassCard glowColor="purple" className="h-full overflow-hidden p-0">
                <div className="p-4 border-b border-border/30">
                  <h2 className="font-orbitron font-bold text-xl gradient-text">Find Us</h2>
                </div>
                <div className="aspect-video lg:aspect-auto lg:h-[280px] relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0095665069814!2d77.59456!3d12.9715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzE3LjQiTiA3N8KwMzUnNDAuNCJF!5e0!3m2!1sen!2sin!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: "invert(0.9) hue-rotate(180deg)" }}
                    allowFullScreen
                    loading="lazy"
                    title="RotX Academy Location"
                    className="absolute inset-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent pointer-events-none" />
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Hours */}
      <section className="py-8 relative">
        <div className="container mx-auto px-4">
          <GlassCard glowColor="mixed" className="text-center max-w-md mx-auto py-6">
            <h3 className="font-orbitron font-bold text-lg gradient-text mb-4">Hours</h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 rounded-lg bg-muted/20">
                <p className="text-muted-foreground text-xs">Mon-Fri</p>
                <p className="font-semibold text-foreground text-sm">8AM - 5PM</p>
              </div>
              <div className="p-3 rounded-lg bg-muted/20">
                <p className="text-muted-foreground text-xs">Saturday</p>
                <p className="font-semibold text-foreground text-sm">9AM - 2PM</p>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;