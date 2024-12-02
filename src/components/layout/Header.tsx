'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/shared/Button'
import { ChevronDown } from 'lucide-react'

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-transparent pt-6">
      <div className="mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="relative h-[28px] w-[150px]">
            <Image
              src="/logo-300x56.webp"
              alt="Ali Abdaal Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center space-x-8 lg:flex">
          <Link 
            href="/book" 
            className="text-base font-medium text-gray-700 hover:text-gray-900"
          >
            My Book
          </Link>
          <div className="relative group">
            <button className="flex items-center space-x-1 text-base font-medium text-gray-700 hover:text-gray-900">
              <span>Free Resources</span>
              <ChevronDown className="h-4 w-4" />
            </button>
          </div>
          <Link 
            href="/youtube-academy" 
            className="text-base font-medium text-gray-700 hover:text-gray-900"
          >
            YouTube Academy
          </Link>
          <Link 
            href="/productivity-lab" 
            className="text-base font-medium text-gray-700 hover:text-gray-900"
          >
            Productivity Lab
          </Link>
          <Button 
            variant="primary"
            className="rounded-full bg-[#FF7E57] px-6 py-2.5 text-white hover:bg-[#FF6A3D]"
          >
            Join 230k+ Subscribers
          </Button>
        </nav>
      </div>
    </header>
  )
}

export default Header 