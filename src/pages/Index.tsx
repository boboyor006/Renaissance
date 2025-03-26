
import { useState } from 'react';
import { Link } from 'react-router-dom';
import PageTransition from '@/components/PageTransition';
import Hero from '@/components/Hero';
import CourseCard from '@/components/CourseCard';
import { ArrowRight, BookOpen, Users, Globe, Code } from 'lucide-react';
import { getFeaturedCourses, getCategories } from '@/data/courses';

const Index = () => {
  const featuredCourses = getFeaturedCourses(3);
  const categories = getCategories();
  
  return (
    <PageTransition>
      <main>
        <Hero />
        
        {/* Featured Courses Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <span className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm">
                Kurslar billan tanishib chiqish 
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Barcha kurslar </h2>
              <p className="text-foreground/70 max-w-2xl mx-auto">
               Renessane O'quv markazining barcha kurslarini ko'rish uchun quyidagi ro'yxatdan foydalaning o'zizga yoqan kurs narxni ko'rib chiqing.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredCourses.map((course, index) => (
                <CourseCard 
                  key={course.id}
                  id={course.id}
                  title={course.title}
                  description={course.description}
                  category={course.category}
                  thumbnail={course.thumbnail}
                  price={course.price}
                  duration={course.duration}
                  studentsCount={course.studentsCount}
                  delay={index}
                />
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link 
                to="/courses" 
                className="btn-hover inline-flex items-center px-6 py-3 rounded-full bg-primary text-white font-medium"
              >
                View All Courses
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </div>
        </section>
        
        {/* Categories Section */}
        <section className="py-20 bg-accent/50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <span className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm">
                Course Categories
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">What Would You Like to Learn?</h2>
              <p className="text-foreground/70 max-w-2xl mx-auto">
                Explore our diverse range of course categories. Each category offers comprehensive learning paths designed to build your expertise.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {categories.map((category, index) => {
                const icon = getIconForCategory(category);
                return (
                  <Link to={`/courses?category=${category}`} key={category}>
                    <div className="card-hover glass-card rounded-2xl p-8 text-center h-full">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                        {icon}
                      </div>
                      <h3 className="text-xl font-bold mb-3">{category}</h3>
                      <p className="text-foreground/70 text-sm">
                        {getCategoryDescription(category)}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
        
        {/* Why Choose Us Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm">
                  Why Choose KnowHub
                </span>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">A Learning Experience Designed for Success</h2>
                <p className="text-foreground/70 mb-8">
                  We've created a learning platform that puts your success first. Our courses are designed by industry experts and constantly updated to ensure you're learning the most relevant skills.
                </p>
                
                <div className="space-y-6">
                  <div className="flex">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-1">Expert Instructors</h3>
                      <p className="text-foreground/70">Learn from industry professionals with real-world experience.</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-1">Flexible Learning</h3>
                      <p className="text-foreground/70">Study at your own pace with lifetime access to course content.</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-1">Practical Projects</h3>
                      <p className="text-foreground/70">Apply your knowledge with hands-on projects and exercises.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="glass-card rounded-2xl overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                    alt="Students in a collaborative learning environment" 
                    className="w-full h-auto"
                  />
                </div>
                
                <div className="absolute -bottom-6 -left-6 glass-card rounded-xl p-4 shadow-lg">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground/70">Average completion time</p>
                      <p className="text-xl font-bold">6 weeks</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        
        
        {/* Footer */}
        <footer className="bg-foreground text-white py-12">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Renaissance</h3>
                <p className="text-white/70">
                Renaissance O'quv markazini rasmiy web saytiga xush kelibsiz. Bizning saytimizda siz o'zingizga kerakli kursni topishingiz mumkin.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-bold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li><Link to="/" className="text-white/70 hover:text-white transition-colors">Bosh Sahifa </Link></li>
                  <li><Link to="/courses" className="text-white/70 hover:text-white transition-colors">Kurslar </Link></li>
                  <li><Link to="/about" className="text-white/70 hover:text-white transition-colors">Biz haqimizda</Link></li>
                  <li><Link to="/contact" className="text-white/70 hover:text-white transition-colors">Biz billan bog'lanish </Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-bold mb-4">Kategoriyalar</h4>
                <ul className="space-y-2">
                  {categories.map(category => (
                    <li key={category}>
                      <Link to={`/courses?category=${category}`} className="text-white/70 hover:text-white transition-colors">
                        {category}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-bold mb-4">Contact Us</h4>
                <address className="not-italic text-white/70">
                  <p>Renaissance</p>
                  <p>Surxondaryo Denov tummani guliston</p>
                  <p className="mt-2">polatovt033@gmail.com</p>
                  <p>+998 77-177-28-02</p>
                </address>
              </div>
            </div>
            
            <div className="mt-12 pt-8 border-t border-white/10 text-center text-white/70">
              <p>&copy; {new Date().getFullYear()} Renaissance O'quv markazi</p>
            </div>
          </div>
        </footer>
      </main>
    </PageTransition>
  );
};

const getIconForCategory = (category: string) => {
  switch (category) {
    case 'Web Development':
      return <Code size={28} className="text-primary" />;
    case 'Frontend Development':
      return <Code size={28} className="text-primary" />;
    case 'English Language':
      return <Globe size={28} className="text-primary" />;
    case 'Arabic Language':
      return <Globe size={28} className="text-primary" />;
    default:
      return <BookOpen size={28} className="text-primary" />;
  }
};

const getCategoryDescription = (category: string) => {
  switch (category) {
    case 'Web Development':
      return 'Build responsive websites and web applications with modern tools and frameworks.';
    case 'Frontend Development':
      return 'Create beautiful user interfaces with React, CSS frameworks, and UI/UX principles.';
    case 'English Language':
      return 'Improve your English language skills for professional and personal growth.';
    case 'Arabic Language':
      return 'Learn Arabic from beginner to advanced levels with native-speaking instructors.';
    default:
      return 'Explore courses in this category to expand your knowledge and skills.';
  }
};

export default Index;
