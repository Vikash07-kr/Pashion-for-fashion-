import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { ArrowRight } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';

export const Home = () => {
  const featuredProducts = products.slice(0, 4);

  return (
    <PageTransition>
      <div className="min-h-screen bg-white dark:bg-zinc-950 transition-colors duration-300">
        {/* Hero Section */}
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
          <div className="absolute inset-0 z-0">
            <motion.img
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=2070"
              alt="Fashion Hero"
              className="w-full h-full object-cover object-center opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
          </div>
          
          <div className="relative z-10 text-center px-4 flex flex-col items-center">
            <motion.h1
              initial={{ opacity: 0, y: 30, rotateX: 20 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 1, delay: 0.2, type: "spring", stiffness: 100 }}
              className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white tracking-tighter mb-6 drop-shadow-2xl"
              style={{ perspective: 1000 }}
            >
              Pashion for fashion
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-lg md:text-xl text-white/90 font-light tracking-wide mb-10 max-w-2xl drop-shadow-md"
            >
              Redefining modern elegance. Discover our new collection of timeless pieces designed for the contemporary wardrobe.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                to="/shop"
                className="relative overflow-hidden inline-flex items-center justify-center px-8 py-4 bg-white text-black text-sm font-bold uppercase tracking-widest transition-all duration-300 group z-10 shadow-xl hover:shadow-2xl rounded-sm"
              >
                <span className="absolute inset-0 bg-black -z-10 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                <span className="group-hover:text-white transition-colors duration-300 flex items-center">
                  Shop Collection
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Marquee */}
        <div className="bg-black text-white py-4 overflow-hidden flex whitespace-nowrap">
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
            className="flex text-sm font-bold uppercase tracking-widest"
          >
            {[...Array(10)].map((_, i) => (
              <span key={i} className="mx-8">
                NEW ARRIVALS • SUSTAINABLE MATERIALS • FREE SHIPPING OVER $200 • 
              </span>
            ))}
          </motion.div>
        </div>

        {/* Featured Categories */}
        <section className="py-24 bg-zinc-50 dark:bg-zinc-900 transition-colors duration-300">
          <div className="container mx-auto px-4 md:px-8">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold tracking-tight text-gray-900 dark:text-white mb-4">Curated Collections</h2>
                <p className="text-gray-500 dark:text-gray-400 max-w-xl">Explore our carefully selected pieces designed to elevate your everyday style.</p>
              </div>
              <Link to="/collections" className="hidden md:flex items-center text-sm font-bold uppercase tracking-widest relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:duration-300 after:bg-black dark:after:bg-white pb-1 dark:text-white">
                View All <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" style={{ perspective: 1000 }}>
              {[
                { title: 'Essentials', image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=800' },
                { title: 'Outerwear', image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&q=80&w=800' },
                { title: 'Accessories', image: 'https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&q=80&w=800' },
                { title: 'Shoes', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=800' }
              ].map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20, rotateX: 10 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  whileHover={{ scale: 1.05, rotateY: 5, rotateX: 5, zIndex: 10 }}
                  whileTap={{ scale: 0.95, rotateY: 0, rotateX: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1, type: "spring", stiffness: 200, damping: 20 }}
                  className="group relative aspect-[4/5] overflow-hidden bg-gray-200 dark:bg-zinc-800 cursor-pointer rounded-sm shadow-lg hover:shadow-2xl"
                >
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-3xl font-serif font-bold text-white tracking-wide drop-shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{category.title}</h3>
                  </div>
                  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <span className="text-white text-sm font-bold uppercase tracking-widest border-b border-white pb-1 shadow-sm">Shop Now</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* New Arrivals */}
        <section className="py-24 bg-white dark:bg-zinc-950 transition-colors duration-300">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold tracking-tight text-gray-900 dark:text-white mb-4">New Arrivals</h2>
              <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">The latest additions to our collection, featuring premium materials and contemporary silhouettes.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12" style={{ perspective: 1000 }}>
              {featuredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20, rotateX: 10 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  whileHover={{ scale: 1.02, rotateY: 2, rotateX: 2, zIndex: 10 }}
                  whileTap={{ scale: 0.98, rotateY: 0, rotateX: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1, type: "spring", stiffness: 300 }}
                  className="bg-white dark:bg-zinc-900 rounded-sm shadow-sm hover:shadow-xl transition-shadow duration-300"
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
                <Link
                  to="/shop"
                  className="relative overflow-hidden inline-block border border-black dark:border-white px-10 py-4 text-sm font-bold uppercase tracking-widest transition-colors duration-300 group z-10 dark:text-white"
                >
                  <span className="absolute inset-0 bg-black dark:bg-white -z-10 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                  <span className="group-hover:text-white dark:group-hover:text-black transition-colors duration-300">
                    View All Products
                  </span>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Brand Story */}
        <section className="py-24 bg-zinc-900 dark:bg-black text-white transition-colors duration-300 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30, rotateY: -10 }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                whileHover={{ scale: 1.02, rotateY: 5 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
                className="relative aspect-[3/4] lg:aspect-square overflow-hidden shadow-2xl rounded-sm"
                style={{ perspective: 1000 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80&w=1000"
                  alt="Brand Story"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="max-w-xl"
              >
                <h2 className="text-3xl md:text-5xl font-serif font-bold tracking-tight mb-8 drop-shadow-sm">The Pashion Philosophy</h2>
                <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                  We believe that true style is timeless. Our garments are crafted with meticulous attention to detail, using only the finest sustainable materials to ensure longevity and comfort.
                </p>
                <p className="text-zinc-400 text-lg leading-relaxed mb-10">
                  Every piece in our collection is designed to be a versatile staple in your wardrobe, seamlessly transitioning from season to season.
                </p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
                  <Link
                    to="/about"
                    className="inline-flex items-center text-sm font-bold uppercase tracking-widest relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:duration-300 after:bg-white pb-1"
                  >
                    Read Our Story <ArrowRight size={16} className="ml-2" />
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};
