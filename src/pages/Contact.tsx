
import { useState } from 'react';
import PageTransition from '@/components/PageTransition';
import CustomButton from '@/components/ui/custom-button';
import { Mail, Phone, MapPin, MessageSquare, Send } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success('Your message has been sent successfully!');
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };
  
  return (
    <PageTransition>
      <main className="min-h-screen pt-24 pb-20">
        {/* Contact Header */}
        <section className="bg-accent py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm">
                Get In Touch
              </span>
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
                We'd Love to Hear From You
              </h1>
              <p className="text-foreground/70 text-lg mb-8">
                Whether you have a question about courses, pricing, or anything else, our team is ready to answer all your questions.
              </p>
            </div>
          </div>
        </section>
        
        {/* Contact Information */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="glass-card rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Mail size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Email Us</h3>
                <p className="text-foreground/70 mb-4">
                  Send us an email and we'll get back to you within 24 hours.
                </p>
                <a href="mailto:info@knowhub.com" className="text-primary font-medium hover:underline">
                  info@knowhub.com
                </a>
              </div>
              
              <div className="glass-card rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Phone size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Call Us</h3>
                <p className="text-foreground/70 mb-4">
                  Mon-Fri from 9am to 5pm (EST).
                </p>
                <a href="tel:+11234567890" className="text-primary font-medium hover:underline">
                  +1 (123) 456-7890
                </a>
              </div>
              
              <div className="glass-card rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MapPin size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Visit Us</h3>
                <p className="text-foreground/70 mb-4">
                  Come say hello at our headquarters.
                </p>
                <address className="not-italic text-primary font-medium">
                  1234 Education Lane<br />
                  Learning City, LC 12345
                </address>
              </div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-display font-bold mb-6">Send a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Your email address"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="What is this regarding?"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                      placeholder="Your message..."
                    ></textarea>
                  </div>
                  
                  <CustomButton 
                    type="submit"
                    variant="primary"
                    disabled={isSubmitting}
                    className="flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message <Send size={16} className="ml-2" />
                      </>
                    )}
                  </CustomButton>
                </form>
              </div>
              
              {/* FAQ */}
              <div>
                <h2 className="text-2xl font-display font-bold mb-6">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  <FaqItem 
                    question="How do I enroll in a course?" 
                    answer="To enroll in a course, simply navigate to the course page, click on the 'Enroll Now' button, and follow the checkout process. Once payment is complete, you'll have immediate access to the course materials."
                  />
                  
                  <FaqItem 
                    question="Can I access the courses on mobile devices?" 
                    answer="Absolutely! Our platform is fully responsive and optimized for mobile learning. You can access all course content on smartphones and tablets through our website."
                  />
                  
                  <FaqItem 
                    question="How long do I have access to a course?" 
                    answer="Once you enroll in a course, you have lifetime access to the course materials. This allows you to learn at your own pace and revisit the content whenever you need a refresher."
                  />
                  
                  <FaqItem 
                    question="Do you offer refunds?" 
                    answer="Yes, we offer a 30-day money-back guarantee for all courses. If you're not satisfied with your purchase, you can request a full refund within 30 days of enrollment."
                  />
                  
                  <FaqItem 
                    question="Are certificates provided upon completion?" 
                    answer="Yes, you'll receive a certificate of completion after finishing all the required modules in a course. This certificate can be downloaded, printed, or shared directly to your LinkedIn profile."
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Map Section */}
        {/* <section className="py-8">
          <div className="container mx-auto px-6">
            <div className="glass-card rounded-2xl overflow-hidden shadow-lg">
              <iframe 
                src="https://www.google.com/maps/place/Denau,+Surxondaryo+Region,+Uzbekistan/@38.2809912,67.8890892,1343m/data=!3m1!1e3!4m6!3m5!1s0x38b5110fcbfa23c3:0xfa283eac4e154a56!8m2!3d38.2764328!4d67.8927472!16s%2Fm%2F0gtv62n?hl=en&entry=ttu&g_ep=EgoyMDI1MDMxOS4yIKXMDSoASAFQAw%3D%3D" 
                width="100%" 
                height="500" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                title="KnowHub Location"
              ></iframe>
            </div>
          </div>
        </section> */}
        
        {/* Newsletter */}
        <section className="py-16 bg-accent">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageSquare size={24} className="text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
                Subscribe to Our Newsletter
              </h2>
              <p className="text-foreground/70 mb-8">
                Stay updated with our latest courses, events, and educational resources.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
                <CustomButton type="submit" variant="primary">
                  Subscribe
                </CustomButton>
              </form>
              <p className="text-sm text-foreground/50 mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
};

const FaqItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border border-border rounded-xl overflow-hidden">
      <button 
        className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-accent/50 transition-colors text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-bold">{question}</span>
        {isOpen ? (
          <ChevronUp size={18} className="text-primary" />
        ) : (
          <ChevronDown size={18} className="text-primary" />
        )}
      </button>
      
      {isOpen && (
        <div className="px-6 py-4 bg-white">
          <p className="text-foreground/70">{answer}</p>
        </div>
      )}
    </div>
  );
};

const ChevronDown = ({ size, className }: { size: number; className?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className={className}
  >
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

const ChevronUp = ({ size, className }: { size: number; className?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className={className}
  >
    <polyline points="18 15 12 9 6 15"></polyline>
  </svg>
);

export default Contact;
