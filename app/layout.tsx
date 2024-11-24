import './globals.css'
import { Space_Grotesk } from 'next/font/google'
import { ClerkProvider } from "@clerk/nextjs";

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] })

export const metadata = {
  title: 'Image Craft',
  description: 'Transform your images into art',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
      <body className={spaceGrotesk.className}>{children}</body>
    </html>
    </ClerkProvider>
    
  )
}

