import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const socialLinks = [
    { icon: FaTwitter, href: "#", label: "Twitter" },
    { icon: FaFacebookF, href: "#", label: "Facebook" },
    { icon: FaInstagram, href: "#", label: "Instagram" },
    { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
    { icon: FaYoutube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="relative mt-20 border-t border-border/30">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-50" />
      
      <div className="relative container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              {/* <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-neon-cyan to-neon-purple flex items-center justify-center">
                <span className="font-orbitron font-bold text-primary-foreground text-lg">R</span>
              </div> */}
              <span className="font-orbitron font-bold text-xl gradient-text">ROTX</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Transforming kids into future innovators through our revolutionary 5-stage learning journey.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-orbitron font-semibold text-neon-cyan mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Programs", "Testimonials", "Apply Now", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase().replace(" ", "")}`}
                    className="text-muted-foreground hover:text-neon-cyan transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Learning Stages */}
          <div>
            <h4 className="font-orbitron font-semibold text-neon-purple mb-4">Learning Stages</h4>
            <ul className="space-y-2">
              {["Ignition", "Discovery", "Evolution", "Execution", "Transformation"].map((stage) => (
                <li key={stage}>
                  <span className="text-muted-foreground text-sm">{stage}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-orbitron font-semibold text-neon-cyan mb-4">Connect</h4>
            <div className="flex gap-3 mb-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.2, y: -3 }}
                  className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center text-muted-foreground hover:text-neon-cyan hover:bg-neon-cyan/10 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
            <p className="text-muted-foreground text-sm">
              info@rotxfuture.academy
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} ROTX Future Academy. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-muted-foreground hover:text-neon-cyan text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-neon-cyan text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
