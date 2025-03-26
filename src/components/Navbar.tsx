
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-4 glass-card' : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-display font-bold text-primary">Renessance </span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink to="/">Bosh Sahifa </NavLink>
          <NavLink to="/courses">Kurslar</NavLink>
          <NavLink to="/about">Biz haqimizda </NavLink>
          <NavLink to="/contact">Biz Bog'lanish</NavLink>
          <Link 
            to="/courses" 
            className="btn-hover ml-4 px-6 py-2.5 rounded-full bg-primary text-white font-medium"
          >
            Kurslar ko'rish
          </Link>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 rounded-md text-primary"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-background z-40 pt-20">
          <nav className="container mx-auto px-6 flex flex-col items-center space-y-6 py-8">
            <MobileNavLink to="/" onClick={toggleMobileMenu}>Bosh Sahifa</MobileNavLink>
            <MobileNavLink to="/courses" onClick={toggleMobileMenu}>Kurslar</MobileNavLink>
            <MobileNavLink to="/about" onClick={toggleMobileMenu}>Biz Haqimizda</MobileNavLink>
            <MobileNavLink to="/contact" onClick={toggleMobileMenu}>Biz bog'lanish</MobileNavLink>
            <Link 
              to="/courses" 
              className="w-full text-center btn-hover mt-4 px-6 py-3 rounded-full bg-primary text-white font-medium"
              onClick={toggleMobileMenu}
            >
              Kurslar ko'rish
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

const NavLink = ({ to, children }: { to: string, children: React.ReactNode }) => (
  <Link to={to} className="link-underline font-medium text-foreground/80 hover:text-primary transition-colors">
    {children}
  </Link>
);

const MobileNavLink = ({ to, children, onClick }: { to: string, children: React.ReactNode, onClick: () => void }) => (
  <Link 
    to={to} 
    className="text-xl font-medium text-foreground/80 hover:text-primary transition-colors"
    onClick={onClick}
  >
    {children}
  </Link>
);

export default Navbar;
