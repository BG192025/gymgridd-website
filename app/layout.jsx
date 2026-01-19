import './globals.css'
import { Metadata } from 'next'

export const metadata: Metadata = { 
  title: 'Gym Gridd - Find & Book Gyms Anywhere | Book Gym Access Instantly', 
  description: 'Gym Gridd connects fitness enthusiasts with gyms worldwide. Book day passes, memberships, and classes instantly. Secure payments via Stripe. Join thousands of users finding their perfect gym.',
  keywords: ['gym booking', 'fitness app', 'day pass', 'gym membership', 'workout booking', 'Stripe payments', 'gym finder', 'fitness platform', 'book gym', 'gym access'],
  authors: [{ name: 'Gym Gridd' }],
  creator: 'Gym Gridd',
  publisher: 'Gym Gridd',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://gymgridd.vercel.app', // Update with your actual domain
    siteName: 'Gym Gridd',
    title: 'Gym Gridd - Find & Book Gyms Anywhere | Book Gym Access Instantly',
    description: 'Connect with gyms worldwide. Book day passes, memberships, and classes instantly through our mobile app.',
    images: [
      {
        url: '/images/logo.png', // Update when logo is added
        width: 1200,
        height: 630,
        alt: 'Gym Gridd Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gym Gridd - Find & Book Gyms Anywhere',
    description: 'Connect with gyms worldwide. Book day passes, memberships, and classes instantly.',
    images: ['/images/logo.png'], // Update when logo is added
  },
  alternates: {
    canonical: 'https://gymgridd.vercel.app', // Update with your actual domain
  },
  verification: {
    // Add Google Search Console verification when you have it
    // google: 'your-verification-code',
  },
}

export default function RootLayout({ children }) { 
  return (
    <html lang='en' style={{ backgroundColor: '#000000' }}>
      <head>
        <link rel="canonical" href="https://gymgridd.vercel.app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body style={{ backgroundColor: '#000000', color: '#cccccc', margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  )
}
