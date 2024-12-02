'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'

const videos = [
  {
    id: 1,
    date: 'June 25, 2024',
    title: 'How I Manage My Time Without Burning Out',
    image: '/ali-abdaal-image.png',
    link: '#'
  },
  {
    id: 2,
    date: 'June 18, 2024',
    title: "You're Destroying Your Mind - How to Control Dopamine",
    image: '/ali-abdaal-image.png',
    link: '#'
  },
  {
    id: 3,
    date: 'April 23, 2024',
    title: 'My honest advice to someone who wants financial freedom',
    image: '/ali-abdaal-image.png',
    link: '#'
  },
  {
    id: 4,
    date: 'March 1, 2024',
    title: '7 Mistakes to Avoid While Building Your First Business',
    image: '/ali-abdaal-image.png',
    link: '#'
  }
]

export const VideoCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? videos.length - 3 : prevIndex - 1
    )
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === videos.length - 3 ? 0 : prevIndex + 1
    )
  }

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-16 md:py-24">
      {/* Header with Navigation */}
      <div className="flex items-center justify-between mb-12">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-black">
          Watch My Most{' '}
          <span className="relative">
            Popular Videos
            <span className="absolute bottom-1 left-0 w-full h-2 bg-[#FFE7BA]"></span>
          </span>
        </h2>
        
        <div className="flex gap-2">
          <button
            onClick={handlePrevious}
            className="p-4 rounded-full bg-[#FFE7BA] hover:bg-[#FFD580] transition-colors"
            aria-label="Previous videos"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="p-4 rounded-full bg-[#FFE7BA] hover:bg-[#FFD580] transition-colors"
            aria-label="Next videos"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Video Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.slice(currentIndex, currentIndex + 3).map((video) => (
          <div
            key={video.id}
            className="bg-[#F9F6F3] rounded-2xl overflow-hidden group"
          >
            <div className="relative aspect-[16/9]">
              <Image
                src={video.image}
                alt={video.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <time className="text-sm text-gray-600">{video.date}</time>
              <h3 className="mt-2 text-xl font-serif font-bold leading-tight">
                {video.title}
              </h3>
              <Link
                href={video.link}
                className="mt-4 inline-flex items-center text-gray-900 font-medium hover:text-gray-600 transition-colors"
              >
                View
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
} 