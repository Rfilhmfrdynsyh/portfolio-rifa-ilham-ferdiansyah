import { MapPin, Phone, Mail } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const contactInfo = [
  {
    icon: MapPin,
    label: "Location",
    value: "Tangerang Selatan",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "089653648383",
    href: "tel:089653648383",
  },
  {
    icon: Mail,
    label: "Email",
    value: "rifailhamferdiansyah@gmail.com",
    href: "mailto:rifailhamferdiansyah@gmail.com",
  },
];

const PersonalInfoSection = () => {
  return (
    <section className="py-12 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection>
          <div className="flex flex-wrap justify-center gap-6 md:gap-12">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="flex items-center gap-3 group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <info.icon className="w-5 h-5 text-primary" />
                </div>
                {info.href ? (
                  <a
                    href={info.href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                  >
                    {info.value}
                  </a>
                ) : (
                  <span className="text-muted-foreground">{info.value}</span>
                )}
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default PersonalInfoSection;
