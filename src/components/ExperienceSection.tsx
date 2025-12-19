import { motion } from "framer-motion";
import { Building2, Calendar } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const experiences = [
  {
    company: "PT Natieva Global Internasional",
    role: "Staff Administrasi",
    period: "Mei 2018 – Agustus 2019",
    responsibilities: [
      "Input data peserta",
      "Mengatur jadwal",
      "Invoice & laporan harian",
    ],
  },
  {
    company: "PT Panca Mitra Indonesia",
    role: "Staff Sales & Marketing",
    period: "September 2019 – Januari 2022",
    responsibilities: [
      "Database & telemarketing",
      "Presentasi klien",
      "Reporting harian",
    ],
  },
  {
    company: "PT Xinghao Fintech",
    role: "Staff Desk Collection",
    period: "Februari 2022 – Februari 2023",
    responsibilities: [
      "Monitoring jatuh tempo",
      "Penagihan nasabah",
      "Laporan berkala ke manajemen",
    ],
  },
  {
    company: "Bank Mandiri",
    role: "Sales Generalist Productive",
    period: "Oktober 2023 – Desember 2023",
    responsibilities: [
      "Produk KUR, KUM, Asuransi",
      "Pembukaan rekening",
      "Target harian & bulanan",
    ],
  },
  {
    company: "PT Bahana Guna Solusi",
    role: "IT Infrastruktur",
    period: "Februari 2024 – Juli 2024",
    responsibilities: [
      "Maintenance jaringan",
      "Konfigurasi CCTV",
      "Troubleshooting hardware & software",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
              Work Experience
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold">
              Professional <span className="text-gradient">Journey</span>
            </h2>
          </div>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 timeline-line md:-translate-x-0.5" />

          {/* Timeline Items */}
          <div className="space-y-8 md:space-y-12">
            {experiences.map((exp, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div
                  className={`relative flex flex-col md:flex-row gap-4 md:gap-8 ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full timeline-dot -translate-x-1/2 mt-2" />

                  {/* Content Card */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className={`ml-10 md:ml-0 md:w-[calc(50%-2rem)] glow-border p-6 ${
                      index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                    }`}
                  >
                    <div className="flex items-start gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                        <Building2 className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold text-foreground">
                          {exp.company}
                        </h3>
                        <p className="text-primary text-sm font-medium">{exp.role}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>

                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, respIndex) => (
                        <li
                          key={respIndex}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-1.5 flex-shrink-0" />
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
