import React from 'react';
import { motion } from 'motion/react';
import { PageTransition } from '../components/PageTransition';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const looks = [
  { id: 1, title: 'Urban Minimalist', category: 'Spring 2024', image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=1200', colSpan: 'md:col-span-2', rowSpan: 'md:row-span-2' },
  { id: 2, title: 'Summer Breeze', category: 'Resort 2024', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800', colSpan: 'md:col-span-1', rowSpan: 'md:row-span-1' },
  { id: 3, title: 'Evening Elegance', category: 'Fall 2023', image: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&q=80&w=800', colSpan: 'md:col-span-1', rowSpan: 'md:row-span-1' },
  { id: 4, title: 'Street Smart', category: 'Winter 2023', image: 'https://images.unsplash.com/photo-1529139574466-a303027c028b?auto=format&fit=crop&q=80&w=1200', colSpan: 'md:col-span-2', rowSpan: 'md:row-span-1' },
  { id: 5, title: 'Office Chic', category: 'Essentials', image: 'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&q=80&w=800', colSpan: 'md:col-span-1', rowSpan: 'md:row-span-2' },
  { id: 6, title: 'Weekend Getaway', category: 'Resort 2024', image: 'https://images.unsplash.com/photo-1509631179647-0c500ba14174?auto=format&fit=crop&q=80&w=800', colSpan: 'md:col-span-1', rowSpan: 'md:row-span-1' },
];

export const Lookbook = () => {
  return (
    <PageTransition>
      <div className="pt-24 pb-16 bg-white min-h-screen">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-serif font-bold tracking-tight text-gray-900 mb-4"
            >
              Lookbook
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-gray-500 text-lg"
            >
              Explore our latest collections and find inspiration for your next outfit. Curated styles for every occasion.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:auto-rows-[300px]">
            {looks.map((look, index) => (
              <motion.div
                key={look.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative overflow-hidden group cursor-pointer ${look.colSpan} ${look.rowSpan} min-h-[300px]`}
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500 z-10" />
                <img 
                  src={look.image} 
                  alt={look.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
                  <span className="text-white/80 text-xs font-bold uppercase tracking-widest mb-2">{look.category}</span>
                  <h3 className="text-white text-2xl font-serif font-bold mb-4">{look.title}</h3>
                  <Link to="/shop" className="inline-flex items-center text-white text-sm font-medium uppercase tracking-wider relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:duration-300 after:bg-white w-max">
                    Shop the Look <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};
