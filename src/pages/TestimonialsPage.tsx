import { useState, useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Quote, ChevronLeft, ChevronRight, Star, Users, GraduationCap, Building2, Sparkles, MessageCircle } from "lucide-react";
import { FloatingShapes } from "@/components/decorative/FloatingShapes";
import { GradientBlob } from "@/components/decorative/GradientBlob";
import { SectionDivider } from "@/components/decorative/SectionDivider";

const testimonials = [
  {
    quote: "Vision Hope Trust didn't just teach me Braille – they gave me wings to fly. Today, I work as a customer service representative at a leading company, something I never imagined possible.",
    name: "Meera Krishnan",
    role: "Program Graduate, 2019",
    type: "beneficiary",
    rating: 5,
    initials: "MK",
    gradient: "from-secondary to-orange-400",
  },
  {
    quote: "Volunteering here has been the most rewarding experience of my life. Seeing the determination in these students' eyes and witnessing their achievements fills my heart with joy.",
    name: "Anand Patel",
    role: "Volunteer since 2020",
    type: "volunteer",
    rating: 5,
    initials: "AP",
    gradient: "from-accent to-teal-400",
  },
  {
    quote: "When our son was diagnosed with visual impairment, we were devastated. Vision Hope Trust gave us hope and showed us that our child could have a bright future. They are family to us now.",
    name: "Sunita & Ramesh Gupta",
    role: "Parents of Student",
    type: "family",
    rating: 5,
    initials: "SG",
    gradient: "from-pink-500 to-rose-400",
  },
  {
    quote: "As a corporate donor, we've seen firsthand the impact of every rupee donated. The transparency, dedication, and results of this organization are truly exemplary.",
    name: "Vikram Singh",
    role: "Corporate Partner",
    type: "donor",
    rating: 5,
    initials: "VS",
    gradient: "from-blue-500 to-indigo-400",
  },
  {
    quote: "The music program here changed my life. I learned keyboard, discovered my passion, and now I teach music to other visually impaired students. Dreams do come true.",
    name: "Arjun Sharma",
    role: "Music Program Graduate, 2017",
    type: "beneficiary",
    rating: 5,
    initials: "AS",
    gradient: "from-secondary to-amber-400",
  },
  {
    quote: "I've worked with many NGOs, but Vision Hope Trust stands out for their genuine commitment to each individual. They don't just run programs – they transform lives.",
    name: "Dr. Kavitha Rao",
    role: "Partner Organization Head",
    type: "partner",
    rating: 5,
    initials: "KR",
    gradient: "from-purple-500 to-violet-400",
  },
];

const typeIcons = {
  beneficiary: GraduationCap,
  volunteer: Users,
  family: Heart,
  donor: Building2,
  partner: Building2,
};

const typeLabels = {
  beneficiary: "Beneficiary",
  volunteer: "Volunteer",
  family: "Family",
  donor: "Donor",
  partner: "Partner",
};

const typeColors = {
  beneficiary: "bg-gradient-to-br from-secondary/20 to-orange-100 text-secondary dark:from-secondary/30 dark:to-orange-900/20",
  volunteer: "bg-gradient-to-br from-accent/20 to-teal-100 text-accent dark:from-accent/30 dark:to-teal-900/20",
  family: "bg-gradient-to-br from-pink-100 to-rose-100 text-pink-600 dark:from-pink-900/30 dark:to-rose-900/20 dark:text-pink-400",
  donor: "bg-gradient-to-br from-blue-100 to-indigo-100 text-blue-600 dark:from-blue-900/30 dark:to-indigo-900/20 dark:text-blue-400",
  partner: "bg-gradient-to-br from-purple-100 to-violet-100 text-purple-600 dark:from-purple-900/30 dark:to-violet-900/20 dark:text-purple-400",
};

const filterOptions = [
  { value: "all", label: "All Stories", icon: Sparkles },
  { value: "beneficiary", label: "Beneficiaries", icon: GraduationCap },
  { value: "volunteer", label: "Volunteers", icon: Users },
  { value: "family", label: "Families", icon: Heart },
  { value: "donor", label: "Donors", icon: Building2 },
];

