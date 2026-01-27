import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Vision Hope Trust didn't just teach me Braille – they gave me wings to fly. Today, I work as a customer service representative at a leading company, something I never imagined possible.",
    name: "Meera Krishnan",
    role: "Program Graduate, 2019",
    type: "beneficiary",
  },
  {
    quote: "Volunteering here has been the most rewarding experience of my life. Seeing the determination in these students' eyes and witnessing their achievements fills my heart with joy.",
    name: "Anand Patel",
    role: "Volunteer since 2020",
    type: "volunteer",
  },
  {
    quote: "When our son was diagnosed with visual impairment, we were devastated. Vision Hope Trust gave us hope and showed us that our child could have a bright future. They are family to us now.",
    name: "Sunita & Ramesh Gupta",
    role: "Parents of Student",
    type: "family",
  },
  {
    quote: "As a corporate donor, we've seen firsthand the impact of every rupee donated. The transparency, dedication, and results of this organization are truly exemplary.",
    name: "Vikram Singh",
    role: "Corporate Partner",
    type: "donor",
  },
  {
    quote: "The music program here changed my life. I learned keyboard, discovered my passion, and now I teach music to other visually impaired students. Dreams do come true.",
    name: "Arjun Sharma",
    role: "Music Program Graduate, 2017",
    type: "beneficiary",
  },
  {
    quote: "I've worked with many NGOs, but Vision Hope Trust stands out for their genuine commitment to each individual. They don't just run programs – they transform lives.",
    name: "Dr. Kavitha Rao",
    role: "Partner Organization Head",
    type: "partner",
  },
];

export default function TestimonialsPage() {
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

      {/* Testimonials Grid */}
      <section className="section-container" aria-labelledby="testimonials-section-heading">
        <h2 id="testimonials-section-heading" className="sr-only">Testimonials</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <article
              key={testimonial.name}
              className="accessible-card relative animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Quote 
                className="w-10 h-10 text-secondary/30 absolute top-6 right-6" 
                aria-hidden="true"
              />
              <blockquote className="relative">
                <p className="text-lg text-foreground/80 italic mb-6 pr-12">
                  "{testimonial.quote}"
                </p>
                <footer>
                  <p className="font-serif font-bold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {testimonial.role}
                  </p>
                  <span className="inline-block mt-2 px-3 py-1 bg-secondary/10 text-secondary text-xs font-medium rounded-full capitalize">
                    {testimonial.type}
                  </span>
                </footer>
              </blockquote>
            </article>
          ))}
        </div>
      </section>

      {/* Share Your Story CTA */}
      <section 
        className="bg-muted py-16 md:py-20"
        aria-labelledby="share-story-heading"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 
            id="share-story-heading"
            className="text-3xl font-serif font-bold text-foreground mb-4"
          >
            Share Your Story
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Have you been impacted by Vision Hope Trust? We'd love to hear from you. 
            Your story could inspire others to join our mission.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="default" size="lg" asChild>
              <Link to="/contact">
                Contact Us to Share
              </Link>
            </Button>
            <Button variant="cta" size="lg" asChild>
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
