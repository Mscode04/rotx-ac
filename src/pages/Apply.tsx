import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ParticleBackground from "@/components/ParticleBackground";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GlassCard from "@/components/GlassCard";
import { submitApplication, ApplicationData } from "@/lib/firebase";
import { HiChevronRight, HiChevronLeft, HiCheck } from "react-icons/hi";

interface FormData {
  topQualities: string[];
  schoolReason: string;
  involvement: string;
  openToSkillsBased: string;
  preferredSystem: string;
  reducedHomework: string;
  parentName: string;
  childName: string;
  phone: string;
  city: string;
}

const Apply = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [reportData, setReportData] = useState<FormData | null>(null);
  const [formData, setFormData] = useState<FormData>({
    topQualities: [],
    schoolReason: "",
    involvement: "",
    openToSkillsBased: "",
    preferredSystem: "",
    reducedHomework: "",
    parentName: "",
    childName: "",
    phone: "",
    city: "",
  });

  const questions = [
    {
      key: "topQualities",
      question: "What qualities matter most to you?",
      type: "multi",
      options: ["High level thinking", "Finding passion", "Life skills", "Strong academics", "Creativity"],
      max: 3,
    },
    {
      key: "schoolReason",
      question: "Why are you looking for a new school?",
      type: "single",
      options: ["Find child's passion", "Better academics", "Holistic development", "Life skills focus"],
    },
    {
      key: "involvement",
      question: "How involved do you want to be?",
      type: "single",
      options: ["Leave it to school", "When needed", "Moderately", "Fully involved"],
    },
    {
      key: "openToSkillsBased",
      question: "Open to skills-based learning?",
      type: "single",
      options: ["Yes", "No"],
    },
    {
      key: "preferredSystem",
      question: "Preferred learning system?",
      type: "single",
      options: ["Life skills-based", "Activity-based", "Textbook-based", "Mixed approach"],
    },
    {
      key: "reducedHomework",
      question: "Comfortable with less homework?",
      type: "single",
      options: ["Yes", "No"],
    },
    {
      key: "parentName",
      question: "Your name?",
      type: "text",
      placeholder: "Enter your full name",
    },
    {
      key: "childName",
      question: "Child's name?",
      type: "text",
      placeholder: "Enter child's name",
    },
    {
      key: "phone",
      question: "Phone number?",
      type: "text",
      placeholder: "+91 XXXXX XXXXX",
    },
    {
      key: "city",
      question: "Your city?",
      type: "text",
      placeholder: "Enter your city",
    },
  ];

  const currentQ = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const determineTrack = (data: FormData): string => {
    const involvementScore = data.involvement === "Fully involved" ? 3 : data.involvement === "Moderately" ? 2 : 1;
    const skillsScore = data.openToSkillsBased === "Yes" ? 2 : 1;
    const systemScore = data.preferredSystem === "Life skills-based" ? 3 : data.preferredSystem === "Activity-based" ? 2 : 1;
    const totalScore = involvementScore + skillsScore + systemScore;
    
    if (totalScore >= 7) return "TRANSFORMATION";
    if (totalScore >= 6) return "EXECUTION";
    if (totalScore >= 5) return "EVOLUTION";
    if (totalScore >= 4) return "DISCOVERY";
    return "IGNITION";
  };

  const handleOptionClick = (option: string) => {
    if (currentQ.type === "multi") {
      setFormData(prev => {
        const current = prev[currentQ.key as keyof FormData] as string[];
        if (current.includes(option)) {
          return { ...prev, [currentQ.key]: current.filter(q => q !== option) };
        }
        if (current.length < (currentQ.max || 3)) {
          return { ...prev, [currentQ.key]: [...current, option] };
        }
        return prev;
      });
    } else {
      setFormData(prev => ({ ...prev, [currentQ.key]: option }));
      // Auto advance for single select
      setTimeout(() => {
        if (currentQuestion < questions.length - 1) {
          setCurrentQuestion(prev => prev + 1);
        }
      }, 300);
    }
  };

  const handleTextChange = (value: string) => {
    setFormData(prev => ({ ...prev, [currentQ.key]: value }));
  };

  const canProceed = () => {
    const value = formData[currentQ.key as keyof FormData];
    if (currentQ.type === "multi") return (value as string[]).length >= 1;
    return value && (value as string).trim() !== "";
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const handleSubmit = async () => {
    const recommendedTrack = determineTrack(formData);
    const responses = questions.map(q => ({
      question: q.question,
      answer: formData[q.key as keyof FormData]
    }));
    const applicationData: ApplicationData = {
      responses,
      submittedAt: new Date(),
      recommendedTrack,
    };

    await submitApplication(applicationData);
    setReportData(formData);
    setIsSubmitted(true);
  };

  if (isSubmitted && reportData) {
    const recommendedTrack = determineTrack(reportData);
    
    return (
      <div className="min-h-screen relative overflow-hidden">
        <ParticleBackground />
        <Navbar />

        <section className="pt-28 pb-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <GlassCard glowColor="mixed" className="max-w-lg mx-auto py-8 px-6">
                <div className="text-center mb-6">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                    className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center neon-glow"
                  >
                    <HiCheck className="w-8 h-8 text-primary-foreground" />
                  </motion.div>
                  <h2 className="font-orbitron font-bold text-2xl gradient-text mb-2">
                    Application Submitted!
                  </h2>
                  <p className="text-muted-foreground text-sm">Your personalized assessment</p>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-lg bg-muted/30 border border-border/30">
                      <p className="text-muted-foreground text-xs mb-1">Parent</p>
                      <p className="font-medium text-foreground text-sm">{reportData.parentName}</p>
                    </div>
                    <div className="p-3 rounded-lg bg-muted/30 border border-border/30">
                      <p className="text-muted-foreground text-xs mb-1">Child</p>
                      <p className="font-medium text-foreground text-sm">{reportData.childName}</p>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-muted/30 border border-border/30">
                    <p className="text-muted-foreground text-xs mb-1">Top Interests</p>
                    <p className="font-medium text-foreground text-sm">{reportData.topQualities.join(", ")}</p>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="p-4 rounded-xl bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30"
                  >
                    <p className="text-muted-foreground text-xs mb-1">Recommended Track</p>
                    <p className="font-orbitron font-bold text-2xl gradient-text">{recommendedTrack}</p>
                  </motion.div>

                  <div className="p-3 rounded-lg bg-accent/10 border border-accent/30 text-center">
                    <p className="text-foreground text-sm">Our team will contact you soon!</p>
                    <a href="https://community.rotx.in" className="text-primary text-sm hover:underline">
                      Join our community →
                    </a>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      <ParticleBackground />
      <Navbar />

      <section className="pt-28 pb-20 min-h-screen flex items-center">
        <div className="container mx-auto px-4">
          {/* Progress bar */}
          <div className="max-w-md mx-auto mb-8">
            <div className="flex justify-between text-sm text-muted-foreground mb-2">
              <span>Question {currentQuestion + 1}/{questions.length}</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-primary to-secondary"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="max-w-md mx-auto"
            >
              <GlassCard glowColor="cyan" className="py-8 px-6">
                <h2 className="font-orbitron font-bold text-xl text-center gradient-text mb-6">
                  {currentQ.question}
                </h2>

                {currentQ.type === "text" ? (
                  <input
                    type={currentQ.key === "phone" ? "tel" : "text"}
                    value={formData[currentQ.key as keyof FormData] as string}
                    onChange={(e) => handleTextChange(e.target.value)}
                    placeholder={currentQ.placeholder}
                    className="w-full p-4 rounded-lg bg-muted/30 border border-border/50 text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-center text-lg"
                    autoFocus
                  />
                ) : (
                  <div className="space-y-3">
                    {currentQ.options?.map((option) => {
                      const isSelected = currentQ.type === "multi"
                        ? (formData[currentQ.key as keyof FormData] as string[]).includes(option)
                        : formData[currentQ.key as keyof FormData] === option;

                      return (
                        <motion.button
                          key={option}
                          type="button"
                          onClick={() => handleOptionClick(option)}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className={`w-full p-4 rounded-lg border text-left transition-all flex items-center gap-3 ${
                            isSelected
                              ? "border-primary bg-primary/10 text-primary"
                              : "border-border/50 bg-muted/20 text-foreground/80 hover:border-primary/50"
                          }`}
                        >
                          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                            isSelected ? "border-primary bg-primary" : "border-border"
                          }`}>
                            {isSelected && <HiCheck className="w-3 h-3 text-primary-foreground" />}
                          </div>
                          <span className="text-sm">{option}</span>
                        </motion.button>
                      );
                    })}
                    {currentQ.type === "multi" && (
                      <p className="text-muted-foreground text-xs text-center mt-2">
                        Select up to {currentQ.max} options
                      </p>
                    )}
                  </div>
                )}

                {/* Navigation */}
                <div className="flex justify-between mt-8">
                  <button
                    onClick={handleBack}
                    disabled={currentQuestion === 0}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                      currentQuestion === 0
                        ? "opacity-30 cursor-not-allowed"
                        : "text-foreground/70 hover:text-foreground hover:bg-muted/30"
                    }`}
                  >
                    <HiChevronLeft className="w-5 h-5" />
                    Back
                  </button>

                  {currentQuestion === questions.length - 1 ? (
                    <button
                      onClick={handleSubmit}
                      disabled={!canProceed()}
                      className={`flex items-center gap-2 px-6 py-2 rounded-lg font-semibold transition-all ${
                        canProceed()
                          ? "bg-gradient-to-r from-primary to-secondary text-primary-foreground neon-glow"
                          : "bg-muted text-muted-foreground cursor-not-allowed"
                      }`}
                    >
                      Submit
                      <HiCheck className="w-5 h-5" />
                    </button>
                  ) : (
                    <button
                      onClick={handleNext}
                      disabled={!canProceed()}
                      className={`flex items-center gap-2 px-6 py-2 rounded-lg font-semibold transition-all ${
                        canProceed()
                          ? "bg-gradient-to-r from-primary to-secondary text-primary-foreground neon-glow"
                          : "bg-muted text-muted-foreground cursor-not-allowed"
                      }`}
                    >
                      Next
                      <HiChevronRight className="w-5 h-5" />
                    </button>
                  )}
                </div>
              </GlassCard>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Apply;