import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="bg-green-900 text-white py-20">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="flex justify-center px-4 md:px-10">
            <Image
              src="/tree.jpg"
              alt="EcoBuild Hero"
              width={600}
              height={600}
              className="rounded-full shadow-lg"
            />
          </div>
          <div className="text-center md:text-left px-6">
            <h1 className="text-4xl md:text-6xl font-bold my-4">
              A brighter, greener future begins with{" "}
              <span className="text-green-300">EcoBuild Innovations</span>.
            </h1>
            <p className="text-lg md:text-xl mb-6">
              As leaders in sustainable construction, we craft spaces that
              respect the environment and inspire progress.
            </p>
            <p className="text-xl italic font-semibold">
              Building a Greener Tomorrow!
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-green-800">
            EcoBuild Innovations
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col-reverse md:flex-row-reverse items-center gap-4 md:gap-8">
              <Image
                src="/company.jpg"
                alt="Company Overview"
                width={400}
                height={200}
                className="rounded-full shadow-md"
              />
              <div>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  EcoBuild Innovations is committed to revolutionizing the
                  construction industry with eco-friendly building practices.
                  From energy-efficient homes to commercial green projects, we
                  integrate sustainability into every phase of development. With a dedicated team of industry experts, we prioritize innovative solutions that reduce carbon footprints, enhance energy efficiency, and promote environmental conservation. Each project we undertake is carefully crafted to align with cutting-edge eco-standards, demonstrating our unwavering dedication to creating a positive and lasting impact on the planet. At EcoBuild Innovations, we believe in building not just for today, but for a greener and more sustainable future.
                </p>
                <div className="mt-4 text-center md:text-left">
                  <Link
                    href="/about"
                    className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition duration-300 inline-block font-semibold"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-green-800">
            Testimonials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src="/testimonial.jpg"
                  alt="Michael L."
                  width={100}
                  height={100}
                  className="rounded-full object-cover"
                />
                <div>
                  <h3 className="text-lg font-bold text-green-800">
                    Michael L.
                  </h3>
                  <p className="text-sm text-gray-600">
                    Founder of GreenWays Co.
                  </p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                EcoBuild delivered our dream office with zero carbon footprint.
                Truly inspiring!
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src="/testimonial2.jpg"
                  alt="Lisa M."
                  width={100}
                  height={100}
                  className="rounded-full object-cover"
                />
                <div>
                  <h3 className="text-lg font-bold text-green-800">Lisa M.</h3>
                  <p className="text-sm text-gray-600">Owner of GreenTech HQ</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                EcoBuild’s renewable energy solutions reduced our energy costs
                by 30%. Highly recommended!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
