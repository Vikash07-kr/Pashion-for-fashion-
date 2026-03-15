import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

export const CartDrawer = () => {
  const { isCartOpen, setIsCartOpen, items, updateQuantity, removeFromCart, cartTotal } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm"
            onClick={() => setIsCartOpen(false)}
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-y-0 right-0 w-full max-w-md bg-white z-50 shadow-2xl flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <h2 className="text-lg font-serif font-bold tracking-tight uppercase">Your Cart</h2>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 -mr-2 text-gray-400 hover:text-black transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center text-gray-300 mb-4">
                    <ShoppingBag size={32} />
                  </div>
                  <p className="text-gray-500 font-medium">Your cart is currently empty.</p>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="mt-4 px-8 py-3 bg-black text-white text-sm font-bold uppercase tracking-widest hover:bg-gray-900 transition-colors"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <ul className="space-y-6">
                  {items.map((item) => (
                    <li key={`${item.id}-${item.selectedSize}-${item.selectedColor}`} className="flex gap-4">
                      <div className="w-24 h-32 bg-gray-100 rounded-md overflow-hidden flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 flex flex-col justify-between py-1">
                        <div>
                          <div className="flex justify-between items-start">
                            <h3 className="text-sm font-medium text-gray-900 line-clamp-2 pr-4">
                              {item.name}
                            </h3>
                            <button
                              onClick={() => removeFromCart(item.id, item.selectedSize, item.selectedColor)}
                              className="text-gray-400 hover:text-red-500 transition-colors"
                            >
                              <X size={16} />
                            </button>
                          </div>
                          <p className="text-xs text-gray-500 mt-1">
                            {item.selectedColor} / {item.selectedSize}
                          </p>
                          <p className="text-sm font-medium text-gray-900 mt-2">${item.price}</p>
                        </div>
                        <div className="flex items-center border border-gray-200 w-fit rounded-sm">
                          <button
                            onClick={() => updateQuantity(item.id, item.selectedSize, item.selectedColor, item.quantity - 1)}
                            className="p-1 px-2 text-gray-500 hover:text-black transition-colors"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="text-xs font-medium w-6 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.selectedSize, item.selectedColor, item.quantity + 1)}
                            className="p-1 px-2 text-gray-500 hover:text-black transition-colors"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {items.length > 0 && (
              <div className="p-6 border-t border-gray-100 bg-gray-50">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">Subtotal</span>
                  <span className="text-lg font-bold">${cartTotal.toFixed(2)}</span>
                </div>
                <p className="text-xs text-gray-400 mb-6">Shipping, taxes, and discount codes calculated at checkout.</p>
                <Link
                  to="/checkout"
                  onClick={() => setIsCartOpen(false)}
                  className="relative overflow-hidden block w-full py-4 bg-black text-white text-center text-sm font-bold uppercase tracking-widest transition-colors duration-300 group z-10"
                >
                  <span className="absolute inset-0 bg-gray-900 -z-10 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                  <span className="group-hover:text-white transition-colors duration-300">
                    Checkout
                  </span>
                </Link>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
