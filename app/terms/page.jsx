'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-black">
      <nav className="bg-black border-b border-[#333]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-3">
              <Image 
                src="/images/logo.png" 
                alt="Gym Gridd Logo" 
                width={32} 
                height={32} 
                className="object-contain"
              />
              <span className="text-xl font-bold text-[#FFD166]">Gym Gridd</span>
            </Link>
            <Link href="/" className="flex items-center text-[#ccc] hover:text-[#FFD166] transition">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-[#1E1E1E] rounded-lg shadow-sm p-8 md:p-12 border border-[#333]">
          <h1 className="text-4xl font-bold text-[#FFD166] mb-4">Terms of Service</h1>
          <p className="text-[#ccc] mb-8">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

          <div className="prose prose-lg max-w-none space-y-8 text-[#ccc]">
            <section>
              <h2 className="text-2xl font-semibold text-[#FFD166] mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing and using Gym Gridd ("the Service"), you accept and agree to be bound by the terms 
                and provision of this agreement. If you do not agree to abide by the above, please do not 
                use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#FFD166] mb-4">2. Description of Service</h2>
              <p>
                Gym Gridd is a platform that connects fitness enthusiasts with gym facilities worldwide. 
                We provide a marketplace where users can discover, book, and pay for gym access including 
                day passes, class packs, and memberships.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#FFD166] mb-4">3. User Accounts</h2>
              <p>
                To use certain features of the Service, you must register for an account. You agree to:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Provide accurate, current, and complete information</li>
                <li>Maintain and update your information to keep it accurate</li>
                <li>Maintain the security of your password and identification</li>
                <li>Accept all responsibility for activities under your account</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#FFD166] mb-4">4. Payment Terms</h2>
              <p>
                All payments are processed securely through Stripe. By making a purchase, you agree to:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Provide valid payment information</li>
                <li>Authorize charges to your payment method</li>
                <li>Accept that all sales are final unless otherwise stated in our Refund Policy</li>
                <li>Understand that prices may vary by gym and location</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Gym Listings and Availability</h2>
              <p>
                While we strive to ensure accuracy, we do not guarantee:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>The accuracy of gym information, amenities, or pricing</li>
                <li>Availability at any specific time or date</li>
                <li>That gyms will honor bookings in all circumstances</li>
              </ul>
              <p className="mt-4">
                Gyms are independently owned and operated. Gym Gridd acts as a booking platform and is not 
                responsible for gym operations, facilities, or services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#FFD166] mb-4">6. User Conduct</h2>
              <p>You agree not to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Use the Service for any illegal purpose</li>
                <li>Violate any laws in your jurisdiction</li>
                <li>Infringe on the rights of others</li>
                <li>Transmit any harmful code or malware</li>
                <li>Attempt to gain unauthorized access to any part of the Service</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#FFD166] mb-4">7. Limitation of Liability</h2>
              <p>
                Gym Gridd shall not be liable for any indirect, incidental, special, consequential, or punitive 
                damages resulting from your use of or inability to use the Service. Our total liability 
                shall not exceed the amount paid by you for the specific service in question.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#FFD166] mb-4">8. Modification of Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. Changes will be effective immediately 
                upon posting to this page. Your continued use of the Service constitutes acceptance of 
                any modifications.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#FFD166] mb-4">9. Contact Information</h2>
              <p>
                For questions about these Terms of Service, please contact us at:
              </p>
              <p className="mt-2">
                <strong>Email:</strong> legal@gridd.app<br />
                <strong>Address:</strong> [Your Business Address]
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

