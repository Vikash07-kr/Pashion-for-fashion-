import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../data/products';
import { motion } from 'motion/react';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent routing to product details
    // Default to first size and color for quick add
    addToCart(product, 1, product.sizes[0], product.colors[0]);
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="group flex flex-col cursor-pointer"
    >
      <Link to={`/product/${product.id}`} className="block relative overflow-hidden bg-gray-100 aspect-[3/4] mb-4">
        {/* Default Image */}
        <img
          src={product.image}
          alt={product.name}
          className={`absolute inset-0 object-cover w-full h-full transition-opacity duration-700 ${product.hoverImage ? 'group-hover:opacity-0' : 'group-hover:scale-105'}`}
          loading="lazy"
        />
        {/* Hover Image */}
        {product.hoverImage && (
          <img
            src={product.hoverImage}
            alt={`${product.name} alternate view`}
            className="absolute inset-0 object-cover w-full h-full transition-all duration-700 opacity-0 group-hover:opacity-100 scale-105 group-hover:scale-100"
            loading="lazy"
          />
        )}
        
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
          <button 
            onClick={handleQuickAdd}
            className="relative overflow-hidden w-full bg-white/90 backdrop-blur-sm text-black py-3 text-xs font-bold uppercase tracking-widest transition-colors duration-300 shadow-lg group/btn z-10"
          >
            <span className="absolute inset-0 bg-black -z-10 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500 ease-out" />
            <span className="group-hover/btn:text-white transition-colors duration-300">
              Quick Add
            </span>
          </button>
        </div>
      </Link>
      <div className="flex flex-col space-y-1 p-4">
        <div className="flex justify-between items-start">
          <Link to={`/product/${product.id}`} className="text-sm font-medium text-gray-900 dark:text-gray-100 hover:underline decoration-1 underline-offset-4">
            {product.name}
          </Link>
          <span className="text-sm font-medium text-gray-900 dark:text-gray-100">${product.price}</span>
        </div>
        <p className="text-xs text-gray-500 dark:text-gray-400">{product.category}</p>
      </div>
    </motion.div>
  );
};
