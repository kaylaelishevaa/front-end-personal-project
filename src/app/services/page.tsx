import { getContentfulData } from "../../utils/get-contentful-data";
import { Services } from "@/types/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default async function servicesPage() {
  const services = (await getContentfulData({
    contentType: "services",
  })) as unknown as Services[];
  return (
    <section className="bg-white py-10 min-h-screen">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-green-800">
        Our Services
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto px-4 md:px-0">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-6 border rounded-lg shadow-md flex flex-col justify-between"
          >
            <h3 className="text-xl md:text-2xl font-semibold mb-2 text-green-700">
              {service.fields?.title}
            </h3>
            <div className="text-gray-600 mb-4">
              {documentToReactComponents(service.fields?.description)}
            </div>
            <p className="text-green-500 font-bold text-lg mt-auto">
              Price: {service.fields.price}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
