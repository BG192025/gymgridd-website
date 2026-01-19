import './globals.css'

export const metadata = { 
  title: 'Gym Gridd - Find & Book Gyms Anywhere | Book Gym Access Instantly', 
  description: 'Gym Gridd connects fitness enthusiasts with gyms worldwide. Book day passes, memberships, and classes instantly. Secure payments via Stripe. Join thousands of users finding their perfect gym.',
  keywords: 'gym booking, fitness app, day pass, gym membership, workout booking, Stripe payments',
}

export default function RootLayout({ children }) { 
  return (
    <html lang='en' style={{ backgroundColor: '#000000' }}>
      <body style={{ backgroundColor: '#000000', color: '#cccccc', margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  )
}
