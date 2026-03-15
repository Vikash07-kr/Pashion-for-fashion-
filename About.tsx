import React from 'react';
import { motion } from 'motion/react';
import { PageTransition } from '../components/PageTransition';

export const About = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-white pt-24 pb-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-tight text-gray-900 mb-6">About Pashion</h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Founded on the principle that true style is timeless, Pashion is dedicated to creating modern, sustainable, and elegant clothing for the contemporary individual.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="aspect-[4/5] bg-gray-100 overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=1000"
                alt="Our Studio"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-serif font-bold text-gray-900">Our Philosophy</h2>
              <p className="text-gray-600 leading-relaxed">
                We believe in the power of simplicity. Our designs are stripped of unnecessary details, focusing instead on impeccable tailoring, premium materials, and a perfect fit. Every piece is crafted to be a versatile staple that seamlessly integrates into your existing wardrobe.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We reject the fast-fashion cycle. Instead, we create collections that transcend seasonal trends, ensuring that your Pashion garments remain relevant and stylish for years to come.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6 order-2 md:order-1"
            >
              <h2 className="text-3xl font-serif font-bold text-gray-900">Sustainability</h2>
              <p className="text-gray-600 leading-relaxed">
                Our commitment to the environment is woven into every fabric we choose. We prioritize organic, recycled, and ethically sourced materials, minimizing our ecological footprint without compromising on quality.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We partner with manufacturers who share our values, ensuring fair wages, safe working conditions, and transparent supply chains. When you wear Pashion, you wear a promise of a better, more sustainable future.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="aspect-[4/5] bg-gray-100 overflow-hidden order-1 md:order-2"
            >
              <img
                src="https://images.unsplash.com/photo-1605289982774-9a6fef564df8?auto=format&fit=crop&q=80&w=1000"
                alt="Sustainable Materials"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};
