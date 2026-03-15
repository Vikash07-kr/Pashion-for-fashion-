import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook, ArrowRight } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-zinc-950 text-white pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-serif font-bold tracking-tighter mb-6">PASHION</h3>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6 max-w-xs">
              Redefining modern elegance with sustainable practices and timeless designs for the contemporary wardrobe.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-zinc-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-zinc-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-zinc-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6">Explore</h4>
            <ul className="space-y-4">
              <li><Link to="/shop?category=new" className="relative text-zinc-400 hover:text-white text-sm transition-colors after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:duration-300 after:bg-current w-max inline-block">New Arrivals</Link></li>
              <li><Link to="/lookbook" className="relative text-zinc-400 hover:text-white text-sm transition-colors after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:duration-300 after:bg-current w-max inline-block">Lookbook</Link></li>
              <li><Link to="/journal" className="relative text-zinc-400 hover:text-white text-sm transition-colors after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:duration-300 after:bg-current w-max inline-block">Journal</Link></li>
              <li><Link to="/about" className="relative text-zinc-400 hover:text-white text-sm transition-colors after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:duration-300 after:bg-current w-max inline-block">Our Story</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6">Support</h4>
            <ul className="space-y-4">
              <li><Link to="/faq" className="relative text-zinc-400 hover:text-white text-sm transition-colors after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:duration-300 after:bg-current w-max inline-block">FAQ</Link></li>
              <li><Link to="/shipping" className="relative text-zinc-400 hover:text-white text-sm transition-colors after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:duration-300 after:bg-current w-max inline-block">Shipping & Returns</Link></li>
              <li><Link to="/size-guide" className="relative text-zinc-400 hover:text-white text-sm transition-colors after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:duration-300 after:bg-current w-max inline-block">Size Guide</Link></li>
              <li><Link to="/contact" className="relative text-zinc-400 hover:text-white text-sm transition-colors after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:duration-300 after:bg-current w-max inline-block">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6">Newsletter</h4>
            <p className="text-zinc-400 text-sm mb-4">Subscribe to receive updates, access to exclusive deals, and more.</p>
            <form className="flex border-b border-zinc-700 pb-2">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="bg-transparent border-none outline-none text-sm w-full text-white placeholder-zinc-500"
              />
              <button type="submit" className="text-white hover:text-zinc-300 transition-colors">
                <ArrowRight size={20} />
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-zinc-500 text-xs mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Pashion. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-zinc-500 hover:text-white text-xs transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-zinc-500 hover:text-white text-xs transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
