import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Heart, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Programs", href: "/programs" },
  { name: "Gallery", href: "/gallery" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Get Involved", href: "/get-involved" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Skip to main content link for accessibility */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border" role="banner">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link 
              to="/" 
              className="flex items-center gap-3 focus-ring rounded-lg"
              aria-label="Vision Hope Trust - Home"
            >
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center" aria-hidden="true">
                <Eye className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="hidden sm:block">
                <span className="font-serif font-bold text-xl text-primary">Vision Hope</span>
                <span className="block text-sm text-muted-foreground">Trust for the Blind</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-4 py-2 rounded-lg text-base font-medium transition-colors focus-ring ${
                    isActive(item.href)
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-muted"
                  }`}
                  aria-current={isActive(item.href) ? "page" : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* CTA Button - Desktop */}
            <div className="hidden lg:flex items-center gap-3">
              <Button variant="cta" asChild>
                <Link to="/get-involved#donate">
                  <Heart className="w-5 h-5" aria-hidden="true" />
                  Donate Now
                </Link>
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              type="button"
              className="lg:hidden p-2 rounded-lg text-foreground hover:bg-muted focus-ring"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div 
              id="mobile-menu" 
              className="lg:hidden py-4 border-t border-border animate-fade-in"
            >
              <div className="flex flex-col gap-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`px-4 py-3 rounded-lg text-lg font-medium transition-colors focus-ring ${
                      isActive(item.href)
                        ? "bg-primary text-primary-foreground"
                        : "text-foreground hover:bg-muted"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                    aria-current={isActive(item.href) ? "page" : undefined}
                  >
                    {item.name}
                  </Link>
                ))}
                <Button variant="cta" className="mt-4" asChild>
                  <Link to="/get-involved#donate" onClick={() => setMobileMenuOpen(false)}>
                    <Heart className="w-5 h-5" aria-hidden="true" />
                    Donate Now
                  </Link>
                </Button>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
}
