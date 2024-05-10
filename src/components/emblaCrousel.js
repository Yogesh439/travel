'use client'
import React from 'react'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'

export function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 3000 })])

  return (
    <div className='embla'>
      <div className="embla__viewport my-0 py-0" ref={emblaRef}>
        <div className="embla__container my-0 py-0">
          <div className="embla__slide flex items-center justify-center">
            <img src='/images/image1.jpg' alt='image 1' />
            <div className="absolute inset-0 bg-gray-900/50 dark:bg-gray-950/50 flex flex-col items-start justify-center text-white">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Welcome to Nepal</h1>
              <p className="max-w-[600px] my-5 text-lg md:text-xl">
                Explore and plan your next adventure with our travel guide.
              </p>
            </div>
          </div>
          <div className="embla__slide flex items-center justify-center">
            <img src='/images/image2.jpg' alt='image 2' />
          </div>
          <div className="embla__slide flex items-center justify-center">
            <img src='/images/image3.jpg' alt='image 3' />
          </div>
          <div className="embla__slide flex items-center justify-center">
            <img src='/images/image4.jpg' alt='image 4' />
          </div><div className="embla__slide flex items-center justify-center">
            <img src='/images/image5.jpg' alt='image 5' />
          </div>
        </div>
      </div>
    </div>
  )
}
