import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiChevronLeft, HiChevronRight, HiStar } from "react-icons/hi";
import GlassCard from "./GlassCard";

const testimonials = [
  {
    id: 1,
    text: "RotX transformed my child's confidence in just months. The holistic approach to learning is exactly what modern education needs.",
    author: "Priya Sharma",
    role: "Parent",
    rating: 5,
  },
  {
    id: 2,
    text: "Best school for creativity and real-life skills. My son now thinks critically and approaches problems with a solution mindset.",
    author: "Rajesh Kumar",
    role: "Parent",
    rating: 5,
  },
  {
    id: 3,
    text: "Finally, a school that prepares kids for the future. The innovation labs and project-based learning are exceptional.",
    author: "Anita Patel",
    role: "Parent",
    rating: 5,
  },
  {
    id: 4,
    text: "The transformation in my daughter has been remarkable. She's more confident, creative, and excited about learning every day.",
    author: "Vikram Singh",
    role: "Parent",
    rating: 5,
  },
  {
    id: 5,
    text: "RotX's unique 5-stage approach ensures children develop at their own pace while building essential life skills.",
    author: "Meera Reddy",
    role: "Parent",
    rating: 5,
  },
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
  };

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Navigation Buttons */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handlePrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 w-12 h-12 rounded-full glass-card flex items-center justify-center text-neon-cyan hover:neon-glow-cyan transition-all"
      >
        <HiChevronLeft size={24} />
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 w-12 h-12 rounded-full glass-card flex items-center justify-center text-neon-cyan hover:neon-glow-cyan transition-all"
      >
        <HiChevronRight size={24} />
      </motion.button>

      {/* Testimonial Card */}
      <div className="overflow-hidden py-8">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <GlassCard glowColor="mixed" hover={false} className="text-center py-8 px-6 md:px-12">
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <HiStar className="w-6 h-6 text-neon-cyan" />
                  </motion.div>
                ))}
              </div>

              {/* Quote */}
              <p className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-8 font-poppins">
                "{testimonials[currentIndex].text}"
              </p>

              {/* Author */}
              <div>
                <p className="font-orbitron font-semibold text-neon-cyan">
                  {testimonials[currentIndex].author}
                </p>
                <p className="text-muted-foreground text-sm">
                  {testimonials[currentIndex].role}
                </p>
              </div>
            </GlassCard>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-4">
        {testimonials.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-neon-cyan w-6 neon-glow-cyan"
                : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
            }`}
            whileHover={{ scale: 1.2 }}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;
