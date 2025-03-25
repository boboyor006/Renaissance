
import PageTransition from '@/components/PageTransition';
import { Users, Award, BookOpen, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import CustomButton from '@/components/ui/custom-button';

const About = () => {
  return (
    <PageTransition>
      <main className="min-h-screen pt-24 pb-20">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 bg-accent overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-200/10 rounded-full blur-3xl" />
          </div>
          
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm">
                About KnowHub
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                Transforming Education for a Better Future
              </h1>
              <p className="text-foreground/70 text-lg md:text-xl mb-8 leading-relaxed">
                We're on a mission to make high-quality education accessible to everyone. 
                Through innovative learning experiences, we're helping people around the world unlock their potential.
              </p>
            </div>
          </div>
        </section>
        
        {/* Our Story */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm">
                  Our Story
                </span>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">How KnowHub Began</h2>
                <div className="space-y-4 text-foreground/70">
                  <p>
                    KnowHub was founded in 2018 with a simple vision: to create a learning platform that combines 
                    high-quality content with an engaging, intuitive experience.
                  </p>
                  <p>
                    Our founder, after experiencing the limitations of traditional education firsthand, 
                    recognized the need for a more flexible, accessible approach to learning. Starting with 
                    just three courses in web development, KnowHub has since grown to offer comprehensive 
                    courses across multiple disciplines.
                  </p>
                  <p>
                    Today, we're proud to have helped over 100,000 students worldwide achieve their learning goals. 
                    But we're just getting started. Our team continues to innovate and expand, always guided by our 
                    core belief that quality education should be available to everyone.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="glass-card rounded-2xl overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                    alt="The KnowHub team collaborating" 
                    className="w-full h-auto"
                  />
                </div>
                
                <div className="absolute -bottom-6 -right-6 glass-card rounded-xl p-4 shadow-lg">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                      <Users size={24} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground/70">Our Community</p>
                      <p className="text-xl font-bold">100,000+ Students</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Values */}
        <section className="py-16 md:py-24 bg-accent">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm">
                Our Values
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">What We Stand For</h2>
              <p className="text-foreground/70">
                At KnowHub, our values guide everything we do. They shape our curriculum, 
                influence our teaching approach, and define our relationship with students.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="glass-card rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Excellence</h3>
                <p className="text-foreground/70">
                  We're committed to delivering the highest quality educational content, 
                  constantly updating our courses to reflect industry standards.
                </p>
              </div>
              
              <div className="glass-card rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Inclusivity</h3>
                <p className="text-foreground/70">
                  We believe education should be accessible to everyone, regardless of 
                  background, location, or prior experience.
                </p>
              </div>
              
              <div className="glass-card rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <BookOpen size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Practicality</h3>
                <p className="text-foreground/70">
                  We focus on practical, applicable skills that directly translate to 
                  real-world success, not just theoretical knowledge.
                </p>
              </div>
              
              <div className="glass-card rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Globe size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Innovation</h3>
                <p className="text-foreground/70">
                  We continuously evolve our teaching methods and platform to provide 
                  the most effective learning experience possible.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Team */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm">
                Meet Our Team
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">The People Behind KnowHub</h2>
              <p className="text-foreground/70">
                Our diverse team of educators, technologists, and lifelong learners is united by a 
                common goal: to create exceptional learning experiences.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="glass-card rounded-2xl overflow-hidden text-center">
                  <div className="aspect-square">
                    <img 
                      src={member.photo} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-primary mb-3">{member.position}</p>
                    <p className="text-foreground/70 text-sm mb-4">{member.bio}</p>
                    <div className="flex justify-center space-x-3">
                      {member.socialLinks.map((link, linkIndex) => (
                        <a key={linkIndex} href={link.url} target="_blank" rel="noopener noreferrer" className="text-foreground/50 hover:text-primary transition-colors">
                          {getSocialIcon(link.platform)}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Join Us CTA */}
        <section className="py-16 md:py-24 bg-primary text-white">
          <div className="container mx-auto px-6 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Join Our Learning Community</h2>
              <p className="text-white/70 mb-8 text-lg">
                Become part of a global community of learners who are transforming their lives through education. 
                Start your journey with KnowHub today.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/courses">
                  <CustomButton variant="primary" size="lg" className="bg-white text-primary hover:bg-white/90">
                    Explore Courses
                  </CustomButton>
                </Link>
                <Link to="/contact">
                  <CustomButton variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                    Contact Us
                  </CustomButton>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
};

const teamMembers = [
  {
    name: "Sarah Johnson",
    position: "Founder & CEO",
    photo: "https://randomuser.me/api/portraits/women/23.jpg",
    bio: "Former educator with a passion for making quality education accessible to everyone. Sarah founded KnowHub after 10 years in traditional academia.",
    socialLinks: [
      { platform: "twitter", url: "#" },
      { platform: "linkedin", url: "#" }
    ]
  },
  {
    name: "Michael Chen",
    position: "Head of Content",
    photo: "https://randomuser.me/api/portraits/men/54.jpg",
    bio: "With a background in instructional design, Michael ensures all KnowHub courses meet our high standards for quality and engagement.",
    socialLinks: [
      { platform: "twitter", url: "#" },
      { platform: "linkedin", url: "#" }
    ]
  },
  {
    name: "Elena Rodriguez",
    position: "Lead Developer",
    photo: "https://randomuser.me/api/portraits/women/63.jpg",
    bio: "Elena leads our development team, creating the intuitive, responsive platform that makes the KnowHub learning experience special.",
    socialLinks: [
      { platform: "github", url: "#" },
      { platform: "linkedin", url: "#" }
    ]
  }
];

const getSocialIcon = (platform: string) => {
  switch (platform) {
    case 'twitter':
      return (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.057 10.057 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
        </svg>
      );
    case 'linkedin':
      return (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      );
    case 'github':
      return (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
        </svg>
      );
    default:
      return null;
  }
};

export default About;