export default function TestimonialsPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [featuredIndex, setFeaturedIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const filteredTestimonials = activeFilter === "all" 
    ? testimonials 
    : testimonials.filter(t => t.type === activeFilter);

  // Auto-rotate featured testimonial
  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setFeaturedIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const nextFeatured = () => {
    setIsAutoPlaying(false);
    setFeaturedIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevFeatured = () => {
    setIsAutoPlaying(false);
    setFeaturedIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const featured = testimonials[featuredIndex];
  const FeaturedIcon = typeIcons[featured.type as keyof typeof typeIcons];

  return (
    <Layout>
      {/* Hero Section with enhanced design */}
      <section 
        className="hero-section py-24 md:py-32 relative overflow-hidden"
        aria-labelledby="testimonials-hero-heading"
      >
        <FloatingShapes count={10} />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 text-primary-foreground font-medium mb-6 backdrop-blur-sm">
            <MessageCircle className="w-4 h-4" aria-hidden="true" />
            Real Stories, Real Impact
          </div>
          <h1 
            id="testimonials-hero-heading"
            className="text-4xl md:text-6xl font-serif font-bold text-primary-foreground mb-6"
          >
            Stories of Hope
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-2xl mx-auto">
            Hear from the incredible individuals whose lives have been touched 
            by Vision Hope Trust
          </p>
        </div>
      </section>

      {/* Featured Testimonial Carousel - Enhanced */}
      <section className="relative bg-gradient-to-b from-muted via-background to-muted py-20 md:py-24 overflow-hidden" aria-labelledby="featured-testimonial-heading">
        <GradientBlob className="-top-32 -left-32" variant="secondary" size="xl" />
        <GradientBlob className="-bottom-32 -right-32" variant="accent" size="xl" />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 id="featured-testimonial-heading" className="sr-only">Featured Testimonial</h2>
          
          <div className="relative">
            <div className="glass-card p-8 md:p-12 text-center relative overflow-hidden">
              {/* Large decorative quote marks */}
              <Quote 
                className="absolute top-4 left-4 w-24 h-24 text-secondary/10" 
                aria-hidden="true"
              />
              <Quote 
                className="absolute bottom-4 right-4 w-24 h-24 text-secondary/10 rotate-180" 
                aria-hidden="true"
              />
              
              {/* Avatar with gradient */}
              <div className="relative inline-block mb-6">
                <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${featured.gradient} flex items-center justify-center shadow-xl`}>
                  <span className="text-2xl font-bold text-white">{featured.initials}</span>
                </div>
                <div className={`absolute -bottom-2 -right-2 w-10 h-10 rounded-full flex items-center justify-center shadow-lg ${typeColors[featured.type as keyof typeof typeColors]}`}>
                  <FeaturedIcon className="w-5 h-5" />
                </div>
              </div>
              
              {/* Rating with animation */}
              <div className="flex justify-center gap-1 mb-6" aria-label={`${featured.rating} out of 5 stars`}>
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-6 h-6 ${i < featured.rating ? "text-secondary fill-secondary animate-pulse-glow" : "text-muted-foreground"}`}
                    style={{ animationDelay: `${i * 0.1}s` }}
                    aria-hidden="true"
                  />
                ))}
              </div>
              
              {/* Quote with better typography */}
              <blockquote>
                <p className="text-xl md:text-3xl text-foreground italic mb-8 leading-relaxed max-w-3xl mx-auto font-serif">
                  "{featured.quote}"
                </p>
                <footer className="space-y-2">
                  <p className="font-serif font-bold text-2xl text-foreground">
                    {featured.name}
                  </p>
                  <p className="text-muted-foreground text-lg">{featured.role}</p>
                  <span className={`inline-flex items-center gap-2 mt-3 px-5 py-2 rounded-full text-sm font-semibold ${typeColors[featured.type as keyof typeof typeColors]}`}>
                    <FeaturedIcon className="w-4 h-4" />
                    {typeLabels[featured.type as keyof typeof typeLabels]}
                  </span>
                </footer>
              </blockquote>
            </div>
            
            {/* Enhanced Navigation */}
            <div className="flex justify-center items-center gap-6 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prevFeatured}
                className="rounded-full w-12 h-12 hover:bg-secondary hover:text-secondary-foreground hover:border-secondary transition-all duration-300"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>
              
              <div className="flex gap-3" role="tablist">
                {testimonials.map((t, index) => (
                  <button
                    key={index}
                    role="tab"
                    aria-selected={index === featuredIndex}
                    onClick={() => {
                      setIsAutoPlaying(false);
                      setFeaturedIndex(index);
                    }}
                    className={`transition-all duration-300 rounded-full ${
                      index === featuredIndex 
                        ? "w-10 h-3 bg-secondary" 
                        : "w-3 h-3 bg-muted-foreground/30 hover:bg-secondary/50"
                    }`}
                    aria-label={`Go to testimonial from ${t.name}`}
                  />
                ))}
              </div>
              
              <Button
                variant="outline"
                size="icon"
                onClick={nextFeatured}
                className="rounded-full w-12 h-12 hover:bg-secondary hover:text-secondary-foreground hover:border-secondary transition-all duration-300"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Filter Bar with icons */}
      <section className="section-container pb-8" aria-label="Filter testimonials">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-serif font-bold text-foreground mb-2">Browse All Stories</h2>
          <p className="text-muted-foreground">Filter by category to find stories that resonate with you</p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {filterOptions.map((option) => {
            const Icon = option.icon;
            return (
              <Button
                key={option.value}
                variant={activeFilter === option.value ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveFilter(option.value)}
                className={`rounded-full transition-all duration-300 ${
                  activeFilter === option.value 
                    ? "shadow-lg scale-105 bg-gradient-to-r from-primary to-primary/80" 
                    : "hover:scale-105 hover:border-secondary"
                }`}
              >
                <Icon className="w-4 h-4" aria-hidden="true" />
                {option.label}
              </Button>
            );
          })}
        </div>
      </section>

      {/* Testimonials Grid - Enhanced */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20" aria-labelledby="testimonials-section-heading">
        <h2 id="testimonials-section-heading" className="sr-only">All Testimonials</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTestimonials.map((testimonial, index) => {
            const Icon = typeIcons[testimonial.type as keyof typeof typeIcons];
            return (
              <article
                key={testimonial.name}
                className="gradient-card relative animate-fade-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Top gradient bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${testimonial.gradient} rounded-t-2xl`} />
                
                <div className="flex items-start gap-4 mb-4">
                  {/* Avatar */}
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center shadow-lg flex-shrink-0`}>
                    <span className="text-lg font-bold text-white">{testimonial.initials}</span>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <p className="font-serif font-bold text-foreground truncate">
                      {testimonial.name}
                    </p>
                    <p className="text-muted-foreground text-sm truncate">
                      {testimonial.role}
                    </p>
                  </div>
                  
                  {/* Type badge */}
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${typeColors[testimonial.type as keyof typeof typeColors]}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                </div>
                
                {/* Rating */}
                <div className="flex gap-0.5 mb-4" aria-label={`${testimonial.rating} out of 5 stars`}>
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-4 h-4 ${i < testimonial.rating ? "text-secondary fill-secondary" : "text-muted-foreground/30"}`}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                
                <blockquote className="relative">
                  <Quote className="absolute -top-1 -left-1 w-6 h-6 text-secondary/20" aria-hidden="true" />
                  <p className="text-foreground/80 pl-6 leading-relaxed">
                    {testimonial.quote}
                  </p>
                </blockquote>
              </article>
            );
          })}
        </div>
        
        {filteredTestimonials.length === 0 && (
          <div className="text-center py-16">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
              <MessageCircle className="w-10 h-10 text-muted-foreground" />
            </div>
            <p className="text-muted-foreground text-lg">No testimonials found for this category.</p>
          </div>
        )}
      </section>

      {/* Share Your Story CTA - Enhanced */}
      <section 
        className="hero-section py-20 md:py-28 relative overflow-hidden"
        aria-labelledby="share-story-heading"
      >
        <FloatingShapes count={8} />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 text-primary-foreground font-medium mb-6 backdrop-blur-sm">
            <Heart className="w-4 h-4" aria-hidden="true" />
            Your Story Matters
          </div>
          <h2 
            id="share-story-heading"
            className="text-3xl md:text-5xl font-serif font-bold text-primary-foreground mb-6"
          >
            Share Your Story
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto">
            Have you been impacted by Vision Hope Trust? We'd love to hear from you. 
            Your story could inspire others to join our mission.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="xl" asChild>
              <Link to="/contact">
                <MessageCircle className="w-5 h-5" aria-hidden="true" />
                Contact Us to Share
              </Link>
            </Button>
            <Button variant="hero-outline" size="xl" asChild>
              <Link to="/get-involved#donate">
                <Heart className="w-5 h-5" aria-hidden="true" />
                Support Our Work
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
