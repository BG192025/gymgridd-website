'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function PrivacyPage() {
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
          <h1 className="text-4xl font-bold text-[#FFD166] mb-4">Privacy Policy</h1>
          <p className="text-[#ccc] mb-8">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

          <div className="prose prose-lg max-w-none space-y-8 text-[#ccc]">
            <section>
              <h2 className="text-2xl font-semibold text-[#FFD166] mb-4">1. Information We Collect</h2>
              <p>We collect information that you provide directly to us, including:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li><strong>Account Information:</strong> Name, email address, phone number, profile information</li>
                <li><strong>Payment Information:</strong> Credit card details, billing address (processed securely through Stripe)</li>
                <li><strong>Booking Information:</strong> Gym selections, dates, preferences</li>
                <li><strong>Location Data:</strong> GPS location when searching for nearby gyms</li>
                <li><strong>Usage Data:</strong> How you interact with our app and website</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#FFD166] mb-4">2. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Process and manage your bookings and payments</li>
                <li>Communicate with you about your account and bookings</li>
                <li>Improve our services and user experience</li>
                <li>Send you marketing communications (with your consent)</li>
                <li>Comply with legal obligations</li>
                <li>Prevent fraud and ensure platform security</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#FFD166] mb-4">3. Payment Processing</h2>
              <p>
                We use <strong>Stripe</strong> to process payments. When you make a payment, your payment 
                information is securely transmitted to Stripe. We do not store your full credit card details 
                on our servers. Stripe is PCI-DSS compliant and handles all payment data according to 
                industry security standards.
              </p>
              <p className="mt-4">
                For more information about Stripe's privacy practices, please visit: 
                <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:underline ml-1">
                  stripe.com/privacy
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#FFD166] mb-4">4. Information Sharing</h2>
              <p>We may share your information with:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li><strong>Gym Partners:</strong> Basic booking information necessary for check-in (name, booking details)</li>
                <li><strong>Service Providers:</strong> Stripe (payments), cloud hosting, analytics services</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
              </ul>
              <p className="mt-4">
                We do not sell your personal information to third parties for marketing purposes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#FFD166] mb-4">5. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal 
                information. However, no method of transmission over the internet is 100% secure, and we 
                cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#FFD166] mb-4">6. Your Rights</h2>
              <p>Depending on your location, you may have the right to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Delete your personal information</li>
                <li>Object to processing of your information</li>
                <li>Data portability</li>
                <li>Withdraw consent for marketing communications</li>
              </ul>
              <p className="mt-4">
                To exercise these rights, please contact us at privacy@gridd.app
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#FFD166] mb-4">7. Cookies and Tracking</h2>
              <p>
                We use cookies and similar tracking technologies to improve your experience, analyze usage, 
                and assist with marketing efforts. You can control cookies through your browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#FFD166] mb-4">8. Children's Privacy</h2>
              <p>
                Our Service is not intended for individuals under the age of 18. We do not knowingly 
                collect personal information from children.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#FFD166] mb-4">9. International Users</h2>
              <p>
                If you are using our Service from outside the United States, please note that your 
                information may be transferred to and processed in the United States or other countries 
                where our service providers operate.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#FFD166] mb-4">10. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any material 
                changes by posting the new policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#FFD166] mb-4">11. Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy, please contact us at:
              </p>
              <p className="mt-2">
                <strong>Email:</strong> privacy@gridd.app<br />
                <strong>Address:</strong> [Your Business Address]
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

