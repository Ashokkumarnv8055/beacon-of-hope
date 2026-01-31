import { Link } from "react-router-dom";
import { Heart, Users, ArrowRight, GraduationCap, Lightbulb, Globe, Sparkles, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { HeroCarousel } from "@/components/home/HeroCarousel";
import { FloatingShapes } from "@/components/decorative/FloatingShapes";
import { GradientBlob } from "@/components/decorative/GradientBlob";
import { SectionDivider } from "@/components/decorative/SectionDivider";
import galleryMusic from "@/assets/gallery-music.jpg";
import galleryCommunity from "@/assets/gallery-community.jpg";

const stats = [
  { value: "500+", label: "Students Supported", icon: Users },
  { value: "18", label: "Years of Service", icon: Star },
  { value: "50+", label: "Dedicated Volunteers", icon: Heart },
  { value: "95%", label: "Success Rate", icon: Sparkles },
];

const programs = [
  {
    icon: GraduationCap,
    title: "Skill Training",
    description: "Vocational and life skills training to empower independence.",
    color: "from-secondary/20 to-secondary/5",
  },
  {
    icon: Globe,
    title: "Community Outreach",
    description: "Connecting families and communities with essential resources.",
    color: "from-accent/20 to-accent/5",
  },
  {
    icon: Lightbulb,
    title: "Scholarship Support",
    description: "Financial aid for higher education and specialized training.",
    color: "from-primary/20 to-primary/5",
  },
];

export default function HomePage() {
  return (
    <Layout>
      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Stats Section with beautiful gradient background */}
      <section className="relative bg-gradient-to-br from-muted via-background to-muted py-16 overflow-hidden" aria-label="Our impact in numbers">
        <GradientBlob className="-top-20 -left-20" variant="secondary" size="xl" />
        <GradientBlob className="-bottom-20 -right-20" variant="accent" size="lg" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={stat.label}
                className="text-center animate-fade-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-secondary/20 to-secondary/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-secondary" aria-hidden="true" />
                </div>
                <p className="text-4xl md:text-5xl font-serif font-bold text-primary mb-2 text-glow">
                  {stat.value}
                </p>
                <p className="text-muted-foreground font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Mission Section with decorative elements */}
      <section className="section-container relative overflow-hidden" aria-labelledby="mission-heading">
        <FloatingShapes count={4} />
        
        <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary font-medium mb-6">
              <Sparkles className="w-4 h-4" aria-hidden="true" />
              Our Purpose
            </div>
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
            <Button variant="outline" asChild className="group">
              <Link to="/about">
                Learn More About Us
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-secondary to-accent rounded-xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity" />
              <img
                src={galleryMusic}
                alt="A blind student learning piano with guidance from a teacher"
                className="relative rounded-xl shadow-lg w-full h-64 object-cover"
              />
            </div>
            <div className="relative group mt-8">
              <div className="absolute -inset-2 bg-gradient-to-r from-accent to-secondary rounded-xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity" />
              <img
                src={galleryCommunity}
                alt="Community outreach event with volunteers and beneficiaries"
                className="relative rounded-xl shadow-lg w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Programs Preview with beautiful cards */}
      <section className="relative bg-gradient-to-b from-muted/50 via-muted to-muted/50 py-16 md:py-24 overflow-hidden" aria-labelledby="programs-heading">
        <GradientBlob className="top-1/4 left-1/4" variant="secondary" size="xl" />
        <GradientBlob className="bottom-1/4 right-1/4" variant="primary" size="lg" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium mb-4">
              <GraduationCap className="w-4 h-4" aria-hidden="true" />
              What We Do
            </div>
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
                className="glass-card p-8 text-center animate-fade-in group hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div 
                  className={`w-20 h-20 bg-gradient-to-br ${program.color} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-6 transition-transform duration-300`}
                  aria-hidden="true"
                >
                  <program.icon className="w-10 h-10 text-foreground" />
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
            <Button variant="default" size="lg" asChild className="group">
              <Link to="/programs">
                View All Programs
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section with enhanced design */}
      <section 
        className="hero-section py-24 relative"
        aria-labelledby="cta-heading"
      >
        <FloatingShapes count={8} />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 text-primary-foreground font-medium mb-6 backdrop-blur-sm">
            <Heart className="w-4 h-4" aria-hidden="true" />
            Join Our Mission
          </div>
          <h2 
            id="cta-heading"
            className="text-3xl md:text-5xl font-serif font-bold text-primary-foreground mb-6"
          >
            Together, We Can Make a Difference
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto">
            Your support helps us provide education, training, and hope to 
            visually impaired individuals. Join our mission today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="xl" asChild className="animate-bounce-subtle">
              <Link to="/get-involved#donate">
                <Heart className="w-6 h-6" aria-hidden="true" />
                Make a Donation
              </Link>
            </Button>
            <Button variant="hero-outline" size="xl" asChild>
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
