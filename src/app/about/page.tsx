import React from "react";
export default function About() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* About Us Section */}
      <section className="bg-green-900 text-white py-20">
        <div className="container mx-auto text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About EcoBuild Innovations
          </h1>
          <p className="text-lg md:text-xl leading-relaxed">
            EcoBuild Innovations is committed to revolutionizing the
            construction industry with eco-friendly building practices. From
            energy-efficient homes to commercial green projects, we integrate
            sustainability into every phase of development. With a dedicated
            team of industry experts, we prioritize innovative solutions that
            reduce carbon footprints, enhance energy efficiency, and promote
            environmental conservation. Each project we undertake is carefully
            crafted to align with cutting-edge eco-standards, demonstrating our
            unwavering dedication to creating a positive and lasting impact on
            the planet. At EcoBuild Innovations, we believe in building not just
            for today, but for a greener and more sustainable future.
          </p>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-green-800">
            Our History
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center">
            Established in 2015, EcoBuild Innovations was founded with a mission
            to reduce the environmental impact of construction. Over the years,
            we’ve partnered with NGOs and governments to promote sustainable
            building practices and have completed over 50 green-certified
            projects.
          </p>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-green-800">
            Our Culture
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center">
            We believe in responsibility, innovation, and collaboration. At
            EcoBuild, we’re not just building structures; we’re creating a
            sustainable future for generations to come.
          </p>
        </div>
      </section>
    </div>
  );
}
