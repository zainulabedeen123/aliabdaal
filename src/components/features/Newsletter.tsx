'use client'

import { Button } from '@/components/shared/Button'

const Newsletter = () => {
  return (
    <section className="rounded-2xl bg-gray-50 p-8 py-16">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="mb-4 text-3xl font-bold">Subscribe to LifeNotes</h2>
        <p className="mb-8 text-gray-600">
          Join over 250,000 subscribers who get my weekly insights on productivity,
          business, and life.
        </p>
        <form className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="rounded-full border border-gray-200 px-6 py-2.5 focus:border-blue-500 focus:outline-none"
          />
          <Button variant="primary" type="submit">
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  )
}

export default Newsletter 