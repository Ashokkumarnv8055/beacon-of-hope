import { Link } from "react-router-dom";
import { Eye, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const quickLinks = [
  { name: "About Us", href: "/about" },
  { name: "Programs", href: "/programs" },
  { name: "Gallery", href: "/gallery" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Get Involved", href: "/get-involved" },
  { name: "Contact Us", href: "/contact" },
];

const legalLinks = [
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" },
  { name: "Accessibility", href: "/accessibility" },
];

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "YouTube", icon: Youtube, href: "#" },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setEmail("");
    toast({
      title: "Subscribed!",
      description: "Thank you for joining our newsletter.",
    });
  };

  return (
    <footer className="bg-primary text-primary-foreground" role="contentinfo">
      {/* Newsletter Section */}
      <div className="border-b border-primary-foreground/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <h2 className="text-2xl font-serif font-bold mb-2">Stay Connected</h2>
              <p className="text-primary-foreground/80">
                Subscribe to our newsletter for updates on our programs and impact.
              </p>
            </div>
            <form 
              onSubmit={handleNewsletterSubmit}
              className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto"
              aria-label="Newsletter signup"
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/60 focus:border-secondary focus:ring-2 focus:ring-secondary/30 w-full sm:w-80"
                required
                aria-required="true"
              />
              <Button 
                type="submit" 
                variant="cta"
                disabled={isSubmitting}
                aria-busy={isSubmitting}
              >
                {isSubmitting ? "Subscribing..." : "Subscribe"}
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About Column */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-4" aria-label="Vision Hope Trust - Home">
              <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center" aria-hidden="true">
                <Eye className="w-5 h-5 text-secondary-foreground" />
              </div>
              <span className="font-serif font-bold text-xl">Vision Hope Trust</span>
            </Link>
            <p className="text-primary-foreground/80 mb-6">
              Empowering visually impaired individuals through education, skill development, and community support since 2005.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors focus-ring"
                  aria-label={`Follow us on ${social.name}`}
                >
                  <social.icon className="w-5 h-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/80 hover:text-secondary transition-colors focus-ring rounded"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 text-secondary flex-shrink-0" aria-hidden="true" />
                <span className="text-primary-foreground/80">
                  123 Hope Street, Charity Lane<br />
                  Mumbai, Maharashtra 400001
                </span>
              </li>
              <li>
                <a 
                  href="tel:+919876543210" 
                  className="flex items-center gap-3 text-primary-foreground/80 hover:text-secondary transition-colors focus-ring rounded"
                >
                  <Phone className="w-5 h-5 text-secondary flex-shrink-0" aria-hidden="true" />
                  +91 98765 43210
                </a>
              </li>
              <li>
                <a 
                  href="mailto:info@visionhopetrust.org" 
                  className="flex items-center gap-3 text-primary-foreground/80 hover:text-secondary transition-colors focus-ring rounded"
                >
                  <Mail className="w-5 h-5 text-secondary flex-shrink-0" aria-hidden="true" />
                  info@visionhopetrust.org
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Support */}
          <div>
            <h3 className="font-serif font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/80 hover:text-secondary transition-colors focus-ring rounded"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 p-4 bg-primary-foreground/10 rounded-lg">
              <p className="text-sm text-primary-foreground/80">
                <strong>Tax Exemption:</strong> Donations are eligible for tax benefits under Section 80G.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-primary-foreground/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-primary-foreground/60 text-base">
            © {new Date().getFullYear()} Vision Hope Trust. All rights reserved. Made with ❤️ for the visually impaired community.
          </p>
        </div>
      </div>
    </footer>
  );
}
