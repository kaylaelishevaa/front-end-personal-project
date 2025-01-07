import { getContentfulData } from "../../utils/get-contentful-data";
import { Teams } from "@/types/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";

export default async function teamsPage() {
  const teams = (await getContentfulData({
    contentType: "teams",
  })) as unknown as Teams[];

  return (
    <div className="min-h-screen">
      <section className="bg-green-900 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Team</h1>
          <p className="text-lg md:text-xl">
            Meet the passionate individuals behind EcoBuild Innovations.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teams.map((teamMember, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg shadow-md text-center"
              >
                <Image
                  src={`https:${teamMember?.fields?.photo?.fields?.file.url}`}
                  alt={teamMember.fields.name}
                  width={150}
                  height={150}
                  className="rounded-full mx-auto mb-4 object-cover w-36 h-36"
                />
                <h2 className="text-lg font-bold text-green-800">
                  {teamMember.fields.name}
                </h2>
                <p className="text-sm text-gray-600 mb-2">
                  {teamMember.fields.role}
                </p>
                <div className="text-gray-700 text-sm">
                  {teamMember.fields.description &&
                    documentToReactComponents(teamMember.fields.description)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
