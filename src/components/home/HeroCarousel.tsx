import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { Heart, Users, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroStudents from "@/assets/hero-students.jpg";
import galleryMusic from "@/assets/gallery-music.jpg";
import galleryCommunity from "@/assets/gallery-community.jpg";
import galleryBraille from "@/assets/gallery-braille.jpg";
import galleryGraduation from "@/assets/gallery-graduation.jpg";

const heroSlides = [
  {
    image: heroStudents,
    alt: "Students learning together with braille materials in a bright classroom",
    title: "Empowering Visually Impaired Lives Through Education & Support",
    subtitle: "For over 18 years, we've been transforming lives by providing education, skill training, and community support.",
  },
  {
    image: galleryMusic,
    alt: "A blind student learning piano with guidance from a teacher",
    title: "Discover Your Passion Through Arts & Music",
    subtitle: "Our creative programs help students express themselves and discover hidden talents.",
  },
  {
    image: galleryCommunity,
    alt: "Community outreach event with volunteers and beneficiaries",
    title: "Building Stronger Communities Together",
    subtitle: "Our outreach programs connect families with resources and create inclusive environments.",
  },
  {
    image: galleryBraille,
    alt: "Student reading braille book with focused concentration",
    title: "Opening Doors Through Braille Literacy",
    subtitle: "Braille education opens a world of knowledge and independence for our students.",
  },
  {
    image: galleryGraduation,
    alt: "Graduates celebrating their achievements",
    title: "Celebrating Success Stories Every Day",
    subtitle: "Our graduates go on to achieve remarkable success in their careers and lives.",
  },
];

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    // Resume autoplay after 10 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, nextSlide]);

  const slide = heroSlides[currentSlide];

  return (
    <section 
      className="hero-section relative min-h-[80vh] flex items-center overflow-hidden"
      aria-labelledby="hero-heading"
      aria-roledescription="carousel"
    >
      {/* Background Images */}
      {heroSlides.map((s, index) => (
        <div
          key={index}
          className={`absolute inset-0 z-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={index !== currentSlide}
        >
          <img
            src={s.image}
            alt={s.alt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="max-w-3xl">
          <p className="text-secondary font-semibold text-lg mb-4 animate-fade-in">
            Welcome to Vision Hope Trust
          </p>
          <h1 
            id="hero-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-primary-foreground mb-6 animate-fade-in"
            style={{ animationDelay: "0.1s" }}
            key={currentSlide}
          >
            {slide.title}
          </h1>
          <p 
            className="text-xl text-primary-foreground/90 mb-10 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
            key={`sub-${currentSlide}`}
          >
            {slide.subtitle}
          </p>
          <div 
            className="flex flex-col sm:flex-row gap-4 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <Button variant="cta" size="lg" asChild>
              <Link to="/get-involved#donate">
                <Heart className="w-5 h-5" aria-hidden="true" />
                Donate Now
              </Link>
            </Button>
            <Button variant="hero-outline" size="lg" asChild>
              <Link to="/get-involved#volunteer">
                <Users className="w-5 h-5" aria-hidden="true" />
                Become a Volunteer
              </Link>
            </Button>
          </div>
        </div>

        {/* Carousel Controls */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={prevSlide}
            className="text-primary-foreground hover:bg-primary-foreground/20 rounded-full"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          
          <div className="flex gap-2" role="tablist" aria-label="Carousel slides">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                role="tab"
                aria-selected={index === currentSlide}
                aria-label={`Go to slide ${index + 1}`}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 focus-ring ${
                  index === currentSlide
                    ? "bg-secondary w-8"
                    : "bg-primary-foreground/50 hover:bg-primary-foreground/70"
                }`}
              />
            ))}
          </div>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={nextSlide}
            className="text-primary-foreground hover:bg-primary-foreground/20 rounded-full"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </section>
  );
}
