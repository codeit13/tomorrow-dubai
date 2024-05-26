import fs from "fs";
import { create } from "xmlbuilder2";

import { neighbourhoodProperties } from "@/plugins/store/neighbourhood.js";

export default defineEventHandler((event) => {
  const BASE_URL = "https://tomorrowluxuryproperty.com";

  let xmlContent;
  try {
    const routesArray = [
      "/",
      "/buy",
      "/sell",
      "/contact",
      "/neighborhood",
      "/offplan",
      "/partner",
      "/agents",
      "/blogs",
    ];

    // Generate the sitemap

    const root = create().ele("urlset", {
      xmlns: "http://www.sitemaps.org/schemas/sitemap/0.9",
    });

    routesArray.forEach((route) => {
      root
        .ele("url")
        .ele("loc")
        .txt(BASE_URL + route);
    });

    neighbourhoodProperties.forEach((neighbourhood) => {
      const slug = neighbourhood?.title
        .trim()
        .replaceAll(" ", "-")
        .toLowerCase();
      root
        .ele("url")
        .ele("loc")
        .txt(BASE_URL + `/search/${slug}`);
    });

    xmlContent = root.end({ prettyPrint: true });

    fs.writeFileSync("./public/sitemap.xml", xmlContent);
  } catch (error) {
    console.error("Error parsing the routes array:", error);
  }

  setResponseHeaders(event, {
    "Content-Type": "application/xml",
  });
  return send(event, xmlContent);
});
