import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { products } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { Filter, ChevronDown } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';

export const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [sortBy, setSortBy] = useState<string>('featured');

  const categories = ['All', ...Array.from(new Set(products.map(p => p.category)))];

  const filteredProducts = useMemo(() => {
    let result = products;
    if (selectedCategory !== 'All') {
      result = result.filter(p => p.category === selectedCategory);
    }

    switch (sortBy) {
      case 'price-low':
        return [...result].sort((a, b) => a.price - b.price);
      case 'price-high':
        return [...result].sort((a, b) => b.price - a.price);
      case 'newest':
        return [...result].reverse(); // Assuming original array is chronological
      default:
        return result;
    }
  }, [selectedCategory, sortBy]);

  return (
    <PageTransition>
      <div className="min-h-screen bg-white dark:bg-zinc-950 transition-colors duration-300 pt-24 pb-20">
        <div className="container mx-auto px-4 md:px-8">
          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-tight text-gray-900 dark:text-white mb-4">Shop All</h1>
            <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">Discover our complete collection of thoughtfully designed pieces for the modern wardrobe.</p>
          </div>

          {/* Filters and Sorting */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-10 pb-6 border-b border-gray-200 dark:border-zinc-800 gap-4">
            <div className="flex items-center space-x-4 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`text-sm font-medium whitespace-nowrap px-4 py-2 rounded-full transition-colors ${
                    selectedCategory === category
                      ? 'bg-black text-white dark:bg-white dark:text-black'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-zinc-900 dark:text-gray-400 dark:hover:bg-zinc-800'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-2 w-full md:w-auto justify-end">
              <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                <Filter size={16} className="mr-2" /> Sort by:
              </span>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-transparent border-none text-sm font-medium text-gray-900 dark:text-white pr-8 py-2 focus:ring-0 cursor-pointer outline-none"
                >
                  <option value="featured" className="dark:bg-zinc-900">Featured</option>
                  <option value="newest" className="dark:bg-zinc-900">Newest Arrivals</option>
                  <option value="price-low" className="dark:bg-zinc-900">Price: Low to High</option>
                  <option value="price-high" className="dark:bg-zinc-900">Price: High to Low</option>
                </select>
                <ChevronDown size={16} className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500 dark:text-gray-400" />
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 dark:text-gray-400 text-lg">No products found matching your criteria.</p>
              <button
                onClick={() => { setSelectedCategory('All'); setSortBy('featured'); }}
                className="mt-6 text-sm font-bold uppercase tracking-widest relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:duration-300 after:bg-black dark:after:bg-white pb-1 dark:text-white"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </PageTransition>
  );
};
