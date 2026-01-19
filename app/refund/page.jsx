'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function RefundPage() {
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
          <h1 className="text-4xl font-bold text-[#FFD166] mb-4">Refund Policy</h1>
          <p className="text-[#ccc] mb-8">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

          <div className="prose prose-lg max-w-none space-y-8 text-[#ccc]">
            <section>
              <h2 className="text-2xl font-semibold text-[#FFD166] mb-4">Overview</h2>
              <p>
                At Gym Gridd, we want you to be satisfied with your gym bookings. This Refund Policy outlines 
                the circumstances under which refunds may be issued.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#FFD166] mb-4">1. Day Passes</h2>
              <p>
                Day passes are generally non-refundable once purchased. However, refunds may be considered 
                in the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Gym closure or cancellation on the booked date</li>
                <li>Booking error caused by our system</li>
                <li>Extenuating circumstances (evaluated on a case-by-case basis)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#FFD166] mb-4">2. Class Packs and Memberships</h2>
              <p>
                Refunds for class packs and memberships may be available within the first 7 days of purchase, 
                provided no classes have been used or no gym access has been utilized. After this period, 
                refunds are typically not available unless required by law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#FFD166] mb-4">3. Processing Time</h2>
              <p>
                Approved refunds will be processed within 5-10 business days. Refunds will be issued to 
                the original payment method used for the transaction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#FFD166] mb-4">4. How to Request a Refund</h2>
              <p>To request a refund, please contact us:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li><strong>Email:</strong> refunds@gridd.app</li>
                <li>Include your booking confirmation number</li>
                <li>Explain the reason for your refund request</li>
                <li>Provide any relevant documentation or photos</li>
              </ul>
              <p className="mt-4">
                We will review your request and respond within 2-3 business days.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#FFD166] mb-4">5. Disputes</h2>
              <p>
                If you are unsatisfied with our refund decision, you may contact your credit card issuer 
                or payment provider to dispute the charge. However, we encourage you to contact us first 
                so we can resolve the issue directly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#FFD166] mb-4">6. Force Majeure</h2>
              <p>
                In cases of events beyond our control (natural disasters, pandemics, government restrictions, 
                etc.), refund policies may be adjusted. We will communicate any policy changes in such 
                circumstances.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#FFD166] mb-4">7. Contact Information</h2>
              <p>
                For refund requests or questions about this policy, please contact:
              </p>
              <p className="mt-2">
                <strong>Email:</strong> refunds@gridd.app<br />
                <strong>Support Hours:</strong> Monday-Friday, 9 AM - 6 PM (your local timezone)
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

