import { MapPin, ExternalLink, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LocationMapProps {
  address: string;
  latitude?: number;
  longitude?: number;
}

// Default coordinates for Mumbai (can be updated with actual location)
const DEFAULT_LAT = 19.076;
const DEFAULT_LNG = 72.8777;

export function LocationMap({ 
  address, 
  latitude = DEFAULT_LAT, 
  longitude = DEFAULT_LNG 
}: LocationMapProps) {
  const encodedAddress = encodeURIComponent(address);
  // Use address-based URLs (more reliable than default coords) and avoid API-key embeds.
  // Also prefer real links over window.open to reduce popup-blocker issues on mobile.
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
  const googleMapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`;
  const embedUrl = `https://www.google.com/maps?q=${encodedAddress}&z=15&output=embed`;

  return (
    <div className="mt-8">
      <h3 className="font-serif font-semibold text-foreground mb-4 flex items-center gap-2">
        <Navigation className="w-5 h-5 text-secondary" aria-hidden="true" />
        Our Location
      </h3>
      
      {/* Interactive Map Container */}
      <a
        href={googleMapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group block rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-300 cursor-pointer border-2 border-border hover:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
        aria-label={`Open location in Google Maps: ${address}`}
      >
        {/* Map iframe - visual only */}
        <div className="h-64 w-full bg-muted">
          <iframe
            src={embedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`Map showing Vision Hope Trust location at ${address}`}
            className="pointer-events-none"
          />
        </div>
        
        {/* Hover Overlay with pulse animation */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-center pb-8">
          <div className="bg-secondary text-secondary-foreground px-6 py-3 rounded-full font-semibold flex items-center gap-2 shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <ExternalLink className="w-5 h-5" aria-hidden="true" />
            Open in Google Maps
          </div>
        </div>

        {/* Corner badge */}
        <div className="absolute top-3 right-3 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium shadow-lg">
          Click to open
        </div>
      </a>
      
      {/* Address and Buttons */}
      <div className="mt-4 p-4 bg-muted/50 rounded-xl border border-border">
        <div className="flex items-start gap-3 mb-4">
          <div className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0">
            <MapPin className="w-5 h-5 text-secondary" aria-hidden="true" />
          </div>
          <p className="text-foreground font-medium">{address}</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            variant="default"
            size="sm"
            className="flex-1"
            onClick={(e) => {
              e.stopPropagation();
              window.open(googleMapsUrl, "_blank", "noopener,noreferrer");
            }}
          >
            <MapPin className="w-4 h-4" aria-hidden="true" />
            View on Map
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="flex-1"
            onClick={(e) => {
              e.stopPropagation();
              window.open(googleMapsDirectionsUrl, "_blank", "noopener,noreferrer");
            }}
          >
            <Navigation className="w-4 h-4" aria-hidden="true" />
            Get Directions
          </Button>
        </div>
      </div>
    </div>
  );
}
