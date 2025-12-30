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
      {/* Enhanced Dynamic Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Mesh Gradient Base */}
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 80% 50% at 20% 30%, hsl(280 70% 35% / 0.4), transparent 50%),
              radial-gradient(ellipse 60% 40% at 80% 20%, hsl(var(--primary) / 0.3), transparent 50%),
              radial-gradient(ellipse 70% 60% at 70% 80%, hsl(260 60% 30% / 0.35), transparent 50%),
              radial-gradient(ellipse 50% 30% at 30% 80%, hsl(var(--accent) / 0.25), transparent 50%)
            `,
            backgroundSize: '200% 200%',
          }}
        />

        {/* Floating Orbs Layer */}
        <motion.div
          style={{ y: y2, opacity }}
          className="absolute inset-0"
        >
          {/* Large Purple Orb */}
          <motion.div
            animate={{
              x: [0, 50, 0],
              y: [0, -30, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full blur-[120px]"
            style={{ background: 'radial-gradient(circle, hsl(280 60% 45% / 0.45), transparent 60%)' }}
          />
          {/* Cyan Orb */}
          <motion.div
            animate={{
              x: [0, -40, 0],
              y: [0, 40, 0],
              scale: [1.1, 1, 1.1],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute top-1/4 -right-20 w-[500px] h-[500px] rounded-full blur-[100px]"
            style={{ background: 'radial-gradient(circle, hsl(var(--primary) / 0.5), transparent 60%)' }}
          />
          {/* Magenta Orb */}
          <motion.div
            animate={{
              x: [0, 30, 0],
              y: [0, -20, 0],
              scale: [1, 1.15, 1],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 4 }}
            className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full blur-[80px]"
            style={{ background: 'radial-gradient(circle, hsl(300 70% 40% / 0.35), transparent 60%)' }}
          />
          {/* Deep Blue Orb */}
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-0 right-1/3 w-[550px] h-[400px] rounded-full blur-[100px]"
            style={{ background: 'radial-gradient(circle, hsl(240 50% 35% / 0.3), transparent 60%)' }}
          />
        </motion.div>

        {/* Floating Particles */}
        <motion.div style={{ y: y1, opacity }} className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              animate={{
                y: [0, -40 - (i % 3) * 20, 0],
                x: [0, (i % 2 === 0 ? 20 : -20), 0],
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: 6 + (i % 4) * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3,
              }}
              className="absolute rounded-full"
              style={{
                width: `${3 + (i % 3) * 2}px`,
                height: `${3 + (i % 3) * 2}px`,
                top: `${5 + (i * 4.5) % 90}%`,
                left: `${2 + (i * 5) % 96}%`,
                background: i % 2 === 0 
                  ? 'hsl(var(--primary) / 0.5)' 
                  : 'hsl(280 70% 60% / 0.4)',
                boxShadow: i % 3 === 0 
                  ? '0 0 8px hsl(var(--primary) / 0.5)' 
                  : 'none',
              }}
            />
          ))}
        </motion.div>

        {/* Grid Pattern with Glow */}
        <motion.div 
          style={{ opacity }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `
                linear-gradient(hsl(var(--primary)/0.5) 1px, transparent 1px),
                linear-gradient(90deg, hsl(var(--primary)/0.5) 1px, transparent 1px)
              `,
              backgroundSize: '80px 80px',
              maskImage: 'radial-gradient(ellipse 70% 60% at 50% 50%, black, transparent)',
            }}
          />
        </motion.div>

        {/* Animated Light Beams */}
        <motion.div
          style={{ y: y3, opacity }}
          className="absolute inset-0 overflow-hidden"
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%]"
          >
            {[...Array(4)].map((_, i) => (
              <div
                key={`beam-${i}`}
                className="absolute top-1/2 left-1/2 w-[2px] h-[60%] origin-bottom"
                style={{
                  transform: `rotate(${i * 90}deg)`,
                  background: `linear-gradient(to top, transparent, hsl(var(--primary) / 0.05), transparent)`,
                }}
              />
            ))}
          </motion.div>
        </motion.div>

        {/* Noise Texture Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.015] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Vignette Effect */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 80% 60% at 50% 50%, transparent 30%, hsl(var(--background)) 100%)',
          }}
        />
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
