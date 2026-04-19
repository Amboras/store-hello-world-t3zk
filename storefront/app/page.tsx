'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { ArrowRight, Truck, Shield, RotateCcw, Sparkles, Star } from 'lucide-react'
import CollectionSection from '@/components/marketing/collection-section'
import { useCollections } from '@/hooks/use-collections'
import { trackMetaEvent } from '@/lib/meta-pixel'
import { HERO_PLACEHOLDER, LIFESTYLE_PLACEHOLDER } from '@/lib/utils/placeholder-images'

export default function HomePage() {
  const { data: collections, isLoading } = useCollections()
  const [newsletterEmail, setNewsletterEmail] = useState('')

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!newsletterEmail.trim()) {
      return
    }

    trackMetaEvent('Lead', {
      content_name: 'newsletter_signup',
      status: 'submitted',
    })
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-muted/50 via-background to-muted/30">
        {/* Decorative background elements */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
          <div className="absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-accent/5 blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03]"
            style={{
              backgroundImage:
                'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)',
              backgroundSize: '32px 32px',
            }}
          />
        </div>

        <div className="container-custom relative grid lg:grid-cols-2 gap-12 items-center py-section lg:py-36">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-background/60 px-4 py-1.5 backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5 text-accent" strokeWidth={2} />
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                New Collection · Fall 2025
              </p>
            </div>

            <h1 className="text-display font-heading font-semibold text-balance leading-[1.05]">
              Elevate Your{' '}
              <span className="relative inline-block">
                <span className="relative z-10 italic text-accent">Everyday</span>
                <span className="absolute inset-x-0 bottom-1 h-2 bg-accent/15 -z-0" aria-hidden />
              </span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
              Thoughtfully designed products that bring beauty and function to your daily rituals.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/products"
                className="group btn-brand-primary inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold uppercase tracking-wide transition-all hover:gap-3 hover:shadow-lg hover:shadow-foreground/10"
                prefetch={true}
              >
                Shop Now
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 border-brand-primary border px-8 py-3.5 text-sm font-semibold uppercase tracking-wide hover:bg-brand-primary hover:text-white transition-colors"
                prefetch={true}
              >
                Our Story
              </Link>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-2">
                {[0, 1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="h-8 w-8 rounded-full border-2 border-background bg-gradient-to-br from-accent/40 to-accent/10"
                  />
                ))}
              </div>
              <div className="space-y-0.5">
                <div className="flex items-center gap-0.5">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-accent text-accent" />
                  ))}
                  <span className="ml-1.5 text-xs font-semibold">4.9</span>
                </div>
                <p className="text-xs text-muted-foreground">Loved by 10,000+ customers</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-in">
            {/* Floating tag — top */}
            <div className="absolute -top-3 -left-3 z-20 hidden sm:flex items-center gap-2 rounded-full bg-background px-4 py-2 shadow-xl ring-1 ring-foreground/5">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <p className="text-xs font-semibold uppercase tracking-wide">Just Dropped</p>
            </div>

            <div className="relative aspect-[4/5] lg:aspect-[3/4] bg-muted rounded-sm overflow-hidden shadow-2xl shadow-foreground/10 ring-1 ring-foreground/5">
              <Image
                src={HERO_PLACEHOLDER}
                alt="Hero - New Collection"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-[1.5s] ease-out hover:scale-105"
                priority
              />
              {/* Subtle overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 via-transparent to-transparent" />
            </div>

            {/* Floating tag — bottom */}
            <div className="absolute -bottom-4 -right-3 z-20 hidden sm:block rounded-sm bg-background p-4 shadow-xl ring-1 ring-foreground/5 max-w-[200px]">
              <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground">Featured</p>
              <p className="mt-1 font-heading text-lg font-semibold leading-tight">
                Essentials Edit
              </p>
              <p className="mt-1 text-xs text-muted-foreground">From $48</p>
            </div>

            {/* Decorative corner accent */}
            <div className="absolute -top-8 -right-8 -z-10 h-32 w-32 rounded-full border border-accent/20" />
            <div className="absolute -bottom-12 -left-12 -z-10 h-48 w-48 rounded-full border border-foreground/10" />
          </div>
        </div>
      </section>

      {/* Collections */}
      {isLoading ? (
        <section className="py-section">
          <div className="container-custom">
            <div className="animate-pulse space-y-4 text-center">
              <div className="h-3 w-20 bg-muted rounded mx-auto" />
              <div className="h-8 w-64 bg-muted rounded mx-auto" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {[1, 2, 3].map((i) => (
                <div key={i} className="aspect-[3/4] bg-muted rounded animate-pulse" />
              ))}
            </div>
          </div>
        </section>
      ) : collections && collections.length > 0 ? (
        <>
          {collections.map((collection: { id: string; handle: string; title: string; metadata?: Record<string, unknown> }, index: number) => (
            <CollectionSection
              key={collection.id}
              collection={collection}
              alternate={index % 2 === 1}
            />
          ))}
        </>
      ) : null}

      {/* Editorial / Brand Story Section */}
      <section className="py-section bg-muted/30">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="aspect-[4/5] bg-muted rounded-sm overflow-hidden relative">
              <Image
                src={LIFESTYLE_PLACEHOLDER}
                alt="Lifestyle - Our Philosophy"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="space-y-6 lg:max-w-md">
              <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Our Philosophy</p>
              <h2 className="text-h2 font-heading font-semibold">
                Crafted With Intention
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Every product in our collection is chosen for its quality, design, and the story behind it.
                We believe in fewer, better things — pieces that last and bring joy to everyday moments.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide link-underline pb-0.5"
                prefetch={true}
              >
                Learn More
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust / Features Bar */}
      <section className="py-section-sm border-y">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
            <div className="flex items-center gap-4 justify-center text-center md:text-left md:justify-start">
              <Truck className="h-6 w-6 flex-shrink-0" strokeWidth={1.5} />
              <div>
                <p className="text-sm font-semibold">Free Shipping</p>
                <p className="text-xs text-muted-foreground">On orders over $75</p>
              </div>
            </div>
            <div className="flex items-center gap-4 justify-center">
              <RotateCcw className="h-6 w-6 flex-shrink-0" strokeWidth={1.5} />
              <div>
                <p className="text-sm font-semibold">Easy Returns</p>
                <p className="text-xs text-muted-foreground">30-day return policy</p>
              </div>
            </div>
            <div className="flex items-center gap-4 justify-center md:justify-end text-center md:text-right">
              <Shield className="h-6 w-6 flex-shrink-0" strokeWidth={1.5} />
              <div>
                <p className="text-sm font-semibold">Secure Checkout</p>
                <p className="text-xs text-muted-foreground">256-bit SSL encryption</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-section">
        <div className="container-custom max-w-xl text-center">
          <h2 className="text-h2 font-heading font-semibold">Stay in Touch</h2>
          <p className="mt-3 text-muted-foreground">
            Be the first to know about new arrivals, exclusive offers, and more.
          </p>
          <form className="mt-8 flex gap-2" onSubmit={handleNewsletterSubmit}>
            <input
              type="email"
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 border-b border-foreground/30 bg-transparent px-1 py-3 text-sm placeholder:text-muted-foreground focus:border-foreground focus:outline-none transition-colors"
            />
            <button
              type="submit"
              className="bg-foreground text-background px-6 py-3 text-sm font-semibold uppercase tracking-wide hover:opacity-90 transition-opacity whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  )
}
