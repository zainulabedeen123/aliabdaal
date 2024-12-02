'use client'

import Image from 'next/image'
import Link from 'next/link'

const NewsletterSubscribe = () => {
  return (
    <div className="mx-auto max-w-6xl">
      <div className="rounded-3xl bg-white p-8 shadow-sm sm:p-12">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left side */}
          <div>
            <div className="mb-8">
              <div className="relative">
                <h2 className="font-serif text-[2.75rem] font-bold leading-tight tracking-tight text-gray-900">
                  Subscribe to
                  <div className="relative">
                    LifeNotes
                    <div className="absolute -right-14 -top-2">
                      <Image
                        src="/emailicon.png"
                        alt="Paper plane"
                        width={70}
                        height={70}
                        className="-rotate-12"
                      />
                    </div>
                  </div>
                </h2>
              </div>
            </div>
            <p className="mb-8 text-lg text-gray-600">
              I share actionable productivity tips, practical life advice,
              and high-quality insights from across the web, directly
              to your inbox.
            </p>
            <div className="mb-8">
              <p className="text-lg">
                Join a growing community of more than{' '}
                <span className="font-bold">230,000 friendly readers</span>.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative h-8 w-24">
                <Image
                  src="/Avatars.png"
                  alt="Community members"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="h-4 w-4 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-gray-600">200+ reviews</span>
              </div>
            </div>
          </div>

          {/* Right side */}
          <div className="flex flex-col justify-center">
            <div className="mb-4">
              <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <div className="relative flex-1">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full rounded-full border border-gray-200 bg-[#F9F6F3] pl-12 pr-6 py-3 text-base focus:border-blue-500 focus:outline-none"
                  />
                  <div className="absolute left-4 top-1/2 -translate-y-1/2">
                    <Image
                      src="/emailicon.png"
                      alt="Email"
                      width={20}
                      height={20}
                      className="opacity-50"
                    />
                  </div>
                </div>
                <button className="rounded-full bg-[#87CEEB] px-8 py-3 font-medium text-white transition-colors hover:bg-[#7BC0DD]">
                  Subscribe
                </button>
              </div>
            </div>
            <p className="text-sm text-gray-500">
              By submitting this form, you'll be signed up to my free newsletter. I may also send you other emails about my courses. You can opt-out at any time. For more information, see our{' '}
              <Link href="/privacy" className="text-gray-700 underline hover:text-gray-900">
                privacy policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>

      {/* Featured logos */}
      <div className="mt-16 space-y-4">
        <p className="text-center text-sm font-medium text-gray-500">As featured in:</p>
        <div className="flex flex-wrap items-center justify-center gap-8 grayscale">
          <Image
            src="/business-insider.svg"
            alt="Business Insider"
            width={120}
            height={30}
            className="h-8 w-auto"
          />
          <Image
            src="/nyt.svg"
            alt="The New York Times"
            width={170}
            height={30}
            className="h-8 w-auto"
          />
          <Image
            src="/oxford-union.svg"
            alt="The Oxford Union"
            width={120}
            height={30}
            className="h-8 w-auto"
          />
          <Image
            src="/bbc.svg"
            alt="BBC Radio 4"
            width={100}
            height={30}
            className="h-8 w-auto"
          />
          <Image
            src="/mens-health.svg"
            alt="Men's Health"
            width={120}
            height={30}
            className="h-8 w-auto"
          />
        </div>
      </div>
    </div>
  )
}

export default NewsletterSubscribe 