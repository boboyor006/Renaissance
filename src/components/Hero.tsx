
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-2xl"
          >
            <span className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm">
              Sifatli kurslarini topishingiz mumkin.
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">
             O'z ko'nikmangizni oshring, <span className="text-primary">Renessane</span>  o'quv markazi bilan.
            </h1>
            <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
            Sanoat mutaxassislari tomonidan ishlab chiqilgan yuqori sifatli kurslarni kashf eting. Veb-ishlab chiqishdan tillargacha,
            o'rganish sayohatingizda keyingi qadamni qo'ying.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/courses" 
                className="btn-hover inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-primary text-white font-medium text-lg"
              >
               Kurslar
                <ArrowRight size={20} className="ml-2" />
              </Link>
              <Link 
                to="/about" 
                className="btn-hover inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-white border border-gray-200 text-foreground font-medium text-lg"
              >
                Biz haqimizda
              </Link>
            </div>
          </motion.div>
          
          {/* Hero Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative"
          >
            <div className="relative z-10 glass-card rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80" 
                alt="Students learning together" 
                className="w-full h-auto"
              />
            </div>
            
            {/* Floating Elements */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="absolute -left-6 top-1/4 glass-card rounded-xl p-4 shadow-lg"
            >
              <div className="flex items-center">
                <div className="bg-green-500 h-10 w-10 rounded-full flex items-center justify-center text-white font-bold">
                  4.9
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium">Course Rating</p>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="absolute -bottom-6 right-10 glass-card rounded-xl p-4 shadow-lg"
            >
              <p className="text-sm font-medium">Join 10,000+ students</p>
              <div className="flex -space-x-2 mt-1">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
                    <img 
                      src={`https://randomuser.me/api/portraits/men/${i + 20}.jpg`} 
                      alt="Student" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
                <div className="w-8 h-8 rounded-full border-2 border-white bg-primary text-white flex items-center justify-center text-xs font-medium">
                  +6k
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
