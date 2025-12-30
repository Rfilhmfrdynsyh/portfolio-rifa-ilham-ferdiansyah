import { motion } from "framer-motion";
import { Mail, MessageCircle, Linkedin, Send } from "lucide-react";
import { Button } from "./ui/button";
import AnimatedSection from "./AnimatedSection";
const ContactSection = () => {
  return <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
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
            <motion.div whileHover={{
            scale: 1.02
          }} className="glow-border p-8 md:p-10">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg" className="flex-1" asChild>
                  <a href="mailto:rifailhamferdiansyah@gmail.com">
                    <Mail className="w-5 h-5" />
                    Email Me
                  </a>
                </Button>
                <Button variant="glow" size="lg" className="flex-1" asChild>
                  <a href="https://wa.me/6289653648383" target="_blank" rel="noopener noreferrer">
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
                  <a 
                    href="https://www.instagram.com/rifaniiiii_" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-primary/10 border border-primary/20 text-primary hover:bg-primary/20 hover:scale-110 transition-all duration-300"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="24" 
                      height="24" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </section>;
};
export default ContactSection;