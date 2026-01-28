import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Heart, Users, Check, Wallet } from "lucide-react";
import { z } from "zod";
import { PaymentMethods } from "@/components/donation/PaymentMethods";

// Validation schemas
const volunteerSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100, "Name is too long"),
  email: z.string().trim().email("Please enter a valid email address").max(255, "Email is too long"),
  phone: z.string().trim().regex(/^[0-9+\-\s()]*$/, "Please enter a valid phone number").max(20, "Phone number is too long"),
  interests: z.array(z.string()).min(1, "Please select at least one area of interest"),
  message: z.string().trim().max(1000, "Message is too long").optional(),
});

const donationSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100, "Name is too long"),
  email: z.string().trim().email("Please enter a valid email address").max(255, "Email is too long"),
  amount: z.number().min(100, "Minimum donation is ₹100").max(10000000, "Please contact us for large donations"),
  message: z.string().trim().max(500, "Message is too long").optional(),
});

const volunteerInterests = [
  "Teaching & Tutoring",
  "Administrative Support",
  "Event Organization",
  "Fundraising",
  "Technology & IT",
  "Transportation Assistance",
];

const donationAmounts = [500, 1000, 2500, 5000, 10000];

export default function GetInvolvedPage() {
  const { toast } = useToast();
  
  // Volunteer form state
  const [volunteerForm, setVolunteerForm] = useState({
    name: "",
    email: "",
    phone: "",
    interests: [] as string[],
    message: "",
  });
  const [volunteerErrors, setVolunteerErrors] = useState<Record<string, string>>({});
  const [volunteerSubmitting, setVolunteerSubmitting] = useState(false);
  const [volunteerSuccess, setVolunteerSuccess] = useState(false);

  // Donation form state
  const [donationForm, setDonationForm] = useState({
    name: "",
    email: "",
    amount: 1000,
    customAmount: "",
    message: "",
  });
  const [donationErrors, setDonationErrors] = useState<Record<string, string>>({});
  const [donationSubmitting, setDonationSubmitting] = useState(false);
  const [donationSuccess, setDonationSuccess] = useState(false);

  // Handle volunteer form
  const handleVolunteerSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setVolunteerErrors({});

    try {
      volunteerSchema.parse(volunteerForm);
      setVolunteerSubmitting(true);
      
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      setVolunteerSuccess(true);
      toast({
        title: "Thank you for volunteering!",
        description: "We'll be in touch with you soon.",
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const errors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            errors[err.path[0] as string] = err.message;
          }
        });
        setVolunteerErrors(errors);
      }
    } finally {
      setVolunteerSubmitting(false);
    }
  };

  // Handle donation form
  const handleDonationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setDonationErrors({});

    const amount = donationForm.customAmount 
      ? parseInt(donationForm.customAmount) 
      : donationForm.amount;

    try {
      donationSchema.parse({ ...donationForm, amount });
      setDonationSubmitting(true);
      
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      setDonationSuccess(true);
      toast({
        title: "Thank you for your donation!",
        description: `Your contribution of ₹${amount.toLocaleString()} will make a real difference.`,
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const errors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            errors[err.path[0] as string] = err.message;
          }
        });
        setDonationErrors(errors);
      }
    } finally {
      setDonationSubmitting(false);
    }
  };

  const toggleInterest = (interest: string) => {
    setVolunteerForm((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }));
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section 
        className="hero-section py-20 md:py-28"
        aria-labelledby="get-involved-hero-heading"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 
            id="get-involved-hero-heading"
            className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mb-6"
          >
            Get Involved
          </h1>
          <p className="text-xl text-primary-foreground/90">
            Whether through volunteering your time or making a donation, 
            your support helps us empower more visually impaired individuals.
          </p>
        </div>
      </section>

      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Volunteer Form */}
          <section id="volunteer" aria-labelledby="volunteer-heading">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-accent" aria-hidden="true" />
              </div>
              <h2 id="volunteer-heading" className="text-2xl font-serif font-bold text-foreground">
                Become a Volunteer
              </h2>
            </div>

            {volunteerSuccess ? (
              <div className="accessible-card text-center py-12">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-accent" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-serif font-bold text-foreground mb-2">
                  Application Received!
                </h3>
                <p className="text-muted-foreground">
                  Thank you for your interest in volunteering. Our team will contact you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleVolunteerSubmit} className="accessible-card space-y-6">
                <div>
                  <label htmlFor="volunteer-name" className="block text-foreground font-medium mb-2">
                    Full Name <span className="text-destructive" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="volunteer-name"
                    type="text"
                    className="form-input-accessible"
                    value={volunteerForm.name}
                    onChange={(e) => setVolunteerForm({ ...volunteerForm, name: e.target.value })}
                    required
                    aria-required="true"
                    aria-invalid={!!volunteerErrors.name}
                    aria-describedby={volunteerErrors.name ? "volunteer-name-error" : undefined}
                  />
                  {volunteerErrors.name && (
                    <p id="volunteer-name-error" className="text-destructive text-sm mt-1" role="alert">
                      {volunteerErrors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="volunteer-email" className="block text-foreground font-medium mb-2">
                    Email Address <span className="text-destructive" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="volunteer-email"
                    type="email"
                    className="form-input-accessible"
                    value={volunteerForm.email}
                    onChange={(e) => setVolunteerForm({ ...volunteerForm, email: e.target.value })}
                    required
                    aria-required="true"
                    aria-invalid={!!volunteerErrors.email}
                    aria-describedby={volunteerErrors.email ? "volunteer-email-error" : undefined}
                  />
                  {volunteerErrors.email && (
                    <p id="volunteer-email-error" className="text-destructive text-sm mt-1" role="alert">
                      {volunteerErrors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="volunteer-phone" className="block text-foreground font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    id="volunteer-phone"
                    type="tel"
                    className="form-input-accessible"
                    value={volunteerForm.phone}
                    onChange={(e) => setVolunteerForm({ ...volunteerForm, phone: e.target.value })}
                    aria-invalid={!!volunteerErrors.phone}
                    aria-describedby={volunteerErrors.phone ? "volunteer-phone-error" : undefined}
                  />
                  {volunteerErrors.phone && (
                    <p id="volunteer-phone-error" className="text-destructive text-sm mt-1" role="alert">
                      {volunteerErrors.phone}
                    </p>
                  )}
                </div>

                <fieldset>
                  <legend className="block text-foreground font-medium mb-3">
                    Areas of Interest <span className="text-destructive" aria-hidden="true">*</span>
                  </legend>
                  <div className="grid grid-cols-2 gap-3">
                    {volunteerInterests.map((interest) => (
                      <label
                        key={interest}
                        className={`flex items-center gap-2 p-3 rounded-lg border-2 cursor-pointer transition-colors ${
                          volunteerForm.interests.includes(interest)
                            ? "border-secondary bg-secondary/10"
                            : "border-input hover:border-secondary/50"
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={volunteerForm.interests.includes(interest)}
                          onChange={() => toggleInterest(interest)}
                          className="sr-only"
                        />
                        <span 
                          className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                            volunteerForm.interests.includes(interest)
                              ? "border-secondary bg-secondary"
                              : "border-input"
                          }`}
                          aria-hidden="true"
                        >
                          {volunteerForm.interests.includes(interest) && (
                            <Check className="w-3 h-3 text-secondary-foreground" />
                          )}
                        </span>
                        <span className="text-sm">{interest}</span>
                      </label>
                    ))}
                  </div>
                  {volunteerErrors.interests && (
                    <p className="text-destructive text-sm mt-2" role="alert">
                      {volunteerErrors.interests}
                    </p>
                  )}
                </fieldset>

                <div>
                  <label htmlFor="volunteer-message" className="block text-foreground font-medium mb-2">
                    Why do you want to volunteer? (Optional)
                  </label>
                  <textarea
                    id="volunteer-message"
                    rows={4}
                    className="form-input-accessible resize-none"
                    value={volunteerForm.message}
                    onChange={(e) => setVolunteerForm({ ...volunteerForm, message: e.target.value })}
                    aria-invalid={!!volunteerErrors.message}
                    aria-describedby={volunteerErrors.message ? "volunteer-message-error" : undefined}
                  />
                  {volunteerErrors.message && (
                    <p id="volunteer-message-error" className="text-destructive text-sm mt-1" role="alert">
                      {volunteerErrors.message}
                    </p>
                  )}
                </div>

                <Button 
                  type="submit" 
                  variant="accent" 
                  size="lg" 
                  className="w-full"
                  disabled={volunteerSubmitting}
                  aria-busy={volunteerSubmitting}
                >
                  {volunteerSubmitting ? "Submitting..." : "Submit Application"}
                </Button>
              </form>
            )}
          </section>

          {/* Donation Form */}
          <section id="donate" aria-labelledby="donate-heading">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center">
                <Heart className="w-6 h-6 text-secondary" aria-hidden="true" />
              </div>
              <h2 id="donate-heading" className="text-2xl font-serif font-bold text-foreground">
                Make a Donation
              </h2>
            </div>

            {donationSuccess ? (
              <div className="accessible-card text-center py-12">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-secondary" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-serif font-bold text-foreground mb-2">
                  Thank You!
                </h3>
                <p className="text-muted-foreground">
                  Your generosity will help transform lives. You will receive a confirmation email shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleDonationSubmit} className="accessible-card space-y-6">
                <div>
                  <label htmlFor="donation-name" className="block text-foreground font-medium mb-2">
                    Full Name <span className="text-destructive" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="donation-name"
                    type="text"
                    className="form-input-accessible"
                    value={donationForm.name}
                    onChange={(e) => setDonationForm({ ...donationForm, name: e.target.value })}
                    required
                    aria-required="true"
                    aria-invalid={!!donationErrors.name}
                    aria-describedby={donationErrors.name ? "donation-name-error" : undefined}
                  />
                  {donationErrors.name && (
                    <p id="donation-name-error" className="text-destructive text-sm mt-1" role="alert">
                      {donationErrors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="donation-email" className="block text-foreground font-medium mb-2">
                    Email Address <span className="text-destructive" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="donation-email"
                    type="email"
                    className="form-input-accessible"
                    value={donationForm.email}
                    onChange={(e) => setDonationForm({ ...donationForm, email: e.target.value })}
                    required
                    aria-required="true"
                    aria-invalid={!!donationErrors.email}
                    aria-describedby={donationErrors.email ? "donation-email-error" : undefined}
                  />
                  {donationErrors.email && (
                    <p id="donation-email-error" className="text-destructive text-sm mt-1" role="alert">
                      {donationErrors.email}
                    </p>
                  )}
                </div>

                <fieldset>
                  <legend className="block text-foreground font-medium mb-3">
                    Select Amount <span className="text-destructive" aria-hidden="true">*</span>
                  </legend>
                  <div className="grid grid-cols-3 gap-3 mb-3">
                    {donationAmounts.map((amount) => (
                      <button
                        key={amount}
                        type="button"
                        onClick={() => {
                          setDonationForm({ ...donationForm, amount, customAmount: "" });
                        }}
                        className={`py-3 px-4 rounded-lg border-2 font-semibold transition-colors ${
                          donationForm.amount === amount && !donationForm.customAmount
                            ? "border-secondary bg-secondary/10 text-secondary"
                            : "border-input hover:border-secondary/50 text-foreground"
                        }`}
                        aria-pressed={donationForm.amount === amount && !donationForm.customAmount}
                      >
                        ₹{amount.toLocaleString()}
                      </button>
                    ))}
                  </div>
                  <div>
                    <label htmlFor="custom-amount" className="sr-only">
                      Custom amount in rupees
                    </label>
                    <input
                      id="custom-amount"
                      type="number"
                      placeholder="Enter custom amount (₹)"
                      className="form-input-accessible"
                      value={donationForm.customAmount}
                      onChange={(e) => setDonationForm({ ...donationForm, customAmount: e.target.value })}
                      min="100"
                    />
                  </div>
                  {donationErrors.amount && (
                    <p className="text-destructive text-sm mt-2" role="alert">
                      {donationErrors.amount}
                    </p>
                  )}
                </fieldset>

                <div>
                  <label htmlFor="donation-message" className="block text-foreground font-medium mb-2">
                    Leave a Message (Optional)
                  </label>
                  <textarea
                    id="donation-message"
                    rows={3}
                    className="form-input-accessible resize-none"
                    value={donationForm.message}
                    onChange={(e) => setDonationForm({ ...donationForm, message: e.target.value })}
                    placeholder="Your message of support..."
                  />
                </div>

                <div className="bg-muted p-4 rounded-lg text-sm text-muted-foreground">
                  <p>
                    <strong>Note:</strong> Donations are eligible for tax benefits under Section 80G. 
                    You will receive a receipt via email.
                  </p>
                </div>

                <Button 
                  type="submit" 
                  variant="cta" 
                  size="lg" 
                  className="w-full"
                  disabled={donationSubmitting}
                  aria-busy={donationSubmitting}
                >
                  <Heart className="w-5 h-5" aria-hidden="true" />
                  {donationSubmitting 
                    ? "Processing..." 
                    : `Donate ₹${(donationForm.customAmount ? parseInt(donationForm.customAmount) || 0 : donationForm.amount).toLocaleString()}`
                  }
                </Button>
              </form>
            )}
          </section>
        </div>

        {/* Payment Methods Section */}
        <section className="mt-16" aria-labelledby="payment-methods-heading">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center">
              <Wallet className="w-6 h-6 text-secondary" aria-hidden="true" />
            </div>
            <h2 id="payment-methods-heading" className="text-2xl font-serif font-bold text-foreground">
              Donation Methods
            </h2>
          </div>
          <PaymentMethods />
        </section>
      </div>
    </Layout>
  );
}
