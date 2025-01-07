import * as contentful from "contentful";

const client = contentful.createClient({
  space: "4c91kgny6urb",
  environment: "master",
  accessToken: "rb_GS3pVEu2rLl1PBypYrbMHEHGVT0_K0KdkQkcOtUo",
  host: "cdn.contentful.com",
});

export async function getContentfulData({
  contentType,
}: {
  contentType: string;
}) {
  try {
    const data = await client.getEntries({
      content_type: contentType,
    });
    return data.items;
  } catch (error) {
    console.error(error);
    return null;
  }
}
