import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X, Search, User, Moon, Sun } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useTheme } from '../context/ThemeContext';
import { motion, AnimatePresence } from 'motion/react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Shop', path: '/shop' },
    { name: 'Lookbook', path: '/lookbook' },
    { name: 'Journal', path: '/journal' },
    { name: 'About', path: '/about' },
  ];

  const isHome = location.pathname === '/';
  const isTransparent = isHome && !isScrolled;
  const textColorClass = isTransparent ? 'text-white' : 'text-gray-900 dark:text-white';
  const hoverColorClass = isTransparent ? 'hover:text-gray-200' : 'hover:text-black dark:hover:text-gray-300';

  return (
    <>
      <div className="bg-black dark:bg-zinc-900 text-white text-[10px] sm:text-xs font-bold tracking-widest uppercase py-2 text-center z-50 relative">
        Free Worldwide Shipping on Orders Over $200
      </div>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          !isTransparent ? 'bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md shadow-sm py-4 translate-y-0' : 'bg-transparent py-6 translate-y-8'
        }`}
      >
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 -ml-2 ${textColorClass}`}
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>

          {/* Logo */}
          <Link to="/" className={`text-2xl font-serif font-bold tracking-tighter z-50 ${textColorClass}`}>
            PASHION
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`relative text-sm font-medium uppercase tracking-wider transition-colors ${textColorClass} ${hoverColorClass} after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:duration-300 after:bg-current`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-4 md:space-x-6">
            <button onClick={toggleTheme} className={`transition-colors ${textColorClass} ${hoverColorClass}`}>
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button className={`transition-colors hidden sm:block ${textColorClass} ${hoverColorClass}`}>
              <Search size={20} />
            </button>
            <Link to="/login" className={`transition-colors hidden sm:block ${textColorClass} ${hoverColorClass}`}>
              <User size={20} />
            </Link>
            <button
              className={`transition-colors relative ${textColorClass} ${hoverColorClass}`}
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingBag size={20} />
              {cartCount > 0 && (
                <span className={`absolute -top-2 -right-2 text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center ${isTransparent ? 'bg-white text-black' : 'bg-black dark:bg-white text-white dark:text-black'}`}>
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed inset-y-0 left-0 w-[80%] max-w-sm bg-white dark:bg-zinc-950 z-50 shadow-xl md:hidden flex flex-col"
            >
              <div className="p-6 flex justify-between items-center border-b border-gray-100 dark:border-zinc-800">
                <span className="text-xl font-serif font-bold tracking-tighter dark:text-white">PASHION</span>
                <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 -mr-2 text-gray-500 hover:text-black dark:hover:text-white">
                  <X size={24} />
                </button>
              </div>
              <nav className="flex-1 overflow-y-auto py-6 px-6 flex flex-col space-y-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="text-lg font-medium text-gray-900 dark:text-white uppercase tracking-wide"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
              <div className="p-6 border-t border-gray-100 dark:border-zinc-800 flex justify-around">
                <button className="flex flex-col items-center text-gray-500 hover:text-black dark:hover:text-white">
                  <Search size={24} className="mb-2" />
                  <span className="text-xs uppercase tracking-wider">Search</span>
                </button>
                <Link to="/login" className="flex flex-col items-center text-gray-500 hover:text-black dark:hover:text-white">
                  <User size={24} className="mb-2" />
                  <span className="text-xs uppercase tracking-wider">Account</span>
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
