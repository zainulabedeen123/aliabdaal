import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/shared/Button';

export const About = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-16 md:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Text Content */}
        <div className="space-y-6">
          <div>
            <h1 className="text-[2.75rem] leading-[1.2] font-serif tracking-tight text-black">
              <span className="font-normal">Hi, I'm</span>{' '}
              <span className="relative inline-block font-bold">
                Ali Abdaal
                <span className="absolute -bottom-1 left-0 w-full h-2 bg-[#B4E4FF]"></span>
              </span>
            </h1>
          </div>
          
          <div className="space-y-6 text-[1.125rem] leading-relaxed text-gray-800">
            <p>
              I'm an ex-doctor turned YouTuber, Podcaster, entrepreneur and author. I've been creating YouTube videos for over 7 years and have a following of over 4 million over on my main channel.
            </p>
            <p>
              My YouTube journey started over 7 years ago when I was studying medicine at Cambridge University, I was creating videos to help people pass the entrance exams (This is when I started my first business too). Since then, the channel has grown to over 4 million subscribers.
            </p>
          </div>

          <Link 
            href="/story" 
            className="inline-flex items-center text-gray-900 font-medium hover:text-gray-600 transition-colors"
          >
            Read my full story
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

        {/* Right Column - Image Collage with Connecting Lines */}
        <div className="relative">
          <div className="relative w-full aspect-[831/1024]">
            {/* Connecting Lines SVG */}
            <svg className="absolute inset-0 w-full h-full z-10" viewBox="0 0 831 1024" fill="none">
              <path
                d="M200 300 C300 300, 500 400, 600 200"
                stroke="#FF9B82"
                strokeWidth="2"
                fill="none"
              />
              <path
                d="M200 500 C300 500, 400 600, 500 400"
                stroke="#FF9B82"
                strokeWidth="2"
                fill="none"
              />
            </svg>
            
            {/* Main Image */}
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <Image
                  src="/ali_about-831x1024.png"
                  alt="Ali Abdaal collage"
                  width={831}
                  height={1024}
                  className="rounded-2xl shadow-lg"
                  priority
                />
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#B4E4FF] rounded-full opacity-50" />
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-[#FFB4B4] rounded-full opacity-50" />
            <div className="absolute top-1/4 -right-2 w-4 h-4 bg-[#B4E4FF] rounded-full opacity-30" />
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-12 flex flex-wrap gap-4 justify-center lg:justify-start">
        <Button 
          variant="primary"
          className="bg-[#FF7E57] hover:bg-[#FF6A3D] text-white px-6 py-2.5 rounded-full"
        >
          Watch My Videos
        </Button>
        <Button 
          variant="secondary"
          className="bg-[#F3F4F6] hover:bg-gray-200 text-gray-900 px-6 py-2.5 rounded-full"
        >
          Read My Articles
        </Button>
        <Button 
          variant="secondary"
          className="bg-[#F3F4F6] hover:bg-gray-200 text-gray-900 px-6 py-2.5 rounded-full"
        >
          Read My Book
        </Button>
      </div>
    </section>
  );
}; 