'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Youtube, Instagram, Linkedin, Facebook, Twitter } from 'lucide-react'

type IconProps = {
  className?: string
}

const navigation = {
  more: [
    { name: 'About', href: '/about' },
    { name: 'Jobs', href: '/jobs' },
    { name: 'Contact', href: '/contact' },
  ],
  freeContent: [
    { name: 'Newsletter', href: '/newsletter' },
    { name: 'Articles & Guides', href: '/articles' },
    { name: 'Podcast', href: '/podcast' },
    { name: 'Videos', href: '/videos' },
    { name: 'Book Notes', href: '/book-notes' },
  ],
  products: [
    { name: 'My Book', href: '/book' },
    { name: 'Productivity Lab', href: '/productivity-lab' },
    { name: 'YouTuber Academy', href: '/youtuber-academy' },
  ],
}

const socialLinks = [
  { name: 'YouTube', icon: Youtube, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
  { name: 'TikTok', icon: (props: IconProps) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0011.14-4.02v-6.95a8.16 8.16 0 004.65 1.46v-3.28a4.84 4.84 0 01-1.2-.62z"/>
    </svg>
  ), href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'Facebook', icon: Facebook, href: '#' },
]

export const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Logo and Social Links */}
          <div className="lg:col-span-3">
            <div className="space-y-8">
              <Image
                src="/logo-300x56.webp"
                alt="Ali Abdaal Logo"
                width={150}
                height={28}
                className="h-7 w-auto"
              />
              <p className="text-sm text-gray-500">
                © Ali Abdaal 2024. All rights reserved.
              </p>
              <div className="flex space-x-3">
                {socialLinks.map((item) => {
                  const Icon = item.icon
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="rounded-full bg-gray-100 p-2 text-gray-500 hover:bg-gray-200 hover:text-gray-600"
                      aria-label={item.name}
                    >
                      <Icon className="h-5 w-5" />
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 lg:col-span-9 lg:grid-cols-3">
            <div>
              <h3 className="text-sm font-semibold text-gray-900">More</h3>
              <ul className="mt-4 space-y-3">
                {navigation.more.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-base text-gray-500 hover:text-gray-900"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900">Free Content</h3>
              <ul className="mt-4 space-y-3">
                {navigation.freeContent.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-base text-gray-500 hover:text-gray-900"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900">Products</h3>
              <ul className="mt-4 space-y-3">
                {navigation.products.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-base text-gray-500 hover:text-gray-900"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Links */}
        <div className="mt-12 border-t border-gray-200 pt-8">
          <div className="flex justify-end space-x-6 text-sm text-gray-500">
            <Link href="/privacy" className="hover:text-gray-900">
              Privacy Policy
            </Link>
            <Link href="/cookies" className="hover:text-gray-900">
              Cookie Policy
            </Link>
            <Link href="https://rockbase.co" className="hover:text-gray-900">
              Powered by Rockbase
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
} 