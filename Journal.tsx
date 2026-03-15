import React from 'react';
import { motion } from 'motion/react';
import { PageTransition } from '../components/PageTransition';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const articles = [
  { 
    id: 1, 
    title: 'The Art of Layering: A Fall Masterclass', 
    category: 'Style Guide', 
    date: 'Oct 12, 2023', 
    excerpt: 'Discover how to combine textures and proportions to create sophisticated, weather-ready looks that transition seamlessly from day to night.',
    image: 'https://images.unsplash.com/photo-1434389678369-184bf38b222b?auto=format&fit=crop&q=80&w=1200' 
  },
  { 
    id: 2, 
    title: 'Sustainable Fabrics 101: What You Need to Know', 
    category: 'Sustainability', 
    date: 'Sep 28, 2023', 
    excerpt: 'An in-depth look at the materials shaping the future of fashion. Learn the difference between organic cotton, Tencel, and recycled polyester.',
    image: 'https://images.unsplash.com/photo-1605289982774-9a6fef564df8?auto=format&fit=crop&q=80&w=800' 
  },
  { 
    id: 3, 
    title: 'Behind the Design: The Winter Collection', 
    category: 'Behind the Scenes', 
    date: 'Sep 15, 2023', 
    excerpt: 'Step into our studio and see how our latest collection went from initial sketches to the final garments you see in store today.',
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=800' 
  },
  { 
    id: 4, 
    title: '5 Wardrobe Essentials Every Woman Needs', 
    category: 'Style Guide', 
    date: 'Aug 30, 2023', 
    excerpt: 'Build a versatile foundation with these timeless pieces that will never go out of style and can be mixed and matched endlessly.',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=800' 
  },
];

export const Journal = () => {
  return (
    <PageTransition>
      <div className="pt-32 pb-24 bg-zinc-50 min-h-screen">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-serif font-bold tracking-tight text-gray-900 mb-4"
            >
              The Journal
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-gray-500 text-lg"
            >
              Stories about design, sustainability, and the people behind the clothes.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {articles.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer flex flex-col"
              >
                <div className="relative overflow-hidden aspect-[4/3] mb-6">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-white px-3 py-1 text-xs font-bold uppercase tracking-widest text-gray-900">
                    {article.category}
                  </div>
                </div>
                <div className="flex-grow flex flex-col">
                  <span className="text-gray-400 text-sm mb-3">{article.date}</span>
                  <h2 className="text-2xl font-serif font-bold text-gray-900 mb-3 group-hover:text-gray-600 transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                    {article.excerpt}
                  </p>
                  <Link to="#" className="inline-flex items-center text-black text-sm font-bold uppercase tracking-widest relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 group-hover:after:origin-bottom-left group-hover:after:scale-x-100 after:transition-transform after:duration-300 after:bg-black w-max">
                    Read Article <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
          
          <div className="mt-20 text-center">
            <button className="relative overflow-hidden inline-block border border-black px-8 py-3 text-sm font-bold uppercase tracking-widest transition-colors duration-300 group z-10">
              <span className="absolute inset-0 bg-black -z-10 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              <span className="group-hover:text-white transition-colors duration-300">
                Load More
              </span>
            </button>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};
