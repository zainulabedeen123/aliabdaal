import Image from 'next/image'
import Link from 'next/link'

export const DeepDive = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-16 md:py-24">
      <div className="bg-[#F9F6F3] rounded-3xl p-8 md:p-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Podcast Artwork */}
          <div className="relative">
            <div className="relative aspect-square max-w-[400px] mx-auto">
              <Image
                src="/deep_dive-825x1024.png"
                alt="Deep Dive Podcast with Ali Abdaal"
                fill
                className="object-contain"
                priority
              />
            </div>
            {/* Rating Stars */}
            <div className="mt-4 text-center">
              <div className="flex justify-center gap-1 text-[#FFB800]">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="mt-2 text-sm text-gray-600">
                200+ 5-star Reviews<br />
                on Apple Podcast
              </p>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-black">
                Deep Dive
              </h2>
              <p className="mt-2 text-xl text-gray-600">
                with <span className="font-medium text-black">Ali Abdaal</span>
              </p>
            </div>

            <p className="text-gray-800 text-lg leading-relaxed">
              The podcast that delves into the minds of entrepreneurs, creators and other inspiring people to uncover the philosophies, strategies and tools that help us live happier, healthier and more productive lives.
            </p>

            {/* Platform Links */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="#"
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-white rounded-full hover:bg-gray-50 transition-colors"
              >
                <Image
                  src="/apple-podcast.svg"
                  alt="Apple Podcasts"
                  width={24}
                  height={24}
                />
                Apple Podcasts
              </Link>
              <Link
                href="#"
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-white rounded-full hover:bg-gray-50 transition-colors"
              >
                <Image
                  src="/spotify.svg"
                  alt="Spotify"
                  width={24}
                  height={24}
                />
                Spotify
              </Link>
              <Link
                href="#"
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-white rounded-full hover:bg-gray-50 transition-colors"
              >
                <Image
                  src="/youtube.svg"
                  alt="YouTube"
                  width={24}
                  height={24}
                />
                YouTube
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 