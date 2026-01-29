import { MapPin, ExternalLink } from "lucide-react";
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
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
  const embedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.5!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA0JzMzLjYiTiA3MsKwNTInNDAuMCJF!5e0!3m2!1sen!2sin!4v1629876543210!5m2!1sen!2sin`;

  return (
    <div className="mt-8">
      <h3 className="font-semibold text-foreground mb-4">Our Location</h3>
      
      {/* Interactive Map Container */}
      <a
        href={googleMapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block relative group rounded-xl overflow-hidden focus-ring"
        aria-label={`Open location in Google Maps: ${address}`}
      >
        {/* Map iframe */}
        <div className="h-64 w-full">
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
        
        {/* Overlay for click interaction */}
        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300 flex items-center justify-center">
          <div className="bg-secondary text-secondary-foreground px-4 py-2 rounded-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2 shadow-lg">
            <ExternalLink className="w-4 h-4" aria-hidden="true" />
            Open in Google Maps
          </div>
        </div>
      </a>
      
      {/* Address and Open Button */}
      <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div className="flex items-start gap-2">
          <MapPin className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" aria-hidden="true" />
          <p className="text-muted-foreground text-sm">{address}</p>
        </div>
        <Button
          variant="outline"
          size="sm"
          asChild
          className="w-full sm:w-auto"
        >
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink className="w-4 h-4" aria-hidden="true" />
            Get Directions
          </a>
        </Button>
      </div>
    </div>
  );
}
