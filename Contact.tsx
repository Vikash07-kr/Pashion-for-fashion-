import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    alert('Thank you for your message. We will get back to you shortly.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-white pt-24 pb-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-tight text-gray-900 mb-4">Contact Us</h1>
            <p className="text-gray-500 max-w-2xl mx-auto">Have a question about an order, our products, or just want to say hello? We'd love to hear from you.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-10"
            >
              <div>
                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">Get in Touch</h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Our customer service team is available Monday through Friday, 9am - 6pm EST. We strive to respond to all inquiries within 24 hours.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gray-50 flex items-center justify-center rounded-full text-gray-900 shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-widest text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">support@pashion.com</p>
                    <p className="text-gray-600">press@pashion.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gray-50 flex items-center justify-center rounded-full text-gray-900 shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-widest text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                    <p className="text-sm text-gray-500 mt-1">Mon-Fri, 9am - 6pm EST</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gray-50 flex items-center justify-center rounded-full text-gray-900 shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-widest text-gray-900 mb-1">Studio</h3>
                    <p className="text-gray-600">123 Fashion Avenue</p>
                    <p className="text-gray-600">New York, NY 10001</p>
                    <p className="text-sm text-gray-500 mt-1">By appointment only</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-50 p-8 md:p-10 rounded-sm"
            >
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-8">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-gray-700">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-white border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-gray-700">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-white border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-xs font-bold uppercase tracking-widest text-gray-700">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-white border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-gray-700">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-white border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="relative overflow-hidden w-full bg-black text-white py-4 text-sm font-bold uppercase tracking-widest transition-colors duration-300 flex items-center justify-center group z-10"
                >
                  <span className="absolute inset-0 bg-gray-900 -z-10 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                  <span className="flex items-center">
                    Send Message <Send size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};
