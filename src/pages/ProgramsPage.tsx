import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  GraduationCap, 
  Lightbulb, 
  Globe, 
  BookOpen, 
  Laptop, 
  Music, 
  Heart,
  ArrowRight 
} from "lucide-react";

const programs = [
  {
    icon: GraduationCap,
    title: "Skill Training",
    description: "Comprehensive vocational training programs designed to equip visually impaired individuals with marketable skills for independent living and employment.",
    features: [
      "Computer skills with screen reader technology",
      "Office administration and typing",
      "Telephone and customer service training",
      "Handicraft and artisan skills",
    ],
  },
  {
    icon: Globe,
    title: "Community Outreach",
    description: "Connecting families, communities, and local organizations with resources and awareness programs to create more inclusive environments.",
    features: [
      "Awareness workshops for schools and businesses",
      "Family support and counseling services",
      "Accessibility consultations",
      "Community integration events",
    ],
  },
  {
    icon: Lightbulb,
    title: "Scholarship Support",
    description: "Financial assistance for visually impaired students pursuing higher education, specialized training, or professional certifications.",
    features: [
      "Full and partial tuition scholarships",
      "Educational material support",
      "Assistive technology grants",
      "Mentorship programs",
    ],
  },
  {
    icon: BookOpen,
    title: "Braille Education",
    description: "Teaching Braille literacy to children and adults, opening doors to education, literature, and independence.",
    features: [
      "Basic to advanced Braille courses",
      "Braille book library access",
      "Take-home learning materials",
      "One-on-one tutoring sessions",
    ],
  },
  {
    icon: Laptop,
    title: "Digital Literacy",
    description: "Training in assistive technology, screen readers, and digital tools essential for modern education and employment.",
    features: [
      "Screen reader software training (JAWS, NVDA)",
      "Smartphone accessibility features",
      "Internet navigation and safety",
      "Digital communication tools",
    ],
  },
  {
    icon: Music,
    title: "Arts & Music",
    description: "Creative expression programs including music lessons, performing arts, and craft workshops that nurture talent and confidence.",
    features: [
      "Instrumental and vocal music lessons",
      "Drama and performance workshops",
      "Art and craft sessions",
      "Annual cultural showcases",
    ],
  },
];

export default function ProgramsPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section 
        className="hero-section py-20 md:py-28"
        aria-labelledby="programs-hero-heading"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 
            id="programs-hero-heading"
            className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mb-6"
          >
            Our Programs
          </h1>
          <p className="text-xl text-primary-foreground/90">
            Comprehensive support programs designed to empower visually impaired 
            individuals with education, skills, and opportunities for independence.
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="section-container" aria-labelledby="all-programs-heading">
        <h2 id="all-programs-heading" className="sr-only">All Programs</h2>
        <div className="grid gap-10">
          {programs.map((program, index) => (
            <article
              key={program.title}
              className="accessible-card animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col lg:flex-row gap-6">
                <div 
                  className="w-20 h-20 bg-secondary/20 rounded-2xl flex items-center justify-center flex-shrink-0"
                  aria-hidden="true"
                >
                  <program.icon className="w-10 h-10 text-secondary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-serif font-bold text-foreground mb-3">
                    {program.title}
                  </h3>
                  <p className="text-foreground/80 text-lg mb-4">
                    {program.description}
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-2" aria-label={`${program.title} features`}>
                    {program.features.map((feature) => (
                      <li 
                        key={feature} 
                        className="flex items-start gap-2 text-muted-foreground"
                      >
                        <span className="text-secondary mt-1" aria-hidden="true">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="bg-muted py-16 md:py-20"
        aria-labelledby="programs-cta-heading"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 
            id="programs-cta-heading"
            className="text-3xl font-serif font-bold text-foreground mb-4"
          >
            Want to Support Our Programs?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Your donation helps us expand our reach and impact more lives. 
            Every contribution makes a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="lg" asChild>
              <Link to="/get-involved#donate">
                <Heart className="w-5 h-5" aria-hidden="true" />
                Donate Now
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/get-involved#volunteer">
                Become a Volunteer
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
