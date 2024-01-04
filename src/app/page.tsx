import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { buttonVariants, Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Collections
          </h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground">
            Discover a world of style and convenience at{' '}
            <span className="text-primary font-bold">jolt.</span> where curated
            collections meet seamless shopping for an unparalleled online
            shopping experience.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href="/shop" className={buttonVariants()}>
              Browse Trending
            </Link>
            <Button variant="ghost">Our quality promise &rarr;</Button>
          </div>
        </div>
      </MaxWidthWrapper>
    </>
  )
}
