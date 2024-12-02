'use client'

import Link from 'next/link'
import Image from 'next/image'

const services = [
  {
    icon: '/laptop.svg',
    title: 'Grow a YouTube Channel',
    description: 'Learn how to start a YouTube channel based on my years of experience.',
    link: '/youtube',
    iconBg: '#FFF2EC',
    iconColor: '#FF7E57',
  },
  {
    icon: '/gears.svg',
    title: 'Be More Productive',
    description: 'How to execute efficiently, make time for what matters and have fun along the way.',
    link: '/productivity',
    iconBg: '#FFF7E7',
    iconColor: '#FFB84C',
  },
  {
    icon: '/money-bag.svg',
    title: 'Build an Online Business',
    description: 'How to execute efficiently, make time for what matters and have fun along the way.',
    link: '/business',
    iconBg: '#EFF9FF',
    iconColor: '#87CEEB',
  },
  {
    icon: '/document.svg',
    title: 'Boost Your Grades',
    description: 'How to study effectively for exams, with the best evidence-based techniques.',
    link: '/grades',
    iconBg: '#F5F2FF',
    iconColor: '#9C83FF',
  },
]

const ServicesGrid = () => {
  return (
    <section className="py-24">
      <div className="mb-16">
        <h2 className="relative inline-block font-serif text-6xl font-bold tracking-tight text-gray-900">
          How Can
          <br />
          I Help{' '}
          <span className="relative inline-block">
            You?
            <div className="absolute -bottom-1 left-0 h-[0.6em] w-full bg-[#87CEEB] opacity-30" />
          </span>
        </h2>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {services.map((service) => (
          <Link
            key={service.title}
            href={service.link}
            className="group block overflow-hidden rounded-3xl bg-[#F9F6F3] p-10 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="relative z-10">
              <div
                className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl"
                style={{ backgroundColor: service.iconBg }}
              >
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={32}
                  height={32}
                  className="h-8 w-8"
                  style={{ color: service.iconColor }}
                />
              </div>
              <h3 className="mb-4 font-serif text-[1.75rem] font-bold leading-tight">
                {service.title}
              </h3>
              <p className="mb-6 text-lg leading-relaxed text-gray-600">
                {service.description}
              </p>
              <div className="flex items-center text-sm font-semibold">
                Get started
                <svg
                  className="ml-2 h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-8">
        <div className="rounded-3xl bg-[#F9F6F3] p-10">
          <h3 className="font-serif text-[1.75rem] font-bold leading-tight">... and more!</h3>
          <div className="mt-4">
            <Link
              href="/explore"
              className="group inline-flex items-center text-sm font-semibold"
            >
              Explore all content
              <svg
                className="ml-2 h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesGrid 