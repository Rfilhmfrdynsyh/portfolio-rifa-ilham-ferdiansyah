import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Briefcase, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";
import profileImage from "@/assets/profile.jpg";
import { useRef } from "react";

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  // Parallax transforms for different layers
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 250]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-gradient">
      {/* Parallax Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Particles Layer 1 - Slowest */}
        <motion.div
          style={{ y: y1, opacity }}
          className="absolute inset-0"
        >
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={`particle-1-${i}`}
              animate={{
                y: [0, -20, 0],
                x: [0, 10, 0],
              }}
              transition={{
                duration: 5 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
              className="absolute w-2 h-2 bg-primary/30 rounded-full blur-sm"
              style={{
                top: `${15 + i * 15}%`,
                left: `${10 + i * 15}%`,
              }}
            />
          ))}
        </motion.div>

        {/* Gradient Orbs Layer 2 - Medium speed */}
        <motion.div
          style={{ y: y2, opacity }}
          className="absolute inset-0"
        >
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.4, 0.2],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/15 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.15, 0.25, 0.15],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl"
          />
        </motion.div>

        {/* Floating Particles Layer 3 - Fastest */}
        <motion.div
          style={{ y: y3, opacity }}
          className="absolute inset-0"
        >
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`particle-3-${i}`}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3,
              }}
              className="absolute w-1 h-1 bg-accent/50 rounded-full"
              style={{
                top: `${20 + i * 10}%`,
                right: `${5 + i * 12}%`,
              }}
            />
          ))}
        </motion.div>
        
        {/* Grid Pattern - Static but with fade on scroll */}
        <motion.div 
          style={{ opacity }}
          className="absolute inset-0 opacity-[0.02]"
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(hsl(var(--primary)/0.3) 1px, transparent 1px),
                linear-gradient(90deg, hsl(var(--primary)/0.3) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px'
            }}
          />
        </motion.div>

        {/* Diagonal Lines Layer */}
        <motion.div
          style={{ y: y1, opacity }}
          className="absolute inset-0 overflow-hidden"
        >
          <div className="absolute -top-1/2 -left-1/4 w-[150%] h-[200%] opacity-[0.015]"
            style={{
              backgroundImage: `repeating-linear-gradient(
                45deg,
                transparent,
                transparent 100px,
                hsl(var(--primary)) 100px,
                hsl(var(--primary)) 101px
              )`
            }}
          />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16">
            {/* Content */}
            <div className="text-center lg:text-left flex-1">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-sm text-muted-foreground">Available for opportunities</span>
              </motion.div>

              {/* Name */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
              >
                <span className="text-foreground">Rifa Ilham</span>
                <br />
                <span className="text-gradient">Ferdiansyah</span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg md:text-xl text-muted-foreground mb-3 font-light"
              >
                "Merging technical expertise with creative vision to deliver digital excellence."
              </motion.p>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-muted-foreground mb-8 max-w-xl"
              >
                Founder of{" "}
                <span className="text-primary">Rifanidigitalstudio.my.id</span> –{" "}
                Founder <span className="text-primary">PT. Cendra Kreatif Nusantara</span> –{" "}
                and Founder <span className="text-primary">Family Protect</span>
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
              >
                <Button variant="hero" size="lg" asChild>
                  <a href="#projects" className="gap-3">
                    <Briefcase className="w-5 h-5" />
                    View My Projects
                  </a>
                </Button>
                <Button variant="heroOutline" size="lg" asChild>
                  <a href="#contact" className="gap-3">
                    <MessageCircle className="w-5 h-5" />
                    Let's Connect
                  </a>
                </Button>
              </motion.div>
            </div>

            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="relative flex-shrink-0"
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                {/* Glow Effect */}
                <div className="absolute -top-4 -right-4 w-32 h-32 bg-primary/40 rounded-full blur-2xl" />
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 via-transparent to-accent/20 opacity-60 blur-xl" />
                {/* Image Container */}
                <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-primary/20">
                  <img
                    src={profileImage}
                    alt="Rifa Ilham Ferdiansyah"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-muted-foreground"
          >
            <span className="text-xs">Scroll to explore</span>
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
