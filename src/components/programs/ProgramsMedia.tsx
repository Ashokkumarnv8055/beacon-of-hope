import { useState } from "react";
import { Play, X, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import galleryMusic from "@/assets/gallery-music.jpg";
import galleryComputer from "@/assets/gallery-computer.jpg";
import galleryBraille from "@/assets/gallery-braille.jpg";
import galleryCommunity from "@/assets/gallery-community.jpg";

const programImages = [
  {
    src: galleryMusic,
    alt: "Student learning keyboard with teacher guidance",
    caption: "Music Program",
  },
  {
    src: galleryComputer,
    alt: "Student using computer with assistive technology",
    caption: "Digital Literacy",
  },
  {
    src: galleryBraille,
    alt: "Student reading braille book",
    caption: "Braille Education",
  },
  {
    src: galleryCommunity,
    alt: "Community outreach event",
    caption: "Community Outreach",
  },
];

const programVideos = [
  {
    id: "dQw4w9WgXcQ",
    title: "Vision Hope Trust: Our Impact",
    thumbnail: galleryMusic,
  },
  {
    id: "dQw4w9WgXcQ",
    title: "Braille Education Program",
    thumbnail: galleryBraille,
  },
];

const newsArticles = [
  {
    title: "Vision Hope Trust Celebrates 500+ Graduates",
    excerpt: "Our annual graduation ceremony saw record attendance as we celebrated the achievements of our students who have gone on to successful careers.",
    date: "January 15, 2026",
    image: galleryComputer,
    link: "#",
  },
  {
    title: "New Digital Literacy Lab Opens",
    excerpt: "State-of-the-art computer lab equipped with the latest assistive technology now available for all students.",
    date: "December 20, 2025",
    image: galleryCommunity,
    link: "#",
  },
  {
    title: "Partnership with Leading Tech Companies",
    excerpt: "Major tech companies join hands to provide internship opportunities and mentorship for our graduates.",
    date: "November 10, 2025",
    image: galleryMusic,
    link: "#",
  },
];

export function ProgramsMedia() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <>
      {/* Image Gallery Section */}
      <section className="bg-muted py-16 md:py-20" aria-labelledby="programs-gallery-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 id="programs-gallery-heading" className="text-3xl font-serif font-bold text-foreground mb-4">
              Our Programs in Action
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See how our programs are making a difference in the lives of visually impaired individuals.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {programImages.map((image, index) => (
              <div
                key={index}
                className="gallery-item group aspect-square animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-primary-foreground font-semibold">{image.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="section-container" aria-labelledby="programs-video-heading">
        <div className="text-center mb-12">
          <h2 id="programs-video-heading" className="text-3xl font-serif font-bold text-foreground mb-4">
            Watch Our Stories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Video testimonials and program highlights showcasing our impact.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {programVideos.map((video, index) => (
            <button
              key={index}
              onClick={() => setSelectedVideo(video.id)}
              className="group relative aspect-video rounded-xl overflow-hidden focus-ring animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
              aria-label={`Play video: ${video.title}`}
            >
              <img
                src={video.thumbnail}
                alt=""
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/60 transition-colors duration-300 flex items-center justify-center">
                <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-10 h-10 text-secondary-foreground ml-1" fill="currentColor" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-primary/90 to-transparent">
                <p className="text-primary-foreground font-semibold text-lg">{video.title}</p>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* News Articles Section */}
      <section className="bg-muted py-16 md:py-20" aria-labelledby="programs-news-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 id="programs-news-heading" className="text-3xl font-serif font-bold text-foreground mb-4">
              Latest News & Updates
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Stay informed about our programs, achievements, and upcoming initiatives.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {newsArticles.map((article, index) => (
              <article
                key={index}
                className="accessible-card overflow-hidden animate-fade-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video -mx-6 -mt-6 mb-4 overflow-hidden">
                  <img
                    src={article.image}
                    alt=""
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <p className="text-sm text-secondary font-semibold mb-2">{article.date}</p>
                <h3 className="text-xl font-serif font-bold text-foreground mb-3 group-hover:text-secondary transition-colors">
                  {article.title}
                </h3>
                <p className="text-muted-foreground mb-4">{article.excerpt}</p>
                <Button variant="link" className="p-0 h-auto text-secondary hover:text-secondary/80">
                  Read More
                  <ExternalLink className="w-4 h-4 ml-1" aria-hidden="true" />
                </Button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <Dialog open={!!selectedVideo} onOpenChange={() => setSelectedVideo(null)}>
        <DialogContent className="max-w-4xl p-0 bg-primary overflow-hidden">
          <button
            onClick={() => setSelectedVideo(null)}
            className="absolute top-4 right-4 z-10 w-10 h-10 bg-background/20 hover:bg-background/40 rounded-full flex items-center justify-center transition-colors"
            aria-label="Close video"
          >
            <X className="w-6 h-6 text-primary-foreground" />
          </button>
          {selectedVideo && (
            <div className="aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                title="Program Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
