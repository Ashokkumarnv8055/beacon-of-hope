import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { X, Camera, Video, Newspaper } from "lucide-react";
import { VideoGallery } from "@/components/gallery/VideoGallery";
import { NewsEvents } from "@/components/gallery/NewsEvents";
import galleryMusic from "@/assets/gallery-music.jpg";
import galleryComputer from "@/assets/gallery-computer.jpg";
import galleryCommunity from "@/assets/gallery-community.jpg";
import galleryBraille from "@/assets/gallery-braille.jpg";
import galleryGraduation from "@/assets/gallery-graduation.jpg";
import heroStudents from "@/assets/hero-students.jpg";

const galleryImages = [
  {
    src: galleryMusic,
    alt: "A visually impaired student learning to play piano with guidance from a dedicated teacher in our music program",
    caption: "Music training brings joy and builds confidence",
  },
  {
    src: galleryComputer,
    alt: "Visually impaired adults learning computer skills with screen reader technology in a modern classroom",
    caption: "Digital literacy opens doors to employment",
  },
  {
    src: galleryCommunity,
    alt: "Volunteers and beneficiaries connecting at a community outreach event in a park setting",
    caption: "Community events foster connection and support",
  },
  {
    src: galleryBraille,
    alt: "Young students reading braille books in our library, developing literacy skills",
    caption: "Braille education unlocks the world of reading",
  },
  {
    src: galleryGraduation,
    alt: "Graduates in caps and gowns celebrating their achievements with family and teachers",
    caption: "Graduation day celebrates years of dedication",
  },
  {
    src: heroStudents,
    alt: "Students learning together with braille materials and assistive technology in a bright classroom",
    caption: "Collaborative learning in our training center",
  },
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  const openLightbox = (image: typeof galleryImages[0]) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  // Handle keyboard navigation in lightbox
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      closeLightbox();
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section 
        className="hero-section py-20 md:py-28"
        aria-labelledby="gallery-hero-heading"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 
            id="gallery-hero-heading"
            className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mb-6"
          >
            Photo Gallery
          </h1>
          <p className="text-xl text-primary-foreground/90">
            Glimpses of hope, learning, and transformation at Vision Hope Trust. 
            Every image tells a story of courage and achievement.
          </p>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="section-container" aria-labelledby="photo-gallery-heading">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center">
            <Camera className="w-6 h-6 text-secondary" aria-hidden="true" />
          </div>
          <h2 id="photo-gallery-heading" className="text-3xl font-serif font-bold text-foreground">
            Photo Gallery
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <button
              key={index}
              onClick={() => openLightbox(image)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  openLightbox(image);
                }
              }}
              className="gallery-item aspect-square group"
              aria-label={`View larger: ${image.alt}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="transition-transform duration-300 group-hover:scale-105"
              />
              <div 
                className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4"
                aria-hidden="true"
              >
                <p className="text-primary-foreground text-sm font-medium">
                  {image.caption}
                </p>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Video Gallery */}
      <section className="section-container bg-muted/30" aria-labelledby="video-gallery-heading">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center">
            <Video className="w-6 h-6 text-accent" aria-hidden="true" />
          </div>
          <h2 id="video-gallery-heading" className="text-3xl font-serif font-bold text-foreground">
            Video Gallery
          </h2>
        </div>
        <VideoGallery />
      </section>

      {/* News & Events */}
      <section className="section-container" aria-labelledby="news-events-heading">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
            <Newspaper className="w-6 h-6 text-primary" aria-hidden="true" />
          </div>
          <h2 id="news-events-heading" className="text-3xl font-serif font-bold text-foreground">
            News & Events
          </h2>
        </div>
        <NewsEvents />
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-primary/95 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="lightbox-caption"
          onKeyDown={handleKeyDown}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 w-12 h-12 bg-primary-foreground/20 hover:bg-primary-foreground/30 rounded-full flex items-center justify-center text-primary-foreground transition-colors focus-ring"
            aria-label="Close image viewer"
            autoFocus
          >
            <X className="w-6 h-6" aria-hidden="true" />
          </button>
          <div className="max-w-5xl w-full">
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full max-h-[70vh] object-contain rounded-lg"
            />
            <div className="mt-4 text-center">
              <p 
                id="lightbox-caption"
                className="text-xl text-primary-foreground font-medium mb-2"
              >
                {selectedImage.caption}
              </p>
              <p className="text-primary-foreground/70 text-sm max-w-2xl mx-auto">
                {selectedImage.alt}
              </p>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}
