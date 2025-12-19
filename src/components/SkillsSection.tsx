import { motion } from "framer-motion";
import { MessageSquare, Mic, RefreshCw, Zap } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

// SVG Icons for technical skills
const WordpressIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm-1.246 14.842L7.19 8.559c.491-.024.934-.072.934-.072.44-.048.388-.702-.053-.678 0 0-1.322.104-2.177.104-.152 0-.332-.004-.524-.012C6.632 5.497 9.139 4 12 4c2.129 0 4.072.787 5.563 2.082-.036-.002-.071-.008-.109-.008-.816 0-1.394.712-1.394 1.478 0 .687.396 1.27.816 1.958.318.551.687 1.259.687 2.282 0 .707-.27 1.527-.632 2.672l-.828 2.767-3.349-9.97c.492-.024.936-.072.936-.072.44-.048.388-.702-.053-.678 0 0-1.322.104-2.177.104-.119 0-.256-.003-.399-.007zm4.043 1.024l2.535-7.327c.473-1.183.631-2.127.631-2.968 0-.305-.02-.588-.06-.858A8.001 8.001 0 0120 12c0 2.169-.86 4.137-2.257 5.582l-.046.086-.9.198zm-9.014.748c-2.123-1.546-3.512-4.029-3.512-6.832 0-.86.13-1.69.372-2.471l4.153 11.375-.013-.072z"/>
  </svg>
);

const HtmlIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/>
  </svg>
);

const CssIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.413z"/>
  </svg>
);

const TailwindIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/>
  </svg>
);

const JavascriptIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/>
  </svg>
);

const NextjsIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 01-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 00-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 00-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 01-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 01-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 01.174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 004.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 002.466-2.163 11.944 11.944 0 002.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 00-2.499-.523A33.119 33.119 0 0011.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 01.237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 01.233-.296c.096-.05.13-.054.5-.054z"/>
  </svg>
);

const CanvaIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.127 6.136c.186-.041.392-.082.596-.082 1.068 0 1.762.857 1.762 1.885 0 1.068-.816 2.095-2.095 2.095-.163 0-.306-.02-.408-.02-.225 0-.327.082-.327.204 0 .143.163.245.327.265.082 0 .163.02.265.02 1.64 0 2.892-1.252 2.892-2.564 0-1.394-.959-2.667-2.667-2.667-.918 0-1.755.388-2.136.551-.306.143-.49.225-.592.225-.163 0-.224-.143-.224-.265 0-.286.245-.51.571-.755.408-.265 1.007-.51 1.823-.714a5.78 5.78 0 00-.918-.02c-.939.02-1.857.245-2.687.673a6.12 6.12 0 00-2.197 1.864 5.927 5.927 0 00-.918 3.217c0 1.68.653 3.196 1.741 4.302.469.469 1.007.857 1.605 1.15.388.184.816.327 1.252.428.408.102.856.163 1.313.163 2.422 0 4.283-1.578 4.283-3.524 0-1.619-1.313-2.81-2.953-2.81-1.313 0-2.381.755-2.381 1.802 0 .714.51 1.19 1.17 1.19.388 0 .755-.143 1.007-.408a.977.977 0 00.286-.714c0-.408-.265-.714-.673-.714-.224 0-.408.102-.53.265a.439.439 0 00-.102.286c0 .163.082.306.204.408-.143.102-.327.163-.51.163-.408 0-.714-.327-.714-.796 0-.653.592-1.17 1.455-1.17 1.13 0 2.034.775 2.034 1.925 0 1.415-1.252 2.585-3.013 2.585-2.218 0-4.018-1.68-4.018-4.018 0-2.3 1.68-4.14 3.891-4.14.306 0 .612.02.918.082z"/>
  </svg>
);

const SeoIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
  </svg>
);

const ComputerIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"/>
  </svg>
);

const NetworkIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <path d="M17 16l-4-4V8.82C14.16 8.4 15 7.3 15 6c0-1.66-1.34-3-3-3S9 4.34 9 6c0 1.3.84 2.4 2 2.82V12l-4 4H3v5h5v-3.05l4-4.2 4 4.2V21h5v-5h-4z"/>
  </svg>
);

const MicrosoftIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <path d="M0 0h11.377v11.372H0zm12.623 0H24v11.372H12.623zM0 12.623h11.377V24H0zm12.623 0H24V24H12.623z"/>
  </svg>
);

const softSkills = [
  { name: "Public Speaking", icon: Mic, percentage: 85 },
  { name: "Good Communication", icon: MessageSquare, percentage: 90 },
  { name: "Adaptability", icon: RefreshCw, percentage: 88 },
  { name: "Fast Learner", icon: Zap, percentage: 92 },
];

const technicalSkills = [
  { name: "Microsoft Office", Icon: MicrosoftIcon, percentage: 95 },
  { name: "WordPress", Icon: WordpressIcon, percentage: 85 },
  { name: "HTML", Icon: HtmlIcon, percentage: 90 },
  { name: "CSS", Icon: CssIcon, percentage: 88 },
  { name: "Tailwind CSS", Icon: TailwindIcon, percentage: 82 },
  { name: "JavaScript", Icon: JavascriptIcon, percentage: 75 },
  { name: "Next.js", Icon: NextjsIcon, percentage: 70 },
  { name: "Canva", Icon: CanvaIcon, percentage: 90 },
  { name: "SEO", Icon: SeoIcon, percentage: 80 },
  { name: "Computer Assembly", Icon: ComputerIcon, percentage: 85 },
  { name: "IT Infrastructure", Icon: NetworkIcon, percentage: 80 },
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

        <div className="max-w-6xl mx-auto space-y-16">
          {/* Soft Skills */}
          <AnimatedSection delay={0.1}>
            <div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-8 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MessageSquare className="w-4 h-4 text-primary" />
                </span>
                Soft Skills
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {softSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="glow-border p-5"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <skill.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-1">
                          <span className="font-medium text-foreground">{skill.name}</span>
                          <span className="text-sm text-primary font-semibold">{skill.percentage}%</span>
                        </div>
                      </div>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Technical Skills */}
          <AnimatedSection delay={0.2}>
            <div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-8 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                  <HtmlIcon />
                </span>
                Technical Skills
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {technicalSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.02, y: -3 }}
                    className="skill-card p-5 rounded-xl cursor-pointer"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                        <skill.Icon />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-foreground text-sm">{skill.name}</span>
                          <span className="text-xs text-accent font-semibold">{skill.percentage}%</span>
                        </div>
                      </div>
                    </div>
                    <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.05, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-accent to-primary rounded-full"
                      />
                    </div>
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
