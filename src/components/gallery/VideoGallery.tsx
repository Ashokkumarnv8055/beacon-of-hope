import { useState } from "react";
import { Play, X } from "lucide-react";

interface Video {
  id: string;
  title: string;
  thumbnail: string;
  description: string;
  duration: string;
  youtubeId?: string;
}

const videos: Video[] = [
  {
    id: "1",
    title: "Our Mission in Action",
    thumbnail: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=640&h=360&fit=crop",
    description: "See how Vision Hope Trust is transforming lives through education and support programs.",
    duration: "3:45",
    youtubeId: "dQw4w9WgXcQ", // Placeholder - replace with actual video
  },
  {
    id: "2",
    title: "Student Success Stories",
    thumbnail: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=640&h=360&fit=crop",
    description: "Hear from our students about their journey of empowerment and achievement.",
    duration: "5:20",
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    id: "3",
    title: "Skill Training Workshop",
    thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=640&h=360&fit=crop",
    description: "A glimpse into our computer literacy and vocational training programs.",
    duration: "4:15",
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    id: "4",
    title: "Annual Day Celebration 2024",
    thumbnail: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=640&h=360&fit=crop",
    description: "Highlights from our annual celebration featuring student performances.",
    duration: "8:30",
    youtubeId: "dQw4w9WgXcQ",
  },
];

export function VideoGallery() {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  const openVideo = (video: Video) => {
    setSelectedVideo(video);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      closeVideo();
    }
  };

  return (
    <>
      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {videos.map((video) => (
          <button
            key={video.id}
            onClick={() => openVideo(video)}
            className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 focus-ring text-left"
            aria-label={`Play video: ${video.title} - ${video.duration}`}
          >
            <div className="aspect-video relative">
              <img
                src={video.thumbnail}
                alt=""
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
              
              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-secondary/90 rounded-full flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110">
                  <Play className="w-8 h-8 text-secondary-foreground ml-1" aria-hidden="true" />
                </div>
              </div>

              {/* Duration Badge */}
              <div className="absolute top-3 right-3 bg-primary/80 px-2 py-1 rounded text-xs font-medium text-primary-foreground">
                {video.duration}
              </div>
            </div>

            {/* Video Info */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h4 className="text-lg font-semibold text-primary-foreground mb-1">
                {video.title}
              </h4>
              <p className="text-sm text-primary-foreground/80 line-clamp-2">
                {video.description}
              </p>
            </div>
          </button>
        ))}
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 z-50 bg-primary/95 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="video-title"
          onKeyDown={handleKeyDown}
        >
          <button
            onClick={closeVideo}
            className="absolute top-4 right-4 w-12 h-12 bg-primary-foreground/20 hover:bg-primary-foreground/30 rounded-full flex items-center justify-center text-primary-foreground transition-colors focus-ring"
            aria-label="Close video player"
            autoFocus
          >
            <X className="w-6 h-6" aria-hidden="true" />
          </button>

          <div className="max-w-4xl w-full">
            <div className="aspect-video rounded-lg overflow-hidden bg-black">
              {selectedVideo.youtubeId ? (
                <iframe
                  src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}?autoplay=1`}
                  title={selectedVideo.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-primary-foreground">
                  <p>Video not available</p>
                </div>
              )}
            </div>
            <div className="mt-4 text-center">
              <h3 id="video-title" className="text-xl text-primary-foreground font-medium mb-2">
                {selectedVideo.title}
              </h3>
              <p className="text-primary-foreground/70 text-sm max-w-2xl mx-auto">
                {selectedVideo.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
