'use client'
import React from 'react'
import Image from 'next/image'


export default function AboutUs() {
    return (
      <section className="w-full my-2 py-2 bg-gray-100 dark:bg-gray-800">
        <div className="container  px-4 md:px-6">
          <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
            <div className="space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold text-blue-900 tracking-tighter sm:text-5xl">Discover the Wonders</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Nestled in the heart of the Himalayas, Nepal is a land of unparalleled natural beauty, rich cultural
                  heritage, and thrilling adventure. From towering snow-capped peaks to lush green valleys, ancient
                  temples to vibrant cities, Nepal offers a truly unique and unforgettable experience.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-md bg-white p-4 shadow-sm dark:bg-gray-950">
                  <MountainIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                  <h3 className="mt-2 text-lg font-medium text-blue-900">Majestic Himalayas</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Witness the grandeur of the world's highest mountain range, home to iconic peaks like Everest,
                    Annapurna, and Dhaulagiri.
                  </p>
                </div>
                <div className="rounded-md bg-white p-4 shadow-sm dark:bg-gray-950">
                  <PyramidIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                  <h3 className="mt-2 text-lg font-medium text-blue-900">Ancient Temples</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Explore the rich cultural heritage of Nepal, with centuries-old temples, monasteries, and UNESCO World
                    Heritage sites.
                  </p>
                </div>
                <div className="rounded-md bg-white p-4 shadow-sm dark:bg-gray-950">
                  <BackpackIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                  <h3 className="mt-2 text-lg font-medium text-blue-900">Adventurous Trekking</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Challenge yourself with world-class trekking routes, from the iconic Everest Base Camp to the serene
                    Annapurna Circuit.
                  </p>
                </div>
                <div className="rounded-md bg-white p-4 shadow-sm dark:bg-gray-950">
                  <LandmarkIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                  <h3 className="mt-2 text-lg font-medium text-blue-900">Diverse Landscapes</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Discover Nepal's breathtaking landscapes, from lush green valleys and pristine lakes to rugged,
                    snow-capped peaks.
                  </p>
                </div>
              </div>
            </div>
            <Image
            src="/images/nepal.jpg"
              alt="Nepal"
              className="mx-auto overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              height="500"
              width="550"
            />
          </div>
        </div>
      </section>

    )
  }
  
  function BackpackIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z" />
        <path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
        <path d="M8 21v-5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v5" />
        <path d="M8 10h8" />
        <path d="M8 18h8" />
      </svg>
    )
  }
  
  
  function LandmarkIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="3" x2="21" y1="22" y2="22" />
        <line x1="6" x2="6" y1="18" y2="11" />
        <line x1="10" x2="10" y1="18" y2="11" />
        <line x1="14" x2="14" y1="18" y2="11" />
        <line x1="18" x2="18" y1="18" y2="11" />
        <polygon points="12 2 20 7 4 7" />
      </svg>
    )
  }
  
  
  function MountainIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
      </svg>
    )
  }
  
  
  function PyramidIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2.5 16.88a1 1 0 0 1-.32-1.43l9-13.02a1 1 0 0 1 1.64 0l9 13.01a1 1 0 0 1-.32 1.44l-8.51 4.86a2 2 0 0 1-1.98 0Z" />
        <path d="M12 2v20" />
      </svg>
    )
  }
    