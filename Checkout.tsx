import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useCart } from '../context/CartContext';
import { PageTransition } from '../components/PageTransition';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronRight, Lock } from 'lucide-react';

export const Checkout = () => {
  const { items, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    // Simulate API call
    setTimeout(() => {
      clearCart();
      setIsProcessing(false);
      alert('Order placed successfully! Thank you for shopping with PASHION.');
      navigate('/');
    }, 2000);
  };

  if (items.length === 0) {
    return (
      <PageTransition>
        <div className="min-h-screen pt-32 pb-20 flex flex-col items-center justify-center bg-gray-50">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Your Cart is Empty</h2>
          <p className="text-gray-500 mb-8">Looks like you haven't added anything to your cart yet.</p>
          <Link
            to="/shop"
            className="px-8 py-3 bg-black text-white text-sm font-bold uppercase tracking-widest hover:bg-gray-900 transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <div className="min-h-screen bg-gray-50 pt-24 pb-20">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Left Column - Form */}
            <div className="lg:w-2/3">
              <div className="bg-white p-8 shadow-sm">
                <h1 className="text-2xl font-serif font-bold text-gray-900 mb-8">Checkout</h1>
                
                <form onSubmit={handleCheckout} className="space-y-8">
                  {/* Contact Info */}
                  <section>
                    <h2 className="text-lg font-medium text-gray-900 mb-4">Contact Information</h2>
                    <div className="space-y-4">
                      <input
                        type="email"
                        placeholder="Email"
                        required
                        className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors"
                      />
                      <div className="flex items-center">
                        <input type="checkbox" id="newsletter" className="mr-2 accent-black" />
                        <label htmlFor="newsletter" className="text-sm text-gray-600">Email me with news and offers</label>
                      </div>
                    </div>
                  </section>

                  {/* Shipping Address */}
                  <section>
                    <h2 className="text-lg font-medium text-gray-900 mb-4">Shipping Address</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="First name"
                        required
                        className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors"
                      />
                      <input
                        type="text"
                        placeholder="Last name"
                        required
                        className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors"
                      />
                      <input
                        type="text"
                        placeholder="Address"
                        required
                        className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors md:col-span-2"
                      />
                      <input
                        type="text"
                        placeholder="Apartment, suite, etc. (optional)"
                        className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors md:col-span-2"
                      />
                      <input
                        type="text"
                        placeholder="City"
                        required
                        className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors"
                      />
                      <div className="grid grid-cols-2 gap-4">
                        <input
                          type="text"
                          placeholder="State"
                          required
                          className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors"
                        />
                        <input
                          type="text"
                          placeholder="ZIP code"
                          required
                          className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors"
                        />
                      </div>
                    </div>
                  </section>

                  {/* Payment */}
                  <section>
                    <h2 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
                      Payment <Lock size={16} className="ml-2 text-gray-400" />
                    </h2>
                    <p className="text-sm text-gray-500 mb-4">All transactions are secure and encrypted.</p>
                    <div className="bg-gray-50 p-4 border border-gray-200 space-y-4">
                      <input
                        type="text"
                        placeholder="Card number"
                        required
                        className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors bg-white"
                      />
                      <div className="grid grid-cols-2 gap-4">
                        <input
                          type="text"
                          placeholder="Expiration date (MM/YY)"
                          required
                          className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors bg-white"
                        />
                        <input
                          type="text"
                          placeholder="Security code"
                          required
                          className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors bg-white"
                        />
                      </div>
                      <input
                        type="text"
                        placeholder="Name on card"
                        required
                        className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors bg-white"
                      />
                    </div>
                  </section>

                  <button
                    type="submit"
                    disabled={isProcessing}
                    className="relative overflow-hidden w-full bg-black text-white py-4 text-sm font-bold uppercase tracking-widest transition-colors duration-300 group z-10 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    <span className="absolute inset-0 bg-gray-900 -z-10 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                    <span className="flex items-center justify-center group-hover:text-white transition-colors duration-300">
                      {isProcessing ? 'Processing...' : `Pay $${cartTotal.toFixed(2)}`}
                    </span>
                  </button>
                </form>
              </div>
            </div>

            {/* Right Column - Order Summary */}
            <div className="lg:w-1/3">
              <div className="bg-white p-8 shadow-sm sticky top-24">
                <h2 className="text-lg font-medium text-gray-900 mb-6">Order Summary</h2>
                
                <div className="space-y-4 mb-6 max-h-[40vh] overflow-y-auto pr-2">
                  {items.map((item) => (
                    <div key={`${item.id}-${item.selectedSize}-${item.selectedColor}`} className="flex gap-4">
                      <div className="relative w-16 h-20 bg-gray-100 rounded-sm overflow-hidden flex-shrink-0 border border-gray-200">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                        <span className="absolute -top-2 -right-2 bg-gray-500 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full z-10">
                          {item.quantity}
                        </span>
                      </div>
                      <div className="flex-1 flex flex-col justify-center">
                        <h3 className="text-sm font-medium text-gray-900 line-clamp-1">{item.name}</h3>
                        <p className="text-xs text-gray-500 mt-1">{item.selectedColor} / {item.selectedSize}</p>
                      </div>
                      <div className="flex items-center">
                        <span className="text-sm font-medium text-gray-900">${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-gray-200 pt-4 space-y-3">
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Subtotal</span>
                    <span>${cartTotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Shipping</span>
                    <span>Calculated at next step</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Taxes</span>
                    <span>$0.00</span>
                  </div>
                </div>

                <div className="border-t border-gray-200 mt-4 pt-4 flex justify-between items-center">
                  <span className="text-base font-medium text-gray-900">Total</span>
                  <span className="text-xl font-bold text-gray-900">
                    <span className="text-xs text-gray-500 font-normal mr-1">USD</span>
                    ${cartTotal.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </PageTransition>
  );
};
