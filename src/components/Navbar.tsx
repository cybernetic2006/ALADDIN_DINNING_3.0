import { useState, useEffect } from 'react';
import { Link, useRoute } from 'wouter';
import { Menu, X, Star, ShoppingCart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '@/lib/cart-context';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Menu', href: '/menu' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Testimonials', href: '/testimonials' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { totalItems, toggleCart } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-background/95 backdrop-blur-md shadow-sm py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2 group">
              <Star className={`w-5 h-5 ${isScrolled ? 'text-secondary' : 'text-secondary'}`} />
              <span className={`font-playfair text-2xl font-bold tracking-wide ${isScrolled ? 'text-foreground' : 'text-white'}`}>
                Aladdin
              </span>
            </Link>

            {/* Cart Icon */}
            <button
              onClick={toggleCart}
              aria-label="Open cart"
              className={`relative p-2 rounded-full transition-colors ${
                isScrolled ? 'text-foreground hover:bg-muted' : 'text-white hover:bg-white/10'
              }`}
            >
              <ShoppingCart className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 rounded-full bg-secondary text-white text-[10px] font-bold flex items-center justify-center leading-none">
                  {totalItems}
                </span>
              )}
            </button>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const [isActive] = useRoute(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative font-poppins text-sm font-medium transition-colors ${
                    isScrolled
                      ? isActive ? 'text-primary' : 'text-foreground/80 hover:text-primary'
                      : isActive ? 'text-white' : 'text-white/80 hover:text-white'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className={`absolute -bottom-1 left-0 right-0 h-0.5 ${
                        isScrolled ? 'bg-primary' : 'bg-white'
                      }`}
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:flex">
            <Link
              href="/contact"
              className={`px-6 py-2.5 rounded-full font-poppins text-sm font-medium transition-all duration-300 ${
                isScrolled
                  ? 'bg-gradient-to-r from-secondary to-[#B8922C] text-white shadow-md hover:shadow-lg'
                  : 'bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20'
              }`}
            >
              Reserve
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={`md:hidden p-2 rounded-full ${
              isScrolled ? 'text-foreground' : 'text-white'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background pt-24 px-6 pb-6 flex flex-col md:hidden"
          >
            <div className="flex flex-col gap-6 items-center text-lg mt-8">
              {navLinks.map((link) => {
                const [isActive] = useRoute(link.href);
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`font-playfair text-2xl ${
                      isActive ? 'text-primary font-semibold' : 'text-foreground/80'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4 px-8 py-3 rounded-full bg-gradient-to-r from-secondary to-[#B8922C] text-white font-poppins shadow-md"
              >
                Reserve a Table
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
