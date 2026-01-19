'use client';

import React from 'react';
import Image from 'next/image';
import { MapPin, CreditCard, ShieldCheck, Smartphone, CheckCircle2, Users, Calendar, Zap, Star, ArrowRight, Mail, Phone } from 'lucide-react';
import Link from 'next/link';

export default function GriddWebsite() {
  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Gym Gridd',
            description: 'Gym Gridd connects fitness enthusiasts with gyms worldwide. Book day passes, memberships, and classes instantly through our mobile app.',
            url: 'https://gymgridd.vercel.app', // Update with your actual domain
            logo: 'https://gymgridd.vercel.app/images/logo.png', // Update when logo is added
            sameAs: [
              // Add your social media links here when available
              // 'https://twitter.com/gymgridd',
              // 'https://facebook.com/gymgridd',
              // 'https://instagram.com/gymgridd',
            ],
            contactPoint: {
              '@type': 'ContactPoint',
              telephone: '+1-234-567-8900', // Update with actual phone
              contactType: 'Customer Service',
              email: 'hello@gymgridd.app', // Update with actual email
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebApplication',
            name: 'Gym Gridd',
            applicationCategory: 'HealthApplication',
            operatingSystem: 'iOS, Android',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'USD',
            },
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.8',
              reviewCount: '150',
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'Gym Gridd',
            url: 'https://gymgridd.vercel.app', // Update with your actual domain
            potentialAction: {
              '@type': 'SearchAction',
              target: 'https://gymgridd.vercel.app/search?q={search_term_string}',
              'query-input': 'required name=search_term_string',
            },
          }),
        }}
      />
      <div className="min-h-screen bg-black">
      {/* Navigation */}
      <nav className="bg-black border-b border-[#333] sticky top-0 z-50 backdrop-blur-sm bg-opacity-90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative w-10 h-10">
                <Image 
                  src="/images/logo.png" 
                  alt="Gym Gridd Logo" 
                  width={40} 
                  height={40} 
                  className="object-contain"
                  style={{ display: 'block' }}
                />
              </div>
              <span className="text-2xl font-bold text-[#FFD166]">Gym Gridd</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#how-it-works" className="text-[#ccc] hover:text-[#FFD166] transition">How It Works</a>
              <a href="#features" className="text-[#ccc] hover:text-[#FFD166] transition">Features</a>
              <Link href="/for-gyms" className="text-[#ccc] hover:text-[#FFD166] transition">For Gyms</Link>
              <a href="#contact" className="text-[#ccc] hover:text-[#FFD166] transition">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-black py-20 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1E88E5]/10 via-transparent to-[#006494]/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl font-bold text-[#FFD166] mb-6">
              Find & Book Gyms
              <span className="block text-[#1E88E5]">Anywhere, Anytime</span>
            </h1>
            <p className="text-xl text-[#ccc] mb-8 max-w-2xl mx-auto">
              Gym Gridd is a platform connecting fitness enthusiasts with gyms worldwide. 
              Book day passes, memberships, and classes instantly through our mobile app.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-4 bg-[#FFD166] text-black font-semibold rounded-xl hover:bg-[#FFD166]/90 transition shadow-lg shadow-[#FFD166]/30"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center px-8 py-4 bg-[#1E88E5] text-white font-semibold rounded-xl hover:bg-[#1E88E5]/90 transition border border-[#1E88E5]"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#FFD166] mb-4">How It Works</h2>
            <p className="text-xl text-[#ccc]">Simple, secure, and seamless gym access</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-[#1E1E1E] rounded-2xl border border-[#333]">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#006494] rounded-full mb-6">
                <MapPin className="h-8 w-8 text-[#1E88E5]" />
              </div>
              <h3 className="text-xl font-semibold text-[#FFD166] mb-4">1. Find a Gym</h3>
              <p className="text-[#ccc]">
                Browse gyms near you with detailed information, ratings, amenities, and pricing.
              </p>
            </div>
            
            <div className="text-center p-8 bg-[#1E1E1E] rounded-2xl border border-[#333]">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#006494] rounded-full mb-6">
                <CreditCard className="h-8 w-8 text-[#1E88E5]" />
              </div>
              <h3 className="text-xl font-semibold text-[#FFD166] mb-4">2. Book & Pay</h3>
              <p className="text-[#ccc]">
                Select your pass type, choose a date, and securely pay through our integrated payment system.
              </p>
            </div>
            
            <div className="text-center p-8 bg-[#1E1E1E] rounded-2xl border border-[#333]">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#006494] rounded-full mb-6">
                <Smartphone className="h-8 w-8 text-[#1E88E5]" />
              </div>
              <h3 className="text-xl font-semibold text-[#FFD166] mb-4">3. Access with QR Code</h3>
              <p className="text-[#ccc]">
                Receive a QR code instantly. Show it at the gym for quick check-in and access.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#FFD166] mb-4">Why Choose Gym Gridd</h2>
            <p className="text-xl text-[#ccc]">Everything you need for flexible fitness</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#1E1E1E] p-6 rounded-xl border border-[#333] shadow-lg">
              <CheckCircle2 className="h-8 w-8 text-[#FFD166] mb-4" />
              <h3 className="text-lg font-semibold text-[#FFD166] mb-2">Verified Gyms</h3>
              <p className="text-[#ccc]">All gym partners are verified and approved for quality assurance.</p>
            </div>
            
            <div className="bg-[#1E1E1E] p-6 rounded-xl border border-[#333] shadow-lg">
              <ShieldCheck className="h-8 w-8 text-[#1E88E5] mb-4" />
              <h3 className="text-lg font-semibold text-[#FFD166] mb-2">Secure Payments</h3>
              <p className="text-[#ccc]">All transactions are processed securely through Stripe, with industry-leading security.</p>
            </div>
            
            <div className="bg-[#1E1E1E] p-6 rounded-xl border border-[#333] shadow-lg">
              <Calendar className="h-8 w-8 text-[#1E88E5] mb-4" />
              <h3 className="text-lg font-semibold text-[#FFD166] mb-2">Flexible Booking</h3>
              <p className="text-[#ccc]">Book day passes, class packs, or memberships on your schedule.</p>
            </div>
            
            <div className="bg-[#1E1E1E] p-6 rounded-xl border border-[#333] shadow-lg">
              <Star className="h-8 w-8 text-[#FFD166] mb-4" />
              <h3 className="text-lg font-semibold text-[#FFD166] mb-2">Real Reviews</h3>
              <p className="text-[#ccc]">Read authentic reviews from other users to find the perfect gym.</p>
            </div>
            
            <div className="bg-[#1E1E1E] p-6 rounded-xl border border-[#333] shadow-lg">
              <Zap className="h-8 w-8 text-[#1E88E5] mb-4" />
              <h3 className="text-lg font-semibold text-[#FFD166] mb-2">Instant Access</h3>
              <p className="text-[#ccc]">No waiting, no paperwork. Get your QR code and start working out immediately.</p>
            </div>
            
            <div className="bg-[#1E1E1E] p-6 rounded-xl border border-[#333] shadow-lg">
              <Users className="h-8 w-8 text-[#1E88E5] mb-4" />
              <h3 className="text-lg font-semibold text-[#FFD166] mb-2">Tourist Friendly</h3>
              <p className="text-[#ccc]">Perfect for travelers and business professionals needing temporary gym access.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#FFD166] mb-4">Get in Touch</h2>
            <p className="text-xl text-[#ccc]">Have questions? We'd love to hear from you</p>
          </div>
          
          <div className="max-w-2xl mx-auto bg-[#1E1E1E] rounded-2xl shadow-lg p-8 md:p-12 border border-[#333]">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-[#1E88E5] mt-1" />
                <div>
                  <h3 className="font-semibold text-[#FFD166] mb-1">Email</h3>
                  <a href="mailto:hello@gymgridd.app" className="text-[#ccc] hover:text-[#1E88E5] transition">
                    hello@gymgridd.app
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-[#1E88E5] mt-1" />
                <div>
                  <h3 className="font-semibold text-[#FFD166] mb-1">Phone</h3>
                  <a href="tel:+1234567890" className="text-[#ccc] hover:text-[#1E88E5] transition">
                    +1 (234) 567-8900
                  </a>
                </div>
              </div>
              
              <div className="pt-6 border-t border-[#333]">
                <h3 className="font-semibold text-[#FFD166] mb-4">Business Information</h3>
                <div className="text-[#ccc] space-y-2">
                  <p><strong className="text-[#FFD166]">Business Name:</strong> Gym Gridd</p>
                  <p><strong className="text-[#FFD166]">Type:</strong> Fitness Platform / Marketplace</p>
                  <p><strong className="text-[#FFD166]">Service:</strong> Gym booking and access platform</p>
                  <p><strong className="text-[#FFD166]">Payment Processor:</strong> Stripe</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-[#333] text-[#ccc] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="relative w-7 h-7">
                  <Image 
                    src="/images/logo.png" 
                    alt="Gym Gridd Logo" 
                    width={28} 
                    height={28} 
                    className="object-contain"
                    style={{ display: 'block' }}
                  />
                </div>
                <span className="text-xl font-bold text-[#FFD166]">Gym Gridd</span>
              </div>
              <p className="text-sm text-[#ccc]">
                Connecting fitness enthusiasts with gyms worldwide through seamless booking and payment.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-[#FFD166] mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#how-it-works" className="hover:text-[#FFD166] transition">How It Works</a></li>
                <li><a href="#features" className="hover:text-[#FFD166] transition">Features</a></li>
                <li><Link href="/for-gyms" className="hover:text-[#FFD166] transition">For Gyms</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-[#FFD166] mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/terms" className="hover:text-[#FFD166] transition">Terms of Service</a></li>
                <li><a href="/privacy" className="hover:text-[#FFD166] transition">Privacy Policy</a></li>
                <li><a href="/refund" className="hover:text-[#FFD166] transition">Refund Policy</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-[#FFD166] mb-4">Support</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#contact" className="hover:text-[#FFD166] transition">Contact Us</a></li>
                <li><a href="mailto:support@gymgridd.app" className="hover:text-[#FFD166] transition">Support Email</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-[#333] pt-8 text-center text-sm">
            <p className="text-[#ccc]">&copy; {new Date().getFullYear()} Gym Gridd. All rights reserved.</p>
            <p className="mt-2 text-[#666]">Payment processing powered by Stripe</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
