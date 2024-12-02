'use client'

import Image from 'next/image'

const videos = [
  {
    title: 'How I Manage My Time Without Burning Out',
    thumbnail: 'https://picsum.photos/400/225',
    views: '1.2M views',
  },
  {
    title: 'Your Brain on Dopamine - How to Control It',
    thumbnail: 'https://picsum.photos/400/225',
    views: '850K views',
  },
  {
    title: 'My Honest Advice to Medical Students',
    thumbnail: 'https://picsum.photos/400/225',
    views: '2.1M views',
  },
]

const VideoShowcase = () => {
  return (
    <section className="py-16">
      <h2 className="mb-12 text-3xl font-bold">Watch My Most Popular Videos</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {videos.map((video) => (
          <div
            key={video.title}
            className="group cursor-pointer overflow-hidden rounded-xl"
          >
            <div className="relative aspect-video">
              <Image
                src={video.thumbnail}
                alt={video.title}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <h3 className="mb-2 font-semibold">{video.title}</h3>
              <p className="text-sm text-gray-600">{video.views}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default VideoShowcase 