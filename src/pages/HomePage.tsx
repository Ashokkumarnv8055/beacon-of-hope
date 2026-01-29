import { Link } from "react-router-dom";
import { Heart, Users, ArrowRight, GraduationCap, Lightbulb, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { HeroCarousel } from "@/components/home/HeroCarousel";
import galleryMusic from "@/assets/gallery-music.jpg";
import galleryCommunity from "@/assets/gallery-community.jpg";

const stats = [
  { value: "500+", label: "Students Supported" },
  { value: "18", label: "Years of Service" },
  { value: "50+", label: "Dedicated Volunteers" },
  { value: "95%", label: "Success Rate" },
];

const programs = [
  {
    icon: GraduationCap,
    title: "Skill Training",
    description: "Vocational and life skills training to empower independence.",
  },
  {
    icon: Globe,
    title: "Community Outreach",
    description: "Connecting families and communities with essential resources.",
  },
  {
    icon: Lightbulb,
    title: "Scholarship Support",
    description: "Financial aid for higher education and specialized training.",
  },
];

export default function HomePage() {
  return (
    <Layout>
      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Stats Section */}
      <section className="bg-muted py-12" aria-label="Our impact in numbers">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={stat.label}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <p className="text-4xl md:text-5xl font-serif font-bold text-primary mb-2">
                  {stat.value}
                </p>
                <p className="text-muted-foreground font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-container" aria-labelledby="mission-heading">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 id="mission-heading" className="section-heading font-serif">
              Our Mission
            </h2>
            <p className="section-subheading mb-6">
              We believe that visual impairment should never be a barrier to education, 
              opportunity, or a fulfilling life.
            </p>
            <p className="text-foreground/80 mb-8">
              Vision Hope Trust was founded in 2005 with a simple yet powerful mission: 
              to empower visually impaired individuals with the tools, skills, and support 
              they need to thrive independently. Through our comprehensive programs, we 
              provide quality education, vocational training, and community integration 
              services to hundreds of beneficiaries each year.
            </p>
            <Button variant="outline" asChild>
              <Link to="/about">
                Learn More About Us
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={galleryMusic}
              alt="A blind student learning piano with guidance from a teacher"
              className="rounded-xl shadow-lg w-full h-64 object-cover"
            />
            <img
              src={galleryCommunity}
              alt="Community outreach event with volunteers and beneficiaries"
              className="rounded-xl shadow-lg w-full h-64 object-cover mt-8"
            />
          </div>
        </div>
      </section>

      {/* Programs Preview */}
      <section className="bg-muted py-16 md:py-24" aria-labelledby="programs-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 id="programs-heading" className="section-heading font-serif">
              Our Programs
            </h2>
            <p className="section-subheading mx-auto">
              Comprehensive support designed to empower every individual
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <article
                key={program.title}
                className="accessible-card text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div 
                  className="w-16 h-16 bg-secondary/20 rounded-2xl flex items-center justify-center mx-auto mb-6"
                  aria-hidden="true"
                >
                  <program.icon className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-serif font-bold text-foreground mb-3">
                  {program.title}
                </h3>
                <p className="text-muted-foreground">
                  {program.description}
                </p>
              </article>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button variant="default" asChild>
              <Link to="/programs">
                View All Programs
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="hero-section py-20"
        aria-labelledby="cta-heading"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 
            id="cta-heading"
            className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground mb-6"
          >
            Together, We Can Make a Difference
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-10">
            Your support helps us provide education, training, and hope to 
            visually impaired individuals. Join our mission today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="lg" asChild>
              <Link to="/get-involved#donate">
                <Heart className="w-5 h-5" aria-hidden="true" />
                Make a Donation
              </Link>
            </Button>
            <Button variant="hero-outline" size="lg" asChild>
              <Link to="/contact">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
