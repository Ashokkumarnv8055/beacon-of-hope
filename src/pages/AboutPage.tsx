import { Layout } from "@/components/layout/Layout";
import { Heart, Target, Award, Users } from "lucide-react";
import founder1 from "@/assets/founder-1.jpg";
import founder2 from "@/assets/founder-2.jpg";

const values = [
  {
    icon: Heart,
    title: "Compassion",
    description: "We approach every individual with empathy, understanding, and genuine care.",
  },
  {
    icon: Target,
    title: "Empowerment",
    description: "We focus on building skills and confidence for lifelong independence.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for the highest quality in all our programs and services.",
  },
  {
    icon: Users,
    title: "Community",
    description: "We believe in the power of inclusive communities and mutual support.",
  },
];

const team = [
  {
    name: "Dr. Priya Sharma",
    role: "Founder & Chairperson",
    image: founder1,
    bio: "A former educator with 30 years of experience, Dr. Sharma founded Vision Hope Trust after working with visually impaired students and witnessing their immense potential.",
  },
  {
    name: "Rajesh Kumar",
    role: "Executive Director",
    image: founder2,
    bio: "Rajesh brings 15 years of nonprofit management experience and a passion for creating accessible education programs for all.",
  },
];

const milestones = [
  { year: "2005", event: "Vision Hope Trust founded with 10 students" },
  { year: "2008", event: "Opened first dedicated training center" },
  { year: "2012", event: "Launched computer literacy program" },
  { year: "2016", event: "Expanded to 3 regional centers" },
  { year: "2020", event: "Reached 500+ beneficiaries milestone" },
  { year: "2024", event: "Celebrated 18 years of transforming lives" },
];

export default function AboutPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section 
        className="hero-section py-20 md:py-28"
        aria-labelledby="about-hero-heading"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 
            id="about-hero-heading"
            className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mb-6"
          >
            About Vision Hope Trust
          </h1>
          <p className="text-xl text-primary-foreground/90">
            For nearly two decades, we've been dedicated to empowering visually 
            impaired individuals through education, skill development, and unwavering support.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-container" aria-labelledby="story-heading">
        <div className="max-w-4xl mx-auto">
          <h2 id="story-heading" className="section-heading font-serif text-center mb-8">
            Our Story
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-foreground/80 mb-6">
              Vision Hope Trust was born from a simple observation: visually impaired 
              individuals possess incredible talent and potential, yet often lack access 
              to the specialized resources they need to thrive.
            </p>
            <p className="text-lg text-foreground/80 mb-6">
              In 2005, Dr. Priya Sharma, a dedicated educator who had spent years working 
              with visually impaired students, decided to take action. Starting with just 
              10 students in a small community center, she launched what would become one 
              of the region's most impactful organizations for the blind.
            </p>
            <p className="text-lg text-foreground/80">
              Today, Vision Hope Trust operates across multiple centers, serving over 500 
              beneficiaries with comprehensive programs in education, skill training, and 
              community integration. Our work has transformed hundreds of lives, proving 
              that with the right support, there are no limits to what visually impaired 
              individuals can achieve.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-muted py-16 md:py-24" aria-labelledby="values-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="values-heading" className="section-heading font-serif text-center mb-12">
            Our Core Values
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <article
                key={value.title}
                className="accessible-card text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div 
                  className="w-14 h-14 bg-secondary/20 rounded-xl flex items-center justify-center mx-auto mb-4"
                  aria-hidden="true"
                >
                  <value.icon className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="text-xl font-serif font-bold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-base">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-container" aria-labelledby="timeline-heading">
        <h2 id="timeline-heading" className="section-heading font-serif text-center mb-12">
          Our Journey
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="relative border-l-4 border-secondary pl-8 space-y-8">
            {milestones.map((milestone, index) => (
              <div 
                key={milestone.year}
                className="relative animate-slide-in-left"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div 
                  className="absolute -left-11 w-6 h-6 bg-secondary rounded-full border-4 border-background"
                  aria-hidden="true"
                />
                <p className="text-secondary font-bold text-lg">{milestone.year}</p>
                <p className="text-foreground/80">{milestone.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-muted py-16 md:py-24" aria-labelledby="team-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="team-heading" className="section-heading font-serif text-center mb-12">
            Leadership Team
          </h2>
          <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            {team.map((member) => (
              <article
                key={member.name}
                className="accessible-card flex flex-col items-center text-center"
              >
                <img
                  src={member.image}
                  alt={`Portrait of ${member.name}, ${member.role}`}
                  className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-secondary"
                />
                <h3 className="text-xl font-serif font-bold text-foreground">
                  {member.name}
                </h3>
                <p className="text-secondary font-medium mb-3">{member.role}</p>
                <p className="text-muted-foreground">{member.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
