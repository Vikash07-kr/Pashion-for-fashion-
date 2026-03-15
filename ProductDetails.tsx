import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { ChevronLeft, ChevronRight, Minus, Plus, Heart, Share2 } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';

export const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = products.find(p => p.id === id);
  const { addToCart } = useCart();

  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!product) {
    return (
      <PageTransition>
        <div className="min-h-screen flex flex-col items-center justify-center bg-white pt-24 pb-20">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Product Not Found</h2>
          <p className="text-gray-500 mb-8">The product you are looking for does not exist or has been removed.</p>
          <button
            onClick={() => navigate('/shop')}
            className="relative overflow-hidden px-8 py-3 bg-black text-white text-sm font-bold uppercase tracking-widest transition-colors duration-300 group z-10"
          >
            <span className="absolute inset-0 bg-gray-900 -z-10 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
            <span className="group-hover:text-white transition-colors duration-300">
              Return to Shop
            </span>
          </button>
        </div>
      </PageTransition>
    );
  }

  // Mock multiple images for the gallery
  const images = [
    product.image,
    product.hoverImage || product.image.replace('w=800', 'w=801'),
    product.image.replace('w=800', 'w=802'),
  ];

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size');
      return;
    }
    if (!selectedColor) {
      alert('Please select a color');
      return;
    }
    addToCart(product, quantity, selectedSize, selectedColor);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-white pt-24 pb-20">
        <div className="container mx-auto px-4 md:px-8">
          {/* Breadcrumbs */}
          <nav className="flex text-sm text-gray-500 mb-8 space-x-2">
            <button onClick={() => navigate('/')} className="hover:text-black transition-colors">Home</button>
            <span>/</span>
            <button onClick={() => navigate('/shop')} className="hover:text-black transition-colors">Shop</button>
            <span>/</span>
            <span className="text-gray-900 font-medium truncate">{product.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Image Gallery */}
            <div className="flex flex-col md:flex-row-reverse gap-4">
              <div className="relative flex-1 aspect-[3/4] bg-gray-100 overflow-hidden rounded-sm group">
                <motion.img
                  key={currentImageIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  src={images[currentImageIndex]}
                  alt={`${product.name} - View ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-900 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white shadow-md"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-900 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white shadow-md"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
              <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-y-auto md:w-24 scrollbar-hide">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`relative flex-shrink-0 w-20 md:w-full aspect-[3/4] bg-gray-100 rounded-sm overflow-hidden ${
                      currentImageIndex === idx ? 'ring-2 ring-black ring-offset-2' : 'opacity-70 hover:opacity-100'
                    } transition-all`}
                  >
                    <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="flex flex-col">
              <div className="mb-8">
                <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-2">{product.name}</h1>
                <p className="text-xl font-medium text-gray-900 mb-4">${product.price}</p>
                <p className="text-gray-600 leading-relaxed">{product.description}</p>
              </div>

              {/* Color Selection */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm font-bold uppercase tracking-widest text-gray-900">Color</span>
                  <span className="text-sm text-gray-500">{selectedColor || 'Select a color'}</span>
                </div>
                <div className="flex flex-wrap gap-3">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-6 py-3 border text-sm font-medium transition-colors ${
                        selectedColor === color
                          ? 'border-black bg-black text-white'
                          : 'border-gray-200 text-gray-700 hover:border-gray-400'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm font-bold uppercase tracking-widest text-gray-900">Size</span>
                  <button className="text-sm text-gray-500 underline underline-offset-4 hover:text-black transition-colors">
                    Size Guide
                  </button>
                </div>
                <div className="grid grid-cols-4 gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`py-3 border text-sm font-medium transition-colors ${
                        selectedSize === size
                          ? 'border-black bg-black text-white'
                          : 'border-gray-200 text-gray-700 hover:border-gray-400'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity and Add to Cart */}
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <div className="flex items-center justify-between border border-gray-300 px-4 py-3 sm:w-32">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="text-gray-500 hover:text-black transition-colors"
                  >
                    <Minus size={18} />
                  </button>
                  <span className="font-medium text-gray-900">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="text-gray-500 hover:text-black transition-colors"
                  >
                    <Plus size={18} />
                  </button>
                </div>
                <button
                  onClick={handleAddToCart}
                  className="relative overflow-hidden flex-1 bg-black text-white py-4 text-sm font-bold uppercase tracking-widest transition-colors duration-300 group z-10"
                >
                  <span className="absolute inset-0 bg-gray-900 -z-10 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                  <span className="group-hover:text-white transition-colors duration-300">
                    Add to Cart
                  </span>
                </button>
                <button className="flex items-center justify-center w-14 border border-gray-300 text-gray-500 hover:text-black hover:border-black transition-colors">
                  <Heart size={20} />
                </button>
              </div>

              {/* Accordion Details */}
              <div className="border-t border-gray-200">
                {[
                  { title: 'Details & Care', content: 'Machine wash cold with like colors. Tumble dry low. Do not bleach. Iron on low heat if needed.' },
                  { title: 'Shipping & Returns', content: 'Free standard shipping on orders over $150. Returns accepted within 30 days of delivery for a full refund.' },
                  { title: 'Sustainability', content: 'Crafted from 100% organic cotton grown without synthetic pesticides or fertilizers.' }
                ].map((section, idx) => (
                  <details key={idx} className="group border-b border-gray-200">
                    <summary className="flex justify-between items-center font-medium cursor-pointer list-none py-5 text-gray-900 hover:text-black transition-colors">
                      <span className="text-sm font-bold uppercase tracking-widest">{section.title}</span>
                      <span className="transition group-open:rotate-180">
                        <ChevronDown size={20} />
                      </span>
                    </summary>
                    <div className="text-gray-600 text-sm pb-5 leading-relaxed">
                      {section.content}
                    </div>
                  </details>
                ))}
              </div>

              {/* Share */}
              <div className="mt-8 flex items-center space-x-4 text-sm text-gray-500">
                <span className="font-medium uppercase tracking-widest">Share</span>
                <button className="hover:text-black transition-colors"><Share2 size={18} /></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

// Simple ChevronDown component since it wasn't imported at the top
const ChevronDown = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);
