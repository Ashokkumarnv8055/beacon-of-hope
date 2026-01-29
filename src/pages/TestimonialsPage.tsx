import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Quote, ChevronLeft, ChevronRight, Star, Users, GraduationCap, Building2 } from "lucide-react";

const testimonials = [
  {
    quote: "Vision Hope Trust didn't just teach me Braille – they gave me wings to fly. Today, I work as a customer service representative at a leading company, something I never imagined possible.",
    name: "Meera Krishnan",
    role: "Program Graduate, 2019",
    type: "beneficiary",
    rating: 5,
  },
  {
    quote: "Volunteering here has been the most rewarding experience of my life. Seeing the determination in these students' eyes and witnessing their achievements fills my heart with joy.",
    name: "Anand Patel",
    role: "Volunteer since 2020",
    type: "volunteer",
    rating: 5,
  },
  {
    quote: "When our son was diagnosed with visual impairment, we were devastated. Vision Hope Trust gave us hope and showed us that our child could have a bright future. They are family to us now.",
    name: "Sunita & Ramesh Gupta",
    role: "Parents of Student",
    type: "family",
    rating: 5,
  },
  {
    quote: "As a corporate donor, we've seen firsthand the impact of every rupee donated. The transparency, dedication, and results of this organization are truly exemplary.",
    name: "Vikram Singh",
    role: "Corporate Partner",
    type: "donor",
    rating: 5,
  },
  {
    quote: "The music program here changed my life. I learned keyboard, discovered my passion, and now I teach music to other visually impaired students. Dreams do come true.",
    name: "Arjun Sharma",
    role: "Music Program Graduate, 2017",
    type: "beneficiary",
    rating: 5,
  },
  {
    quote: "I've worked with many NGOs, but Vision Hope Trust stands out for their genuine commitment to each individual. They don't just run programs – they transform lives.",
    name: "Dr. Kavitha Rao",
    role: "Partner Organization Head",
    type: "partner",
    rating: 5,
  },
];

const typeIcons = {
  beneficiary: GraduationCap,
  volunteer: Users,
  family: Heart,
  donor: Building2,
  partner: Building2,
};

const typeColors = {
  beneficiary: "bg-secondary/20 text-secondary",
  volunteer: "bg-accent/20 text-accent",
  family: "bg-pink-100 text-pink-600 dark:bg-pink-900/30 dark:text-pink-400",
  donor: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
  partner: "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400",
};

const filterOptions = [
  { value: "all", label: "All Stories" },
  { value: "beneficiary", label: "Beneficiaries" },
  { value: "volunteer", label: "Volunteers" },
  { value: "family", label: "Families" },
  { value: "donor", label: "Donors" },
  { value: "partner", label: "Partners" },
];

