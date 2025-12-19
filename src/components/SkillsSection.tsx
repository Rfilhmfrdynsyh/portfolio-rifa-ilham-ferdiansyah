import { motion } from "framer-motion";
import { 
  MessageSquare, 
  Mic, 
  RefreshCw, 
  Zap,
  FileSpreadsheet,
  Globe,
  Code,
  Palette,
  Search,
  Cpu,
  Network,
  Layers
} from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const softSkills = [
  { name: "Public Speaking", icon: Mic },
  { name: "Good Communication", icon: MessageSquare },
  { name: "Adaptability", icon: RefreshCw },
  { name: "Fast Learner", icon: Zap },
];

const technicalSkills = [
  { name: "Microsoft Office", icon: FileSpreadsheet },
  { name: "WordPress", icon: Globe },
  { name: "HTML", icon: Code },
  { name: "CSS", icon: Palette },
  { name: "Tailwind CSS", icon: Layers },
  { name: "JavaScript", icon: Code },
  { name: "Next.js", icon: Globe },
  { name: "Canva", icon: Palette },
  { name: "SEO", icon: Search },
  { name: "Computer Assembly", icon: Cpu },
  { name: "IT Infrastructure", icon: Network },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 md:py-32 bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
              Skills & Competencies
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold">
              My <span className="text-gradient">Expertise</span>
            </h2>
          </div>
        </AnimatedSection>

        <div className="max-w-6xl mx-auto space-y-12">
          {/* Soft Skills */}
          <AnimatedSection delay={0.1}>
            <div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MessageSquare className="w-4 h-4 text-primary" />
                </span>
                Soft Skills
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {softSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="skill-card p-5 rounded-xl text-center cursor-pointer"
                  >
                    <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-primary/10 flex items-center justify-center">
                      <skill.icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-sm font-medium text-foreground">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Technical Skills */}
          <AnimatedSection delay={0.2}>
            <div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Code className="w-4 h-4 text-accent" />
                </span>
                Technical Skills
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {technicalSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="skill-card p-4 rounded-xl text-center cursor-pointer"
                  >
                    <div className="w-10 h-10 mx-auto mb-2 rounded-lg bg-accent/10 flex items-center justify-center">
                      <skill.icon className="w-5 h-5 text-accent" />
                    </div>
                    <span className="text-xs font-medium text-foreground">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
