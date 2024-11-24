import HeroSection from '@/components/HeroSection'
import IntroSection from '@/components/IntroSection'
import GallerySection from '@/components/GallerySection'
import GridBackground from '@/components/GridBackground'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-blue-100 relative overflow-hidden">
      <GridBackground />
      <div className="relative z-10">
        <HeroSection />
        <IntroSection />
        <GallerySection />
      <Footer />

      </div>
    </main>
  )
}

