'use client'

import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className="relative py-16">
      <div className="relative z-10 flex flex-col items-center gap-12 lg:flex-row lg:justify-between">
        {/* Left side with image */}
        <div className="relative">
          <div className="relative h-[300px] w-[300px] lg:h-[400px] lg:w-[400px]">
            <Image
              src="/hero-ali.png"
              alt="Ali Abdaal smiling"
              fill
              className="object-contain object-center"
              priority
              sizes="(max-width: 768px) 300px, 400px"
            />
          </div>
        </div>

        {/* Right side content */}
        <div className="max-w-xl text-center lg:text-left">
          <h1 className="mb-6 font-serif text-5xl font-bold tracking-tight text-gray-900 lg:text-6xl">
            Hey Friends!
            <span className="relative ml-1 inline-block">
              <span className="absolute -bottom-2 left-0 h-[10px] w-full bg-[#B4E4FF]" />
            </span>
          </h1>
          <p className="text-xl leading-relaxed text-gray-700">
            I'm Ali. I'm a Doctor turned Entrepreneur,{' '}
            <Link href="#" className="font-semibold underline decoration-2">
              YouTuber
            </Link>
            , and the author of the New York Times bestseller,{' '}
            <Link href="#" className="font-semibold underline decoration-2">
              Feel-Good Productivity
            </Link>
            .
          </p>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -right-4 bottom-0 h-32 w-32 transform text-[#FFB4B4]">
        <svg viewBox="0 0 100 100" className="h-full w-full">
          <path
            d="M100 50C100 77.6142 77.6142 100 50 100C22.3858 100 0 77.6142 0 50C0 22.3858 22.3858 0 50 0C77.6142 0 100 22.3858 100 50ZM20 50C20 66.5685 33.4315 80 50 80C66.5685 80 80 66.5685 80 50C80 33.4315 66.5685 20 50 20C33.4315 20 20 33.4315 20 50Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </div>
  )
}

export default Hero 