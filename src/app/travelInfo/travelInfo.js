import Link from "next/link"

export default function TravelInfo() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-900">Popular Destinations</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Discover the most popular travel destinations around the world.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:gap-12">
            <div className="group flex flex-col overflow-hidden rounded-xl shadow-lg transition-all hover:scale-[1.02] dark:shadow-none">
              <img
                alt="Destination Image"
                className="aspect-[4/3] w-full object-cover"
                height="240"
                src="images/image1.jpg"
                width="360"
              />
              <div className="flex flex-1 flex-col justify-between bg-white p-4 dark:bg-gray-950">
                <div>
                  <h3 className="text-xl font-bold text-blue-900">Chiya Bari Illameee</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Explore the City of Lights and its iconic landmarks.
                  </p>
                </div>
                <Link
                  className="mt-4 inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href="#"
                >
                  Explore
                </Link>
              </div>
            </div>
            <div className="group flex flex-col overflow-hidden rounded-xl shadow-lg transition-all hover:scale-[1.02] dark:shadow-none">
              <img
                alt="Destination Image"
                className="aspect-[4/3] w-full object-cover"
                height="240"
                src="images/image3.jpg"
                width="360"
              />
              <div className="flex flex-1 flex-col justify-between bg-white p-4 dark:bg-gray-950">
                <div>
                  <h3 className="text-xl font-bold text-blue-900">Kopan Monastery</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                  Kopan Monastery is a beautiful and serene Buddhist monastery in Nepal.                  </p>
                </div>
                <Link
                  className="mt-4 inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href="#"
                >
                  Explore
                </Link>
              </div>
            </div>
            <div className="group flex flex-col overflow-hidden rounded-xl shadow-lg transition-all hover:scale-[1.02] dark:shadow-none">
              <img
                alt="Destination Image"
                className="aspect-[4/3] w-full object-cover"
                height="240"
                src="images/image4.jpg"
                width="360"
              />
              <div className="flex flex-1 flex-col justify-between bg-white p-4 dark:bg-gray-950">
                <div>
                  <h3 className="text-xl font-bold text-blue-900">Bhaktapur Durbar Square</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                  Bhaktapur Durbar Square is a group of plazas at the heart of the ancient city of Bhaktapur, in Nepal’s Kathmandu Valley. 
                  </p>
                </div>
                <Link
                  className="mt-4 inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href="#"
                >
                  Explore
                </Link>
              </div>
            </div>
            <div className="group flex flex-col overflow-hidden rounded-xl shadow-lg transition-all hover:scale-[1.02] dark:shadow-none">
              <img
                alt="Destination Image"
                className="aspect-[4/3] w-full object-cover"
                height="240"
                src="images/image5.jpg"
                width="360"
              />
              <div className="flex flex-1 flex-col justify-between bg-white p-4 dark:bg-gray-950">
                <div>
                  <h3 className="text-xl font-bold text-blue-900">Phoksundo Lake</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                  Phoksundo Lake is an alpine fresh water oligotrophic lake in Nepal's Shey Phoksundo National Park.
                  </p>
                </div>
                <Link
                  className="mt-4 inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href="#"
                >
                  Explore
                </Link>
              </div>
            </div>
            <div className="group flex flex-col overflow-hidden rounded-xl shadow-lg transition-all hover:scale-[1.02] dark:shadow-none">
              <img
                alt="Destination Image"
                className="aspect-[4/3] w-full object-cover"
                height="240"
                src="images/image6.jpg"
                width="360"
              />
              <div className="flex flex-1 flex-col justify-between bg-white p-4 dark:bg-gray-950">
                <div>
                  <h3 className="text-xl font-bold text-blue-900">Chitwan National Park</h3>
                  <p className="text-gray-500 dark:text-gray-400">The Chitwan National Park (CNP) is a world heritage property, and it also contains a Ramsar Beeshazari Tal in its buffer zone.</p>
                </div>
                <Link
                  className="mt-4 inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href="#"
                >
                  Explore
                </Link>
              </div>
            </div>
            <div className="group flex flex-col overflow-hidden rounded-xl shadow-lg transition-all hover:scale-[1.02] dark:shadow-none">
              <img
                alt="Destination Image"
                className="aspect-[4/3] w-full object-cover"
                height="240"
                src="images/image7.jpg"
                width="360"
              />
              <div className="flex flex-1 flex-col justify-between bg-white p-4 dark:bg-gray-950">
                <div>
                  <h3 className="text-xl font-bold text-blue-900">Annapurna Base Camp</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                  Trek to the base of the Annapurna massif and enjoy stunning views of 7,000 and 8,000-meter peaks.
                  </p>
                </div>
                <Link
                  className="mt-4 inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href="#"
                >
                  Explore
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}