import { motion } from "framer-motion";
import { Mail, MessageCircle, Linkedin, Send } from "lucide-react";
import { Button } from "./ui/button";
import AnimatedSection from "./AnimatedSection";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
              Get In Touch
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              Let's <span className="text-gradient">Connect</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
              Saya selalu terbuka untuk diskusi tentang proyek baru, peluang kolaborasi, 
              atau sekadar berbincang tentang teknologi dan desain.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="max-w-xl mx-auto">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="glow-border p-8 md:p-10"
            >
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg" className="flex-1" asChild>
                  <a href="mailto:rifailhamferdiansyah@gmail.com">
                    <Mail className="w-5 h-5" />
                    Email Me
                  </a>
                </Button>
                <Button variant="glow" size="lg" className="flex-1" asChild>
                  <a 
                    href="https://wa.me/6289653648383" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp
                  </a>
                </Button>
              </div>

              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-center text-sm text-muted-foreground mb-4">
                  Or connect with me on social media
                </p>
                <div className="flex justify-center gap-4">
                  <motion.a
                    whileHover={{ scale: 1.1, y: -2 }}
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-secondary border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1, y: -2 }}
                    href="mailto:rifailhamferdiansyah@gmail.com"
                    className="w-12 h-12 rounded-xl bg-secondary border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
                  >
                    <Send className="w-5 h-5" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ContactSection;
