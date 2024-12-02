import Header from '@/components/layout/Header'
import Hero from '@/components/features/Hero'
import NewsletterSubscribe from '@/components/features/NewsletterSubscribe'
import ServicesGrid from '@/components/features/ServicesGrid'
import { Footer } from '@/components/layout/Footer'
import { About } from '@/components/features/About'
import { VideoCarousel } from '@/components/features/VideoCarousel'
import { DeepDive } from '@/components/features/DeepDive'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#F9F6F3] px-4 sm:px-6 lg:px-8">
          <Header />
          <Hero />
          <div className="pb-16">
            <NewsletterSubscribe />
          </div>
        </div>
        <ServicesGrid />
        <About />
        <VideoCarousel />
        <DeepDive />
      </div>
      <Footer />
    </div>
  )
}
