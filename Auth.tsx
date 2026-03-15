import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Facebook, Github } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';

export const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <PageTransition>
      <div className="min-h-screen flex bg-white">
        {/* Left side - Image */}
        <div className="hidden lg:block lg:w-1/2 relative overflow-hidden">
          <motion.img
            key={isLogin ? 'login-img' : 'register-img'}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            src={isLogin 
              ? "https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?auto=format&fit=crop&q=80&w=1200" 
              : "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=1200"}
            alt="Fashion Editorial"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute bottom-12 left-12 text-white">
            <h2 className="text-4xl font-serif font-bold mb-4">
              {isLogin ? 'Welcome Back.' : 'Join the Club.'}
            </h2>
            <p className="text-lg text-white/90 max-w-md">
              {isLogin 
                ? 'Sign in to access your exclusive offers, saved items, and order history.' 
                : 'Create an account to enjoy personalized recommendations and faster checkout.'}
            </p>
          </div>
        </div>

        {/* Right side - Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12 md:p-24">
          <div className="w-full max-w-md">
            <div className="mb-12 text-center lg:text-left">
              <Link to="/" className="text-2xl font-serif font-bold tracking-tighter text-gray-900 mb-8 inline-block">
                PASHION
              </Link>
              <h1 className="text-3xl font-serif font-bold text-gray-900 mb-2">
                {isLogin ? 'Sign In' : 'Create Account'}
              </h1>
              <p className="text-gray-500">
                {isLogin ? "Don't have an account? " : "Already have an account? "}
                <button 
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-black font-semibold underline underline-offset-4 hover:text-gray-600 transition-colors"
                >
                  {isLogin ? 'Sign up' : 'Sign in'}
                </button>
              </p>
            </div>

            <motion.form 
              key={isLogin ? 'login-form' : 'register-form'}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
              onSubmit={(e) => { e.preventDefault(); alert(isLogin ? 'Logged in successfully!' : 'Account created successfully!'); }}
            >
              {!isLogin && (
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-700">First Name</label>
                    <input type="text" required className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black transition-colors bg-transparent" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-700">Last Name</label>
                    <input type="text" required className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black transition-colors bg-transparent" />
                  </div>
                </div>
              )}

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-700">Email Address</label>
                <input type="email" required className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black transition-colors bg-transparent" />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-700">Password</label>
                  {isLogin && (
                    <a href="#" className="text-xs text-gray-500 hover:text-black transition-colors">Forgot password?</a>
                  )}
                </div>
                <input type="password" required className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black transition-colors bg-transparent" />
              </div>

              <button type="submit" className="relative overflow-hidden w-full bg-black text-white py-4 text-sm font-bold uppercase tracking-widest transition-colors duration-300 flex justify-center items-center group mt-8 z-10">
                <span className="absolute inset-0 bg-gray-900 -z-10 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                <span className="flex items-center">
                  {isLogin ? 'Sign In' : 'Create Account'}
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>

              <div className="relative my-8">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-gray-500">Or continue with</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <button type="button" className="flex items-center justify-center py-3 border border-gray-300 hover:bg-gray-50 transition-colors">
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                  </svg>
                  Google
                </button>
                <button type="button" className="flex items-center justify-center py-3 border border-gray-300 hover:bg-gray-50 transition-colors">
                  <Facebook size={20} className="mr-2 text-[#1877F2]" />
                  Facebook
                </button>
              </div>
            </motion.form>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};
