import { motion } from "framer-motion";
import { ExternalLink, Eye, Folder } from "lucide-react";
import { Button } from "./ui/button";
import AnimatedSection from "./AnimatedSection";

import projectDigitalStudio from "@/assets/project-digital-studio.jpg";
import projectCorporate from "@/assets/project-corporate.jpg";
import projectFamilyProtect from "@/assets/project-family-protect.jpg";

const projects = [
  {
    title: "Rifani Digital Studio",
    description: "Platform studio digital untuk layanan desain dan pengembangan web profesional.",
    image: projectDigitalStudio,
    tags: ["Web Development", "Design"],
    liveUrl: "#",
    detailsUrl: "#",
  },
  {
    title: "PT. Cendra Kreatif Nusantara",
    description: "Website perusahaan kreatif dengan fokus pada solusi digital untuk bisnis.",
    image: projectCorporate,
    tags: ["Business", "Corporate"],
    liveUrl: "#",
    detailsUrl: "#",
  },
  {
    title: "Family Protect",
    description: "Aplikasi untuk perlindungan dan manajemen keluarga dengan fitur keamanan.",
    image: projectFamilyProtect,
    tags: ["App", "Security"],
    liveUrl: "#",
    detailsUrl: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 md:py-32 bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
              Portfolio
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold">
              Featured <span className="text-gradient">Projects</span>
            </h2>
          </div>
        </AnimatedSection>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <AnimatedSection key={project.title} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="group glow-border overflow-hidden h-full flex flex-col"
              >
                {/* Image */}
                <div className="relative aspect-video overflow-hidden bg-secondary">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <div className="flex gap-3">
                      <Button variant="hero" size="sm" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Folder className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-heading font-semibold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4 flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-full bg-secondary text-xs text-muted-foreground border border-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <a href={project.detailsUrl}>
                      <Eye className="w-4 h-4" />
                      View Details
                    </a>
                  </Button>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