export default function TestimonialsPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [featuredIndex, setFeaturedIndex] = useState(0);

  const filteredTestimonials = activeFilter === "all" 
    ? testimonials 
    : testimonials.filter(t => t.type === activeFilter);

  const nextFeatured = () => {
    setFeaturedIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevFeatured = () => {
    setFeaturedIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const featured = testimonials[featuredIndex];
  const FeaturedIcon = typeIcons[featured.type as keyof typeof typeIcons];

  return (
    <Layout>
      {/* Hero Section */}
      <section 
        className="hero-section py-20 md:py-28"
        aria-labelledby="testimonials-hero-heading"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 
            id="testimonials-hero-heading"
            className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mb-6"
          >
            Stories of Hope
          </h1>
          <p className="text-xl text-primary-foreground/90">
            Hear from the incredible individuals whose lives have been touched 
            by Vision Hope Trust – beneficiaries, volunteers, families, and donors.
          </p>
        </div>
      </section>

      {/* Featured Testimonial Carousel */}
      <section className="bg-muted py-16 md:py-20" aria-labelledby="featured-testimonial-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="featured-testimonial-heading" className="sr-only">Featured Testimonial</h2>
          
          <div className="relative">
            <div className="accessible-card p-8 md:p-12 text-center relative overflow-hidden">
              {/* Decorative quote marks */}
              <Quote 
                className="absolute top-4 left-4 w-16 h-16 text-secondary/10" 
                aria-hidden="true"
              />
              <Quote 
                className="absolute bottom-4 right-4 w-16 h-16 text-secondary/10 rotate-180" 
                aria-hidden="true"
              />
              
              {/* Icon */}
              <div className={`w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center ${typeColors[featured.type as keyof typeof typeColors]}`}>
                <FeaturedIcon className="w-8 h-8" />
              </div>
              
              {/* Rating */}
              <div className="flex justify-center gap-1 mb-6" aria-label={`${featured.rating} out of 5 stars`}>
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-5 h-5 ${i < featured.rating ? "text-secondary fill-secondary" : "text-muted-foreground"}`}
                    aria-hidden="true"
                  />
                ))}
              </div>
              
              {/* Quote */}
              <blockquote>
                <p className="text-xl md:text-2xl text-foreground/90 italic mb-8 leading-relaxed max-w-3xl mx-auto">
                  "{featured.quote}"
                </p>
                <footer>
                  <p className="font-serif font-bold text-xl text-foreground">
                    {featured.name}
                  </p>
                  <p className="text-muted-foreground">{featured.role}</p>
                  <span className={`inline-block mt-3 px-4 py-1.5 rounded-full text-sm font-medium capitalize ${typeColors[featured.type as keyof typeof typeColors]}`}>
                    {featured.type}
                  </span>
                </footer>
              </blockquote>
            </div>
            
            {/* Navigation */}
            <div className="flex justify-center items-center gap-4 mt-6">
              <Button
                variant="outline"
                size="icon"
                onClick={prevFeatured}
                className="rounded-full"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              
              <div className="flex gap-2" role="tablist">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    role="tab"
                    aria-selected={index === featuredIndex}
                    onClick={() => setFeaturedIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      index === featuredIndex 
                        ? "bg-secondary w-6" 
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <Button
                variant="outline"
                size="icon"
                onClick={nextFeatured}
                className="rounded-full"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="section-container pb-8" aria-label="Filter testimonials">
        <div className="flex flex-wrap justify-center gap-3">
          {filterOptions.map((option) => (
            <Button
              key={option.value}
              variant={activeFilter === option.value ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveFilter(option.value)}
              className={`rounded-full transition-all duration-300 ${
                activeFilter === option.value 
                  ? "shadow-lg scale-105" 
                  : "hover:scale-105"
              }`}
            >
              {option.label}
            </Button>
          ))}
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16" aria-labelledby="testimonials-section-heading">
        <h2 id="testimonials-section-heading" className="sr-only">All Testimonials</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTestimonials.map((testimonial, index) => {
            const Icon = typeIcons[testimonial.type as keyof typeof typeIcons];
            return (
              <article
                key={testimonial.name}
                className="accessible-card relative animate-fade-in group hover:scale-[1.02] transition-transform duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Type badge */}
                <div className={`absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center ${typeColors[testimonial.type as keyof typeof typeColors]}`}>
                  <Icon className="w-5 h-5" />
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
                  <p className="text-foreground/80 mb-6 pr-8 line-clamp-4 group-hover:line-clamp-none transition-all duration-300">
                    "{testimonial.quote}"
                  </p>
                  <footer className="border-t border-border pt-4">
                    <p className="font-serif font-bold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {testimonial.role}
                    </p>
                  </footer>
                </blockquote>
              </article>
            );
          })}
        </div>
        
        {filteredTestimonials.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No testimonials found for this category.</p>
          </div>
        )}
      </section>

      {/* Share Your Story CTA */}
      <section 
        className="hero-section py-16 md:py-20"
        aria-labelledby="share-story-heading"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 
            id="share-story-heading"
            className="text-3xl font-serif font-bold text-primary-foreground mb-4"
          >
            Share Your Story
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8">
            Have you been impacted by Vision Hope Trust? We'd love to hear from you. 
            Your story could inspire others to join our mission.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="lg" asChild>
              <Link to="/contact">
                Contact Us to Share
              </Link>
            </Button>
            <Button variant="hero-outline" size="lg" asChild>
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
