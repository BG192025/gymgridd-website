'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowLeft, CheckCircle2, ArrowRight, Mail, Phone } from 'lucide-react';
import Link from 'next/link';

export default function ForGymsPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <nav className="bg-black border-b border-[#333] sticky top-0 z-50 backdrop-blur-sm bg-opacity-90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-3">
              <Image 
                src="/images/logo.png" 
                alt="Gym Gridd Logo" 
                width={40} 
                height={40} 
                className="object-contain"
              />
              <span className="text-2xl font-bold text-[#FFD166]">Gym Gridd</span>
            </Link>
            <Link href="/" className="flex items-center text-[#ccc] hover:text-[#FFD166] transition">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-black py-20 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1E88E5]/10 via-transparent to-[#006494]/10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h1 className="text-5xl sm:text-6xl font-bold text-[#FFD166] mb-6">
              For Gym Owners
            </h1>
            <p className="text-xl text-[#ccc] max-w-2xl mx-auto">
              Join the Gym Gridd network and reach more customers. Grow your business with our flexible booking platform.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#1E1E1E] rounded-2xl p-8 md:p-12 border border-[#006494]">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-semibold text-[#FFD166] mb-4">Revenue Sharing Model</h2>
                <p className="text-[#ccc] text-lg mb-6">
                  Gym Gridd operates on a transparent revenue-sharing model. Gyms keep 85% of all bookings, 
                  and Gym Gridd takes 15% as a platform fee. This covers payment processing, customer support, 
                  and platform maintenance.
                </p>
              </div>
              
              <div className="bg-black rounded-xl p-6 border border-[#333]">
                <h3 className="text-xl font-semibold text-[#FFD166] mb-4">Payment Processing</h3>
                <ul className="space-y-3 text-[#ccc]">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-[#1E88E5] mr-3 mt-0.5 flex-shrink-0" />
                    <span>All payments processed securely through <strong className="text-[#FFD166]">Stripe</strong></span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-[#1E88E5] mr-3 mt-0.5 flex-shrink-0" />
                    <span>Automatic payouts to your Stripe Connect account</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-[#1E88E5] mr-3 mt-0.5 flex-shrink-0" />
                    <span>PCI-compliant payment handling</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-[#1E88E5] mr-3 mt-0.5 flex-shrink-0" />
                    <span>Transparent pricing with no hidden fees</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-black rounded-xl p-6 border border-[#333]">
                <h3 className="text-xl font-semibold text-[#FFD166] mb-4">How Payments Work</h3>
                <ol className="space-y-3 text-[#ccc] list-decimal list-inside ml-2">
                  <li>Customer books and pays through the Gym Gridd app</li>
                  <li>Payment is securely processed via Stripe</li>
                  <li>Gym Gridd takes 15% platform fee</li>
                  <li>Remaining 85% is transferred to your Stripe Connect account</li>
                  <li>Payouts follow your Stripe account schedule (typically 2-7 days)</li>
                </ol>
              </div>

              <div className="bg-black rounded-xl p-6 border border-[#333]">
                <h3 className="text-xl font-semibold text-[#FFD166] mb-4">Benefits for Your Gym</h3>
                <ul className="space-y-3 text-[#ccc]">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-[#1E88E5] mr-3 mt-0.5 flex-shrink-0" />
                    <span>Reach new customers looking for flexible gym access</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-[#1E88E5] mr-3 mt-0.5 flex-shrink-0" />
                    <span>No setup fees or monthly subscriptions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-[#1E88E5] mr-3 mt-0.5 flex-shrink-0" />
                    <span>Simple QR code check-in system</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-[#1E88E5] mr-3 mt-0.5 flex-shrink-0" />
                    <span>Full control over pricing and availability</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-[#1E88E5] mr-3 mt-0.5 flex-shrink-0" />
                    <span>Professional booking platform with mobile app</span>
                  </li>
                </ul>
              </div>
              
              <div className="pt-6 border-t border-[#333]">
                <a
                  href="#contact"
                  className="inline-flex items-center px-8 py-4 bg-[#FFD166] text-black font-semibold rounded-xl hover:bg-[#FFD166]/90 transition shadow-lg shadow-[#FFD166]/30"
                >
                  Register Your Gym
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <p className="text-[#ccc] text-sm mt-4">
                  Ready to join? Contact us below to get started.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#FFD166] mb-4">Get in Touch</h2>
            <p className="text-xl text-[#ccc]">Have questions about partnering with Gym Gridd?</p>
          </div>
          
          <div className="bg-[#1E1E1E] rounded-2xl shadow-lg p-8 md:p-12 border border-[#333]">
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
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-[#333] text-[#ccc] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Image 
                src="/images/logo.png" 
                alt="Gym Gridd Logo" 
                width={28} 
                height={28} 
                className="object-contain"
              />
              <span className="text-xl font-bold text-[#FFD166]">Gym Gridd</span>
            </div>
            <p className="text-sm text-[#666]">&copy; {new Date().getFullYear()} Gym Gridd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

