import { motion } from "framer-motion";
import { GraduationCap, Award, Sparkles } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection>
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
              About Me
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold">
              Background & <span className="text-gradient">Education</span>
            </h2>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="max-w-4xl mx-auto">
            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
              className="glow-border p-8 md:p-10"
            >
              {/* Education Badge */}
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-1">
                    Diploma Administrasi Perkantoran
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Universitas Pamulang • Akreditasi Prodi A • IPK 3.15
                  </p>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Lulus tepat waktu dan memiliki pengalaman kerja sebagai{" "}
                  <span className="text-foreground font-medium">Staff Administrasi</span>,{" "}
                  <span className="text-foreground font-medium">Sales & Marketing</span>,{" "}
                  <span className="text-foreground font-medium">Desk Collection</span>, hingga{" "}
                  <span className="text-foreground font-medium">IT Infrastruktur</span>.
                </p>
                <p>
                  Terampil menggunakan Microsoft Office, memiliki kemampuan komunikasi dan negosiasi yang baik, serta mampu bekerja secara tim maupun individu.
                </p>
                <p>
                  Sangat tertarik pada dunia teknologi, perakitan komputer, hardware, dan pengembangan web menggunakan{" "}
                  <span className="text-primary">HTML</span>,{" "}
                  <span className="text-primary">CSS</span>, dan teknologi modern.
                </p>
              </div>

              {/* Highlights */}
              <div className="flex flex-wrap gap-3 mt-8">
                {["Graduated On-Time", "Accredited A", "GPA 3.15"].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary border border-border text-sm"
                  >
                    <Award className="w-4 h-4 text-primary" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default AboutSection;
