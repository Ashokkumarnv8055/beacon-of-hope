import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NewsItem {
  id: string;
  title: string;
  date: string;
  category: "news" | "event";
  excerpt: string;
  image: string;
  isUpcoming?: boolean;
}

const newsItems: NewsItem[] = [
  {
    id: "1",
    title: "Annual Fundraising Gala 2026",
    date: "2026-03-15",
    category: "event",
    excerpt: "Join us for an evening of inspiration and celebration as we raise funds for our educational programs.",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&h=250&fit=crop",
    isUpcoming: true,
  },
  {
    id: "2",
    title: "New Computer Lab Inauguration",
    date: "2026-01-20",
    category: "news",
    excerpt: "We are thrilled to announce the opening of our new state-of-the-art computer lab with screen reader technology.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop",
  },
  {
    id: "3",
    title: "World Braille Day Celebration",
    date: "2026-01-04",
    category: "event",
    excerpt: "Celebrating the birth anniversary of Louis Braille with special activities and awareness programs.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&h=250&fit=crop",
  },
  {
    id: "4",
    title: "Partnership with Tech Giants for Digital Literacy",
    date: "2025-12-10",
    category: "news",
    excerpt: "Major technology companies join hands with Vision Hope Trust to enhance digital accessibility education.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop",
  },
  {
    id: "5",
    title: "Volunteer Training Workshop",
    date: "2026-02-08",
    category: "event",
    excerpt: "Learn how to effectively support visually impaired individuals in our comprehensive volunteer training.",
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=400&h=250&fit=crop",
    isUpcoming: true,
  },
  {
    id: "6",
    title: "Student Achievement Awards",
    date: "2025-11-25",
    category: "news",
    excerpt: "Recognizing outstanding achievements by our students in academics, arts, and vocational skills.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=250&fit=crop",
  },
];

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function NewsEvents() {
  const upcomingEvents = newsItems.filter((item) => item.isUpcoming);
  const recentNews = newsItems.filter((item) => !item.isUpcoming);

  return (
    <div className="space-y-12">
      {/* Upcoming Events */}
      {upcomingEvents.length > 0 && (
        <div>
          <h3 className="text-2xl font-serif font-bold text-foreground mb-6 flex items-center gap-3">
            <Calendar className="w-6 h-6 text-secondary" aria-hidden="true" />
            Upcoming Events
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {upcomingEvents.map((item) => (
              <article
                key={item.id}
                className="accessible-card overflow-hidden group hover:shadow-lg transition-shadow duration-300"
              >
                <div className="aspect-[16/9] overflow-hidden rounded-lg mb-4">
                  <img
                    src={item.image}
                    alt=""
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="bg-secondary/20 text-secondary text-xs font-semibold px-2 py-1 rounded">
                      UPCOMING
                    </span>
                    <time className="text-sm text-muted-foreground" dateTime={item.date}>
                      {formatDate(item.date)}
                    </time>
                  </div>
                  <h4 className="text-lg font-semibold text-foreground group-hover:text-secondary transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-muted-foreground text-sm line-clamp-2">
                    {item.excerpt}
                  </p>
                  <Button variant="link" className="p-0 h-auto text-secondary">
                    Learn more <ArrowRight className="w-4 h-4 ml-1" aria-hidden="true" />
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      )}

      {/* Recent News */}
      <div>
        <h3 className="text-2xl font-serif font-bold text-foreground mb-6">
          Latest News & Updates
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentNews.map((item) => (
            <article
              key={item.id}
              className="accessible-card overflow-hidden group hover:shadow-lg transition-shadow duration-300"
            >
              <div className="aspect-[16/10] overflow-hidden rounded-lg mb-4">
                <img
                  src={item.image}
                  alt=""
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span
                    className={`text-xs font-semibold px-2 py-1 rounded ${
                      item.category === "event"
                        ? "bg-accent/20 text-accent"
                        : "bg-primary/20 text-primary"
                    }`}
                  >
                    {item.category.toUpperCase()}
                  </span>
                  <time className="text-sm text-muted-foreground" dateTime={item.date}>
                    {formatDate(item.date)}
                  </time>
                </div>
                <h4 className="font-semibold text-foreground group-hover:text-secondary transition-colors line-clamp-2">
                  {item.title}
                </h4>
                <p className="text-muted-foreground text-sm line-clamp-2">
                  {item.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
