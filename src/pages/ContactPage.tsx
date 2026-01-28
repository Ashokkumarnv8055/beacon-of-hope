import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100, "Name is too long"),
  email: z.string().trim().email("Please enter a valid email address").max(255, "Email is too long"),
  subject: z.string().trim().min(5, "Subject must be at least 5 characters").max(200, "Subject is too long"),
  message: z.string().trim().min(20, "Message must be at least 20 characters").max(2000, "Message is too long"),
});

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    content: "123 Hope Street, Charity Lane\nMumbai, Maharashtra 400001\nIndia",
  },
  {
    icon: Phone,
    title: "Phone",
    content: "+91 98765 43210\n+91 22 1234 5678",
    href: "tel:+919876543210",
  },
  {
    icon: Mail,
    title: "Email",
    content: "info@visionhopetrust.org\nvolunteer@visionhopetrust.org",
    href: "mailto:info@visionhopetrust.org",
  },
  {
    icon: Clock,
    title: "Hours",
    content: "Monday - Saturday\n9:00 AM - 6:00 PM",
  },
];

export default function ContactPage() {
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    try {
      contactSchema.parse(form);
      setSubmitting(true);
      
      // Call edge function to send email
      const { data, error } = await supabase.functions.invoke("send-contact", {
        body: {
          name: form.name.trim(),
          email: form.email.trim(),
          subject: form.subject.trim(),
          message: form.message.trim(),
        },
      });
      
      if (error) {
        console.error("Error sending contact form:", error);
        toast({
          title: "Error",
          description: "Failed to send message. Please try again later.",
          variant: "destructive",
        });
        return;
      }
      
      setSuccess(true);
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as string] = err.message;
          }
        });
        setErrors(fieldErrors);
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section 
        className="hero-section py-20 md:py-28"
        aria-labelledby="contact-hero-heading"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 
            id="contact-hero-heading"
            className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mb-6"
          >
            Contact Us
          </h1>
          <p className="text-xl text-primary-foreground/90">
            Have questions or want to learn more? We'd love to hear from you. 
            Reach out to us through any of the channels below.
          </p>
        </div>
      </section>

      <div className="section-container">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <aside className="lg:col-span-1" aria-labelledby="contact-info-heading">
            <h2 id="contact-info-heading" className="text-2xl font-serif font-bold text-foreground mb-6">
              Get in Touch
            </h2>
            <div className="space-y-6">
              {contactInfo.map((info) => (
                <div key={info.title} className="flex gap-4">
                  <div 
                    className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center flex-shrink-0"
                    aria-hidden="true"
                  >
                    <info.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                    {info.href ? (
                      <a 
                        href={info.href}
                        className="text-muted-foreground hover:text-secondary transition-colors whitespace-pre-line focus-ring rounded"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-muted-foreground whitespace-pre-line">{info.content}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="mt-8">
              <h3 className="font-semibold text-foreground mb-4">Our Location</h3>
              <div 
                className="bg-muted rounded-xl h-64 flex items-center justify-center"
                role="img"
                aria-label="Map showing Vision Hope Trust location at 123 Hope Street, Mumbai"
              >
                <div className="text-center text-muted-foreground">
                  <MapPin className="w-12 h-12 mx-auto mb-2 text-secondary" aria-hidden="true" />
                  <p className="font-medium">Map Placeholder</p>
                  <p className="text-sm">123 Hope Street, Mumbai</p>
                </div>
              </div>
            </div>
          </aside>

          {/* Contact Form */}
          <section className="lg:col-span-2" aria-labelledby="contact-form-heading">
            <h2 id="contact-form-heading" className="text-2xl font-serif font-bold text-foreground mb-6">
              Send Us a Message
            </h2>

            {success ? (
              <div className="accessible-card text-center py-12">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="w-8 h-8 text-accent" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-serif font-bold text-foreground mb-2">
                  Message Sent!
                </h3>
                <p className="text-muted-foreground mb-6">
                  Thank you for reaching out. We typically respond within 24-48 hours.
                </p>
                <Button 
                  variant="outline"
                  onClick={() => {
                    setSuccess(false);
                    setForm({ name: "", email: "", subject: "", message: "" });
                  }}
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="accessible-card space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="contact-name" className="block text-foreground font-medium mb-2">
                      Full Name <span className="text-destructive" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      className="form-input-accessible"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      required
                      aria-required="true"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "contact-name-error" : undefined}
                    />
                    {errors.name && (
                      <p id="contact-name-error" className="text-destructive text-sm mt-1" role="alert">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-foreground font-medium mb-2">
                      Email Address <span className="text-destructive" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      className="form-input-accessible"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      required
                      aria-required="true"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "contact-email-error" : undefined}
                    />
                    {errors.email && (
                      <p id="contact-email-error" className="text-destructive text-sm mt-1" role="alert">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-subject" className="block text-foreground font-medium mb-2">
                    Subject <span className="text-destructive" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    className="form-input-accessible"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    required
                    aria-required="true"
                    aria-invalid={!!errors.subject}
                    aria-describedby={errors.subject ? "contact-subject-error" : undefined}
                  />
                  {errors.subject && (
                    <p id="contact-subject-error" className="text-destructive text-sm mt-1" role="alert">
                      {errors.subject}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-foreground font-medium mb-2">
                    Message <span className="text-destructive" aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={6}
                    className="form-input-accessible resize-none"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    required
                    aria-required="true"
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "contact-message-error" : undefined}
                  />
                  {errors.message && (
                    <p id="contact-message-error" className="text-destructive text-sm mt-1" role="alert">
                      {errors.message}
                    </p>
                  )}
                </div>

                <Button 
                  type="submit" 
                  variant="cta" 
                  size="lg" 
                  className="w-full sm:w-auto"
                  disabled={submitting}
                  aria-busy={submitting}
                >
                  <Send className="w-5 h-5" aria-hidden="true" />
                  {submitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}
          </section>
        </div>
      </div>
    </Layout>
  );
}
